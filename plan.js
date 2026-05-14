/* ════════════════════════════════════════════════════
   Chile Trip 2026 — Plan / Itinerary Logic
   Globals expected from app.js : map, DESTINATIONS, CATS, escHtml
   Globals expected from data/  : PLAN_DATA (plan_data.js)
   ════════════════════════════════════════════════════ */


/* ────────────────────────────────────────────────────
   STORAGE
   ──────────────────────────────────────────────────── */
var PLAN_KEY          = 'chile-trip-2026-plan';
var PLAN_EXPORTED_KEY = 'chile-trip-2026-plan-exported';

function loadPlan() {
  try { return JSON.parse(localStorage.getItem(PLAN_KEY)) || []; }
  catch(e) { return []; }
}

function savePlan(arr) {
  try { localStorage.setItem(PLAN_KEY, JSON.stringify(arr)); }
  catch(e) {}
  updatePlanDirty();
}


/* ────────────────────────────────────────────────────
   DIRTY DETECTION
   When localStorage plan differs from what was last exported
   (or from PLAN_DATA if never exported this session).
   ──────────────────────────────────────────────────── */
function isPlanDirty() {
  var plan = loadPlan();
  if (!plan.length) return false;

  /* Check against last-exported snapshot first */
  try {
    var snap = JSON.parse(localStorage.getItem(PLAN_EXPORTED_KEY));
    if (snap !== null) return JSON.stringify(plan) !== JSON.stringify(snap);
  } catch(e) {}

  /* Fall back to committed PLAN_DATA */
  var committed = (typeof PLAN_DATA !== 'undefined' && Array.isArray(PLAN_DATA)) ? PLAN_DATA : [];
  return JSON.stringify(plan) !== JSON.stringify(committed);
}

function updatePlanDirty() {
  var el = document.getElementById('planDirty');
  if (el) el.style.display = isPlanDirty() ? '' : 'none';
}


/* ────────────────────────────────────────────────────
   TAB SWITCHING
   ──────────────────────────────────────────────────── */
var planMode = false;

function switchToPlanMode() {
  planMode = true;
  document.getElementById('tabDests').classList.remove('on');
  document.getElementById('tabPlan').classList.add('on');

  var filters = document.getElementById('sFilters');
  var legend  = document.getElementById('sLegend');
  if (filters) filters.style.display = 'none';
  if (legend)  legend.style.display  = 'none';

  document.getElementById('destList').style.display   = 'none';
  document.getElementById('detailPanel').classList.remove('visible');
  document.getElementById('planPanel').style.display  = 'flex';

  if (typeof closeMobileCard === 'function') closeMobileCard();
  map.closePopup();

  showPlanRoute();
  renderPlanList();
  updatePlanSummary();
  updatePlanDirty();
}

function switchToDestinationsMode() {
  planMode        = false;
  planExpandedIdx = -1;

  document.getElementById('tabDests').classList.add('on');
  document.getElementById('tabPlan').classList.remove('on');

  var filters = document.getElementById('sFilters');
  var legend  = document.getElementById('sLegend');
  if (filters) filters.style.display = '';
  if (legend)  legend.style.display  = '';

  document.getElementById('planPanel').style.display = 'none';
  closeAddStop();
  hidePlanRoute();

  /* Restore destinations view */
  if (typeof showList        === 'function') showList();
  if (typeof renderList      === 'function') renderList(typeof currentFilter !== 'undefined' ? currentFilter : 'all');
}


/* ────────────────────────────────────────────────────
   HELPERS
   ──────────────────────────────────────────────────── */
function stopColor(stop) {
  if (stop.destId) {
    var dest = DESTINATIONS.find(function(x) { return x.id === stop.destId; });
    if (dest && CATS[dest.cat]) return CATS[dest.cat].color;
  }
  return '#64748B';
}

var _transportIcons = { flight: '✈', bus: '🚌', car: '🚗', ferry: '⛴', foot: '🥾', other: '·' };

function transportIcon(mode) {
  return _transportIcons[mode] || '·';
}

function _fmtDate(str) {
  if (!str) return '';
  var d = new Date(str + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

function _fmtRange(from, to) {
  if (!from && !to) return '';
  if (!from || !to) return _fmtDate(from || to);
  var f = new Date(from + 'T00:00:00');
  var t = new Date(to   + 'T00:00:00');
  if (f.getMonth() === t.getMonth() && f.getFullYear() === t.getFullYear()) {
    return f.toLocaleDateString('en-GB', { month: 'short' }) + ' ' + f.getDate() + '–' + t.getDate();
  }
  return _fmtDate(from) + ' – ' + _fmtDate(to);
}

function buildStopMetaHtml(stop) {
  var parts = [];
  if (stop.dateFrom || stop.dateTo) parts.push(_fmtRange(stop.dateFrom, stop.dateTo));
  if (stop.nights != null && stop.nights !== '') parts.push(stop.nights + ' night' + (stop.nights !== 1 ? 's' : ''));
  if (stop.transport && stop.transport.mode && stop.transport.mode !== 'other') {
    parts.push(transportIcon(stop.transport.mode));
  }
  return parts.join(' · ');
}


/* ────────────────────────────────────────────────────
   PLAN SUMMARY (top of panel)
   ──────────────────────────────────────────────────── */
function updatePlanSummary() {
  var el = document.getElementById('planSummary');
  if (!el) return;
  var plan = loadPlan();

  if (!plan.length) {
    el.innerHTML = '<div class="plan-summary-empty">No stops yet — add your first destination below.</div>';
    return;
  }

  var confirmed = plan.filter(function(s) { return s.status === 'confirmed'; }).length;
  var tentative = plan.filter(function(s) { return s.status === 'tentative'; }).length;
  var dreaming  = plan.filter(function(s) { return s.status === 'dreaming';  }).length;

  var dates = plan.map(function(s) { return s.dateFrom; }).filter(Boolean).sort();
  var todos = plan.map(function(s) { return s.dateTo;   }).filter(Boolean).sort();
  var range = (dates.length && todos.length)
    ? _fmtDate(dates[0]) + ' – ' + _fmtDate(todos[todos.length - 1])
    : '';

  var nights = plan.reduce(function(n, s) { return n + (parseInt(s.nights, 10) || 0); }, 0);

  var total  = plan.length;
  var barHtml = (total > 0)
    ? '<div class="plan-status-bar">'
      + (confirmed ? '<div class="psb-seg psb-confirmed" style="flex:' + confirmed + '"></div>' : '')
      + (tentative ? '<div class="psb-seg psb-tentative" style="flex:' + tentative + '"></div>' : '')
      + (dreaming  ? '<div class="psb-seg psb-dreaming"  style="flex:' + dreaming  + '"></div>' : '')
      + '</div>'
    : '';

  el.innerHTML =
      '<div class="plan-stats">'
    + '<span>' + total + ' stop' + (total !== 1 ? 's' : '') + '</span>'
    + (range  ? '<span>' + range  + '</span>' : '')
    + (nights ? '<span>' + nights + ' night' + (nights !== 1 ? 's' : '') + '</span>' : '')
    + '</div>'
    + barHtml
    + '<div class="plan-status-legend">'
    + (confirmed ? '<span class="psl psl-confirmed">' + confirmed + ' confirmed</span>' : '')
    + (tentative ? '<span class="psl psl-tentative">' + tentative + ' tentative</span>' : '')
    + (dreaming  ? '<span class="psl psl-dreaming">'  + dreaming  + ' dreaming</span>'  : '')
    + '</div>';
}


/* ────────────────────────────────────────────────────
   RENDER PLAN LIST
   ──────────────────────────────────────────────────── */
var planExpandedIdx = -1;

function renderPlanList() {
  var el   = document.getElementById('planList');
  if (!el) return;
  var plan = loadPlan();

  if (!plan.length) {
    el.innerHTML = '<div class="plan-list-empty">No stops yet.<br>Use "+ Add stop" to build your itinerary.</div>';
    return;
  }

  el.innerHTML = plan.map(function(stop, idx) {
    return renderPlanStop(stop, idx);
  }).join('');

  initPlanDrag();
}

function renderPlanStop(stop, idx) {
  var color  = stopColor(stop);
  var meta   = buildStopMetaHtml(stop);
  var status = stop.status || 'tentative';

  var statusClr = { confirmed: '#16A34A', tentative: '#D97706', dreaming: '#94A3B8' };
  var sColor = statusClr[status] || '#94A3B8';

  var notes    = stop.notes || {};
  var hasNotes = [notes.accommodation, notes.toBook, notes.questions, notes.general]
    .some(function(n) { return n && n.trim(); });
  var notePip  = hasNotes ? '<span class="note-pip" title="Has notes"></span>' : '';

  var isExpanded = planExpandedIdx === idx;

  var editorHtml = isExpanded ? renderPlanEditor(stop, idx) : '';

  return '<div class="plan-stop' + (isExpanded ? ' expanded' : '') + '" data-idx="' + idx + '" draggable="true">'
    + '<div class="plan-stop-hd">'
    +   '<div class="plan-drag-handle" title="Drag to reorder">⠿</div>'
    +   '<div class="plan-stop-num" style="background:' + color + '">' + (idx + 1) + '</div>'
    +   '<div class="plan-stop-main" onclick="togglePlanStopEditor(' + idx + ')">'
    +     '<div class="plan-stop-row1">'
    +       '<span class="plan-stop-name">' + escHtml(stop.name) + notePip + '</span>'
    +       '<span class="plan-status-badge" id="planBadge_' + idx + '" style="color:' + sColor + '">'
    +         status
    +       '</span>'
    +     '</div>'
    +     '<div class="plan-stop-meta" id="planStopMeta_' + idx + '">'
    +       meta
    +       (stop.sub ? '<span class="plan-stop-cat"> · ' + escHtml(stop.sub) + '</span>' : '')
    +     '</div>'
    +   '</div>'
    +   '<button class="plan-stop-toggle" onclick="togglePlanStopEditor(' + idx + ')" title="' + (isExpanded ? 'Close editor' : 'Edit stop') + '">'
    +     (isExpanded ? '↑' : '↓')
    +   '</button>'
    + '</div>'
    + editorHtml
    + '</div>';
}

function renderPlanEditor(stop, idx) {
  var modeOpts = ['flight', 'bus', 'car', 'ferry', 'foot', 'other'].map(function(m) {
    var labels = { flight: '✈ flight', bus: '🚌 bus', car: '🚗 car / rental',
                   ferry: '⛴ ferry', foot: '🥾 foot / trek', other: 'other' };
    return '<option value="' + m + '"' + ((stop.transport && stop.transport.mode === m) ? ' selected' : '') + '>'
      + labels[m] + '</option>';
  }).join('');

  var statusOpts = ['confirmed', 'tentative', 'dreaming'].map(function(s) {
    return '<option value="' + s + '"' + (stop.status === s ? ' selected' : '') + '>' + s + '</option>';
  }).join('');

  var tDetails = stop.transport ? escHtml(stop.transport.details || '') : '';
  var n = stop.notes || {};

  return '<div class="plan-editor">'

    /* ── Dates ── */
    + '<div class="plan-field-group">'
    +   '<div class="plan-section-lbl">Dates</div>'
    +   '<div class="plan-field-row">'
    +     '<label class="pfl">From</label>'
    +     '<input type="date" id="planFrom_' + idx + '" value="' + (stop.dateFrom || '') + '"'
    +       ' onchange="onPlanDateChange(' + idx + ')">'
    +     '<label class="pfl">To</label>'
    +     '<input type="date" id="planTo_' + idx + '" value="' + (stop.dateTo || '') + '"'
    +       ' onchange="onPlanDateChange(' + idx + ')">'
    +     '<label class="pfl">Nights</label>'
    +     '<input type="number" id="planNights_' + idx + '" value="' + (stop.nights != null ? stop.nights : '') + '"'
    +       ' min="0" class="plan-nights-input" onchange="updatePlanField(' + idx + ', \'nights\', this.value === \'\' ? null : +this.value)">'
    +   '</div>'
    + '</div>'

    /* ── Status ── */
    + '<div class="plan-field-group">'
    +   '<div class="plan-section-lbl">Status</div>'
    +   '<select onchange="updatePlanField(' + idx + ', \'status\', this.value)">' + statusOpts + '</select>'
    + '</div>'

    /* ── Transport ── */
    + '<div class="plan-field-group">'
    +   '<div class="plan-section-lbl">Transport from previous stop</div>'
    +   '<div class="plan-field-row">'
    +     '<select onchange="updatePlanField(' + idx + ', \'transport.mode\', this.value)">' + modeOpts + '</select>'
    +     '<input type="text" class="plan-transport-details" placeholder="Details…" value="' + tDetails + '"'
    +       ' onchange="updatePlanField(' + idx + ', \'transport.details\', this.value)">'
    +   '</div>'
    + '</div>'

    /* ── Notes ── */
    + '<div class="plan-section-lbl">Accommodation</div>'
    + '<textarea class="plan-note-ta" placeholder="Where you\'re staying, booking ref, cost…"'
    +   ' oninput="onPlanNoteInput(' + idx + ', \'accommodation\', this)">'
    + escHtml(n.accommodation || '') + '</textarea>'

    + '<div class="plan-section-lbl">What to book / prepare</div>'
    + '<textarea class="plan-note-ta" placeholder="Things to reserve before arrival…"'
    +   ' oninput="onPlanNoteInput(' + idx + ', \'toBook\', this)">'
    + escHtml(n.toBook || '') + '</textarea>'

    + '<div class="plan-section-lbl">Open questions</div>'
    + '<textarea class="plan-note-ta" placeholder="Things to still research…"'
    +   ' oninput="onPlanNoteInput(' + idx + ', \'questions\', this)">'
    + escHtml(n.questions || '') + '</textarea>'

    + '<div class="plan-section-lbl">General notes</div>'
    + '<textarea class="plan-note-ta" placeholder="Anything else…"'
    +   ' oninput="onPlanNoteInput(' + idx + ', \'general\', this)">'
    + escHtml(n.general || '') + '</textarea>'

    /* ── Remove ── */
    + '<button class="plan-remove-btn" onclick="removePlanStop(' + idx + ')">× Remove this stop</button>'
    + '</div>';
}


/* ────────────────────────────────────────────────────
   TOGGLE EDITOR
   ──────────────────────────────────────────────────── */
function togglePlanStopEditor(idx) {
  planExpandedIdx = planExpandedIdx === idx ? -1 : idx;
  renderPlanList();
  if (planExpandedIdx === idx) {
    setTimeout(function() {
      var el = document.querySelector('.plan-stop[data-idx="' + idx + '"]');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  }
}


/* ────────────────────────────────────────────────────
   UPDATE PLAN FIELDS
   Surgical DOM update — avoids re-rendering and losing textarea focus.
   ──────────────────────────────────────────────────── */
function updatePlanField(idx, field, value) {
  var plan = loadPlan();
  if (idx < 0 || idx >= plan.length) return;
  var stop = plan[idx];

  if (field === 'transport.mode' || field === 'transport.details') {
    stop.transport = stop.transport || { mode: 'other', details: '' };
    stop.transport[field.split('.')[1]] = value;
  } else if (field.startsWith('notes.')) {
    stop.notes = stop.notes || {};
    stop.notes[field.slice(6)] = value;
  } else {
    stop[field] = value;
  }

  plan[idx] = stop;
  savePlan(plan);

  /* Update compact meta line */
  var metaEl = document.getElementById('planStopMeta_' + idx);
  if (metaEl) {
    metaEl.innerHTML = buildStopMetaHtml(stop)
      + (stop.sub ? '<span class="plan-stop-cat"> · ' + escHtml(stop.sub) + '</span>' : '');
  }

  /* Update status badge colour */
  if (field === 'status') {
    var statusClr = { confirmed: '#16A34A', tentative: '#D97706', dreaming: '#94A3B8' };
    var badge = document.getElementById('planBadge_' + idx);
    if (badge) { badge.textContent = value; badge.style.color = statusClr[value] || '#94A3B8'; }
  }

  updatePlanSummary();
  updatePlanDirty();
  if (planRouteOnMap) buildPlanRoute();
}

function onPlanDateChange(idx) {
  var fromEl   = document.getElementById('planFrom_'   + idx);
  var toEl     = document.getElementById('planTo_'     + idx);
  var nightsEl = document.getElementById('planNights_' + idx);

  var plan = loadPlan();
  if (idx < 0 || idx >= plan.length) return;

  var fromVal = fromEl ? fromEl.value : '';
  var toVal   = toEl   ? toEl.value   : '';

  plan[idx].dateFrom = fromVal;
  plan[idx].dateTo   = toVal;

  if (fromVal && toVal) {
    var from = new Date(fromVal + 'T00:00:00');
    var to   = new Date(toVal   + 'T00:00:00');
    if (to >= from) {
      var nights = Math.round((to - from) / 86400000);
      plan[idx].nights = nights;
      if (nightsEl) nightsEl.value = nights;
    }
  }

  savePlan(plan);

  var metaEl = document.getElementById('planStopMeta_' + idx);
  if (metaEl) {
    metaEl.innerHTML = buildStopMetaHtml(plan[idx])
      + (plan[idx].sub ? '<span class="plan-stop-cat"> · ' + escHtml(plan[idx].sub) + '</span>' : '');
  }
  updatePlanSummary();
  updatePlanDirty();
}

/* Debounced note saves — avoids re-rendering while user types */
var _planNoteTimers = {};

function onPlanNoteInput(idx, noteKey, el) {
  var key = idx + '.' + noteKey;
  clearTimeout(_planNoteTimers[key]);
  _planNoteTimers[key] = setTimeout(function() {
    updatePlanField(idx, 'notes.' + noteKey, el.value);
  }, 500);
}


/* ────────────────────────────────────────────────────
   DRAG-TO-REORDER
   ──────────────────────────────────────────────────── */
var _planDragSrcIdx = null;

function initPlanDrag() {
  var listEl = document.getElementById('planList');
  var items  = listEl ? listEl.querySelectorAll('.plan-stop[draggable]') : [];

  items.forEach(function(el) {

    el.addEventListener('dragstart', function(e) {
      _planDragSrcIdx = parseInt(el.dataset.idx, 10);
      e.dataTransfer.effectAllowed = 'move';
      setTimeout(function() { el.classList.add('dragging'); }, 0);
    });

    el.addEventListener('dragend', function() {
      el.classList.remove('dragging');
      listEl.querySelectorAll('.plan-stop').forEach(function(x) { x.classList.remove('drag-over'); });
    });

    el.addEventListener('dragover', function(e) {
      var targetIdx = parseInt(el.dataset.idx, 10);
      if (_planDragSrcIdx === null || targetIdx === _planDragSrcIdx) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      listEl.querySelectorAll('.plan-stop').forEach(function(x) { x.classList.remove('drag-over'); });
      el.classList.add('drag-over');
    });

    el.addEventListener('drop', function(e) {
      e.preventDefault();
      e.stopPropagation();
      el.classList.remove('drag-over');
      var targetIdx = parseInt(el.dataset.idx, 10);
      if (_planDragSrcIdx === null || _planDragSrcIdx === targetIdx) { _planDragSrcIdx = null; return; }

      var plan    = loadPlan();
      var src     = _planDragSrcIdx;
      var moved   = plan.splice(src, 1)[0];
      var adjTarget = targetIdx > src ? targetIdx - 1 : targetIdx;
      plan.splice(adjTarget, 0, moved);

      _planDragSrcIdx = null;
      planExpandedIdx = -1;
      savePlan(plan);
      renderPlanList();
      updatePlanSummary();
      updatePlanDirty();
      if (planRouteOnMap) buildPlanRoute();
    });
  });
}


/* ────────────────────────────────────────────────────
   ADD STOP
   ──────────────────────────────────────────────────── */
function openAddStop() {
  var overlay = document.getElementById('planAddOverlay');
  if (overlay) overlay.style.display = 'flex';
  var input   = document.getElementById('planAddSearchInput');
  if (input)  { input.value = ''; input.focus(); }
  filterPlanSearch('');
}

function closeAddStop() {
  var overlay = document.getElementById('planAddOverlay');
  if (overlay) overlay.style.display = 'none';
  var form    = document.getElementById('planCustomForm');
  if (form)   form.style.display = 'none';
  var input   = document.getElementById('planAddSearchInput');
  if (input)  input.value = '';
}

function filterPlanSearch(query) {
  var plan    = loadPlan();
  var usedIds = plan.map(function(s) { return s.destId; }).filter(Boolean);
  var q       = query.toLowerCase().trim();

  var results = DESTINATIONS.filter(function(d) {
    if (usedIds.indexOf(d.id) !== -1) return false;
    if (!q) return true;
    return d.name.toLowerCase().indexOf(q) !== -1
        || d.sub.toLowerCase().indexOf(q)  !== -1;
  });

  var el = document.getElementById('planAddResults');
  if (!el) return;

  if (!results.length) {
    el.innerHTML = '<div class="plan-no-results">'
      + (q ? 'No destinations found for "' + escHtml(q) + '"' : 'All destinations already added.')
      + '</div>';
    return;
  }

  el.innerHTML = results.map(function(d) {
    var c = CATS[d.cat];
    return '<div class="plan-add-result" onclick="addDestToPlan(\'' + d.id + '\')">'
      + '<span class="plan-add-dot" style="background:' + c.color + '"></span>'
      + '<div class="plan-add-info">'
      +   '<div class="plan-add-name">' + escHtml(d.name) + '</div>'
      +   '<div class="plan-add-sub">'  + escHtml(d.sub)  + '</div>'
      + '</div>'
      + '</div>';
  }).join('');
}

function addDestToPlan(destId) {
  var d = DESTINATIONS.find(function(x) { return x.id === destId; });
  if (!d) return;

  var plan = loadPlan();
  plan.push({
    destId:    d.id,
    name:      d.name,
    sub:       '',
    lat:       d.lat,
    lng:       d.lng,
    dateFrom:  '',
    dateTo:    '',
    nights:    null,
    status:    'tentative',
    transport: { mode: 'other', details: '' },
    notes:     { accommodation: '', toBook: '', questions: '', general: '' }
  });

  savePlan(plan);
  closeAddStop();

  planExpandedIdx = plan.length - 1;
  renderPlanList();
  updatePlanSummary();
  updatePlanDirty();
  if (planRouteOnMap) buildPlanRoute();

  setTimeout(function() {
    var el = document.querySelector('.plan-stop[data-idx="' + (plan.length - 1) + '"]');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 80);
}

function toggleCustomStopForm() {
  var form = document.getElementById('planCustomForm');
  if (!form) return;
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
  if (form.style.display !== 'none') {
    var nameInput = document.getElementById('customStopName');
    if (nameInput) nameInput.focus();
  }
}

function addCustomPlanStop() {
  var nameEl = document.getElementById('customStopName');
  var locEl  = document.getElementById('customStopLoc');
  var name   = nameEl ? nameEl.value.trim() : '';
  if (!name) { alert('Please enter a stop name.'); return; }

  var plan = loadPlan();
  plan.push({
    destId:    null,
    name:      name,
    sub:       locEl ? locEl.value.trim() : '',
    lat:       null,
    lng:       null,
    dateFrom:  '',
    dateTo:    '',
    nights:    null,
    status:    'tentative',
    transport: { mode: 'other', details: '' },
    notes:     { accommodation: '', toBook: '', questions: '', general: '' }
  });

  if (nameEl) nameEl.value = '';
  if (locEl)  locEl.value  = '';
  savePlan(plan);
  closeAddStop();

  planExpandedIdx = plan.length - 1;
  renderPlanList();
  updatePlanSummary();
  updatePlanDirty();
  if (planRouteOnMap) buildPlanRoute();
}

function removePlanStop(idx) {
  if (!confirm('Remove this stop from the plan?')) return;
  var plan = loadPlan();
  plan.splice(idx, 1);
  if (planExpandedIdx >= plan.length) planExpandedIdx = -1;
  savePlan(plan);
  renderPlanList();
  updatePlanSummary();
  updatePlanDirty();
  if (planRouteOnMap) buildPlanRoute();
}


/* ────────────────────────────────────────────────────
   EXPORT — downloads plan_data.js
   ──────────────────────────────────────────────────── */
function exportPlan() {
  var plan = loadPlan();
  if (!plan.length) {
    alert('No stops in the plan yet — add some destinations first.');
    return;
  }

  var today   = new Date().toISOString().slice(0, 10);
  var content = '// ─── PLAN DATA ──────────────────────────────────────────────────────────────\n'
    + '// Chile Trip 2026 — Committed itinerary.\n'
    + '// Generated: ' + today + ' · ' + plan.length + ' stop' + (plan.length !== 1 ? 's' : '') + '\n'
    + '// To update: Plan tab → Export plan_data.js → replace this file → commit.\n'
    + '\n'
    + 'var PLAN_DATA = ' + JSON.stringify(plan, null, 2) + ';\n';

  var blob = new Blob([content], { type: 'application/javascript;charset=utf-8' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href     = url;
  a.download = 'plan_data.js';
  document.body.appendChild(a);
  a.click();
  setTimeout(function() { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);

  /* Snapshot for dirty detection */
  try { localStorage.setItem(PLAN_EXPORTED_KEY, JSON.stringify(plan)); } catch(e) {}
  updatePlanDirty();
}


/* ────────────────────────────────────────────────────
   IMPORT — loads a plan_data.js file into localStorage
   ──────────────────────────────────────────────────── */
function importPlan(event) {
  var file = event.target.files && event.target.files[0];
  if (!file) return;

  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var text  = e.target.result;
      /* Extract the array literal from "var PLAN_DATA = [...];" */
      var match = text.match(/var\s+PLAN_DATA\s*=\s*(\[[\s\S]*?\]);/);
      if (!match) throw new Error('Could not find PLAN_DATA array in file.');
      var data  = JSON.parse(match[1]);
      if (!Array.isArray(data)) throw new Error('PLAN_DATA must be an array.');

      savePlan(data);
      /* Treat the import as the export baseline (not dirty) */
      try { localStorage.setItem(PLAN_EXPORTED_KEY, JSON.stringify(data)); } catch(ex) {}

      planExpandedIdx = -1;
      renderPlanList();
      updatePlanSummary();
      updatePlanDirty();
      if (planRouteOnMap) buildPlanRoute();
    } catch(err) {
      alert('Import failed: ' + err.message);
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}


/* ────────────────────────────────────────────────────
   MAP ROUTE — animated polyline through plan stops
   ──────────────────────────────────────────────────── */
var planRouteLayer = L.layerGroup();
var planRouteOnMap = false;

function buildPlanRoute() {
  planRouteLayer.clearLayers();
  var plan  = loadPlan();
  /* Only stops with coordinates */
  var stops = plan.filter(function(s) { return s.lat && s.lng; });
  if (!stops.length) return;

  var pts = stops.map(function(s) { return [s.lat, s.lng]; });

  if (pts.length >= 2) {
    L.polyline(pts, {
      color:     '#6366F1',
      weight:    2.5,
      opacity:   0.85,
      dashArray: '8 6',
      className: 'route-line'
    }).addTo(planRouteLayer);
  }

  stops.forEach(function(s) {
    var planIdx = plan.indexOf(s);
    L.marker([s.lat, s.lng], {
      icon: L.divIcon({
        className: '',
        html: '<div class="route-num">' + (planIdx + 1) + '</div>',
        iconSize:   [20, 20],
        iconAnchor: [10, 10]
      }),
      interactive: false,
      zIndexOffset: 500
    }).addTo(planRouteLayer);
  });
}

function showPlanRoute() {
  planRouteOnMap = true;
  buildPlanRoute();
  planRouteLayer.addTo(map);

  /* Fit map to plan extent */
  var plan = loadPlan();
  var pts  = plan.filter(function(s) { return s.lat && s.lng; }).map(function(s) { return [s.lat, s.lng]; });
  if (pts.length >= 2) {
    map.flyToBounds(L.latLngBounds(pts), { padding: [60, 60], duration: 1.1 });
  } else if (pts.length === 1) {
    map.flyTo(pts[0], 7, { duration: 1.1 });
  } else {
    map.flyTo([-38, -68], 5, { duration: 1.1 });
  }
}

function hidePlanRoute() {
  planRouteOnMap = false;
  planRouteLayer.remove();
}


/* ────────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────────── */
function initPlan() {
  /* If localStorage is empty but a committed plan exists, seed from it */
  var stored = loadPlan();
  if (!stored.length) {
    var committed = (typeof PLAN_DATA !== 'undefined' && Array.isArray(PLAN_DATA)) ? PLAN_DATA : [];
    if (committed.length) {
      savePlan(committed);
      /* Treat committed file as the export baseline */
      try { localStorage.setItem(PLAN_EXPORTED_KEY, JSON.stringify(committed)); } catch(e) {}
    }
  }
  updatePlanDirty();
}

initPlan();
