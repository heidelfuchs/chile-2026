/* ════════════════════════════════════════════════════
   Chile Trip 2026 — App Logic
   Reads globals: DESTINATIONS (array), CATS (object)
   Both are populated by data/*.js before this runs.
   ════════════════════════════════════════════════════ */

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
    var c = CATS[d.cat];
    return '<div class="fav-item" onclick="showDetail(\'' + d.id + '\')">'
      + '<div class="fav-dot" style="background:' + c.color + '"></div>'
      + '<div class="fav-info">'
      +   '<div class="fav-name">' + d.name + '</div>'
      +   '<div class="fav-cat">' + c.label + '</div>'
      +   '<div class="fav-sum">' + d.summary + '</div>'
      + '</div>'
      + '<button class="fav-remove" title="Remove" onclick="event.stopPropagation();removeFav(\'' + d.id + '\')">×</button>'
      + '</div>';
  }).join('');
}

function openFavPanel() {
  document.getElementById('favPanel').classList.add('open');
  syncFavUI();
}
function closeFavPanel() {
  document.getElementById('favPanel').classList.remove('open');
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

var markerStore = {};
DESTINATIONS.forEach(function(dest) {
  var c = CATS[dest.cat];
  var marker = L.marker([dest.lat, dest.lng], { icon: makeIcon(dest) })
    .addTo(map)
    .on('click', (function(id) { return function() { showDetail(id); }; })(dest.id));
  marker.bindPopup(
    '<div class="pop-inner">'
    + '<div class="pop-name" style="color:' + c.color + '">' + dest.name + '</div>'
    + '<div class="pop-sub">' + dest.sub + '</div>'
    + '<button class="pop-btn" style="background:' + c.color + '" onclick="showDetail(\'' + dest.id + '\')">View details →</button>'
    + '</div>',
    { closeButton: false, offset: [0, -4], maxWidth: 240 }
  );
  markerStore[dest.id] = marker;
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
    var c = CATS[d.cat];
    return '<div class="dest-item" id="item-' + d.id + '" onclick="showDetail(\'' + d.id + '\')">'
      + '<div class="dest-dot" style="background:' + c.color + '"></div>'
      + '<div style="flex:1;min-width:0;">'
      +   '<div class="dest-name">' + d.name + '</div>'
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
    ? '<div class="d-section">Practical tip</div>'
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

  document.getElementById('detailContent').innerHTML =
    '<div class="d-name" style="color:' + c.color + '">' + d.name + '</div>'
    + '<div class="d-sub">' + d.sub + '</div>'
    + '<span class="d-badge" style="background:' + c.bg + ';color:' + c.fg + '">' + c.label + '</span>'
    + '<div class="d-summary">' + d.summary + '</div>'
    + '<div class="d-section">Highlights</div>'
    + '<ul class="d-list">' + highlightsHtml + '</ul>'
    + tipHtml
    + wxHtml
    + nearbyHtml;

  // Easter Island needs its own zoom level — it's far off the mainland map view
  var zoom = id === 'rapanui' ? 10 : 9;
  map.flyTo([d.lat, d.lng], zoom, { duration: 1.1, easeLinearity: 0.25 });
  setTimeout(function() {
    if (markerStore[id]) markerStore[id].openPopup();
  }, 1000);

  // Close fav panel on mobile when viewing detail
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
   INIT
   ──────────────────────────────────────────────────── */
renderList('all');
syncFavUI();
