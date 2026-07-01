/* ════════════════════════════════════════════════════
   Chile Trip 2026 — City Detail Layer
   Shows dense POI layers (neighborhoods, metro, culture)
   when the user zooms into a city past its zoomThreshold.

   Globals expected: map, escHtml, CITY_DETAIL_LAYERS,
                     planMode, switchToDestinationsMode,
                     closeAddStop, hidePlanRoute
   ════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────────────
   TYPE CONFIG
   ──────────────────────────────────────────────────── */
var CD_TYPES = {
  neighborhood: { color: '#7C5CBF', bg: '#EEE9FC', fg: '#5B3FA8', label: 'Barrio'    },
  metro:        { color: '#B91C1C', bg: '#FEE2E2', fg: '#991B1B', label: 'Metro'     },
  culture:      { color: '#D97706', bg: '#FEF3C7', fg: '#92400E', label: 'Culture'   },
  park:         { color: '#3D7A2F', bg: '#F0FDF4', fg: '#14532D', label: 'Park'      },
  sight:        { color: '#D97706', bg: '#FEF3C7', fg: '#92400E', label: 'Sight'     },
  market:       { color: '#D97706', bg: '#FEF3C7', fg: '#92400E', label: 'Market'    },
  viewpoint:    { color: '#0369A1', bg: '#E0F2FE', fg: '#075985', label: 'Viewpoint' },
  /* ── Pucón/outdoor region types ─────────────────── */
  hotspring:    { color: '#EA580C', bg: '#FFF7ED', fg: '#9A3412', label: 'Hot Spring' },
  volcano:      { color: '#7F1D1D', bg: '#FEF2F2', fg: '#991B1B', label: 'Volcano'   },
  lake:         { color: '#0E7490', bg: '#ECFEFF', fg: '#155E75', label: 'Lake'      },
  river:        { color: '#0E7490', bg: '#ECFEFF', fg: '#155E75', label: 'River'     },
  forest:       { color: '#3D7A2F', bg: '#F0FDF4', fg: '#14532D', label: 'Forest'    },
  beach:        { color: '#0E7490', bg: '#ECFEFF', fg: '#155E75', label: 'Beach'     },
  waterfall:    { color: '#0E7490', bg: '#ECFEFF', fg: '#155E75', label: 'Waterfall' },
  practical:    { color: '#64748B', bg: '#F1F5F9', fg: '#475569', label: 'Practical' }
};

var CD_METRO_LINE_COLORS = {
  L1: '#E41B17', L2: '#F5BE1A', L3: '#A06620',
  L4: '#004EA1', L4A: '#004EA1', L5: '#009541', L6: '#8B1A84'
};

function cdType(type) {
  return CD_TYPES[type] || CD_TYPES.sight;
}


/* ────────────────────────────────────────────────────
   ICON FACTORIES
   ──────────────────────────────────────────────────── */
function makeCityPoiIcon(poi) {
  var cfg = cdType(poi.type);

  if (poi.type === 'metro') {
    var badgesHtml = (poi.lines || ['M']).map(function(l) {
      var bg = CD_METRO_LINE_COLORS[l] || '#1C3A6A';
      return '<span style="'
        + 'background:' + bg + ';color:white;'
        + 'font-size:8px;font-weight:700;letter-spacing:0.2px;'
        + 'padding:2px 4px;border-radius:3px;'
        + 'border:1.5px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.3);'
        + 'font-family:-apple-system,BlinkMacSystemFont,sans-serif;'
        + '">' + l + '</span>';
    }).join('<span style="width:2px;display:inline-block"></span>');

    var totalW = (poi.lines || ['M']).length * 24;
    return L.divIcon({
      className: '',
      html: '<div style="display:flex;gap:2px;cursor:pointer;align-items:center">' + badgesHtml + '</div>',
      iconSize:   [totalW, 16],
      iconAnchor: [totalW / 2, 8]
    });
  }

  if (poi.type === 'neighborhood') {
    /* Dot-left, label-right: dot is precisely anchored at the coordinate */
    return L.divIcon({
      className: '',
      html: '<div style="display:flex;align-items:center;gap:5px;cursor:pointer;pointer-events:auto">'
          + '<div style="'
          +   'width:13px;height:13px;border-radius:50%;flex-shrink:0;'
          +   'background:' + cfg.color + ';border:2.5px solid white;'
          +   'box-shadow:0 1px 5px rgba(0,0,0,0.35);transition:transform 0.12s;'
          +   '" onmouseenter="this.style.transform=\'scale(1.35)\'" onmouseleave="this.style.transform=\'scale(1)\'"></div>'
          + '<span style="'
          +   'font-size:10px;font-weight:700;white-space:nowrap;'
          +   'color:' + cfg.color + ';pointer-events:none;'
          +   'text-shadow:'
          +     '-1px -1px 0 rgba(255,255,255,0.92),'
          +      '1px -1px 0 rgba(255,255,255,0.92),'
          +     '-1px  1px 0 rgba(255,255,255,0.92),'
          +      '1px  1px 0 rgba(255,255,255,0.92),'
          +      '0 0 5px white,0 0 5px white;'
          +   'font-family:-apple-system,BlinkMacSystemFont,sans-serif;'
          +   '">' + escHtml(poi.name) + '</span>'
          + '</div>',
      iconSize:   [0, 0],
      iconAnchor: [6, 6]    /* centre of the 13px dot */
    });
  }

  /* culture / park / sight / market / viewpoint */
  var sz = 10;
  return L.divIcon({
    className: '',
    html: '<div style="'
        + 'width:' + sz + 'px;height:' + sz + 'px;border-radius:50%;'
        + 'background:' + cfg.color + ';border:2px solid white;'
        + 'box-shadow:0 1px 4px rgba(0,0,0,0.3);cursor:pointer;'
        + 'transition:transform 0.12s;"'
        + ' onmouseenter="this.style.transform=\'scale(1.4)\'" onmouseleave="this.style.transform=\'scale(1)\'"></div>',
    iconSize:   [sz, sz],
    iconAnchor: [sz / 2, sz / 2]
  });
}


/* ────────────────────────────────────────────────────
   LAYER MANAGEMENT
   ──────────────────────────────────────────────────── */
var _cdLayers  = {};          /* cityId → L.layerGroup */
var _cdActive  = {};          /* cityId → bool         */
var _cdPoiMap  = {};          /* poiId  → { poi, city } */

function buildCityDetailLayers() {
  (CITY_DETAIL_LAYERS || []).forEach(function(city) {
    var lg = L.layerGroup();
    _cdLayers[city.id] = lg;
    _cdActive[city.id] = false;

    (city.pois || []).forEach(function(poi) {
      _cdPoiMap[poi.id] = { poi: poi, city: city };

      var marker = L.marker([poi.lat, poi.lng], {
        icon:         makeCityPoiIcon(poi),
        zIndexOffset: poi.type === 'neighborhood' ? 120 : 60
      }).addTo(lg);

      marker.on('click', (function(p) {
        return function() { showCityDetailPoi(p.id); };
      })(poi));
    });
  });

  updateCityDetailVisibility();
}

function updateCityDetailVisibility() {
  var zoom = map.getZoom();
  (CITY_DETAIL_LAYERS || []).forEach(function(city) {
    var show = zoom >= city.zoomThreshold;
    if (show && !_cdActive[city.id]) {
      _cdLayers[city.id].addTo(map);
      _cdActive[city.id] = true;
    } else if (!show && _cdActive[city.id]) {
      _cdLayers[city.id].remove();
      _cdActive[city.id] = false;
    }
  });
}

map.on('zoomend', updateCityDetailVisibility);


/* ────────────────────────────────────────────────────
   SIDEBAR DETAIL VIEW
   ──────────────────────────────────────────────────── */
function showCityDetailPoi(id) {
  var entry = _cdPoiMap[id];
  if (!entry) return;
  var poi = entry.poi;
  var cfg = cdType(poi.type);

  /* If in plan mode, switch sidebar back to destinations tab */
  if (typeof planMode !== 'undefined' && planMode) {
    if (typeof switchToDestinationsMode === 'function') switchToDestinationsMode();
  }

  /* Mobile: ensure sidebar is visible */
  if (typeof isMobile === 'function' && isMobile()) {
    document.querySelector('.app').classList.remove('mobile-map');
    if (typeof closeMobileCard === 'function') closeMobileCard();
  }

  /* currentDetailId = null means fav button is inert for city POIs */
  if (typeof currentDetailId !== 'undefined') currentDetailId = null;

  document.getElementById('destList').style.display = 'none';
  document.getElementById('detailPanel').classList.add('visible');

  /* Hide save button — city POIs aren't favouritable */
  var favBtn = document.getElementById('favBtn');
  if (favBtn) favBtn.style.visibility = 'hidden';

  var highlightsHtml = (poi.highlights || []).map(function(h) {
    return '<li><span class="d-bullet" style="background:' + cfg.color + '"></span><span>' + h + '</span></li>';
  }).join('');

  var metaHtml = '';
  if (poi.type === 'metro' && poi.lines && poi.lines.length) {
    metaHtml = '<div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:12px;">'
      + poi.lines.map(function(l) {
          var bg = CD_METRO_LINE_COLORS[l] || '#1C3A6A';
          return '<span style="padding:3px 9px;border-radius:10px;background:' + bg + ';color:white;'
               + 'font-size:11px;font-weight:600">' + l + '</span>';
        }).join('')
      + '</div>';
  }

  var tipHtml = poi.tip
    ? '<div class="d-section">Tips</div>'
      + '<div class="d-tip" style="border-left-color:' + cfg.color + '">'
      + '<div class="d-tip-lbl" style="color:' + cfg.color + '">' + cfg.label + '</div>'
      + escHtml(poi.tip)
      + '</div>'
    : '';

  document.getElementById('detailContent').innerHTML =
      '<div class="d-name" style="color:' + cfg.color + '">' + escHtml(poi.name) + '</div>'
    + '<div class="d-sub">' + escHtml(poi.sub || '') + '</div>'
    + '<span class="d-badge" style="background:' + cfg.bg + ';color:' + cfg.fg + '">'
    +   cfg.label + (entry.city.city ? ' · ' + escHtml(entry.city.city) : '')
    + '</span>'
    + metaHtml
    + '<div class="d-summary">' + escHtml(poi.summary) + '</div>'
    + (poi.highlights && poi.highlights.length
        ? '<div class="d-section">Highlights</div><ul class="d-list">' + highlightsHtml + '</ul>'
        : '')
    + tipHtml;

  map.flyTo([poi.lat, poi.lng], 15, { duration: 0.8, easeLinearity: 0.3 });
  if (typeof closeFavPanel === 'function' && window.innerWidth <= 780) closeFavPanel();
}


/* ────────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────────── */
buildCityDetailLayers();
