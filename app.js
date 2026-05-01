/* ════════════════════════════════════════════════════
   Chile Trip 2026 — App Logic
   Reads globals: DESTINATIONS (array), CATS (object)
   Both are populated by data/*.js before this runs.
   ════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────────────
   NOTES — LOCAL STORAGE
   ──────────────────────────────────────────────────── */
var NOTE_PREFIX = 'chile-trip-2026-note-';
var _noteTimer  = null;

function loadNote(id) {
  try { return localStorage.getItem(NOTE_PREFIX + id) || ''; }
  catch(e) { return ''; }
}
function saveNote(id, text) {
  try {
    if (text.trim()) localStorage.setItem(NOTE_PREFIX + id, text);
    else             localStorage.removeItem(NOTE_PREFIX + id);
  } catch(e) {}
}
function hasNote(id) { return loadNote(id).trim().length > 0; }

/* Called from textarea oninput — debounced 600ms */
function onNoteInput(id, el) {
  var statusEl = document.getElementById('noteStatus');
  if (statusEl) { statusEl.textContent = 'Saving…'; statusEl.style.opacity = '1'; }
  clearTimeout(_noteTimer);
  _noteTimer = setTimeout(function() {
    saveNote(id, el.value);
    if (statusEl) {
      statusEl.textContent = 'Saved ✓';
      setTimeout(function() { statusEl.style.opacity = '0'; }, 1200);
    }
    /* Refresh fav list + list view note pips + map overlays */
    renderFavList(loadFavs());
    renderList(currentFilter);
    buildNoteOverlays();
  }, 600);
}


/* ────────────────────────────────────────────────────
   FAVOURITES — LOCAL STORAGE
   ──────────────────────────────────────────────────── */
var FAV_KEY = 'chile-trip-2026-favs';

function loadFavs() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
  catch(e) { return []; }
}
function saveFavs(arr) {
  try { localStorage.setItem(FAV_KEY, JSON.stringify(arr)); }
  catch(e) {}
}
function isFav(id) { return loadFavs().includes(id); }

function addFav(id) {
  var favs = loadFavs();
  if (!favs.includes(id)) { favs.push(id); saveFavs(favs); }
  syncFavUI();
}
function removeFav(id) {
  saveFavs(loadFavs().filter(function(f) { return f !== id; }));
  syncFavUI();
}
function clearFavs() {
  saveFavs([]);
  syncFavUI();
}

var currentDetailId = null;

function toggleFavItem() {
  if (!currentDetailId) return;
  if (isFav(currentDetailId)) removeFav(currentDetailId);
  else addFav(currentDetailId);
  updateFavBtn(currentDetailId);
}

function updateFavBtn(id) {
  var btn = document.getElementById('favBtn');
  if (!btn) return;
  if (isFav(id)) {
    btn.textContent = '♥ Saved';
    btn.classList.add('saved');
  } else {
    btn.textContent = '♡ Save';
    btn.classList.remove('saved');
  }
}

function syncFavUI() {
  var favs  = loadFavs();
  var count = favs.length;
  var toggle  = document.getElementById('favToggle');
  var countEl = document.getElementById('favCount');
  var lbl     = document.getElementById('favActionLbl');

  toggle.classList.toggle('has-favs', count > 0);
  countEl.textContent = count;
  if (lbl) lbl.textContent = count === 0 ? '0 saved' : count + ' saved';

  renderFavList(favs);
  if (currentDetailId) updateFavBtn(currentDetailId);
}

function renderFavList(favs) {
  var el = document.getElementById('favList');
  if (!favs.length) {
    el.innerHTML = '<div class="fav-empty">'
      + '<span class="fav-empty-icon">♡</span>'
      + 'Click <strong>Save</strong> on any destination<br>to build your shortlist here.'
      + '</div>';
    return;
  }
  el.innerHTML = favs.map(function(id) {
    var d = DESTINATIONS.find(function(x) { return x.id === id; });
    if (!d) return '';
    var c    = CATS[d.cat];
    var note = loadNote(d.id);
    var noteHtml = note
      ? '<div class="fav-note">✏ ' + escHtml(note.split('\n')[0].substring(0, 60)) + (note.length > 60 ? '…' : '') + '</div>'
      : '';
    return '<div class="fav-item" onclick="showDetail(\'' + d.id + '\')">'
      + '<div class="fav-dot" style="background:' + c.color + '"></div>'
      + '<div class="fav-info">'
      +   '<div class="fav-name">' + d.name + (note ? ' <span class="note-pip" title="Has notes"></span>' : '') + '</div>'
      +   '<div class="fav-cat">' + c.label + '</div>'
      +   '<div class="fav-sum">' + d.summary + '</div>'
      +   noteHtml
      + '</div>'
      + '<button class="fav-remove" title="Remove" onclick="event.stopPropagation();removeFav(\'' + d.id + '\')">×</button>'
      + '</div>';
  }).join('');
}

function openFavPanel() {
  closeMobileCard();
  document.getElementById('favPanel').classList.add('open');
  syncFavUI();
}
function closeFavPanel() {
  document.getElementById('favPanel').classList.remove('open');
}


/* ────────────────────────────────────────────────────
   EXPORT FAVOURITES → MARKDOWN
   ──────────────────────────────────────────────────── */
function exportFavourites() {
  var favs = loadFavs();
  if (!favs.length) {
    alert('No favourites saved yet — add some destinations first!');
    return;
  }

  var today = new Date();
  var dateStr = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  var lines = [
    '# 🇨🇱 Chile Trip 2026 — Saved Destinations',
    '',
    '*Exported on ' + dateStr + ' · ' + favs.length + ' destination' + (favs.length !== 1 ? 's' : '') + '*',
    '',
    '---',
    ''
  ];

  favs.forEach(function(id, idx) {
    var d = DESTINATIONS.find(function(x) { return x.id === id; });
    if (!d) return;
    var c    = CATS[d.cat];
    var note = loadNote(d.id);

    lines.push('## ' + (idx + 1) + '. ' + d.name);
    lines.push('**' + d.sub + '** · `' + c.label + '`');
    lines.push('');
    lines.push(d.summary);
    lines.push('');
    lines.push('### Highlights');
    d.highlights.forEach(function(h) { lines.push('- ' + h); });
    lines.push('');
    if (d.tip) {
      lines.push('### Getting There & Practical Tips');
      lines.push(d.tip);
      lines.push('');
    }
    if (d.weather) {
      lines.push('### Nov–Dec Weather');
      lines.push(d.weather);
      lines.push('');
    }
    lines.push('### ✏ My Notes');
    lines.push(note.trim() || '*No notes yet.*');
    lines.push('');
    lines.push('---');
    lines.push('');
  });

  lines.push('*Generated by Chile Trip 2026 interactive map*');

  var md   = lines.join('\n');
  var blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href     = url;
  a.download = 'chile-trip-favourites.md';
  document.body.appendChild(a);
  a.click();
  setTimeout(function() { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
}


/* ────────────────────────────────────────────────────
   UTILITY
   ──────────────────────────────────────────────────── */
function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}


/* ────────────────────────────────────────────────────
   MOBILE MODE
   ──────────────────────────────────────────────────── */
function isMobile() { return window.innerWidth <= 780; }

var _mobileCardDestId = null;

/* Toggle between list mode (sidebar visible) and map mode */
function toggleMobileMode() {
  if (!isMobile()) return;
  var app = document.querySelector('.app');
  var goingToMap = !app.classList.contains('mobile-map');
  if (goingToMap) {
    app.classList.add('mobile-map');
    map.closePopup();
    closeMobileCard();
    /* Leaflet needs a nudge after the sidebar slides away */
    setTimeout(function() { map.invalidateSize(); }, 340);
  } else {
    app.classList.remove('mobile-map');
    closeMobileCard();
  }
}

/* Show the slide-up destination card in map mode */
function showMobileCard(id) {
  var d = DESTINATIONS.find(function(x) { return x.id === id; });
  if (!d) return;
  var c = CATS[d.cat];
  _mobileCardDestId = id;

  var catEl     = document.getElementById('mobileCardCat');
  var nameEl    = document.getElementById('mobileCardName');
  var subEl     = document.getElementById('mobileCardSub');
  var summaryEl = document.getElementById('mobileCardSummary');
  var btn       = document.getElementById('mobileCardBtn');

  if (catEl)     { catEl.textContent = c.label; catEl.style.color = c.color; }
  if (nameEl)    { nameEl.textContent = d.name; nameEl.style.color = c.color; }
  if (subEl)     { subEl.textContent = d.sub; }
  if (summaryEl) { summaryEl.textContent = d.summary; }
  if (btn)       { btn.style.background = c.color; }

  var card = document.getElementById('mobileBottomCard');
  if (card) card.classList.add('visible');

  map.flyTo([d.lat, d.lng], 9, { duration: 0.8, easeLinearity: 0.3 });
}

function closeMobileCard() {
  var card = document.getElementById('mobileBottomCard');
  if (card) card.classList.remove('visible');
  _mobileCardDestId = null;
}

/* "View details & notes →" button on the bottom card */
function mobileCardViewDetail() {
  if (!_mobileCardDestId) return;
  var id = _mobileCardDestId;
  closeMobileCard();
  document.querySelector('.app').classList.remove('mobile-map');
  showDetail(id);
}

/* ✏ button on the bottom card — opens detail and scrolls straight to notes */
function mobileCardGoNotes() {
  if (!_mobileCardDestId) return;
  var id = _mobileCardDestId;
  closeMobileCard();
  document.querySelector('.app').classList.remove('mobile-map');
  showDetail(id);
  setTimeout(function() {
    var ta = document.getElementById('noteTextarea');
    if (!ta) return;
    ta.scrollIntoView({ behavior: 'smooth', block: 'center' });
    ta.focus();
  }, 260);
}


/* ────────────────────────────────────────────────────
   MAP INITIALISATION
   ──────────────────────────────────────────────────── */
var map = L.map('map', {
  center: [-38, -68],
  zoom: 5,
  zoomControl: true,
  scrollWheelZoom: true
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

function makeIcon(dest) {
  var c      = CATS[dest.cat];
  var size   = dest.cat === 'family' ? 18 : dest.cat === 'claude' ? 16 : 14;
  var border = dest.cat === 'family' ? 3 : 2.5;
  var html   = '<div style="'
    + 'width:' + size + 'px;height:' + size + 'px;border-radius:50%;'
    + 'background:' + c.color + ';border:' + border + 'px solid white;'
    + 'box-shadow:0 1px 6px rgba(0,0,0,0.35);'
    + 'cursor:pointer;transition:transform 0.12s;'
    + '" onmouseenter="this.style.transform=\'scale(1.4)\'"'
    + '   onmouseleave="this.style.transform=\'scale(1)\'"></div>';
  return L.divIcon({ className: '', html: html, iconSize: [size, size], iconAnchor: [size/2, size/2] });
}

function makePopupHtml(dest) {
  var c      = CATS[dest.cat];
  var faved  = isFav(dest.id);
  var noted  = hasNote(dest.id);
  var favBg  = faved ? '#cc0033' : c.color;
  var favLbl = faved ? '♥ Saved' : '♡ Save';
  var noteLbl = noted ? '✏ Edit note' : '✏ Add note';
  return '<div class="pop-inner">'
    + '<div class="pop-name" style="color:' + c.color + '">' + dest.name + '</div>'
    + '<div class="pop-sub">' + dest.sub + '</div>'
    + '<div class="pop-btns">'
    +   '<button class="pop-btn pop-btn-fav" style="background:' + favBg + '"'
    +   ' onclick="toggleFavFromPopup(\'' + dest.id + '\')">' + favLbl + '</button>'
    +   '<button class="pop-btn pop-btn-note" onclick="goToNotes(\'' + dest.id + '\')">' + noteLbl + '</button>'
    + '</div>'
    + '</div>';
}

function goToNotes(id) {
  map.closePopup();
  showDetail(id);
  /* Wait for detail panel to render, then scroll textarea into view */
  setTimeout(function() {
    var ta = document.getElementById('noteTextarea');
    if (!ta) return;
    ta.scrollIntoView({ behavior: 'smooth', block: 'center' });
    ta.focus();
  }, 220);
}

function toggleFavFromPopup(id) {
  if (isFav(id)) removeFav(id);
  else           addFav(id);
  /* Refresh popup content to reflect new state */
  var dest = DESTINATIONS.find(function(x) { return x.id === id; });
  if (dest && markerStore[id]) markerStore[id].setPopupContent(makePopupHtml(dest));
  /* Keep sidebar fav button in sync if this destination is open */
  if (currentDetailId === id) updateFavBtn(id);
}

var markerStore = {};
DESTINATIONS.forEach(function(dest) {
  var marker = L.marker([dest.lat, dest.lng], { icon: makeIcon(dest) }).addTo(map);

  marker.on('click', (function(d, m) {
    return function() {
      if (isMobile()) {
        /* On mobile: show slide-up card, suppress popup */
        setTimeout(function() { m.closePopup(); }, 0);
        showMobileCard(d.id);
      } else {
        showDetail(d.id);
      }
    };
  })(dest, marker));

  marker.on('popupopen', (function(d, m) {
    return function() {
      if (isMobile()) { m.closePopup(); return; }
      /* Desktop: always re-render so fav state is current */
      m.setPopupContent(makePopupHtml(d));
    };
  })(dest, marker));

  marker.bindPopup(makePopupHtml(dest), { closeButton: false, offset: [0, -4], maxWidth: 240 });
  markerStore[dest.id] = marker;
});


/* ────────────────────────────────────────────────────
   NOTE OVERLAYS ON MAP
   ──────────────────────────────────────────────────── */
var noteOverlaysEnabled = true;
var noteLayerGroup = L.layerGroup().addTo(map);

function buildNoteOverlays() {
  noteLayerGroup.clearLayers();
  if (!noteOverlaysEnabled) return;

  DESTINATIONS.forEach(function(dest) {
    var note = loadNote(dest.id);
    if (!note.trim()) return;
    var c = CATS[dest.cat];
    /* First line, max 90 chars */
    var firstLine = note.replace(/\n[\s\S]*/,'');
    var snippet = firstLine.substring(0, 90) + (firstLine.length > 90 ? '…' : '');
    var icon = L.divIcon({
      className: 'note-callout-anchor',
      html: '<div class="note-callout-bubble" style="--nc:#' + c.color.replace('#','') + '">'
          + escHtml(snippet)
          + '</div>',
      iconSize:   [0, 0],
      iconAnchor: [-14, 8]   /* bubble starts 14px right of the dot */
    });
    L.marker([dest.lat, dest.lng], { icon: icon, interactive: false, zIndexOffset: -300 })
      .addTo(noteLayerGroup);
  });

  /* Run overlap avoidance after Leaflet has painted */
  requestAnimationFrame(avoidNoteOverlaps);
}

function avoidNoteOverlaps() {
  var bubbles = Array.from(document.querySelectorAll('.note-callout-bubble'));
  if (bubbles.length < 2) return;

  /* Reset any previous adjustments */
  bubbles.forEach(function(b) { b.style.transform = ''; });

  /* Snapshot positions after reset */
  var items = bubbles.map(function(b) {
    var r = b.getBoundingClientRect();
    return { el: b, top: r.top, bottom: r.bottom, left: r.left, right: r.right, dy: 0 };
  });

  /* Sort top-to-bottom so we push downward only */
  items.sort(function(a, b) { return a.top - b.top; });

  /* Single downward pass — O(n²) fine for <100 notes */
  for (var i = 0; i < items.length; i++) {
    for (var j = i + 1; j < items.length; j++) {
      var a = items[i], b = items[j];
      /* Skip if no horizontal overlap (6px breathing room) */
      if (a.right + 6 < b.left || b.right + 6 < a.left) continue;
      /* Push b down if it overlaps a vertically */
      var gap = b.top - a.bottom;
      if (gap < 5) {
        var push = 5 - gap;
        b.dy += push;
        b.top += push;
        b.bottom += push;
        b.el.style.transform = 'translateY(' + b.dy + 'px)';
      }
    }
  }
}

function toggleNoteOverlays() {
  noteOverlaysEnabled = !noteOverlaysEnabled;
  var btn = document.getElementById('noteToggleBtn');
  if (btn) {
    btn.classList.toggle('active', noteOverlaysEnabled);
    btn.title = noteOverlaysEnabled ? 'Hide notes on map' : 'Show notes on map';
  }
  buildNoteOverlays();
}

/* Rebuild on map movement so overlaps are re-checked at new zoom/pan */
map.on('zoomend moveend', function() {
  if (noteOverlaysEnabled) requestAnimationFrame(avoidNoteOverlaps);
});


/* ────────────────────────────────────────────────────
   SIDEBAR — LIST VIEW
   ──────────────────────────────────────────────────── */
var currentFilter = 'all';

function renderList(filter) {
  var visible = filter === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(function(d) { return d.cat === filter; });
  document.getElementById('statCount').textContent = visible.length;
  document.getElementById('destList').innerHTML = visible.map(function(d) {
    var c         = CATS[d.cat];
    var notePip   = hasNote(d.id) ? '<span class="note-pip" title="Has notes"></span>' : '';
    var dateHtml = d.date
      ? '<div class="dest-date" style="color:' + c.color + '">📅 ' + d.date + '</div>'
      : '';
    var diffHtml = d.difficulty
      ? '<div class="dest-date" style="color:' + c.fg + '">⚡ ' + d.difficulty + (d.duration ? ' · ' + d.duration : '') + '</div>'
      : '';
    return '<div class="dest-item" id="item-' + d.id + '" onclick="showDetail(\'' + d.id + '\')">'
      + '<div class="dest-dot" style="background:' + c.color + '"></div>'
      + '<div style="flex:1;min-width:0;">'
      +   '<div class="dest-name">' + d.name + ' ' + notePip + '</div>'
      +   dateHtml
      +   diffHtml
      +   '<div class="dest-sum">' + d.summary + '</div>'
      + '</div>'
      + '<span class="dest-tag" style="background:' + c.bg + ';color:' + c.fg + '">' + c.label + '</span>'
      + '</div>';
  }).join('');
}

function showList() {
  currentDetailId = null;
  document.getElementById('destList').style.display = '';
  document.getElementById('detailPanel').classList.remove('visible');
  map.closePopup();
}


/* ────────────────────────────────────────────────────
   SIDEBAR — DETAIL VIEW
   ──────────────────────────────────────────────────── */
function showDetail(id) {
  var d = DESTINATIONS.find(function(x) { return x.id === id; });
  if (!d) return;
  currentDetailId = id;
  var c = CATS[d.cat];

  /* Mobile: ensure sidebar is visible (list mode) */
  if (isMobile()) {
    document.querySelector('.app').classList.remove('mobile-map');
    closeMobileCard();
  }

  document.getElementById('destList').style.display = 'none';
  document.getElementById('detailPanel').classList.add('visible');
  updateFavBtn(id);

  var nearby = DESTINATIONS
    .filter(function(x) {
      return x.id !== id && (currentFilter === 'all' || x.cat === currentFilter);
    })
    .sort(function(a, b) {
      function dist(dest) {
        return Math.sqrt(Math.pow(dest.lat - d.lat, 2) + Math.pow(dest.lng - d.lng, 2));
      }
      return dist(a) - dist(b);
    })
    .slice(0, 3);

  var highlightsHtml = d.highlights.map(function(h) {
    return '<li><span class="d-bullet" style="background:' + c.color + '"></span><span>' + h + '</span></li>';
  }).join('');

  var tipHtml = d.tip
    ? '<div class="d-section">Getting there &amp; tips</div>'
      + '<div class="d-tip" style="border-left-color:' + c.color + '">'
      + '<div class="d-tip-lbl" style="color:' + c.color + '">Tip</div>' + d.tip
      + '</div>'
    : '';

  var wxHtml = d.weather
    ? '<div class="d-wx">&#9728; Nov–Dec: ' + d.weather + '</div>'
    : '';

  var nearbyHtml = nearby.length
    ? '<div class="d-section" style="margin-top:6px">Nearby</div>'
      + nearby.map(function(r) {
          return '<div class="nearby-item" onclick="showDetail(\'' + r.id + '\')">'
            + '<span class="nearby-dot" style="background:' + CATS[r.cat].color + '"></span>'
            + '<div style="flex:1;min-width:0;">'
            +   '<div class="nearby-name">' + r.name + '</div>'
            +   '<div class="nearby-sub">' + r.sub + '</div>'
            + '</div>'
            + '<span class="nearby-arr">→</span>'
            + '</div>';
        }).join('')
    : '';

  /* Notes section — textarea with debounced auto-save */
  var existingNote = loadNote(id);
  var notesHtml = '<div class="d-notes-wrap">'
    + '<div class="d-section">My notes</div>'
    + '<textarea id="noteTextarea" class="d-notes-textarea"'
    + ' placeholder="Add your notes, ideas, questions… auto-saved."'
    + ' oninput="onNoteInput(\'' + id + '\', this)">'
    + escHtml(existingNote)
    + '</textarea>'
    + '<div id="noteStatus" class="d-notes-status" style="opacity:0"></div>'
    + '</div>';

  var detailDateHtml = d.date
    ? '<div class="d-date" style="color:' + c.color + '">📅 ' + d.date + '</div>'
    : '';

  var hikingMetaHtml = (d.difficulty || d.duration)
    ? '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:11px;">'
      + (d.difficulty ? '<span style="font-size:11px;font-weight:500;padding:3px 9px;border-radius:10px;background:' + c.bg + ';color:' + c.fg + '">⚡ ' + d.difficulty + '</span>' : '')
      + (d.duration   ? '<span style="font-size:11px;font-weight:500;padding:3px 9px;border-radius:10px;background:' + c.bg + ';color:' + c.fg + '">⏱ ' + d.duration   + '</span>' : '')
      + (d.multiday   ? '<span style="font-size:11px;font-weight:500;padding:3px 9px;border-radius:10px;background:#EEF3E6;color:#3D5224">🏕 Multi-day option</span>' : '')
      + '</div>'
    : '';

  document.getElementById('detailContent').innerHTML =
    '<div class="d-name" style="color:' + c.color + '">' + d.name + '</div>'
    + '<div class="d-sub">' + d.sub + '</div>'
    + detailDateHtml
    + '<span class="d-badge" style="background:' + c.bg + ';color:' + c.fg + '">' + c.label + '</span>'
    + hikingMetaHtml
    + '<div class="d-summary">' + d.summary + '</div>'
    + '<div class="d-section">Highlights</div>'
    + '<ul class="d-list">' + highlightsHtml + '</ul>'
    + tipHtml
    + wxHtml
    + nearbyHtml
    + notesHtml;

  /* Easter Island needs its own zoom — it's far off the mainland view */
  var zoom = id === 'rapanui' ? 10 : 9;
  map.flyTo([d.lat, d.lng], zoom, { duration: 1.1, easeLinearity: 0.25 });
  setTimeout(function() {
    if (markerStore[id]) markerStore[id].openPopup();
  }, 1000);

  /* Close fav panel on mobile when viewing detail */
  if (window.innerWidth <= 780) closeFavPanel();
}


/* ────────────────────────────────────────────────────
   FILTER
   ──────────────────────────────────────────────────── */
function doFilter(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filt').forEach(function(b) { b.classList.remove('on'); });
  btn.classList.add('on');
  showList();
  renderList(cat);

  DESTINATIONS.forEach(function(d) {
    var m       = markerStore[d.id];
    var visible = cat === 'all' || d.cat === cat;
    m.setOpacity(visible ? 1 : 0.1);
    var el = m.getElement();
    if (el) el.style.pointerEvents = visible ? 'auto' : 'none';
  });

  if (cat !== 'all') {
    var pts = DESTINATIONS
      .filter(function(d) { return d.cat === cat && d.id !== 'rapanui'; })
      .map(function(d) { return [d.lat, d.lng]; });
    if (pts.length) map.flyToBounds(L.latLngBounds(pts), { padding: [60, 60], duration: 1.1 });
  } else {
    map.flyTo([-38, -68], 5, { duration: 1.1 });
  }
}


/* ────────────────────────────────────────────────────
   TRANSPORT LAYERS — Airports, Bus Terminals, Ferries
   ──────────────────────────────────────────────────── */
var transportLayers = {
  airports: L.layerGroup(),
  buses:    L.layerGroup(),
  ferries:  L.layerGroup()
};
var transportActive = { airports: false, buses: false, ferries: false };
var TRANSPORT_KEY = 'chile-trip-2026-transport';

/* Marker icon factory */
function makeTransportIcon(emoji, cssClass) {
  return L.divIcon({
    className: '',
    html: '<div class="t-marker ' + cssClass + '">' + emoji + '</div>',
    iconSize:   null,
    iconAnchor: [20, 10]
  });
}

/* Popup HTML factory */
function makeTransportPopup(item, type) {
  var colors = { airports: '#0369A1', buses: '#15803D', ferries: '#0E7490' };
  var color  = colors[type];
  var extra  = '';
  if (type === 'airports') {
    extra = '<div style="font-size:11px;color:#555;margin-top:5px">✈ ' + escHtml(item.airlines) + '</div>';
  } else if (type === 'buses') {
    extra = '<div style="font-size:11px;color:#555;margin-top:5px">🗺 ' + escHtml(item.routes) + '</div>'
           +'<div style="font-size:11px;color:#777;margin-top:3px">🚌 ' + escHtml(item.operators) + '</div>';
  } else if (type === 'ferries') {
    extra = '<div style="font-size:11px;color:#555;margin-top:5px">⛴ ' + escHtml(item.routes) + '</div>'
           +'<div style="font-size:11px;color:#777;margin-top:3px">⏱ ' + escHtml(item.crossing) + '</div>';
  }
  return '<div class="pop-inner">'
    + '<div class="pop-name" style="color:' + color + '">' + escHtml(item.name) + '</div>'
    + '<div class="pop-sub">' + escHtml(item.city)
    + (item.iata ? ' &nbsp;·&nbsp; <strong>' + item.iata + '</strong>' : '') + '</div>'
    + extra
    + '<div style="font-size:11px;color:#888;margin-top:6px;line-height:1.45;border-top:1px solid #eee;padding-top:5px">'
    + escHtml(item.info) + '</div>'
    + '</div>';
}

/* Build each layer from its data array */
function buildTransportLayers() {
  /* Airports */
  (AIRPORTS || []).forEach(function(a) {
    L.marker([a.lat, a.lng], { icon: makeTransportIcon('✈', 't-marker-airport'), zIndexOffset: 200 })
      .bindPopup(makeTransportPopup(a, 'airports'), { maxWidth: 280, closeButton: false })
      .addTo(transportLayers.airports);
  });

  /* Bus Terminals */
  (BUS_TERMINALS || []).forEach(function(b) {
    L.marker([b.lat, b.lng], { icon: makeTransportIcon('🚌', 't-marker-bus'), zIndexOffset: 200 })
      .bindPopup(makeTransportPopup(b, 'buses'), { maxWidth: 280, closeButton: false })
      .addTo(transportLayers.buses);
  });

  /* Ferry Terminals */
  (FERRY_TERMINALS || []).forEach(function(f) {
    L.marker([f.lat, f.lng], { icon: makeTransportIcon('⛴', 't-marker-ferry'), zIndexOffset: 200 })
      .bindPopup(makeTransportPopup(f, 'ferries'), { maxWidth: 280, closeButton: false })
      .addTo(transportLayers.ferries);
  });
}

/* Toggle a layer on/off */
function toggleTransportLayer(type) {
  transportActive[type] = !transportActive[type];
  var btn = document.getElementById(
    type === 'airports' ? 'btnAirports' : type === 'buses' ? 'btnBuses' : 'btnFerries'
  );
  if (transportActive[type]) {
    transportLayers[type].addTo(map);
    if (btn) btn.classList.add('active');
  } else {
    transportLayers[type].remove();
    if (btn) btn.classList.remove('active');
  }
  saveTransportState();
}

/* Persist and restore state */
function saveTransportState() {
  try { localStorage.setItem(TRANSPORT_KEY, JSON.stringify(transportActive)); } catch(e) {}
}
function restoreTransportState() {
  try {
    var saved = JSON.parse(localStorage.getItem(TRANSPORT_KEY));
    if (!saved) return;
    ['airports', 'buses', 'ferries'].forEach(function(type) {
      if (saved[type]) {
        /* Force active = false first so toggle flips it on */
        transportActive[type] = false;
        toggleTransportLayer(type);
      }
    });
  } catch(e) {}
}


/* ────────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────────── */
renderList('all');
syncFavUI();
buildNoteOverlays();
buildTransportLayers();
restoreTransportState();
