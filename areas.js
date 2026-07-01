/* ════════════════════════════════════════════════════
   Chile Trip 2026 — Areas Logic
   Globals expected: map, AREAS, DESTINATIONS, CATS,
                     markerStore, currentFilter, escHtml,
                     planRouteOnMap, hidePlanRoute (plan.js)
   ════════════════════════════════════════════════════ */


/* ────────────────────────────────────────────────────
   POI TYPE CONFIG
   ──────────────────────────────────────────────────── */
var AREA_POI_TYPES = {
  town:      { color: '#64748B', label: 'Town / City',       bg: '#F1F5F9', fg: '#475569', icon: '🏘' },
  volcano:   { color: '#DC2626', label: 'Volcano',           bg: '#FEF2F2', fg: '#991B1B', icon: '🌋' },
  park:      { color: '#16A34A', label: 'National Park',     bg: '#F0FDF4', fg: '#15803D', icon: '🌲' },
  lake:      { color: '#0284C7', label: 'Lake',              bg: '#E0F2FE', fg: '#0369A1', icon: '💧' },
  hotspring: { color: '#EA580C', label: 'Hot Springs',       bg: '#FFF7ED', fg: '#9A3412', icon: '♨' },
  waterfall: { color: '#0891B2', label: 'Waterfall',         bg: '#ECFEFF', fg: '#0E7490', icon: '💦' },
  activity:  { color: '#7C3AED', label: 'Activity',          bg: '#F5F3FF', fg: '#6D28D9', icon: '⚡' },
  beach:     { color: '#0EA5E9', label: 'Beach',             bg: '#F0F9FF', fg: '#0284C7', icon: '🏖' },
  viewpoint: { color: '#D97706', label: 'Viewpoint',         bg: '#FFFBEB', fg: '#92400E', icon: '👁' },
  culture:   { color: '#9333EA', label: 'Culture',           bg: '#FAF5FF', fg: '#7E22CE', icon: '🎭' }
};

var AREA_TYPE_ORDER = [
  'town', 'volcano', 'park', 'lake', 'hotspring',
  'beach', 'waterfall', 'activity', 'viewpoint', 'culture'
];

function areaPoiType(type) {
  return AREA_POI_TYPES[type] || AREA_POI_TYPES.culture;
}


/* ────────────────────────────────────────────────────
   STATE
   ──────────────────────────────────────────────────── */
var areaMode       = false;
var _curAreaId     = null;   /* which area is open   */
var _curPoiId      = null;   /* which POI is open    */
var _polyVisible   = true;

var _areaPolyLayer   = L.layerGroup();
var _areaMarkerLayer = L.layerGroup();
var _areaPoiStore    = {};   /* poiId → L.marker */


/* ────────────────────────────────────────────────────
   TAB SWITCHING
   ──────────────────────────────────────────────────── */
function switchToAreasMode() {
  areaMode = true;

  /* Hide plan route + close any open overlays from other modes */
  if (typeof hidePlanRoute === 'function' && typeof planRouteOnMap !== 'undefined' && planRouteOnMap) {
    hidePlanRoute();
  }
  if (typeof closeAddStop === 'function') closeAddStop();
  map.closePopup();

  /* Update tabs */
  document.getElementById('tabDests').classList.remove('on');
  document.getElementById('tabPlan').classList.remove('on');
  document.getElementById('tabAreas').classList.add('on');

  /* Hide filter bar and legend */
  var filters = document.getElementById('sFilters');
  var legend  = document.getElementById('sLegend');
  if (filters) filters.style.display = 'none';
  if (legend)  legend.style.display  = 'none';

  /* Show area panel, hide others */
  document.getElementById('destList').style.display    = 'none';
  document.getElementById('detailPanel').classList.remove('visible');
  if (document.getElementById('planPanel')) {
    document.getElementById('planPanel').style.display = 'none';
  }
  document.getElementById('areaPanel').style.display = 'flex';

  showAreaList();
}

function exitAreaMode() {
  if (!areaMode) return;
  areaMode    = false;
  _curAreaId  = null;
  _curPoiId   = null;
  _polyVisible = true;

  _clearAreaLayers();
  _restoreAllMarkers();

  document.getElementById('areaPanel').style.display = 'none';
  document.getElementById('tabAreas').classList.remove('on');
}


/* ────────────────────────────────────────────────────
   AREA LIST VIEW
   ──────────────────────────────────────────────────── */
function showAreaList() {
  _clearAreaLayers();
  _restoreAllMarkers();
  _curAreaId = null;
  _curPoiId  = null;

  _showView('areaListView');

  var el = document.getElementById('areaListItems');
  if (!el) return;

  if (!AREAS || !AREAS.length) {
    el.innerHTML = '<div class="area-empty">No areas defined yet.</div>';
    return;
  }

  el.innerHTML = AREAS.map(function(area) {
    return '<div class="area-item" onclick="showAreaDetail(\'' + area.id + '\')">'
      + '<div class="area-item-name">' + escHtml(area.name) + '</div>'
      + '<div class="area-item-sub">'  + escHtml(area.sub)  + '</div>'
      + '<div class="area-item-desc">' + escHtml(area.summary.substring(0, 130)) + '…</div>'
      + '<div class="area-item-meta">' + (area.pois ? area.pois.length : 0) + ' points of interest</div>'
      + '</div>';
  }).join('');
}


/* ────────────────────────────────────────────────────
   AREA DETAIL VIEW (POI list)
   ──────────────────────────────────────────────────── */
function showAreaDetail(areaId) {
  var area = (AREAS || []).find(function(a) { return a.id === areaId; });
  if (!area) return;
  _curAreaId = areaId;
  _curPoiId  = null;

  /* Dim destination markers, build map layers */
  _dimAllMarkers();
  _buildAreaLayers(area);

  /* Fly map to area bounds */
  try {
    map.flyToBounds(L.latLngBounds(area.polygon), { padding: [50, 50], duration: 1.2 });
  } catch(e) {
    map.flyTo(area.center, area.zoom || 10, { duration: 1.2 });
  }

  /* Render sidebar */
  _showView('areaDetailView');
  _renderAreaDetailContent(area);

  /* Update polygon toggle button state */
  _updatePolyBtn();
}

function _renderAreaDetailContent(area) {
  var contentEl = document.getElementById('areaDetailContent');
  if (!contentEl) return;

  /* Group POIs by type */
  var groups = {};
  (area.pois || []).forEach(function(poi) {
    if (!groups[poi.type]) groups[poi.type] = [];
    groups[poi.type].push(poi);
  });

  /* Legend row */
  var usedTypes = AREA_TYPE_ORDER.filter(function(t) { return groups[t] && groups[t].length; });
  var legendHtml = '<div class="area-legend">'
    + usedTypes.map(function(t) {
        var cfg = areaPoiType(t);
        return '<span class="area-leg-item">'
          + '<span class="area-leg-dot" style="background:' + cfg.color + '"></span>'
          + cfg.label
          + '</span>';
      }).join('')
    + '</div>';

  /* Section groups */
  var groupsHtml = usedTypes.map(function(type) {
    var cfg  = areaPoiType(type);
    var pois = groups[type];
    var rows = pois.map(function(poi) {
      return '<div class="area-poi-row" onclick="showAreaPOI(\'' + area.id + '\',\'' + poi.id + '\')">'
        + '<span class="area-poi-dot" style="background:' + cfg.color + '"></span>'
        + '<div class="area-poi-info">'
        +   '<div class="area-poi-name">' + escHtml(poi.name) + '</div>'
        +   '<div class="area-poi-sub">'  + escHtml(poi.sub)  + '</div>'
        + '</div>'
        + '<span class="area-poi-arr">→</span>'
        + '</div>';
    }).join('');
    return '<div class="area-type-group">'
      + '<div class="area-type-hd">'
      +   '<span class="area-type-icon">' + cfg.icon + '</span>'
      +   cfg.label
      + '</div>'
      + rows
      + '</div>';
  }).join('');

  contentEl.innerHTML =
      '<div class="area-detail-desc">' + escHtml(area.summary) + '</div>'
    + legendHtml
    + groupsHtml;
}


/* ────────────────────────────────────────────────────
   POI DETAIL VIEW
   ──────────────────────────────────────────────────── */
function showAreaPOI(areaId, poiId) {
  var area = (AREAS || []).find(function(a) { return a.id === areaId; });
  if (!area) return;
  var poi = (area.pois || []).find(function(p) { return p.id === poiId; });
  if (!poi) return;

  _curPoiId = poiId;
  var cfg = areaPoiType(poi.type);

  /* Fly map to POI */
  map.flyTo([poi.lat, poi.lng], 13, { duration: 0.9, easeLinearity: 0.3 });

  /* Briefly animate the marker */
  var m = _areaPoiStore[poiId];
  if (m && m.getElement) {
    var el = m.getElement();
    if (el) {
      el.style.transform = 'scale(1.6)';
      setTimeout(function() { if (el) el.style.transform = ''; }, 500);
    }
  }

  /* Update back label */
  var backLbl = document.getElementById('areaPoiBackLabel');
  if (backLbl) backLbl.textContent = area.name;

  /* Render POI content */
  var highlightsHtml = (poi.highlights || []).map(function(h) {
    return '<li><span class="d-bullet" style="background:' + cfg.color + '"></span><span>' + escHtml(h) + '</span></li>';
  }).join('');

  var tipHtml = poi.tip
    ? '<div class="d-section">Getting there &amp; tips</div>'
      + '<div class="d-tip" style="border-left-color:' + cfg.color + '">'
      + '<div class="d-tip-lbl" style="color:' + cfg.color + '">'  + cfg.label + '</div>'
      + escHtml(poi.tip)
      + '</div>'
    : '';

  var weatherHtml = poi.weather
    ? '<div class="d-wx">☀ Nov–Dec: ' + escHtml(poi.weather) + '</div>'
    : '';

  document.getElementById('areaPoiContent').innerHTML =
      '<div class="d-name" style="color:' + cfg.color + '">' + escHtml(poi.name) + '</div>'
    + '<div class="d-sub">' + escHtml(poi.sub || '') + '</div>'
    + '<span class="d-badge" style="background:' + cfg.bg + ';color:' + cfg.fg + '">'
    +   cfg.icon + ' ' + cfg.label
    + '</span>'
    + '<div class="d-summary">' + escHtml(poi.summary) + '</div>'
    + (highlightsHtml ? '<div class="d-section">Highlights</div><ul class="d-list">' + highlightsHtml + '</ul>' : '')
    + tipHtml
    + weatherHtml;

  _showView('areaPoiView');
}

function backToAreaDetail() {
  if (!_curAreaId) { showAreaList(); return; }
  _curPoiId = null;

  /* Re-fit map to area bounds */
  var area = (AREAS || []).find(function(a) { return a.id === _curAreaId; });
  if (area) {
    try {
      map.flyToBounds(L.latLngBounds(area.polygon), { padding: [50, 50], duration: 1.0 });
    } catch(e) {}
  }

  _showView('areaDetailView');
}


/* ────────────────────────────────────────────────────
   POLYGON TOGGLE
   ──────────────────────────────────────────────────── */
function toggleAreaPolygon() {
  _polyVisible = !_polyVisible;

  var area = _curAreaId
    ? (AREAS || []).find(function(a) { return a.id === _curAreaId; })
    : null;

  _areaPolyLayer.clearLayers();
  if (_polyVisible && area) {
    _addPolygon(area);
  }
  _updatePolyBtn();
}

function _addPolygon(area) {
  L.polygon(area.polygon, {
    color:       area.polygonColor || '#6366F1',
    weight:      2,
    opacity:     0.65,
    fillColor:   area.polygonColor || '#6366F1',
    fillOpacity: 0.07,
    dashArray:   '7 4',
    interactive: false
  }).addTo(_areaPolyLayer);
}

function _updatePolyBtn() {
  var btn = document.getElementById('areaPolyToggleBtn');
  if (!btn) return;
  if (_polyVisible) {
    btn.classList.add('active');
    btn.title = 'Hide area boundary';
    btn.textContent = '⬡ Area';
  } else {
    btn.classList.remove('active');
    btn.title = 'Show area boundary';
    btn.textContent = '⬡ Area';
  }
}


/* ────────────────────────────────────────────────────
   MAP LAYER MANAGEMENT
   ──────────────────────────────────────────────────── */
function _buildAreaLayers(area) {
  _clearAreaLayers();
  _areaPoiStore = {};

  /* Polygon */
  if (_polyVisible) {
    _addPolygon(area);
  }
  _areaPolyLayer.addTo(map);

  /* POI markers */
  (area.pois || []).forEach(function(poi) {
    var cfg  = areaPoiType(poi.type);
    var size = poi.type === 'town' ? 17 : poi.type === 'volcano' ? 16 : 12;
    var icon = L.divIcon({
      className: '',
      html: '<div style="'
          + 'width:' + size + 'px;height:' + size + 'px;border-radius:50%;'
          + 'background:' + cfg.color + ';border:2.5px solid white;'
          + 'box-shadow:0 1px 6px rgba(0,0,0,0.38);cursor:pointer;'
          + 'transition:transform 0.12s;"'
          + ' onmouseenter="this.style.transform=\'scale(1.45)\'"'
          + ' onmouseleave="this.style.transform=\'scale(1)\'"></div>',
      iconSize:   [size, size],
      iconAnchor: [size / 2, size / 2]
    });

    var marker = L.marker([poi.lat, poi.lng], { icon: icon, zIndexOffset: 100 })
      .on('click', (function(aId, pId) {
        return function() { showAreaPOI(aId, pId); };
      })(area.id, poi.id));

    marker.bindTooltip(poi.name, {
      permanent:  false,
      direction:  'top',
      offset:     [0, -size / 2 - 2],
      className:  'area-poi-tooltip'
    });

    _areaMarkerLayer.addLayer(marker);
    _areaPoiStore[poi.id] = marker;
  });

  _areaMarkerLayer.addTo(map);
}

function _clearAreaLayers() {
  _areaPolyLayer.clearLayers();
  _areaMarkerLayer.clearLayers();
  _areaPoiStore = {};
}

function _dimAllMarkers() {
  Object.keys(markerStore).forEach(function(id) {
    markerStore[id].setOpacity(0.05);
    var el = markerStore[id].getElement();
    if (el) el.style.pointerEvents = 'none';
  });
}

function _restoreAllMarkers() {
  if (typeof DESTINATIONS === 'undefined' || typeof markerStore === 'undefined') return;
  var cat = (typeof currentFilter !== 'undefined') ? currentFilter : 'all';

  DESTINATIONS.forEach(function(d) {
    var m = markerStore[d.id];
    if (!m) return;
    var isEvent = d.cat === 'events';
    var visible = isEvent ? (cat === 'events') : (cat === 'all' || d.cat === cat);
    m.setOpacity(isEvent ? (visible ? 1 : 0) : (visible ? 1 : 0.1));
    var el = m.getElement();
    if (el) el.style.pointerEvents = visible ? 'auto' : 'none';
  });
}


/* ────────────────────────────────────────────────────
   INTERNAL VIEW SWITCHER
   ──────────────────────────────────────────────────── */
function _showView(id) {
  ['areaListView', 'areaDetailView', 'areaPoiView'].forEach(function(v) {
    var el = document.getElementById(v);
    if (el) el.style.display = (v === id) ? 'flex' : 'none';
  });
}
