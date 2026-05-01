// ─── MORE HIKING ─────────────────────────────────────────────────────────────
// Lesser-known and specialist hiking trails across Chile.
// Extra fields: difficulty, duration, multiday

DESTINATIONS.push(
{
  id: 'altos-lircay-enladrillado',
  name: 'Altos de Lircay - El Enladrillado Trek',
  cat: 'hiking',
  sub: 'Maule Region · Mysterious geometric basalt plateau & UFO hotspot',
  difficulty: 'Hard',
  duration: '1 day (20 km RT) or 2–3 days with camping',
  lat: -35.3333, lng: -70.8333,
  summary: "El Enladrillado is a hard plateau hike in the Maule Region revealing a vast geometric formation of basalt 'bricks' stacked in inexplicable orderly patterns—resembling a giant landing strip at 2,200m. Famous as one of Chile's top UFO sighting epicenters, the trek offers stunning volcano views, crater lakes, and an otherworldly sense of isolation.",
  highlights: [
    'Enladrillado plateau: 1.6 km of basalt formations resembling ordered brickwork',
    '20 km round-trip day hike; challenging elevation gain (3,200 ft)',
    'Panoramic views: volcanoes Descabezado Grande, Cerro Azul reflected in crater lake',
    'UFO hotspot: documented sightings dating back decades; iconic status among enthusiasts',
    'Dense forest ecosystems transitioning to high-altitude plateau',
    '7–8 hours hiking time; start early for daylight',
    'Minimal crowds: lesser-known compared to Villarrica/Osorno peaks'
  ],
  tip: 'Base in Talca or Vilches Alto (gateway town, 50 km west). Park entrance fee ~CLP$5,000. Start before 8 AM for daylight descent. Trail well-marked but steep; poles recommended. Camp option: park allows 1-night camping near trailhead. Best Nov–May for dry conditions. Stock water (unreliable on trail). No guide required but some use locals from Vilches.',
  weather: 'November–December: 15–20°C (59–68°F) daytime, 0–5°C at elevation, low precipitation (~50 mm). Afternoon winds common. Morning mist clearing by 10 AM. Snow possible Nov but unusual. UV intense at altitude; sunscreen essential.',
  multiday: true
},

{
  id: 'juncal-glacier-park',
  name: 'Parque Andino Juncal',
  cat: 'hiking',
  sub: 'Central Chile · Private glacier reserve with Andean wetlands',
  difficulty: 'Moderate to Hard',
  duration: '2 days with overnight; also day-hike options',
  lat: -32.8500, lng: -70.2500,
  summary: "Parque Andino Juncal is an exclusive private ecological reserve 3 hours from Santiago offering pristine wilderness with two distinct sections: a valley walk through Andean wetlands ending at a river vista (beginner-friendly), and a technical route with stream crossings and glacier views (experienced walkers only).",
  highlights: [
    'Private reserve (exclusive, low-impact tourism focus)',
    'Juncal Glacier views: active glacier accessible from high plateau',
    'Diverse ecosystems: lush valley → alpine wetlands → glaciated peaks',
    'Two-tier trail system: beginner (River Section) vs. expert (Three Streams Section)',
    'Crystal-clear mountain streams and abundant birdlife',
    'Dramatic Andes backdrop; minimal other visitors',
    'Accessible from Santiago: shorter travel time than central Chilean parks'
  ],
  tip: 'Reserve ahead (small group limits). Private access requires permit. Drive from Santiago ~3 hours southeast. Accommodation: on-site lodge or camping. Day option: River Section (3–4 hours). Multi-day: bring camping gear or stay at lodge. Terrain variable; Three Streams requires scrambling and creek wading. Boots with good grip essential. Start season Sept; closes late March.',
  weather: 'Nov–Dec: 10–18°C (50–64°F), occasional afternoon rain, strong winds at altitude, clear mornings. Streams swollen with snowmelt (Nov); water crossings can be challenging. Layers essential for temperature swings.',
  multiday: true
},

{
  id: 'rio-cipreses-reserve',
  name: 'Río de los Cipreses National Reserve',
  cat: 'hiking',
  sub: 'Central Andes · Remote reserve with 33 km main trail & Los Maitenes waterfall',
  difficulty: 'Easy to Moderate',
  duration: '1–4 days; flexible sectioning',
  lat: -34.5667, lng: -70.5667,
  summary: "Río de los Cipreses is an underrated reserve 150 km south of Santiago where a 33 km main trail weaves through pristine forests, emerald rivers, and waterfall valleys. Most visitors hike sections rather than the full route—Los Maitenes Waterfall (6 km) is the prime attraction—offering genuine wilderness without Torres del Paine crowds.",
  highlights: [
    '33 km main trail or shorter sectional hikes (Los Maitenes waterfall: 6 km)',
    'Untouched old-growth forest ecosystem: cypress, coihue, araucaria',
    'Emerald river valleys and cascade waterfalls',
    'Los Maitenes Sector: peaceful day-hike to waterfall viewpoint',
    'Multi-day camping option: established campsites within park',
    'Zero crowds during week; peaceful atmosphere even on weekends',
    'Direct access from nearby towns (Rengo area)'
  ],
  tip: 'Base in San Fernando or nearby towns. Park entrance fee ~CLP$3,000. Day-hike Los Maitenes Sector: 6 km RT, 2–3 hours, easy-moderate, perfect for Nov. Multi-day: bring camping gear; park provides basic facilities. Water abundant; filter/purify. Trail well-marked. No guide required. Ranger station at entrance has maps.',
  weather: 'Nov–Dec: 20–26°C (68–79°F) daytime, 10–15°C evenings, moderate rainfall (~100 mm monthly). Stream crossings manageable but expect wet conditions. Forest provides shade and protection.',
  multiday: true
},

{
  id: 'conguillo-llaima-circuit',
  name: 'Conguillo National Park - Llaima Volcano Circuit',
  cat: 'hiking',
  sub: 'Araucanía · Volcanic cones & alpine lakes through native forests',
  difficulty: 'Moderate',
  duration: '2–3 days camping or 1-day summit attempt',
  lat: -38.5500, lng: -71.6333,
  summary: "Conguillo boasts conical volcanoes, pristine lakes, and thick forests in Chile's Lake District foothills. The Llaima Circuit weaves through monkey puzzle and southern beech forests, past turquoise lagoons, and offers a moderate summit attempt (3,125 m) with panoramic views extending to multiple volcanoes and Araucanía lowlands.",
  highlights: [
    'Llaima volcano (3,125 m): moderate summit attempt with non-technical ascent',
    'Volcanic landscape: cinder cones, basalt flows, conifer forests',
    'Alpine lakes: Conguillo, Verde, Captren with crystal-clear water',
    'Monkey puzzle (Araucaria) forests: unique southern heritage species',
    'Established campsites: multiple options for 2–3 day camping',
    'Lower crowds than central Patagonian parks; still accessible',
    'Year-round visibility to distant volcanoes and Arauco landscape'
  ],
  tip: 'Base in Temuco (60 km gateway) or camp within park. Park entrance fee ~CLP$3,500. Llaima summit: early start (4–5 AM) essential; 8–10 hour round-trip. Expect volcanic scree; trekking poles help. Multi-day: campsites established; bring gear. Water from lakes (filter). No guide required but popular with local outfitters. Best Nov–April; avoid July–September for snow.',
  weather: 'Nov–Dec: 15–22°C (59–72°F) daytime, near-freezing at altitude, occasional rain/snow flurries early Nov. Afternoon clouds common. Wind exposure at higher elevations. UV intense; sunscreen critical.',
  multiday: true
},

{
  id: 'huerquehue-los-lagos',
  name: 'Huerquehue National Park - Los Lagos Circuit',
  cat: 'hiking',
  sub: 'Lake District · Five pristine lakes through beech forests',
  difficulty: 'Easy to Moderate',
  duration: '1 day (4–5 hours) or 2–3 days with camping',
  lat: -39.2167, lng: -71.6333,
  summary: "Huerquehue's Los Lagos Circuit is a magical easy-to-moderate loop passing five distinct alpine lakes surrounded by old-growth southern beech and monkey puzzle forests. Crystal-clear waters reflect surrounding mountains. Less crowded than nearby Villarrica, it's ideal for day-hikers or those seeking overnight alpine camping.",
  highlights: [
    'Los Lagos Circuit: 5 interconnected alpine lakes with distinct personalities',
    'Old-growth beech forests: Nothofagus dombeyi (coihue) and related species',
    'Turquoise lagoon waters; mountain reflection photography opportunities',
    'Moderate difficulty; achievable as day-hike or multi-day camp',
    'Cerro San Sebastián extension: higher-elevation views (8+ hours total)',
    'Established campsites: 2–3 day options with water access',
    'Access from Pucón: 35 km, easy transportation'
  ],
  tip: 'Base in Pucón (adventure capital, 35 km away). Day option: Los Lagos Circuit (4–5 hrs, no camping needed). Park entrance ~CLP$4,500. Multi-day: bring camping gear; water from lakes (filter). Bring insect repellent (sandflies). Trail well-marked. No guide required. Best Nov–April; prepare for afternoon clouds.',
  weather: 'Nov–Dec: 16–21°C (61–70°F), frequent afternoon clouds/drizzle, cold nights (5–10°C), occasional brief rain. Humidity high; waterproof bag essential. Mornings clear; plan early starts.',
  multiday: true
},

{
  id: 'isla-mocha-reserve',
  name: 'Isla Mocha National Reserve - Island Circuit Trek',
  cat: 'hiking',
  sub: 'Biobío Coastal · Remote island with white sand & native forest',
  difficulty: 'Moderate',
  duration: '3–4 days camping on island',
  lat: -38.3833, lng: -73.9333,
  summary: "Isla Mocha is a hidden gem 40 km off southern Chile's coast—a sparsely populated island of 52 km² featuring pristine white-sand beaches, old-growth Valdivian forest (45% coverage), and a lighthouse trail. Circumnavigating the island takes 8–10 hours of hiking; multi-day camping reveals endemic birdlife and untouched wilderness.",
  highlights: [
    'Island circumnavigation: 8–10 hours of varied coastal and forest hiking',
    'Camino Nuevo Trail: 3 km east-west traverse through reserve core',
    'Laguna Hermosa Norte: steep 1.5 hr ascent (high difficulty section)',
    'Endemic birdlife: 102 bird species incl. endangered Fardela castellana',
    '45% native Valdivian forest: Olivillo, Ulmo, Canelo, Arrayan',
    'Isolated beaches and old lighthouse with panoramic ocean views',
    'Camping allowed; minimal development preserves wilderness'
  ],
  tip: 'Access by small plane from Tirúa (15 min, ~USD$30 = CLP$25,000) or boat (less reliable, rough). Pack all supplies; no stores on island. Multi-day: bring 3+ days food, camping gear, water purification. Start circumnavigation early for daylight. Tides affect beach hiking; check tidal charts. Best Nov–Feb (summer); rainy rest of year. Ranger station provides map/permits.',
  weather: 'Nov–Dec: 18–22°C (64–72°F), frequent rain (250+ mm monthly), windy coastal exposure, high humidity. Wet underfoot; waterproof bag, shoes essential. Morning fog common. Shelter at lighthouse available for emergencies.',
  multiday: true
},

{
  id: 'cochamo-valley-amphitheatre',
  name: 'Cochamó Valley - Granite Amphitheatre Trek',
  cat: 'hiking',
  sub: 'Patagonia Lake District · "Yosemite of South America"',
  difficulty: 'Hard',
  duration: '3–4 days from La Junta; multi-day expedition routes',
  lat: -41.4833, lng: -72.0333,
  summary: "Cochamó Valley is a world-renowned granite climbing destination earning the nickname 'Yosemite of Chile.' Sheer granite walls 3,000+ feet tall ring a pristine river valley. Hikers ascend via rock-climber trails through old-growth forests to dramatic amphitheatres: Anfiteatro, Arcoiris, Paloma, and Trinidad.",
  highlights: [
    'Granite amphitheatres: 3,000-foot vertical walls matching Yosemite aesthetics',
    'Multiple valley routes: Anfiteatro, Arcoiris, Paloma, Trinidad (choose 1–2)',
    'Old-growth temperate rainforest: coihue, cypress, ulmo trees',
    'River crossings and challenging scrambles; technical sections',
    'Minimal crowds; day-visitor cap (90/day) preserves wilderness',
    'Visitor co-op: Organizacion Valle Cochamó manages sustainable access',
    'Rock climbing/mountaineering base camp (expert-only)'
  ],
  tip: 'Base in Puerto Varas/Puerto Montt (2-hour bus). Trailhead: 8 km from Cochamo village. Public bus summer service from Puerto Varas. Visitor center at La Junta entrance. Day-hike to Arcoiris/Anfiteatro (~6–7 hrs). Multi-day: Organize permits via visitor center. Camp near La Junta or within valley. Guide recommended for technical sections. Routes poorly marked; experienced hikers/local guides essential.',
  weather: 'Nov–Dec: 16–20°C (61–68°F), frequent rain (250+ mm), misty valleys, afternoon clearing. Trails muddy; waterproof boots necessary. Streams swollen with snowmelt; wading may be required.',
  multiday: true
},

{
  id: 'queulat-ventisquero-hanging',
  name: 'Queulat National Park - Ventisquero Colgante (Hanging Glacier)',
  cat: 'hiking',
  sub: 'Aysén Carretera Austral · Suspended glacier viewpoint hike',
  difficulty: 'Easy to Moderate',
  duration: '3–4 hours round-trip day hike',
  lat: -43.8000, lng: -72.5500,
  summary: "The Ventisquero Colgante (Hanging Glacier) in Queulat National Park is a dramatic 6 km hike through temperate rainforest leading to a suspended glacier visibly calving between two mountain peaks. The trail parallels a pristine river and ends at a vantage point where the glacier's ice appears to defy gravity.",
  highlights: [
    'Ventisquero Colgante: glacier suspended between two peaks (UNESCO Biosphere Reserve)',
    '3 km trail one-way through old-growth Patagonian forest',
    'Moderate difficulty; suitable for most fitness levels',
    'River crossings and bridge access; well-maintained trail',
    'Waterfall sections as snowmelt cascades down cliff faces',
    'Viewpoint allows close (safe) glacier observation',
    'Only 22 km south of Puyuhuapi village on Carretera Austral'
  ],
  tip: 'Base in Puyuhuapi (small lodge town, Carretera Austral). Park entrance fee ~CLP$3,500. Day-hike: start morning (8–9 AM). Trail: 3 km one-way, 1.5–2 hours each direction. Daily minibus from Puyuhuapi (8:30 AM departure, 6:30 PM return). Self-drive: narrow dirt road, high clearance helpful. Bring rain jacket (temperate rainforest). Bridge/trail conditions excellent.',
  weather: 'Nov–Dec: 13–18°C (55–64°F), frequent rain/drizzle (200+ mm), misty forest, occasional afternoon clearing. Cool and wet; layers essential. Stream volume highest Nov–Jan (snowmelt).',
  multiday: false
},

{
  id: 'las-horquetas-cerro-castillo',
  name: 'Las Horquetas Circuit - Cerro Castillo National Park',
  cat: 'hiking',
  sub: 'Aysén Patagonia · Four-day traverse beneath jagged peaks',
  difficulty: 'Hard',
  duration: '4 days (~43 km; 10–12 km daily)',
  lat: -45.5333, lng: -71.7667,
  summary: "Las Horquetas is a challenging 4-day circuit through Cerro Castillo National Park—a 50 km trek beneath dramatic jagged granite spires and hanging glaciers. The route ascends El Peñón Pass (1,400 m, hardest day), traverses lenga forests and alpine tundra, and culminates at a turquoise glacial lagoon directly beneath Cerro Castillo's iconic peaks.",
  highlights: [
    'Cerro Castillo peaks: jagged spires dominating skyline throughout trek',
    '43–50 km circuit; 4-day expedition with established campsites',
    'El Peñón Pass (1,400 m): exposed alpine crossing with panoramic views',
    'Turquoise glacial lagoon finale: iconic Patagonian beauty',
    'Lenga forest ecosystems transitioning to high-altitude moorland',
    'Less crowded than W Trek or O Circuit in Torres del Paine',
    'Self-sufficient backcountry: no pre-booking required; camping unrestricted'
  ],
  tip: 'Base in Coyhaique (75 km) or Villa Cerro Castillo (30 km). Trailhead: Las Horquetas (gravel road turnoff from Carretera Austral between towns). No guide required but backcountry experience essential. Carry topographic map and compass. Self-catered camping; carry all food/water. Establish campsites early each day. Wind exposure at passes; secure tent well. Park office: obtain latest trail conditions.',
  weather: 'Nov–Dec: 10–18°C (50–64°F) daytime, -5 to 5°C at altitude/night, low precipitation but sudden wind/snow possible. Clear mornings; afternoon weather deterioration common. Extreme wind on passes.',
  multiday: true
},

{
  id: 'dientes-navarino-circuit',
  name: 'Dientes de Navarino Circuit - Isla Navarino',
  cat: 'hiking',
  sub: 'Tierra del Fuego · Southernmost trek on Earth; extreme wilderness',
  difficulty: 'Very Hard',
  duration: '4–5 days (~42 km); expedition-grade',
  lat: -55.4500, lng: -67.6000,
  summary: "The Dientes Circuit on Isla Navarino is the world's southernmost multi-day trek and one of Earth's most remote. Only 42 km but taking 4–5 days, the route crosses boggy terrain (beaver-created wetlands), rocky peaks, and pristine lakes in near-constant wind and unpredictable weather. Suitable only for experienced backcountry hikers.",
  highlights: [
    'Southernmost trek on Earth (Cape Horn proximity)',
    '42 km circuit; only 10 km daily but extreme difficulty',
    'Dientes (teeth) granite peaks: dramatic topography throughout',
    'Pristine lakes and mountain views; zero crowds (20 max hikers/season)',
    'Boggy terrain: beaver-created wetlands require route-finding',
    'Weather extremes: snow, heat, wind, rain in single day',
    'True wilderness: no facilities, no communication, self-sufficient only'
  ],
  tip: "Fly to Ushuaia, then to Puerto Williams (Chile's southernmost city). Trek departs from Puerto Williams. 4–5 day expedition: highly experienced hikers only. Carry satellite messenger (no cell signal). Full self-catering; no resupply. Extreme weather: bring 4-season tent, waterproof everything, emergency shelter. Best Nov–Feb (relative calm). Hiring local guide recommended. Register with authorities before departure.",
  weather: 'Nov–Dec: 8–15°C (46–59°F), extreme wind (40+ km/h sustained), rapid weather changes, possible snow/hail even in summer, high humidity. Prepare for worst-case; sunny days rare. Hypothermia risk; insulation critical.',
  multiday: true
},

{
  id: 'patagonia-national-park-lagunas',
  name: 'Patagonia National Park - Lagunas Altas Trail',
  cat: 'hiking',
  sub: 'Aysén Patagonia · 10+ km day hikes & 4-day circuits',
  difficulty: 'Moderate to Hard',
  duration: '1 day (Lagunas Altas) or 4 days (full circuit)',
  lat: -46.3333, lng: -72.3000,
  summary: "Patagonia National Park (formerly Conservación Patagonia) in Aysén offers day and multi-day options beneath basalt cliffs. The Lagunas Altas day trail is a moderate 10.5-mile hike; longer circuits (4 days, 30 km) traverse glaciated valleys with minimal crowds and dramatic wilderness.",
  highlights: [
    'Lagunas Altas Trail: 10.5 miles moderate day-hike; turquoise alpine lakes',
    'Basalt walls: dramatic Cerro Castillo-adjacent geology',
    'Las Horquetas multi-day circuit: 30 km through pristine valleys',
    'Lenga forests and alpine tundra ecosystems',
    'Minimal tourist infrastructure; true backcountry feel',
    'Wildlife: guanacos, pumas (rare sightings), Andean condors',
    'Park reforestation efforts visible; conservation-focused access'
  ],
  tip: 'Base in Coyhaique (100+ km). Day-hike: Lagunas Altas trailhead (gravel road). Multi-day: arrange via park office or Chile travel outfitters. Self-guided or with local guides. Carrying capacity: ~15 km/day recommended. Camping established; water from streams (filter). No pre-booking required. Park office in Villa Santa Lucia; permits issued there.',
  weather: 'Nov–Dec: 10–18°C (50–64°F), wind common (20–30 km/h), low precipitation but cold snaps possible. Afternoon clouds; mornings clearest. Storms pass quickly.',
  multiday: true
},

{
  id: 'atacama-3-day-trek',
  name: 'Atacama Desert - High-Altitude Multi-Day Trek',
  cat: 'hiking',
  sub: 'Northern Chile · Salt flats, volcanoes, Lickan Antay petroglyphs',
  difficulty: 'Hard',
  duration: '5–7 days camping',
  lat: -22.9000, lng: -68.2000,
  summary: "Multi-day backcountry treks in the Atacama connect ancient Lickan Antay trails across salt flats, lagoons, and volcano approaches. Routes link Atacama Salt Flat, Rainbow Valley, Tatio Geysers, and high-altitude peaks (5,000–6,000 m), following vicuña paths used for millennia. Extreme altitude and isolation reward experienced desert trekkers.",
  highlights: [
    'Atacama Salt Flat (Salar de Atacama): pristine white expanse',
    'Rainbow Valley (Valle Arcoíris): mineral-colored formations',
    'Tatio Geysers: high-altitude geothermal features (~4,300 m)',
    'Sairecabur Volcano approach: 5,950 m technically challenging (expert)',
    'Lickan Antay petroglyphs: ancient cultural sites (800–400 BC)',
    'Altiplanic Lagoons: high-altitude lakes with flamingo colonies',
    '7–day itinerary covers 50+ km through pristine wilderness'
  ],
  tip: 'Base in San Pedro de Atacama (gateway town). Multi-day trek: organize through local operators or self-guide with detailed maps. 5,000–6,000 m altitude; severe acclimatization required (2–3 day buffer before high passes). Full camping setup; water scarce (carry purification tablets). Extreme UV; sunscreen + glacier glasses. Best Nov–March (no rain, temperature manageable). Guides recommended for route-finding and safety.',
  weather: 'Nov–Dec: 28–32°C (82–90°F) daytime, -10 to 5°C at night, virtually no rain, intense UV, thin air (altitude sickness common). Wind swings extreme. Sunrise/sunset dramatic; cold overnight.',
  multiday: true
},

{
  id: 'laguna-laja-sierra-velluda',
  name: 'Laguna del Laja National Park - Sierra Velluda Waterfall Trail',
  cat: 'hiking',
  sub: 'Biobío · Volcanic wilderness & Salto Sierra Velluda waterfall',
  difficulty: 'Moderate to Hard',
  duration: '1 day (8 km) or multi-day camping',
  lat: -37.4500, lng: -71.2500,
  summary: "Laguna del Laja's signature trail climbs to the base of Sierra Velluda Volcano past Salto Sierra Velluda waterfall—a stunning cascade plunging from the peak. The hike crosses lava slag heaps, volcanic soil plains, and pristine alpine terrain beneath the smoking volcano cone.",
  highlights: [
    'Salto Sierra Velluda: waterfall tumbling from volcano slopes',
    'Sierra Velluda Volcano: active summit dominating landscape',
    'Lava slag field: rough black volcanic rock terrain (challenging footing)',
    'Pristine alpine meadows with endemic plant species',
    'Laguna del Laja lake: turquoise glacial waters',
    'Rucapirén Waterfall alternative (gentler Las Trancas Valley trail)',
    'Volcano view throughout; dramatic weather displays'
  ],
  tip: 'Base in Antuco or nearby towns (100 km south of Concepción). Park entrance fee ~CLP$3,000. Day option: Sierra Velluda trail (~8 km, 5–7 hrs). Start early morning (6–7 AM). Volcanic rock uneven and sharp; sturdy boots essential. Water sources limited; bring 2+ liters. Afternoon clouds common; summit visible early only. Multi-day: establish campsites early.',
  weather: 'Nov–Dec: 18–24°C (64–75°F), low rainfall, afternoon cloud buildup, strong UV at altitude. Cold nights (5–10°C). Occasional brief afternoon showers; wind increases afternoon.',
  multiday: true
},

{
  id: 'parque-tantauco-chiloe',
  name: 'Parque Tantauco - Chiloé Island Wilderness',
  cat: 'hiking',
  sub: 'Chiloé · 118,000 hectares cold rainforest, peat bogs, endemic ecosystems',
  difficulty: 'Easy to Moderate',
  duration: '1–3 days; network of trails',
  lat: -42.8500, lng: -73.8333,
  summary: "Parque Tantauco is a vast private nature reserve occupying Chiloé's southern tip—a rainforest sanctuary of 118,000 hectares featuring unique cold-temperate ecosystems, endemic species, and pristine peat bogs. Trail network allows flexible day-hikes or multi-day circuits through undisturbed forest.",
  highlights: [
    'Cold temperate rainforest: unique Chiloé flora (cypress, Nothofagus)',
    'Peat bogs and wetland systems: rare south-temperate ecosystem',
    'Endemic wildlife: Pudu deer, fox, diverse bird species',
    'Trail network flexibility: day-hikes or 2–3 day circuits',
    'Well-maintained infrastructure: lodging, campsites, visitor services',
    'Protected private reserve: sustainable access; low-impact tourism',
    'Coastal access: beach walks and coastal views'
  ],
  tip: 'Base in Castro (Chiloé hub) or nearby towns. Reserve entrance fee ~CLP$8,000–15,000. Day-visit: walk network of marked trails. Overnight: book accommodation (lodge) or camping. Trails well-marked, not difficult. Bring insect repellent (sandflies). Rainy climate; waterproof bag. Guide-led naturalist tours available. Best Nov–April; avoid Jun–Aug.',
  weather: 'Nov–Dec: 14–18°C (57–64°F), frequent rain/drizzle (200+ mm), misty forest, occasional clear afternoon. Humidity high. Trails muddy; waterproof boots essential.',
  multiday: true
},

{
  id: 'sairecabur-volcano-extreme',
  name: 'Sairecabur Volcano - Extreme High-Altitude Alpine Climb',
  cat: 'hiking',
  sub: 'Atacama North · 5,950 m technical volcano above San Pedro',
  difficulty: 'Very Hard',
  duration: '1–2 days from basecamp',
  lat: -22.9083, lng: -68.2053,
  summary: "Sairecabur (meaning 'Mountain of the Rains' in Lickan Antay) rises to 5,950 m on the Chile-Argentina border east of San Pedro de Atacama. A technically demanding alpine climb requiring acclimatization, crampons, and mountaineering experience. Summit views extend to the Atacama lowlands and distant Andes.",
  highlights: [
    'Sairecabur summit: 5,950 m volcanic peak',
    'Steep slope sections (30–40° inclines) with ice/snow exposure',
    'Extreme altitude; severe oxygen depletion above 5,500 m',
    'Volcanic sulphur vents near summit; noxious gases possible',
    'Technical sections: crampons, ice axe, ropes required',
    'Clear summit weather offers 360° panoramic views',
    'Training ground for higher Andean peaks'
  ],
  tip: 'Organize through San Pedro de Atacama outfitters (mandatory guide). Multi-day approach: base camp at ~4,500 m (acclimatization night), then summit push. Alpine equipment: crampons, ice axe, insulated mountaineering boots, helmet. Altitude sickness: descent immediately if symptoms. Weather windows: climb Oct–April. Cost: USD$200–400+ with guide. Not for casual hikers.',
  weather: 'Nov–Dec: -5 to 5°C daytime, -15 to -20°C at night/altitude, extreme wind (40+ km/h), possible snow/ice, intense UV. Altitude above 5,500 m causes significant hypoxia.',
  multiday: true
},

{
  id: 'lago-jeinimeni-reserve',
  name: 'Lago Jeinimeni National Reserve - Backcountry Wilderness',
  cat: 'hiking',
  sub: 'Aysén · 161,000 hectares diverse ecosystems & remote lakes',
  difficulty: 'Hard',
  duration: '4–5 days backcountry camping',
  lat: -46.7333, lng: -71.6667,
  summary: "Lago Jeinimeni is an enormous (161,100 ha) remote reserve 57 km south of Chile Chico encompassing four distinct ecosystems: deciduous forests, evergreen forests, steppe, and high peaks. Trekking here offers pristine wilderness with turquoise lake systems, minimal infrastructure, and genuine backcountry experience.",
  highlights: [
    'Four distinct ecosystems within single reserve (rare biodiversity)',
    'Lago Jeinimeni turquoise lake and subsidiary lagoons',
    'Deciduous & evergreen Patagonian forests',
    'High-altitude passes with panoramic Aysén views',
    'Virtually no infrastructure: complete self-sufficiency required',
    'Wildlife: guanacos, pumas, Andean condors (rare sightings)',
    'Minimal other trekkers; true wilderness immersion'
  ],
  tip: 'Base in Chile Chico (gateway, 57 km west). Remote access requires high-clearance vehicle or arranged transport. Topographic map and GPS/compass essential. Carry all food/water; no resupply. Establish campsites early. Weather: prepare for rapid changes. Register with Chile Chico authorities before departure. Route-finding challenging; experienced backcountry hikers only. Multi-day: 4–5 days minimum for meaningful exploration.',
  weather: 'Nov–Dec: 10–18°C (50–64°F), wind common, sudden afternoon weather changes, possible snow early Nov, extreme exposed conditions at passes. Layers essential.',
  multiday: true
}
);
