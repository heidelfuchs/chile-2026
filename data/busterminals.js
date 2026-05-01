// ─── BUS TERMINALS ───────────────────────────────────────────────────────────
// Used by the map transport layer toggle.
// Fields: id, name, city, lat, lng, operators, routes, info

var BUS_TERMINALS = [

  {
    id: 'stgo-alameda',
    name: 'Terminal de Buses Alameda',
    city: 'Santiago',
    lat: -33.4507, lng: -70.6698,
    operators: 'Turbus, Pullman, Tur Bus, Expreso del Sur',
    routes: 'Valparaíso (1.5h), Concepción (5h), Puerto Montt (12h), Temuco (9h)',
    info: 'Santiago\'s main long-distance terminal on Av. Alameda. Southbound hub. Arrive 30–45 min early. Good facilities; slightly chaotic in high season. Adjacent to Universidad de Santiago metro.'
  },

  {
    id: 'stgo-san-borja',
    name: 'Terminal San Borja',
    city: 'Santiago',
    lat: -33.4508, lng: -70.6784,
    operators: 'Tas-Choapa, Pullman Bus Norte, Romani, Turbus (some)',
    routes: 'La Serena (5h), Antofagasta (18h), Calama (20h), Vicuña/Elqui Valley',
    info: 'Secondary central terminal, northbound specialist. Quieter than Alameda. Essential for reaching Elqui Valley (Vicuña) and the Atacama. Walking distance from Estación Central metro.'
  },

  {
    id: 'stgo-los-heroes',
    name: 'Terminal Los Héroes',
    city: 'Santiago',
    lat: -33.4449, lng: -70.6750,
    operators: 'Pullman, Turbus, Tur Bus, international operators',
    routes: 'Valparaíso (1.5h), Viña del Mar, central Chile, Mendoza AR',
    info: 'Historic central terminal close to Los Héroes metro. Good for coastal and cross-Andes routes to Mendoza. Underground metro access. Not as comprehensive as Alameda for southern routes.'
  },

  {
    id: 'stgo-pajaritos',
    name: 'Terminal Pajaritos',
    city: 'Santiago',
    lat: -33.4817, lng: -70.7506,
    operators: 'Pullman Sur, Andimar, regional Patagonia operators',
    routes: 'Southern long-distance and Patagonia-bound connections',
    info: 'Western terminal, less central but less crowded. Some Patagonia bus companies depart from here. 20min by metro (Line 1, Pajaritos station). Modern facilities.'
  },

  {
    id: 'valpo-main',
    name: 'Terminal de Buses Valparaíso',
    city: 'Valparaíso',
    lat: -33.0454, lng: -71.6281,
    operators: 'Turbus, Pullman, Tur Bus, Condor',
    routes: 'Santiago (1.5h), Viña del Mar (20min), La Serena (4h), Concepción',
    info: 'Central terminal in the port city. Frequent Santiago shuttles — no need to book days ahead for this route. Multi-storey building with good facilities near the city centre.'
  },

  {
    id: 'pmt-main',
    name: 'Terminal de Buses Puerto Montt',
    city: 'Puerto Montt',
    lat: -41.4692, lng: -72.9442,
    operators: 'Turbus, Pullman, Cruz del Sur, Tur Bus',
    routes: 'Temuco (5h), Valdivia (3h), Osorno (2h), Castro/Chiloé (2h+ferry), Coyhaique (18h)',
    info: 'Major Lake District and northern Patagonia hub. Book ahead for Chiloé and southbound routes in Nov–Dec high season. Ferry terminal for Navimag nearby. International buses to Bariloche (AR).'
  },

  {
    id: 'castro-main',
    name: 'Terminal de Buses Castro',
    city: 'Castro, Chiloé',
    lat: -42.4792, lng: -73.7619,
    operators: 'Turbus, Cruz del Sur, local Chiloé operators',
    routes: 'Puerto Montt (2h + ferry), Ancud (1h), Quellón (2.5h), Dalcahue (30min)',
    info: 'Main terminal on Chiloé Island. Frequent connections to Puerto Montt (includes Pargua–Chacao ferry). Small terminal; closes early evening. Book inter-island routes at the terminal kiosks.'
  },

  {
    id: 'temuco-main',
    name: 'Terminal de Buses Temuco',
    city: 'Temuco',
    lat: -38.7356, lng: -72.5933,
    operators: 'Turbus, Pullman, Tur Bus, Cruz del Sur, Buses JAC',
    routes: 'Santiago (9h), Puerto Montt (5h), Pucón (2h), Villarrica (2.5h), Valdivia',
    info: 'Major Araucanía gateway. Well-organised terminal with good food court. Reliable overnight Turbus to Santiago. Hub for Lake District adventure towns (Pucón, Villarrica) by regional bus.'
  },

  {
    id: 'pucon-main',
    name: 'Terminal de Buses Pucón',
    city: 'Pucón',
    lat: -39.2720, lng: -71.9785,
    operators: 'Turbus, Pullman, Buses JAC, Tur Bus',
    routes: 'Temuco (2h), Villarrica (1h), Santiago (10h), Puerto Montt (5h)',
    info: 'Small but busy adventure-town terminal. Book a day ahead in high season (Nov–Dec). Most activity operators are within walking distance. Good base for Villarrica volcano, rafting and hot springs.'
  },

  {
    id: 'villarrica-main',
    name: 'Terminal de Buses Villarrica',
    city: 'Villarrica',
    lat: -39.2833, lng: -72.2333,
    operators: 'Local operators, Buses JAC, some Turbus',
    routes: 'Pucón (30min), Temuco (2h), some direct to Puerto Montt',
    info: 'Small terminal in the lakeside town. Fewer long-distance connections than Pucón or Temuco — use those for main routes. Easy 30-min shuttle to Pucón.'
  },

  {
    id: 'valdivia-main',
    name: 'Terminal de Buses Valdivia',
    city: 'Valdivia',
    lat: -39.8160, lng: -73.2451,
    operators: 'Turbus, Pullman, Cruz del Sur',
    routes: 'Puerto Montt (3h), Temuco (2.5h), Osorno (1.5h), Santiago (11h)',
    info: 'Southern Lake District hub in a charming river city. Smaller terminal; manageable and easy to navigate. Good connections to the national parks. Famous for German-influenced craft beer scene nearby.'
  },

  {
    id: 'osorno-main',
    name: 'Terminal de Buses Osorno',
    city: 'Osorno',
    lat: -40.5722, lng: -73.1361,
    operators: 'Turbus, Pullman, regional operators',
    routes: 'Puerto Montt (2h), Valdivia (1.5h), Temuco (3h), Bariloche AR (4h)',
    info: 'Mid-size Lake District hub. Useful for Puyehue National Park. Cross-border buses to Bariloche (Argentina) depart from here — a popular excursion for the group.'
  },

  {
    id: 'coyhaique-main',
    name: 'Terminal de Buses Coyhaique',
    city: 'Coyhaique',
    lat: -45.5710, lng: -72.0658,
    operators: 'Turbus, Transportes Carretera Austral, Buses Don Carlos',
    routes: 'Puerto Montt (18h by road+ferry), Balmaceda airport, local Carretera Austral routes',
    info: 'Essential Carretera Austral hub. Limited long-distance options — many travellers fly in/out via Balmaceda. Bus companies can arrange Carretera Austral sector transfers. Book well in advance.'
  },

  {
    id: 'punta-arenas-main',
    name: 'Terminal de Buses Punta Arenas',
    city: 'Punta Arenas',
    lat: -53.1614, lng: -70.9234,
    operators: 'Turbus, Buses Pacheco, Bus Sur, Tur Bus',
    routes: 'Puerto Natales (5h), Río Gallegos AR (6h), connecting to Buenos Aires',
    info: 'Southern Patagonia hub. Gateway to Torres del Paine (5h bus to Puerto Natales, then 2.5h to park). International buses to Argentina (Río Gallegos, Buenos Aires). Small terminal; friendly staff.'
  },

  {
    id: 'puerto-natales-main',
    name: 'Terminal de Buses Puerto Natales',
    city: 'Puerto Natales',
    lat: -51.7199, lng: -72.5061,
    operators: 'Turbus, Bus Sur, local operators, park shuttle operators',
    routes: 'Punta Arenas (5h), Torres del Paine park (3h shuttle), Río Turbio AR',
    info: 'Torres del Paine gateway town. Multiple operators run daily shuttles to Torres del Paine (book directly with operators in town). Navimag ferry terminal nearby. Small and very walkable.'
  },

  {
    id: 'la-serena-main',
    name: 'Terminal de Buses La Serena',
    city: 'La Serena',
    lat: -29.9020, lng: -71.2534,
    operators: 'Turbus, Pullman, Tur Bus, Romani',
    routes: 'Santiago (5h), Antofagasta (6h), Vicuña/Elqui Valley (1.5h), Coquimbo (20min)',
    info: 'Norte Chico and Elqui Valley hub. Modern, well-organised terminal. Easy to catch shared taxis (colectivos) to Vicuña and the Elqui Valley from here. Good connections north and south.'
  },

  {
    id: 'calama-main',
    name: 'Terminal de Buses Calama',
    city: 'Calama',
    lat: -22.4631, lng: -68.9281,
    operators: 'Turbus, Pullman, Tur Bus, Buses Frontera',
    routes: 'San Pedro de Atacama (2h), Santiago (21h), Antofagasta (3h), Iquique (5h)',
    info: 'San Pedro de Atacama gateway. Shared shuttle vans to San Pedro leave from outside the terminal every hour (~CLP$3,000, 1.5h). Book Atacama tours through operators at the terminal or in San Pedro.'
  },

  {
    id: 'antofagasta-main',
    name: 'Terminal de Buses Antofagasta',
    city: 'Antofagasta',
    lat: -23.6504, lng: -70.4000,
    operators: 'Turbus, Pullman, Tur Bus, Atacama Bus',
    routes: 'Santiago (18h), La Serena (7h), Calama (3h), Iquique (4h)',
    info: 'Major northern hub. Reliable overnight buses to Santiago. Good Atacama access via Calama. Modern facilities with restaurants.'
  },

  {
    id: 'chillan-main',
    name: 'Terminal de Buses Chillán',
    city: 'Chillán',
    lat: -36.6010, lng: -72.1010,
    operators: 'Turbus, Pullman, Tur Bus',
    routes: 'Santiago (5h), Concepción (1.5h), Temuco (4h)',
    info: 'Central-south hub in the gateway city to the Maule and Itata wine regions. Modern terminal. Good connections for wine country day trips. Chillán market (a block away) is excellent for local food.'
  },

  {
    id: 'ancud-main',
    name: 'Terminal de Buses Ancud',
    city: 'Ancud, Chiloé',
    lat: -41.8700, lng: -73.8333,
    operators: 'Cruz del Sur, local Chiloé operators',
    routes: 'Castro (1h), Puerto Montt (2h + ferry), Quellón',
    info: 'Northern Chiloé\'s main town terminal. First stop after the Chacao ferry from the mainland. Small and relaxed. Ancud has a good seafood market and penguín colony boat trips nearby.'
  }

];
