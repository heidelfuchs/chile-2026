// ─── FERRY TERMINALS ─────────────────────────────────────────────────────────
// Used by the map transport layer toggle.
// Fields: id, name, city, lat, lng, operator, routes, crossing, info

var FERRY_TERMINALS = [

  {
    id: 'pmt-navimag',
    name: 'Navimag Ferry Terminal',
    city: 'Puerto Montt',
    lat: -41.4800, lng: -72.9547,
    operator: 'Navimag (navimag.com)',
    routes: 'Puerto Montt → Puerto Natales (southbound, Wed & Sun departures)',
    crossing: '3 days through the Chilean fjords',
    info: '⭐ The iconic Patagonian fjord ferry — a bucket-list voyage through channels and glaciers. Southbound: Wed & Sun from Puerto Montt. Includes meals; cabins range from bunk to ensuite. Book 4–6 weeks ahead for Nov–Dec. No car service on this route.'
  },

  {
    id: 'pmt-chaitén',
    name: 'Ferry Terminal (Chaitén route)',
    city: 'Puerto Montt',
    lat: -41.4780, lng: -72.9520,
    operator: 'Naviera Austral (navieraustral.cl)',
    routes: 'Puerto Montt → Chaitén (northern Carretera Austral access)',
    crossing: '10–12 hours overnight',
    info: 'Overnight car ferry connecting Puerto Montt to Chaitén — the northern gateway to the Carretera Austral. Takes vehicles and foot passengers. Departs several times weekly. Book 2 weeks ahead in summer.'
  },

  {
    id: 'pargua-chacao',
    name: 'Pargua–Chacao Ferry',
    city: 'Pargua (mainland)',
    lat: -41.7897, lng: -72.6667,
    operator: 'Somarco (somarco.com)',
    routes: 'Pargua (mainland) ↔ Chacao (Chiloé) — every 30 minutes, 5am–midnight',
    crossing: '30 minutes',
    info: 'The essential Chiloé connection — runs continuously, no booking needed. Cheap (~CLP$3,000 per car; pedestrians free). Scenically crosses the Canal de Chacao. The ferry marks the boundary between mainland Chile and the Chiloé archipelago.'
  },

  {
    id: 'hornopiren-ferry',
    name: 'Hornopirén Ferry Terminal',
    city: 'Hornopirén',
    lat: -41.9700, lng: -72.4378,
    operator: 'Naviera Austral (navieraustral.cl)',
    routes: 'Hornopirén → Caleta Gonzalo (Pumalín Park) — required for Carretera Austral road trip',
    crossing: '4–5 hours (including stop at Leptepu)',
    info: 'A required link for driving the Carretera Austral from Puerto Montt southward. Takes cars and passengers. The "disconnected" section of the road means you must take this ferry. Book 1–2 weeks ahead in high season — can fill with vehicles.'
  },

  {
    id: 'caleta-gonzalo',
    name: 'Caleta Gonzalo Ferry Terminal',
    city: 'Caleta Gonzalo (Pumalín Park)',
    lat: -42.4833, lng: -72.6333,
    operator: 'Naviera Austral (navieraustral.cl)',
    routes: 'Caleta Gonzalo ↔ Hornopirén (northern Carretera Austral link)',
    crossing: '4–5 hours',
    info: 'Southern terminus of the Hornopirén ferry, set inside the stunning Parque Pumalín. Visitor centre and short hiking trails nearby. Small café at the terminal. Weather can delay service.'
  },

  {
    id: 'queillon-chaiten',
    name: 'Quellón Ferry Terminal',
    city: 'Quellón, southern Chiloé',
    lat: -43.1183, lng: -73.6150,
    operator: 'Naviera Austral (navieraustral.cl)',
    routes: 'Quellón (southern Chiloé) → Chaitén (Carretera Austral)',
    crossing: '4 hours',
    info: 'Alternative gateway from Chiloé directly to the Carretera Austral, bypassing Puerto Montt. Runs 2–3 times weekly. Weather-dependent — services can be cancelled. Great for travellers heading south from Castro without backtracking to Puerto Montt.'
  },

  {
    id: 'puerto-chacabuco',
    name: 'Puerto Chacabuco Ferry Terminal',
    city: 'Puerto Chacabuco',
    lat: -45.4667, lng: -72.8167,
    operator: 'Navimag / Naviera Austral',
    routes: 'Laguna San Rafael glacier cruises; connection point on Navimag fjord route',
    crossing: '2–4 hours to Laguna San Rafael by day-cruise vessel',
    info: 'Embarkation point for Laguna San Rafael glacier cruises — spectacular tidewater glacier accessible only by sea. Also a waypoint on some Navimag routes. Port town of Aysén is 15km away. Book glacier cruises through Coyhaique operators.'
  },

  {
    id: 'caleta-tortel',
    name: 'Caleta Tortel Boat Landing',
    city: 'Caleta Tortel',
    lat: -47.7925, lng: -73.5333,
    operator: 'Local boatmen and Coyhaique operators',
    routes: 'Boat access to the village; day tours on the Baker River delta',
    crossing: 'Road access only via Carretera Austral (no ferry needed)',
    info: 'Unique village of boardwalks where no roads exist — only raised wooden walkways. Boats access riverside sectors and Ventisquero Montt glacier. Arrange trips through Coyhaique agencies. One of the most extraordinary settlements in Patagonia.'
  },

  {
    id: 'pn-navimag',
    name: 'Puerto Natales Ferry Terminal',
    city: 'Puerto Natales',
    lat: -51.7269, lng: -72.5167,
    operator: 'Navimag (navimag.com)',
    routes: 'Puerto Natales → Puerto Montt (northbound); day tours to Balmaceda Glacier',
    crossing: '3–4 days northbound to Puerto Montt',
    info: 'Northern terminus of the legendary Navimag fjord route. Navimag office in town for booking and check-in. Day tours to Balmaceda Glacier and Serrano River leave from the dock. Great base: excellent restaurants and gear shops for Torres del Paine prep.'
  },

  {
    id: 'pa-porvenir',
    name: 'Punta Arenas – Porvenir Ferry',
    city: 'Punta Arenas',
    lat: -53.1630, lng: -70.9130,
    operator: 'Transbordador Austral Broom (tabsa.cl)',
    routes: 'Punta Arenas ↔ Porvenir (Tierra del Fuego)',
    crossing: '2–2.5 hours across the Strait of Magellan',
    info: 'The main crossing to Chilean Tierra del Fuego. Car and passenger ferry. Runs daily except Sundays. Book 1 week ahead in summer. Stunning scenery crossing the Magellan Strait. Onward road to Ushuaia (Argentina) from Porvenir.'
  },

  {
    id: 'pa-puerto-williams',
    name: 'Punta Arenas – Puerto Williams Ferry',
    city: 'Punta Arenas',
    lat: -53.1640, lng: -70.9090,
    operator: 'Transbordador Austral Broom (tabsa.cl)',
    routes: 'Punta Arenas ↔ Puerto Williams (southernmost town on Earth)',
    crossing: '34 hours by cargo-passenger ferry; 2h by DAP plane',
    info: 'Weekly cargo-passenger ferry to Puerto Williams — a slow, beautiful voyage through the Beagle Channel. Most visitors fly with DAP Airlines (45 min) instead. Ferry departs Fridays; check current schedule as it varies. Book weeks ahead for the ferry.'
  },

  {
    id: 'porvenir-terminal',
    name: 'Porvenir Ferry Terminal',
    city: 'Porvenir, Tierra del Fuego',
    lat: -53.2989, lng: -70.3708,
    operator: 'Transbordador Austral Broom (tabsa.cl)',
    routes: 'Porvenir ↔ Punta Arenas; onward road to Ushuaia (~4h drive via Chilean/Argentine Tierra del Fuego)',
    crossing: '2–2.5 hours to Punta Arenas',
    info: 'Small, quiet port in Chilean Tierra del Fuego. Starting point for the overland drive to Ushuaia (Argentina). Limited services in the town itself — stock up in Punta Arenas before crossing.'
  },

  {
    id: 'dalcahue-quinchao',
    name: 'Dalcahue – Isla Quinchao Ferry',
    city: 'Dalcahue, Chiloé',
    lat: -42.3833, lng: -73.6425,
    operator: 'Somarco (somarco.com)',
    routes: 'Dalcahue (Isla Grande) ↔ Curaco de Vélez / Achao (Isla Quinchao)',
    crossing: '15–20 minutes',
    info: 'Short intra-Chiloé island hop. Runs every 30 minutes, very cheap (~CLP$2,000). Achao on Quinchao has a beautiful 18th-century church (UNESCO-listed). Combine with the Dalcahue Sunday market for a perfect Chiloé day.'
  },

  {
    id: 'magdalena-penguins',
    name: 'Magdalena Island Penguin Ferry',
    city: 'Punta Arenas',
    lat: -53.1615, lng: -70.9270,
    operator: 'Comapa (comapa.com) and local tour operators',
    routes: 'Punta Arenas → Isla Magdalena (Magellanic penguin colony)',
    crossing: '2 hours each way; ~4h total excursion',
    info: 'November–December is peak penguin season — 60,000+ Magellanic penguins nest on the island. Day tour only (no overnight). Book through Punta Arenas tour operators or Comapa (cheaper than hotel desks). Bring a windproof jacket — the Magellan Strait is cold and exposed.'
  },

  {
    id: 'pw-cape-horn',
    name: 'Puerto Williams Cape Horn Expeditions',
    city: 'Puerto Williams',
    lat: -54.9317, lng: -67.6144,
    operator: 'SIM Expeditions, Rumbo Sur, Victory Cruises (seasonal)',
    routes: 'Puerto Williams → Cape Horn (southernmost point of South America)',
    crossing: '8–12 hours; multi-day expeditions available',
    info: 'Exclusive sailing/expedition boat trips to Cape Horn from the world\'s southernmost town. Weather-dependent and expensive ($400–1,200+ USD). Book through specialised operators months ahead. The Drake Passage is one of Earth\'s most dramatic ocean crossings. Not a casual excursion.'
  }

];
