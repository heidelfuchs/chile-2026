/* ════════════════════════════════════════════════════
   Chile Trip 2026 — Plan / Itinerary Logic
   Globals expected from app.js : map, DESTINATIONS, CATS, escHtml
   Globals expected from data/  : PLAN_DATA (plan_data.js)
   ════════════════════════════════════════════════════ */


/* ────────────────────────────────────────────────────
   STORAGE
   ──────────────────────────────────────────────────── */
var PLAN_KEY            = 'chile-trip-2026-plan';
var PLAN_EXPORTED_KEY   = 'chile-trip-2026-plan-exported';
var TRIP_NOTES_KEY      = 'chile-trip-2026-trip-notes';

function loadTripNotes() {
  try { return localStorage.getItem(TRIP_NOTES_KEY) || ''; }
  catch(e) { return ''; }
}
function saveTripNotes(text) {
  try {
    if (text.trim()) localStorage.setItem(TRIP_NOTES_KEY, text);
    else             localStorage.removeItem(TRIP_NOTES_KEY);
  } catch(e) {}
}

var _tripNotesTimer = null;
function onTripNotesInput(el) {
  var statusEl = document.getElementById('planTripNotesStatus');
  if (statusEl) { statusEl.textContent = 'Saving…'; statusEl.style.opacity = '1'; }
  clearTimeout(_tripNotesTimer);
  _tripNotesTimer = setTimeout(function() {
    saveTripNotes(el.value);
    if (statusEl) {
      statusEl.textContent = 'Saved ✓';
      setTimeout(function() { statusEl.style.opacity = '0'; }, 1200);
    }
  }, 500);
}

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

  /* Show trip notes field and populate from storage */
  var tripNotesWrap = document.getElementById('planTripNotes');
  var tripNotesTa   = document.getElementById('planTripNotesTa');
  if (tripNotesWrap) tripNotesWrap.style.display = '';
  if (tripNotesTa)   tripNotesTa.value = loadTripNotes();

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

  var tripNotesWrap = document.getElementById('planTripNotes');
  if (tripNotesWrap) tripNotesWrap.style.display = 'none';

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

  /* Full date range including year */
  function _fmtDateYear(str) {
    if (!str) return '';
    var d = new Date(str + 'T00:00:00');
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }
  var range = (dates.length && todos.length)
    ? _fmtDateYear(dates[0]) + ' – ' + _fmtDateYear(todos[todos.length - 1])
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

  /* Budget summary */
  var FX = { EUR: 1, USD: 0.92, CLP: 0.00087 };
  var budgetEur = 0;
  var hasBudget = false;
  plan.forEach(function(s) {
    if (s.budget && s.budget.amount != null && s.budget.amount > 0) {
      hasBudget = true;
      var rate = FX[s.budget.currency] || 1;
      budgetEur += s.budget.amount * rate;
    }
  });
  var budgetHtml = '';
  if (hasBudget) {
    var perPerson = Math.round(budgetEur / 3);
    budgetHtml = '<div class="plan-budget-line">'
      + '~€' + Math.round(budgetEur).toLocaleString() + ' total'
      + ' &nbsp;·&nbsp; ~€' + perPerson.toLocaleString() + '/person (3 pax)'
      + ' <span style="font-size:9px;color:var(--text3)">approx.</span>'
      + '</div>';
  }

  /* Route line — stop names joined with arrows */
  var routeHtml = '';
  if (plan.length) {
    var arrow = '<span class="plan-route-arrow">→</span>';
    routeHtml = '<div class="plan-route">'
      + plan.map(function(s) { return escHtml(s.name); }).join(arrow)
      + '</div>';
  }

  el.innerHTML =
      '<div class="plan-stats">'
    + '<span>' + total + ' stop' + (total !== 1 ? 's' : '') + '</span>'
    + (range  ? '<span>' + range  + '</span>' : '')
    + (nights ? '<span>' + nights + ' night' + (nights !== 1 ? 's' : '') + '</span>' : '')
    + '</div>'
    + routeHtml
    + barHtml
    + '<div class="plan-status-legend">'
    + (confirmed ? '<span class="psl psl-confirmed">' + confirmed + ' confirmed</span>' : '')
    + (tentative ? '<span class="psl psl-tentative">' + tentative + ' tentative</span>' : '')
    + (dreaming  ? '<span class="psl psl-dreaming">'  + dreaming  + ' dreaming</span>'  : '')
    + '</div>'
    + budgetHtml;
}


/* ────────────────────────────────────────────────────
   RENDER PLAN LIST
   ──────────────────────────────────────────────────── */
var planExpandedIdx = -1;

function renderPlanList() {
  var el   = document.getElementById('planList');
  if (!el) return;
  var plan = loadPlan();

  /* Show/hide view toggle based on whether there are stops */
  var toggleEl = document.getElementById('planViewToggle');
  if (toggleEl) toggleEl.style.display = plan.length ? '' : 'none';

  if (!plan.length) {
    planViewMode = 'list';
    switchPlanView('list');
    el.innerHTML = '<div class="plan-list-empty">No stops yet.<br>Use "+ Add stop" to build your itinerary.</div>';
    return;
  }

  if (planViewMode === 'timeline') {
    renderTimeline();
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

    /* ── Budget ── */
    + '<div class="plan-section-lbl" style="margin-top:14px">Budget estimate</div>'
    + '<div class="plan-field-row">'
    +   '<input type="number" min="0" step="1" class="plan-budget-input"'
    +     ' placeholder="0"'
    +     ' value="' + ((stop.budget && stop.budget.amount != null) ? stop.budget.amount : '') + '"'
    +     ' onchange="updatePlanField(' + idx + ', \'budget.amount\', this.value === \'\' ? null : +this.value)">'
    +   '<select onchange="updatePlanField(' + idx + ', \'budget.currency\', this.value)">'
    +     ['EUR','USD','CLP'].map(function(c) {
            return '<option value="' + c + '"' + ((stop.budget && stop.budget.currency === c) ? ' selected' : '') + '>' + c + '</option>';
          }).join('')
    +   '</select>'
    + '</div>'
    + '<div style="font-size:10px;color:var(--text3);margin-top:3px">Estimated total for this stop. Shown in plan summary.</div>'

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
  } else if (field.startsWith('budget.')) {
    stop.budget = stop.budget || { amount: null, currency: 'EUR' };
    stop.budget[field.slice(7)] = value;
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
  var q       = query.toLowerCase().trim();

  /* Count how many times each destId already appears in the plan */
  var countMap = {};
  plan.forEach(function(s) {
    if (s.destId) countMap[s.destId] = (countMap[s.destId] || 0) + 1;
  });

  var results = DESTINATIONS.filter(function(d) {
    if (!q) return true;
    return d.name.toLowerCase().indexOf(q) !== -1
        || d.sub.toLowerCase().indexOf(q)  !== -1;
  });

  var el = document.getElementById('planAddResults');
  if (!el) return;

  if (!results.length) {
    el.innerHTML = '<div class="plan-no-results">No destinations found for "' + escHtml(q) + '"</div>';
    return;
  }

  el.innerHTML = results.map(function(d) {
    var c     = CATS[d.cat];
    var count = countMap[d.id] || 0;
    var alreadyHtml = count > 0
      ? '<div style="font-size:10px;color:var(--text3);margin-top:1px">'
        + (count === 1 ? 'Already in plan · adding again' : 'In plan ' + count + '× · adding again')
        + '</div>'
      : '';
    return '<div class="plan-add-result" onclick="addDestToPlan(\'' + d.id + '\')">'
      + '<span class="plan-add-dot" style="background:' + c.color + '"></span>'
      + '<div class="plan-add-info">'
      +   '<div class="plan-add-name">' + escHtml(d.name) + '</div>'
      +   '<div class="plan-add-sub">'  + escHtml(d.sub)  + '</div>'
      +   alreadyHtml
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
    notes:     { accommodation: '', toBook: '', questions: '', general: '' },
    budget:    { amount: null, currency: 'EUR' }
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
    notes:     { accommodation: '', toBook: '', questions: '', general: '' },
    budget:    { amount: null, currency: 'EUR' }
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
   EXPORT — downloads chile-trip-2026-itinerary.md
   ──────────────────────────────────────────────────── */
function exportPlanMarkdown() {
  var plan = loadPlan();
  if (!plan.length) {
    alert('No stops in the plan yet — add some destinations first.');
    return;
  }

  var today   = new Date();
  var dateStr = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  /* Overview stats */
  var confirmed = plan.filter(function(s) { return s.status === 'confirmed'; }).length;
  var tentative = plan.filter(function(s) { return s.status === 'tentative'; }).length;
  var dreaming  = plan.filter(function(s) { return s.status === 'dreaming';  }).length;
  var totalNights = plan.reduce(function(n, s) { return n + (parseInt(s.nights, 10) || 0); }, 0);

  /* Budget total */
  var FX = { EUR: 1, USD: 0.92, CLP: 0.00087 };
  var budgetEur = 0;
  var hasBudget = false;
  plan.forEach(function(s) {
    if (s.budget && s.budget.amount != null && s.budget.amount > 0) {
      hasBudget = true;
      budgetEur += s.budget.amount * (FX[s.budget.currency] || 1);
    }
  });

  /* Date range with year */
  var allFrom = plan.map(function(s) { return s.dateFrom; }).filter(Boolean).sort();
  var allTo   = plan.map(function(s) { return s.dateTo;   }).filter(Boolean).sort();
  function _fmtDateFull(str) {
    if (!str) return '';
    var d = new Date(str + 'T00:00:00');
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }
  var fullRange = (allFrom.length && allTo.length)
    ? _fmtDateFull(allFrom[0]) + ' – ' + _fmtDateFull(allTo[allTo.length - 1])
    : '';

  /* Route string */
  var routeStr = plan.map(function(s) { return s.name; }).join(' → ');

  /* Trip-level notes */
  var tripNotes = loadTripNotes();

  var lines = [
    '# 🇨🇱 Chile Trip 2026 — Full Itinerary',
    '',
    '*3 people · Generated: ' + dateStr + '*',
    '',
    '## Overview',
  ];

  if (fullRange) lines.push('**' + fullRange + '**');
  lines.push(
    '- **' + plan.length + ' stop' + (plan.length !== 1 ? 's' : '') + '**'
      + (totalNights ? ' · **' + totalNights + ' nights**' : ''),
    '- Confirmed: ' + confirmed + ' · Tentative: ' + tentative + ' · Dreaming: ' + dreaming
  );
  if (hasBudget) {
    lines.push('- Estimated budget: ~€' + Math.round(budgetEur).toLocaleString()
      + ' total · ~€' + Math.round(budgetEur / 3).toLocaleString() + ' per person *(approx.)*');
  }

  if (routeStr) {
    lines.push('', '**Route**');
    lines.push(routeStr);
  }

  if (tripNotes.trim()) {
    lines.push('', '### Trip notes');
    lines.push(tripNotes.trim());
  }

  lines.push('', '---', '');

  /* Per-stop sections */
  plan.forEach(function(stop, idx) {
    var dest = stop.destId ? DESTINATIONS.find(function(x) { return x.id === stop.destId; }) : null;
    var c    = dest ? CATS[dest.cat] : null;

    /* Heading */
    lines.push('## ' + (idx + 1) + '. ' + stop.name);

    /* Date / nights / status line */
    var meta = [];
    if (stop.dateFrom || stop.dateTo) meta.push(_fmtRange(stop.dateFrom, stop.dateTo));
    if (stop.nights != null && stop.nights !== '') meta.push(stop.nights + ' night' + (stop.nights !== 1 ? 's' : ''));
    if (stop.status) meta.push(stop.status.charAt(0).toUpperCase() + stop.status.slice(1));
    if (meta.length) lines.push('**' + meta.join(' · ') + '**');

    /* Transport */
    if (stop.transport && stop.transport.mode && stop.transport.mode !== 'other') {
      var icons = { flight: '✈ Flight', bus: '🚌 Bus', car: '🚗 Car / rental',
                    ferry: '⛴ Ferry', foot: '🥾 Foot / trek' };
      var tLabel = icons[stop.transport.mode] || stop.transport.mode;
      if (stop.transport.details) tLabel += ' — ' + stop.transport.details;
      lines.push('*Transport from previous stop: ' + tLabel + '*');
    }
    lines.push('');

    /* Destination info (only for known destinations) */
    if (dest) {
      if (c) lines.push('> **' + c.label + '** · ' + dest.sub);
      lines.push('');
      lines.push('### About');
      lines.push(dest.summary);
      lines.push('');
      lines.push('### Highlights');
      dest.highlights.forEach(function(h) { lines.push('- ' + h); });
      lines.push('');
      if (dest.tip) {
        lines.push('### Practical tip');
        lines.push(dest.tip);
        lines.push('');
      }
      if (dest.weather) {
        lines.push('### Nov–Dec weather');
        lines.push(dest.weather);
        lines.push('');
      }
    }

    /* Plan notes */
    var n = stop.notes || {};
    var hasNotes = n.accommodation || n.toBook || n.questions || n.general;
    if (hasNotes) {
      lines.push('### Plan notes');
      if (n.accommodation) { lines.push('**Accommodation:** ' + n.accommodation); lines.push(''); }
      if (n.toBook)        { lines.push('**Things to book:** ' + n.toBook);        lines.push(''); }
      if (n.questions)     { lines.push('**Open questions:** ' + n.questions);     lines.push(''); }
      if (n.general)       { lines.push('**General notes:** ' + n.general);        lines.push(''); }
    }

    /* Budget */
    if (stop.budget && stop.budget.amount != null && stop.budget.amount > 0) {
      lines.push('**Budget estimate:** ' + stop.budget.amount.toLocaleString() + ' ' + stop.budget.currency);
      lines.push('');
    }

    lines.push('---', '');
  });

  lines.push('*Generated by Chile Trip 2026 interactive planner*');

  var md   = lines.join('\n');
  var blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href     = url;
  a.download = 'chile-trip-2026-itinerary.md';
  document.body.appendChild(a);
  a.click();
  setTimeout(function() { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
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
      /* Extract the array literal from "var PLAN_DATA = [...];"
         Greedy match anchored to the end of the file — exportPlan() always
         writes PLAN_DATA as the final statement, so this is safe even when
         a note field happens to contain the literal text "];" */
      var match = text.match(/var\s+PLAN_DATA\s*=\s*(\[[\s\S]*\]);\s*$/);
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
   TIMELINE VIEW
   ──────────────────────────────────────────────────── */
var planViewMode = 'list';

function switchPlanView(mode) {
  planViewMode = mode;
  var listEl     = document.getElementById('planList');
  var timelineEl = document.getElementById('planTimeline');
  var btnList    = document.getElementById('pvBtnList');
  var btnTl      = document.getElementById('pvBtnTimeline');

  if (mode === 'timeline') {
    if (listEl)     listEl.style.display     = 'none';
    if (timelineEl) timelineEl.style.display = 'flex';
    if (btnList)    btnList.classList.remove('on');
    if (btnTl)      btnTl.classList.add('on');
    renderTimeline();
  } else {
    if (listEl)     listEl.style.display     = '';
    if (timelineEl) timelineEl.style.display = 'none';
    if (btnList)    btnList.classList.add('on');
    if (btnTl)      btnTl.classList.remove('on');
  }
}

function _timelineDateRange(plan) {
  var dates = [];
  plan.forEach(function(s) {
    if (s.dateFrom) dates.push(new Date(s.dateFrom + 'T00:00:00').getTime());
    if (s.dateTo)   dates.push(new Date(s.dateTo   + 'T00:00:00').getTime());
  });
  if (!dates.length) return null;
  var min = Math.min.apply(null, dates);
  var max = Math.max.apply(null, dates);
  /* Ensure at least 1 day range */
  if (max <= min) max = min + 86400000;
  return { min: min, max: max, totalMs: max - min };
}

function renderTimeline() {
  var el = document.getElementById('planTimeline');
  if (!el) return;
  var plan = loadPlan();

  if (!plan.length) {
    el.innerHTML = '<div class="plan-list-empty">No stops yet.</div>';
    return;
  }

  var scheduled   = plan.filter(function(s) { return s.dateFrom || s.dateTo; });
  var unscheduled = plan.filter(function(s) { return !s.dateFrom && !s.dateTo; });
  var range       = _timelineDateRange(scheduled.length ? plan : []);

  if (!range) {
    /* No dates at all — show as unscheduled list */
    el.innerHTML = '<div class="plan-list-empty" style="padding:16px 18px">No stops have dates yet.<br>'
      + 'Add dates in the List view to see the timeline.</div>';
    return;
  }

  /* Build month gridline positions */
  var months = [];
  var cursor = new Date(range.min);
  cursor.setDate(1);
  cursor.setHours(0,0,0,0);
  while (cursor.getTime() <= range.max + 86400000 * 5) {
    var pct = Math.max(0, (cursor.getTime() - range.min) / range.totalMs * 100);
    months.push({
      pct:   pct,
      label: cursor.toLocaleDateString('en-GB', { month: 'short', year: '2-digit' })
    });
    cursor.setMonth(cursor.getMonth() + 1);
  }

  var axisHtml = '<div class="tl-axis">'
    + '<div style="width:130px;flex-shrink:0"></div>'
    + '<div style="flex:1;position:relative;height:20px">'
    + months.map(function(m) {
        return '<span class="tl-axis-label" style="left:' + m.pct.toFixed(2) + '%">' + m.label + '</span>';
      }).join('')
    + '</div></div>';

  var gridlinesHtml = months.map(function(m) {
    return '<div class="tl-gridline" style="left:' + m.pct.toFixed(2) + '%"></div>';
  }).join('');

  var rowsHtml = scheduled.map(function(stop) {
    var globalIdx = plan.indexOf(stop);
    var color = stopColor(stop);
    var fromMs = stop.dateFrom ? new Date(stop.dateFrom + 'T00:00:00').getTime() : range.min;
    var toMs   = stop.dateTo   ? new Date(stop.dateTo   + 'T00:00:00').getTime() : fromMs + 86400000;
    if (toMs <= fromMs) toMs = fromMs + 86400000;

    var leftPct  = ((fromMs - range.min) / range.totalMs * 100).toFixed(2);
    var widthPct = ((toMs - fromMs) / range.totalMs * 100).toFixed(2);
    /* Ensure bar is at least 1.5% wide to be clickable */
    widthPct = Math.max(1.5, parseFloat(widthPct)).toFixed(2);

    return '<div class="tl-row">'
      + '<div class="tl-row-label">'
      +   '<span class="tl-row-num" style="background:' + color + '">' + (globalIdx + 1) + '</span>'
      +   '<span class="tl-row-name">' + escHtml(stop.name) + '</span>'
      + '</div>'
      + '<div class="tl-bar-area">'
      +   gridlinesHtml
      +   '<div class="tl-bar" style="left:' + leftPct + '%;width:' + widthPct + '%;background:' + color + '"'
      +     ' title="' + escHtml(stop.name) + ' · ' + _fmtRange(stop.dateFrom, stop.dateTo) + '"'
      +     ' onclick="switchPlanView(\'list\');togglePlanStopEditor(' + globalIdx + ')">'
      +     '<span class="tl-bar-label">' + escHtml(stop.name) + '</span>'
      +   '</div>'
      + '</div>'
      + '</div>';
  }).join('');

  var unschHtml = '';
  if (unscheduled.length) {
    unschHtml = '<div class="tl-unscheduled">'
      + '<div class="tl-unsch-hd">Unscheduled (' + unscheduled.length + ')</div>'
      + unscheduled.map(function(stop) {
          var globalIdx = plan.indexOf(stop);
          var color = stopColor(stop);
          return '<div class="tl-unsch-item" onclick="switchPlanView(\'list\');togglePlanStopEditor(' + globalIdx + ')">'
            + '<span class="tl-row-num" style="background:' + color + '">' + (globalIdx + 1) + '</span>'
            + '<span>' + escHtml(stop.name) + '</span>'
            + '</div>';
        }).join('')
      + '</div>';
  }

  el.innerHTML = axisHtml
    + '<div class="tl-grid">' + rowsHtml + '</div>'
    + unschHtml;
}


/* ────────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────────── */
function initPlan() {
  var stored    = loadPlan();
  var committed = (typeof PLAN_DATA !== 'undefined' && Array.isArray(PLAN_DATA)) ? PLAN_DATA : [];

  /* Adopt the committed file when:
     - this browser has no local plan yet (first visit / cleared storage), or
     - the local plan is just an untouched mirror of an earlier publish
       (i.e. not dirty) and the committed file has since moved on.
     We deliberately do NOT overwrite when the local plan has unpublished
     edits (isPlanDirty() === true) — that would silently discard notes
     the user hasn't exported yet. This is what previously caused newly
     pushed stops to never show up on a browser that already had an older
     plan cached: it only ever seeded once, on a completely empty plan. */
  var isStale = stored.length
    && !isPlanDirty()
    && JSON.stringify(stored) !== JSON.stringify(committed);

  if ((!stored.length || isStale) && committed.length) {
    savePlan(committed);
    /* Treat committed file as the export baseline */
    try { localStorage.setItem(PLAN_EXPORTED_KEY, JSON.stringify(committed)); } catch(e) {}
  }

  updatePlanDirty();
}

initPlan();
