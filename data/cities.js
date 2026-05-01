// ─── CITIES & TOWNS ──────────────────────────────────────────────────────────
// All major and semi-major Chilean cities/towns — North to South.
// Includes entries moved from family.js (santiago, villarrica, chiloe)
// and wine.js (valpo), plus ~19 researched additional cities.

DESTINATIONS.push(

  // ── Far North ────────────────────────────────────────────────────────────

  {
    id: 'arica',
    name: 'Arica',
    cat: 'cities',
    sub: 'Arica y Parinacota · Northernmost city, Andes meets Pacific',
    lat: -18.4746, lng: -70.2979,
    summary: "Chile's northernmost city sits 18km from the Peruvian border with dazzling desert light. The Morro de Arica clifftop fortress watches over a port city where Peruvian border culture blends with Chilean identity. The green Azapa Valley cuts through the Atacama just inland, where pre-Columbian archaeology and impossible irrigated agriculture thrive in the world's driest inhabited place.",
    highlights: [
      'Morro de Arica (139m cliff fortress) — 360° views of city, port and coastline; War of the Pacific museum at the summit',
      'Chinchorro Mummies (Museum of San Miguel de Azapa, 12km) — 7,000-year-old preserved bodies, older than Egyptian mummies',
      'Azapa Valley — pre-Columbian burial sites, pottery workshops, colonial cemetery; drive 12km south',
      'Lauca National Park (60km NE) — flamingos at 4,520m altiplano lake surrounded by volcanoes; acclimatisation required',
      'Pica oasis (200km SE) — natural thermal pools (Cocha Resbaladora), aguardiente distilleries and Peruvian food',
      'Puerto Viejo waterfront — colonial streets, fishing boats, fresh ceviche and shellfish broth',
      'Crafts markets near Plaza Colón — hand-woven textiles, copper work, Peruvian-influenced goods'
    ],
    tip: 'Fly into Arica International (ARI). November sits at 25–28°C with virtually zero rain — ideal for exploration. Take altitude medication if heading to Lauca (4,520m). Lauca and Pica require 4WD or booked tours from Arica.',
    weather: 'Nov–Dec: 25–28°C days, 15–18°C nights. Virtually no rain. Intense UV — sunscreen essential. Ocean breezes cool the waterfront afternoons.'
  },

  {
    id: 'iquique',
    name: 'Iquique',
    cat: 'cities',
    sub: 'Tarapacá · Cliff-top city, duty-free zone, kitesurfing capital',
    lat: -20.2735, lng: -70.1520,
    summary: "Perched on a 40m cliff above the Pacific, Iquique is a paradox: a duty-free shopping mecca built on nitrate-boom wealth, a world-class kitesurfing playground, and a surprisingly cultured city with well-restored Victorian theatres and mansions. The ZOFRI duty-free zone draws shoppers from across Chile; the sea wind draws kitesurfers from around the world.",
    highlights: [
      'ZOFRI duty-free zone — 240-hectare mall, 600+ stores for perfume, electronics and liquor (bring passport)',
      'Barrio Histórico — restored Victorian mansions from the nitrate boom; Teatro Municipal (1890); Plaza Prat',
      'Humberstone & Santa Laura (70km SE) — UNESCO ghost towns of 1920s–30s saltpeter works; eerie and unmissable',
      'Cavancha Beach — cliff-backed beach world-class for kitesurfing and windsurfing (water 18–20°C)',
      'Museo Corbeta Esmeralda — retired warship open for Naval War of the Pacific tours',
      'Pica (150km inland) — oasis with thermal pools, distilleries and Peruvian food; day trip or overnight',
      'Pisco tasting tours — nearby distilleries producing some of the finest Chilean pisco'
    ],
    tip: 'Fly into Diego Aracena (IQT, 35km south). ZOFRI requires passport registration. November–early December has optimal kite conditions; wind is constant — bring a windbreaker. Restaurants cluster near Plaza Prat and the waterfront.',
    weather: 'Nov–Dec: 22–25°C days, 14–18°C nights. Wind averages 15–25 km/h. Almost zero rain. 300+ clear days per year.'
  },

  {
    id: 'calama',
    name: 'Calama',
    cat: 'cities',
    sub: 'Antofagasta · Mining town and gateway to San Pedro de Atacama',
    lat: -22.4532, lng: -68.9253,
    summary: "Calama is the functional mining hub that most travellers pass through on their way to San Pedro de Atacama, 100km east. The city itself is serviceable rather than scenic, but it's the gateway to one of Earth's most extraordinary landscapes — the Atacama Desert, its salt flats, geysers and flamingo lagoons.",
    highlights: [
      'San Pedro de Atacama (100km east) — the Atacama's spiritual heart; Valle de la Luna, El Tatio geysers, Salar de Atacama',
      'El Tatio Geyser Field (4,300m) — 80+ geysers steaming at dawn; accessible by tour from San Pedro',
      'Salar de Atacama — vast white salt expanse with flamingo lagoons and surreal mirror reflections',
      'Laguna Cejar — salt lagoon where it's impossible to sink, surrounded by desert',
      'Valley of the Moon — multi-coloured rock formations and otherworldly sunset hikes',
      'Los Flamencos National Park — James, Andean and Chilean flamingo colonies at multiple lagoons',
      'Atacama Archaeological Museum (San Pedro) — excellent pre-Hispanic artifact collection'
    ],
    tip: 'Fly into El Loa (CJC). Shared shuttle vans to San Pedro run every hour from outside the terminal (~1.5h). Book all Atacama desert tours from San Pedro, not Calama. San Pedro sits at 2,410m — arrive early to acclimatise. Stock up on water and snacks in Calama.',
    weather: 'Nov–Dec: 28–32°C days, 10–15°C nights. Zero rain. Intense high-altitude UV. San Pedro runs 8–10°C cooler. 300+ clear nights per year — outstanding stargazing.'
  },

  {
    id: 'antofagasta',
    name: 'Antofagasta',
    cat: 'cities',
    sub: 'Antofagasta · Mining capital, La Portada sea arch, ghost towns',
    lat: -23.6500, lng: -70.4000,
    summary: "Chile's copper capital sprawls along the desert coast — industrial and modern in character but with impressive natural highlights nearby. La Portada, a spectacular 40–50m sea arch rising from the Pacific, is 18km north. Inland ghost towns like Chacabuco offer haunting windows into the nitrate boom's decline.",
    highlights: [
      'La Portada sea arch (18km north) — iconic 40–50m rock arch jutting from cliffs; perfect for sunset photography',
      'Chacabuco ghost town (70km north) — 1924 nitrate town abandoned since the 1930s; workers\' housing, theatre and church frozen in time',
      'Humberstone & Santa Laura (UNESCO, near Iquique) — two refineries frozen in the 1920s–30s; also accessible from Antofagasta on a longer day trip',
      'Juan López Beach — northernmost swimming beach; rocky coves; less crowded',
      'Antofagasta Regional Museum — nitrate history, pre-Hispanic textiles, colonial artefacts',
      'Pier Memorial — historic port structure with seafood restaurants and harbour views',
      'Waterfront promenade — restored colonial quarter facing the bay'
    ],
    tip: 'Fly into Andrés Bello (ANF, 24km south). La Portada is a 2-hour morning excursion by car or tour. Ghost town visits work best as full-day tours combined with Iquique. November is perfect for coastal exploration (26–29°C, ocean breeze).',
    weather: 'Nov–Dec: 26–29°C days, 16–20°C nights. Ocean breeze keeps afternoons pleasant. Almost no rain. Water temp 18–19°C (cold for swimming).'
  },

  // ── Norte Chico ──────────────────────────────────────────────────────────

  {
    id: 'la-serena',
    name: 'La Serena',
    cat: 'cities',
    sub: 'Coquimbo · Colonial "City of Belfries", beaches, Elqui Valley gateway',
    lat: -29.9027, lng: -71.3525,
    summary: "Chile's oldest city (founded 1544) is its most architecturally distinguished north of Santiago — over 30 distinctive churches with bell towers earned it the nickname 'City of the Belfries'. The carmine-on-white historic quarter is wonderfully walkable, 12 beaches line Avenida del Mar, and the renowned Elqui Valley — home to pisco distilleries and spiritual retreats — begins just 55km east.",
    highlights: [
      'Catedral Metropolitana (1856) — neo-classical masterpiece on the Plaza de Armas',
      'Walking tour of 30+ colonial churches — combined Barrio Histórico circuit is 2–3 hours',
      'Avenida del Mar beaches — 12 named beaches; Playa Mansa is calmest, Brava has waves; promenade with restaurants',
      'Elqui Valley pisco distilleries (55km east) — Pisco Capel, Pisco Control; tasting rooms with vineyard restaurants',
      'Montegrande (Elqui) — spiritual retreat town; yoga, meditation and alternative therapies',
      'Mercado Central — fresh produce, fish, local foods, Peruvian-Chilean fusion cuisine',
      'Clear skies for stargazing — the valley has 300+ clear nights per year'
    ],
    tip: 'Fly into La Florida (LSC, 11km south). Historic quarter is easily walkable. Elqui Valley day trips are simple — book with operators in the historic centre. Beach water temp 19–21°C in November. Pisco tastings are best booked ahead on weekends.',
    weather: 'Nov–Dec: 23–30°C days, 13–18°C nights. Spring warmth building into summer. Almost no rain. Ocean breeze moderates afternoon heat.'
  },

  // ── Central Chile ─────────────────────────────────────────────────────────

  {
    id: 'vina-del-mar',
    name: 'Viña del Mar',
    cat: 'cities',
    sub: 'Valparaíso Region · Garden City, beach resort, Casino, Casablanca Valley',
    lat: -33.0327, lng: -71.5527,
    summary: "Viña del Mar earned its nickname 'Garden City' through manicured parks and Victorian architecture. It's a polished beach resort — quieter and wealthier than its older sister Valparaíso — with the famous 1930 Casino, a long seaside promenade and easy access to Casablanca Valley wineries. A natural complement to a Valparaíso stay.",
    highlights: [
      'Viña del Mar Casino (1930) — art deco palace with fine dining, shows and gaming (jacket required, bring passport)',
      'Reñaca Beach and promenade — upscale beach with clubs, restaurants and surfing',
      'Quinta Vergara — botanical garden with 8,000+ species; concerts venue; peaceful inland escape',
      'Casablanca Valley wine tour (30km east) — Casas del Bosque, Santa Rita; tasting rooms with restaurants',
      'Caleta Abarca — sheltered cove perfect for swimming; seafood promenade',
      'Avda del Mar seaside walk — 1.5km with sculpture gardens, restaurants and beach access',
      'Day trip to Valparaíso (30 min) — combine both cities in one coastal day'
    ],
    tip: '1.5h from Santiago. Frequent metro connects Viña and Valparaíso. Casino requires passport and dress code (jacket for men). Casablanca Valley best visited on organised day tours or with car rental. Water temp 17–19°C — wetsuit helpful for extended swimming.',
    weather: 'Nov–Dec: 22–28°C days, 12–17°C nights. Mediterranean feel with ocean breeze and occasional November rain.'
  },

  {
    id: 'santiago',
    name: 'Santiago',
    cat: 'cities',
    sub: 'Metropolitan Region · Capital city and trip hub',
    lat: -33.4489, lng: -70.6693,
    summary: "Chile's cosmopolitan capital spreads across a wide Andean valley framed by snowcapped peaks. Walkable, culturally rich and full of excellent food — it's the main logistical hub for the whole trip and worth at least two or three days in its own right.",
    highlights: [
      'Cerro San Cristóbal — sweeping Andes panorama and cable car to the hilltop',
      'Sky Costanera — tallest observation deck in South America (300m)',
      'Mercado Central — the city\'s legendary fresh seafood hall',
      'Barrio Lastarria & Bellavista — art, craft beer, restaurants and nightlife',
      'Museum of Memory & Human Rights — deeply moving, unmissable',
      'Museo de Arte Precolombino — world-class pre-Columbian collection',
      'La Chascona — Pablo Neruda\'s eccentric Santiago home, now a museum',
      'Plaza de Armas & Cerro Santa Lucía — the city\'s 1541 founding site',
      'December: Santiago a Mil Theatre Festival and Christmas markets'
    ],
    tip: 'Perfect base to start and end the trip. Direct domestic flights to Atacama, Punta Arenas and Puerto Montt. The metro is clean, reliable and cheap.',
    weather: 'Nov: 22°C pleasant spring / Dec: 28°C dry summer.'
  },

  {
    id: 'valpo',
    name: 'Valparaíso',
    cat: 'cities',
    sub: 'Valparaíso Region · UNESCO World Heritage port city',
    lat: -33.0472, lng: -71.6127,
    summary: "Chile's most creative city clings to 42 steep hills above the Pacific in a blaze of street art, colonial architecture and bohemian energy. The best food scene outside Santiago — and world-class Casablanca Valley wines just 40 minutes away.",
    highlights: [
      'Cerro Alegre & Concepción — rainbow staircases and world-famous street murals',
      'La Sebastiana — Neruda\'s eccentric sea-view house museum',
      'Caleta Portales fish market from 7am — the city\'s best ceviche',
      'Casablanca Valley wine day trip just 40km inland',
      '42 hills connected by 15 surviving historic funicular ascensores',
      'Chorrillana, conger eel stew, ceviche and empanadas de mariscos',
      'Craft beer and cocktail scene: Cervecería Anfiteatro, Cumming Street bars'
    ],
    tip: 'Stay overnight — the illuminated hillside views at dusk are unforgettable. 1.5h from Santiago by Turbus or Pullman bus.',
    weather: 'Nov–Dec: sunny coastal spring/summer, 22–28°C.'
  },

  {
    id: 'rancagua',
    name: 'Rancagua',
    cat: 'cities',
    sub: "O'Higgins Region · Colchagua wine capital, hot springs, independence history",
    lat: -34.1701, lng: -70.7406,
    summary: "Capital of O'Higgins Region and the practical gateway to Colchagua Valley's world-class wineries. The city is functional with modest charm, but it anchors access to some of Chile's finest red wine estates and the historic Cauquenes Hot Springs. Site of the pivotal 1814 Battle of Rancagua during Chilean independence.",
    highlights: [
      'Colchagua Valley wine route (30–60km east) — Montes, Santa Rita, Lapostolle, Viu Manent; tasting rooms and restaurants',
      'Cauquenes Hot Springs (19km east) — oldest thermal centre in Chile; 19th-century wooden pavilions; outdoor pools and spa',
      'Plaza de los Héroes — colonial square with O\'Higgins statue; nearby museums',
      'Colchagua Museum (Santa Cruz, 40km south) — exceptional pre-Hispanic textiles and Huaso culture artefacts',
      'Wine Route lodges — many wineries offer fine dining with vineyard views; Carménère and Cabernet dominate',
      'Mariposa Reserve (Colchagua) — butterfly sanctuary, gardens and birdwatching'
    ],
    tip: '1h drive south of Santiago on the Pan-American Highway. Wine valley spreads 60km — book tours or hire a driver for the day. Most travellers base in the Santa Cruz wine area rather than Rancagua itself. Cauquenes Hot Springs is a lovely afternoon post-wine visit.',
    weather: 'Nov–Dec: 25–32°C days, 10–15°C nights. Spring warmth building. Occasional late-November rains. Ideal for wine touring.'
  },

  {
    id: 'talca',
    name: 'Talca',
    cat: 'cities',
    sub: 'Maule Region · Wine capital, earthquake heritage, Vilches Alto gateway',
    lat: -35.4359, lng: -71.6673,
    summary: "Talca is Maule Region's capital and the heart of Chile's largest wine-producing area (45% of national output). The 2010 earthquake devastated the centre but recovery revealed renewed focus on heritage and wine culture. A practical base for the Maule Valley's wineries and the mountain gateway of Vilches Alto.",
    highlights: [
      'Maule Valley wineries (Gillmore, Viu Manent, Hacienda López) — full-day tours; tasting rooms and lodging available',
      'Vilches Alto (70km east) — mountain refuge at 1,500m; treks to Laguna del Alto, waterfall hikes, Andean atmosphere',
      'Cathedral and Plaza de Armas — rebuilt post-2010; neo-classical architecture',
      'Descabezado Grande Volcano area — accessible from Vilches; volcanic landscapes and remote trekking',
      'Maule Museum — wine history, regional archaeology, pre-Hispanic artefacts',
      'Talca Central Market — fresh produce, local foods and artisanal goods'
    ],
    tip: '255km south of Santiago (3–4h drive or direct bus). Rent a car for the wine valley — it spreads over 80km and day tours are essential. Vilches Alto is a cool mountain retreat but runs 10–15°C cooler than the valley. Book wine tours in advance for weekends.',
    weather: 'Nov–Dec: 24–31°C days, 10–15°C nights. Spring warmth. Occasional November rain. Vilches Alto at 1,500m is much cooler.'
  },

  {
    id: 'concepcion',
    name: 'Concepción',
    cat: 'cities',
    sub: "Biobío · Chile's second city, university hub, river city, cultural heart",
    lat: -36.8270, lng: -73.0498,
    summary: "Chile's second-largest city and intellectual capital — home to three major universities that drive a vibrant culture, music scene and creative energy. Perched on the Biobío River, Concepción suffered severe 2010 earthquake damage but re-emerged with revitalised cultural districts. Less touristy than Santiago but richer in local character.",
    highlights: [
      'Universidad de Concepción campus — beautiful grounds with museums, galleries and university history museum',
      'Biobío River waterfront — restored promenade with parks and restaurants; evening strolls',
      'Barrio Universitario — bookstores, cafes, live music venues and graffiti art',
      'Regional art galleries — Galería de Arte Macro, Pinacoteca Municipal; contemporary Chilean art',
      'Concepción Cathedral — restored neo-gothic; Plaza Independencia',
      'Mercado de Abastos — central market with regional foods, produce and crafts',
      'Local music scene — concerts at university venues and smaller clubs throughout December'
    ],
    tip: 'Served by Carriel Sur (CCP, 8km south). Best spent as a 1–2 night cultural stopover heading south. The university quarter is the most interesting and safest area. Good bus connections from the terminal to nature areas nearby.',
    weather: 'Nov–Dec: 20–27°C days, 10–14°C nights. Spring warmth. Occasional November rain. Biobío River creates cool afternoon breezes.'
  },

  {
    id: 'chillan',
    name: 'Chillán',
    cat: 'cities',
    sub: "Ñuble · Birthplace of O'Higgins, legendary market, thermal resort gateway",
    lat: -36.6066, lng: -72.0987,
    summary: "Chillán is birthplace of Bernardo O'Higgins, Chile's independence hero. The city is modest and functional but hosts one of Chile's most famous open-air markets and anchors access to the Nevados de Chillán thermal resort complex — with skiing in winter and year-round thermal pools.",
    highlights: [
      'Chillán Market (Mercado Municipal) — multi-block open-air market famous for longanizas (spiced sausages), local produce and artisanal crafts; arrive early',
      'Termas de Chillán — thermal hot springs resort and spa at the base of Nevados ski area; open year-round',
      'Nevados de Chillán ski resort (85km NE) — 35km of runs, volcanic scenery and thermal pools (ski season Jun–Sep; summer trekking Nov–Dec)',
      "Bernardo O'Higgins birthplace (Chillán Viejo) — historic colonial site and museum",
      'Laguna del Laja National Park (60km N) — alpine lake with volcanic peaks; hiking and camping',
      'Regional craft fairs — local weaving, pottery and agricultural goods'
    ],
    tip: '400km south of Santiago (5–6h by bus or car). The market is worth a half-day even if you\'re just passing through. Termas de Chillán offers thermal pool day passes — an excellent afternoon activity. November conditions are ideal for exploring the market and the surrounding landscape.',
    weather: 'Nov–Dec: 20–28°C days, 10–14°C nights. Spring warmth. Occasional rain. Nevados peaks run much cooler (5–10°C at 2,500m).'
  },

  // ── Lake District ─────────────────────────────────────────────────────────

  {
    id: 'valdivia',
    name: 'Valdivia',
    cat: 'cities',
    sub: 'Los Ríos · German heritage, craft beer capital, river forts, sea lions',
    lat: -39.8140, lng: -73.2450,
    summary: "Southern Chile's most cultured small city, shaped by German-Swiss-Austrian immigration in the 1850s — outstanding beer culture, heavy timber architecture and Germanic surnames on every corner. Set at the confluence of three rivers, Valdivia is famous for Kunstmann Brewery, colonial Spanish forts guarding the harbour, and sea lions lounging at the fish market. The weather is moody and rain-soaked, utterly fitting the landscape.",
    highlights: [
      'Cervecería Kunstmann (Isla Teja) — German brewery (est. 1997, tradition from 1851); 45–90min tours with tastings; beers brewed by Reinheitsgebot; riverside restaurant',
      'Floating Market (Mercado Fluvial) — sea lions scavenging at the docks; fresh seafood on stilts over water; liveliest in the morning',
      'Forts of Valdivia — 10+ Spanish colonial fortifications (Castillo San Paul, Fuerte de la Mancera); combine boat tour with walking',
      'Isla Teja — car-free walks; botanical gardens; Kunstmann and river museums',
      'Niebla (15km west) — coastal village with beach, more forts and fishing village charm',
      'River kayaking and boat tours — Calle-Calle, Valdivia and Cau-Cau rivers; guides available locally',
      'Casa-Museo Haverbeck — German immigrant mansion, now a period museum'
    ],
    tip: '220km south of Concepción (3h). Pack a waterproof jacket — Valdivia is rainy year-round but November is relatively drier than winter. Brewery tours require advance booking. Sea lion sightings at the floating market are reliable. Forts need an organised boat tour.',
    weather: 'Nov–Dec: 17–24°C days, 8–12°C nights. Overcast and rainy days common. High humidity. River breezes moderate temps.'
  },

  {
    id: 'osorno',
    name: 'Osorno',
    cat: 'cities',
    sub: 'Los Lagos · Lake District hub, Osorno Volcano, German heritage, Puyehue gateway',
    lat: -40.5336, lng: -73.1435,
    summary: "Osorno is the Lake District's practical hub and gateway to spectacular scenery. The 2,652m Osorno Volcano — Chile's Mount Fuji — dominates the skyline. German-Swiss heritage shapes the architecture, dairy farming and hearty food traditions. A good base for Puyehue National Park, Lake Llanquihue and the charming lakeside towns of Frutillar and Puerto Varas.",
    highlights: [
      'Osorno Volcano (2,652m) — iconic cone over Lake Llanquihue; base walks offer extraordinary views; summit requires mountaineering skills',
      'Puyehue National Park (45km east) — temperate rainforest, Termas de Puyehue hot springs, Laguna Verde hikes',
      'Lake Llanquihue — Chile\'s largest lake (870 km²); sailing, kayaking and beaches; volcano reflected in water',
      'Frutillar (30km south) — charming German immigrant village on the lake shore; excellent restaurants and views',
      'Puerto Varas (30km south) — picturesque lakeside town; German-style houses, craft breweries and handicraft markets',
      'Buses to Bariloche (Argentina, 4h) — popular cross-border excursion; Osorno is the departure hub'
    ],
    tip: 'Most travellers prefer basing in Puerto Varas or Frutillar (both 30min south) rather than Osorno itself. Rent a car for Puyehue and the lake towns; buses are available but less flexible. November is perfect for hiking and water sports.',
    weather: 'Nov–Dec: 18–26°C days, 8–13°C nights. Rainfall increasing. Overcast days common. Water temp 17–19°C.'
  },

  {
    id: 'villarrica',
    name: 'Villarrica / Pucón',
    cat: 'cities',
    sub: 'Araucanía · Adventure capital of the Lake District, active volcano',
    lat: -39.2737, lng: -71.9580,
    summary: "Twin lakeside towns in the shadow of one of the world's most consistently active volcanoes, where the whole landscape feels alive with energy. The undisputed adventure capital of Chile — every outdoor sport imaginable is available within 30 minutes.",
    highlights: [
      'Summit active Villarrica Volcano — peer into the lava crater (4–6h guided climb)',
      'Villarrica National Park — 17 marked trails through ancient Araucaria forest',
      'Lake Villarrica — kayaking, sailing, water skiing and panoramic boat tours',
      'Whitewater rafting on Class IV Trancura River',
      'Ancient Araucaria (monkey puzzle) trees — individual specimens over 1,000 years old',
      'Paragliding and zip-lining over lake and volcano views',
      'Horseback riding through Andean forest and meadows'
    ],
    tip: 'Book the volcano summit weeks in advance — groups are capped and weather-dependent. Every adventure sport is available in Pucón. Strong family connections make this a key stop.',
    weather: 'Dec: prime summer — best conditions for all outdoor activities.'
  },

  // ── Chiloé ───────────────────────────────────────────────────────────────

  {
    id: 'ancud',
    name: 'Ancud',
    cat: 'cities',
    sub: 'Chiloé · Northern gateway, penguins, historic fort, Chiloé introduction',
    lat: -41.8717, lng: -73.8309,
    summary: "Ancud is the main town on northern Chiloé Island and most travellers' first taste of the archipelago's unique culture. The 1770 Fuerte San Antonio marks where Spain's last Chilean stronghold fell. Penguin boat trips, Chiloé mythology and dramatic tidal flats make this a satisfying first stop before heading south to Castro.",
    highlights: [
      'Fuerte San Antonio (1770) — restored stone fortress with bay views; last Spanish stronghold in Chile after independence',
      'Penguin tours to Puñihuil (30km south) — Magellanic and Humboldt penguins coexist here — unique globally; morning boat tours',
      'Mercado de Ancud — local fish, seafood, curanto and Chiloé-specific foods',
      'Museum of Chiloé History — artefacts, photographs and island settlement stories',
      'Dramatic tidal flats — low-tide walks revealing the bay landscape',
      'Caleuche legend night tours — local guides share the mythology of the ghost ship that haunts Chiloé\'s channels'
    ],
    tip: 'First stop after the Pargua–Chacao ferry (35 min, runs 24/7). Stay 1–2 nights to explore northern Chiloé. Penguin tours book evening before; departure 7–8am. Waterproof jacket essential.',
    weather: 'Nov–Dec: 16–23°C days, 8–11°C nights. Cool and can be rainy. Misty mornings clearing by afternoon.'
  },

  {
    id: 'chiloe',
    name: 'Chiloé Island (Castro)',
    cat: 'cities',
    sub: 'Los Lagos · Magical and utterly unique archipelago',
    lat: -42.4817, lng: -73.7638,
    summary: "A rain-misted archipelago with a culture entirely its own — Mapuche roots, Spanish colonial architecture and a seafaring tradition unlike anywhere else in South America. The UNESCO wooden churches, stilted palafito houses and fire-pit curanto feasts are unlike anything else on the continent.",
    highlights: [
      '16 UNESCO World Heritage wooden churches — the Route of the Churches road trip',
      'Castro palafitos — iconic multi-coloured stilt houses perched over the sea',
      'Puñihuil — only place on Earth where Magellanic and Humboldt penguins coexist',
      'Chiloé National Park — rugged Pacific coastline and native temperate rainforest',
      'Curanto en hoyo — slow fire-pit feast of meats, seafood and milcao potato cakes',
      'Dalcahue artisan market — hand-woven wool, baskets and crafts every Sunday',
      'Tantauco Park — vast, pristine temperate rainforest and near-total silence'
    ],
    tip: 'Ferry Pargua → Chacao runs every 20 min and takes 30 min. Nov offers ideal weather with fewer crowds than peak Jan–Feb. Strong family connections make this a key stop.',
    weather: 'Nov: quieter warming spring. Dec: peak season begins — book accommodation early.'
  },

  // ── Patagonia ─────────────────────────────────────────────────────────────

  {
    id: 'puerto-montt',
    name: 'Puerto Montt',
    cat: 'cities',
    sub: 'Los Lagos · Southern gateway, Navimag ferry hub, Angelmo fish market',
    lat: -41.3167, lng: -72.7451,
    summary: "Chile's major southern gateway — the last large city before Patagonia's wilderness and the crucial ferry hub for the 4-day Navimag voyage through the fjords to Puerto Natales. The Angelmo fish market is one of Chile's most authentic food experiences. Functionally chaotic, culturally rich.",
    highlights: [
      'Angelmo Fish Market (2km west) — working stilted market where boats unload daily catch; seafood restaurants serving ceviche, caldillos and shellfish soups',
      'Navimag ferry terminal — twice-weekly 4-day journey through Patagonian fjords to Puerto Natales; book 6–8 weeks ahead for Nov–Dec',
      'Alerce Andino National Park (37km south) — alerce trees 3,000+ years old; short walks in primordial forest',
      'Puerto Varas (20km south) — prettier lakeside town; German-style houses, chocolate shops and craft breweries',
      'Chiloé Island gateway — Pargua ferry 60km south; 35-min crossing every 15 min',
      'Craft beer scene — several breweries in the city centre; tastings and tours'
    ],
    tip: '14–16h drive from Santiago; domestic flights more practical. Most travellers spend 1–2 nights — many transiting to Chiloé or boarding Navimag. Angelmo morning visit is essential. Navimag Nov–Dec fill fast — book 6–8 weeks ahead.',
    weather: 'Nov–Dec: 18–25°C days, 8–12°C nights. Rainfall common. Humidity and overcast typical. Angelmo can be windy and rainy — morning visits are best.'
  },

  {
    id: 'coyhaique',
    name: 'Coyhaique',
    cat: 'cities',
    sub: 'Aysén · Carretera Austral hub, fly-fishing capital of South America',
    lat: -45.5752, lng: -71.9446,
    summary: "Coyhaique is Aysén Region's capital and the beating heart of the Carretera Austral — the 1,200km highway that opened Patagonia. A young city (founded 1929) at the confluence of two rivers, it's the world's fly-fishing capital, drawing anglers to pristine trout rivers. The surrounding landscape is raw, thinly settled and genuinely remote.",
    highlights: [
      'Carretera Austral (Ruta 7) — 1,200km highway through Patagonia; Coyhaique is the ideal midpoint for a north–south traverse',
      'Fly-fishing on Río Simpson — world-class brown and rainbow trout; guides available through hotels (season Nov–Apr)',
      'Marble Cathedral (Puerto Tranquilo, 70km north) — stunning turquoise lake with marble caves; boat tours',
      'Cerro Castillo trek (40km south) — 4–5h hike with 360° Aysén views; accessible directly from Coyhaique',
      'Laguna San Rafael National Park — UNESCO Biosphere Reserve; Laguna San Rafael glacier accessible by tour',
      'Villa Santa Lucía — junction town on the Carretera; gateway to glacier boat tours'
    ],
    tip: 'Fly into Teniente Vidal (55km north; 1h drive) from Santiago via LATAM or Sky. Carretera Austral requires 4WD or high-clearance vehicle. Rent a car in advance — limited options. Fly-fishing guides must be booked ahead (Nov–Dec mid-season). Allow extra time on roads south of Coyhaique.',
    weather: 'Nov–Dec: 15–22°C days, 5–10°C nights. Rainfall common; Aysén is wet year-round. Misty and overcast days frequent. Expect rain on the Carretera.'
  },

  {
    id: 'puerto-natales',
    name: 'Puerto Natales',
    cat: 'cities',
    sub: 'Magallanes · Torres del Paine gateway, Navimag terminus, Last Hope Fjord',
    lat: -51.7297, lng: -72.5155,
    summary: "Puerto Natales sits on Última Esperanza Sound ('Last Hope Fjord'), named by explorers who feared there was no way through. It's the gateway to Torres del Paine National Park and the southern terminus of the Navimag ferry. Dramatic snow-capped peaks frame colourful wooden houses perched above the water. The last real settlement before Antarctic waters — romantic, slightly rugged and end-of-the-world authentic.",
    highlights: [
      'Torres del Paine National Park (70km south) — W Trek (4–5 days) or circuits; November–December spring meadows, melting lakes; iconic three granite towers',
      'Balmaceda and Serrano Glaciers boat tour — full-day cruise through Última Esperanza Fjord; sea lions, waterfalls and icebergs',
      'Cueva del Milodon (24km north) — large cave with prehistoric ground sloth remains; museum and walking trail',
      'Puerto Natales waterfront — colourful wooden houses; Magellanic lamb and spider crab restaurants',
      'Afrigonia restaurant — African-inspired cuisine with local ingredients; excellent',
      'Última Esperanza Sound cruises — fjord cruises, glacier tours and wildlife viewing'
    ],
    tip: '247km north-west of Punta Arenas (3.5h drive). Fly into Punta Arenas (PUQ) then bus. Torres del Paine logistics best booked through hotel operators. Navimag departs here for Puerto Montt — book 6–8 weeks ahead. Pack for rain and wind.',
    weather: 'Nov–Dec: 13–19°C days, 4–8°C nights. Rapid weather changes; frequent Patagonian rain and wind. Clear days spectacular. Layering essential.'
  },

  {
    id: 'punta-arenas',
    name: 'Punta Arenas',
    cat: 'cities',
    sub: "Magallanes · World's southernmost large city, Magellan Strait, penguin colonies",
    lat: -53.1638, lng: -70.9181,
    summary: "The world's southernmost large city, perched on the Strait of Magellan between Atlantic and Pacific. This is the last outpost before Antarctica — rough, windswept, historically maritime, and home to the enormous Magdalena Island penguin colony. Grand cemeteries display the city's guano-era wealth; the port hums with Antarctic expedition support.",
    highlights: [
      'Isla Magdalena penguin colony (2h boat) — 120,000 Magellanic penguins in breeding season (Sep–Mar); 800m trail among nesting birds; depart 7–8am',
      'Cemetery of Punta Arenas — ornate 19th-century chapels built by wealthy families; fascinating self-guided walk',
      'Museo Regional Magallánico — shipwrecks, maritime history, indigenous artefacts and colonial history',
      'Strait of Magellan views — historic ferry terminal; maritime heritage and Antarctic gateway atmosphere',
      'King crab (centolla) restaurants — Magellanic lamb and centolla are the culinary signature of the city',
      'Tierra del Fuego access — ferry to Porvenir (2.5h) for the Chilean side; onward to Ushuaia (Argentina)'
    ],
    tip: 'Domestic flights from Santiago (4h, LATAM or Sky). Penguin tours must be booked through operators; early morning departures. Weather is extreme — winds up to 130 km/h; pack waterproof and windproof gear. November is spring with relatively better conditions. Most travellers spend 1–2 nights.',
    weather: 'Nov–Dec: 10–18°C days, 3–8°C nights. High winds. Frequent rain. Clear days are spectacular and rare. Water temp 7–9°C.'
  },

  {
    id: 'puerto-williams',
    name: 'Puerto Williams',
    cat: 'cities',
    sub: "Magallanes · World's southernmost city, Dientes Circuit, Cape Horn gateway",
    lat: -54.9167, lng: -67.6167,
    summary: "Puerto Williams claims the title of the world's southernmost city on Navarino Island in the Beagle Channel. This is the true end of the road — a small naval base and frontier village with raw sub-Antarctic character. The Dientes de Navarino circuit (5 days, 43km) is the world's southernmost multi-day trek, and Cape Horn lies just offshore.",
    highlights: [
      'Dientes de Navarino Circuit — 5-day, 43–70km circumnavigation of Navarino Island; world\'s southernmost multi-day trek; challenging alpine passes with 360° views',
      'Cape Horn (Cabo de Hornos) — southernmost point of South America; boat expedition from Puerto Williams (weather permitting); historic lighthouse',
      'Beagle Channel cruises — fjords, wildlife (sea lions, cormorants), glaciers',
      'Lapataia Bay — scenic excursion; hiking and small boat access',
      'Puerto Williams town — small naval base; museum of southern history; surprisingly good restaurants',
      'Cape Horn Biosphere Reserve — extreme maritime environment; pelagic birds and pristine sub-Antarctic ecosystems'
    ],
    tip: 'Only accessible by flight from Punta Arenas (45 min; expensive; weather-cancellations frequent) or by rare tourist sea voyage. Book everything 2–3 months ahead. Dientes trek requires guides and permits; contact HelloPatagonia, Swoop Patagonia. November–December is the best season (less snow, longer daylight).',
    weather: 'Nov–Dec: 10–15°C days, 3–7°C nights. Rapid weather changes. Frequent rain, wind and sudden storms. Sub-Antarctic climate. Strong winds constant.'
  }

);
