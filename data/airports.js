// ─── AIRPORTS ────────────────────────────────────────────────────────────────
// Used by the map transport layer toggle.
// Fields: id, name, iata, city, lat, lng, airlines, info

var AIRPORTS = [

  {
    id: 'scl-santiago',
    name: 'Arturo Merino Benítez International Airport',
    iata: 'SCL',
    city: 'Santiago',
    lat: -33.3928, lng: -70.7858,
    airlines: 'LATAM, Sky, JetSmart, American, Air France, Iberia, Copa, Avianca',
    info: 'Main international hub, 20km west of city centre. T1 domestic, T2 international. Centropuerto express bus to city ~CLP$2,500 (40 min); taxi ~CLP$18,000.'
  },

  {
    id: 'pmc-puerto-montt',
    name: 'El Tepual International Airport',
    iata: 'PMC',
    city: 'Puerto Montt',
    lat: -41.4387, lng: -72.9364,
    airlines: 'LATAM, Sky, JetSmart',
    info: 'Gateway to the Lake District and Patagonia, 16km west of city. Taxi to centre ~CLP$20,000–25,000. Essential hub for northern Patagonia and Chiloé routes.'
  },

  {
    id: 'mhc-castro',
    name: 'Mocopulli Airport',
    iata: 'MHC',
    city: 'Castro, Chiloé',
    lat: -42.2794, lng: -73.8667,
    airlines: 'LATAM, Sky (limited)',
    info: 'Small regional airport 5km south of Castro. Limited daily flights. Most travellers fly into Puerto Montt and take the 90-min bus + Pargua ferry to Chiloé instead.'
  },

  {
    id: 'lsc-la-serena',
    name: 'La Florida Airport',
    iata: 'LSC',
    city: 'La Serena',
    lat: -29.9079, lng: -71.1961,
    airlines: 'LATAM, Sky',
    info: 'Serves Coquimbo Region and Elqui Valley. 10km east of city. Taxi ~CLP$15,000. Alternatively: 5–6h Turbus from Santiago along the Panamericana.'
  },

  {
    id: 'zco-temuco',
    name: 'La Araucanía Airport',
    iata: 'ZCO',
    city: 'Temuco',
    lat: -38.7651, lng: -72.6370,
    airlines: 'LATAM, Sky, JetSmart',
    info: 'Gateway to Araucanía and the Lake District, 6km south of city. Taxi ~CLP$12,000–15,000. Good connections to Pucón and Villarrica by bus from the city.'
  },

  {
    id: 'zdl-valdivia',
    name: 'Pichoy Airport',
    iata: 'ZAL',
    city: 'Valdivia',
    lat: -39.6500, lng: -73.0861,
    airlines: 'LATAM, Sky',
    info: 'Small regional airport 30km north of the city. Limited flights; bus connections via Puerto Montt/Temuco are often more practical. Taxi/shuttle ~CLP$18,000.'
  },

  {
    id: 'bba-coyhaique',
    name: 'Balmaceda Airport',
    iata: 'BBA',
    city: 'Coyhaique',
    lat: -45.9161, lng: -71.6895,
    airlines: 'LATAM, Sky',
    info: 'Gateway to the Carretera Austral and northern Patagonia, 55km from Coyhaique. Airport shuttle to city essential (~CLP$8,000). Flying here saves the brutal 18h bus from Puerto Montt.'
  },

  {
    id: 'puq-punta-arenas',
    name: 'Presidente Carlos Ibáñez del Campo International Airport',
    iata: 'PUQ',
    city: 'Punta Arenas',
    lat: -53.0019, lng: -70.8046,
    airlines: 'LATAM, Sky, JetSmart',
    info: 'Southern Patagonia hub, 24km north of city. Taxi ~CLP$28,000. Strong winds can cause delays — build in flexibility. Gateway to Torres del Paine and Tierra del Fuego.'
  },

  {
    id: 'wpu-puerto-williams',
    name: 'Guardiamarina Zañartu Airport',
    iata: 'WPU',
    city: 'Puerto Williams',
    lat: -54.9311, lng: -67.6261,
    airlines: 'LATAM (seasonal)',
    info: 'Southernmost commercial airport in the world. Very limited, weather-dependent service from Punta Arenas. Most travellers use the ferry from Punta Arenas instead.'
  },

  {
    id: 'ipc-easter-island',
    name: 'Mataveri International Airport',
    iata: 'IPC',
    city: 'Easter Island (Rapa Nui)',
    lat: -27.1648, lng: -109.4219,
    airlines: 'LATAM (via Santiago or Lima)',
    info: 'Only access point to Rapa Nui — no ferry service. Single terminal, 3km from Hanga Roa. LATAM flies daily from Santiago (~5h). Book well ahead; flights fill Nov–Jan.'
  },

  {
    id: 'cjc-calama',
    name: 'El Loa International Airport',
    iata: 'CJC',
    city: 'Calama',
    lat: -22.4981, lng: -68.9036,
    airlines: 'LATAM, Sky, JetSmart',
    info: 'Primary gateway to San Pedro de Atacama (103km, ~1.5h bus or shuttle). Frequent connections from Santiago. Many tour operators run direct shuttles to San Pedro from the arrivals hall.'
  },

  {
    id: 'anf-antofagasta',
    name: 'Andrés Sabella Gálvez International Airport',
    iata: 'ANF',
    city: 'Antofagasta',
    lat: -23.4444, lng: -70.4450,
    airlines: 'LATAM, Sky, JetSmart',
    info: 'Major northern hub and Atacama alternative access point. 26km north of city. Taxi ~CLP$20,000. Alternative to Calama for reaching San Pedro de Atacama via Calama road.'
  },

  {
    id: 'iqu-iquique',
    name: 'Diego Aracena International Airport',
    iata: 'IQQ',
    city: 'Iquique',
    lat: -20.5349, lng: -70.1929,
    airlines: 'LATAM, Sky, JetSmart',
    info: 'Far northern Chile hub. 40km south of city. Gateway to Norte Grande desert and border routes with Peru and Bolivia. Taxi ~CLP$22,000.'
  },

  {
    id: 'ccp-concepcion',
    name: 'Carriel Sur International Airport',
    iata: 'CCP',
    city: 'Concepción',
    lat: -36.7735, lng: -73.0631,
    airlines: 'LATAM, Sky, JetSmart',
    info: 'Central Chile hub 15km north of city. Useful for Itata Valley wine country and Biobío region access. Taxi ~CLP$15,000. Good alternative to the long Santiago–south bus.'
  },

  {
    id: 'cpo-copiapo',
    name: 'Chamonate Airport',
    iata: 'CPO',
    city: 'Copiapó',
    lat: -27.3017, lng: -70.7722,
    airlines: 'LATAM, Sky',
    info: 'Gateway to northern Atacama Desert and Atacama National Park. 15km west of city. Connects to San Pedro de Atacama region via Panamericana road.'
  }

];
