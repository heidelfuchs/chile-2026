// ─── LAGO O'HIGGINS / LAGO VIEDMA / EL CHALTÉN REGION ────────────────────────
// Covers both sides of the Chile–Argentina border in deep southern Patagonia.
// Sources: AllTrails, Swoop Patagonia, El Chaltén official, Stingy Nomads,
//          Robinson Crusoe tours, Beyond BA, Alaska2Patagonia, Lonely Planet.
// Note: villa-ohiggins / glaciar-ohiggins are handled by the existing 'ohiggins'
//       entry in data/claude.js — not duplicated here.

DESTINATIONS.push(

  // ── EL CHALTÉN — TOWN ────────────────────────────────────────────────────

  {
    id: 'el-chalten',
    name: 'El Chaltén',
    cat: 'cities',
    sub: 'Santa Cruz, Argentina · National Trekking Capital',
    lat: -49.3314, lng: -72.8856,
    summary: "Argentina\'s National Capital of Trekking is a vibrant mountain town nestled inside Los Glaciares National Park at the foot of Mount Fitz Roy. A permanent population of around 500 swells to several thousand in peak season — yet all the major trails depart directly from the town\'s streets, no bus or transfer required.",
    highlights: [
      'Every major trail begins from the town centre — no bus or transfer needed',
      'Free access to Los Glaciares National Park trails (no entry fee)',
      'Full infrastructure: restaurants, craft-beer bars, gear shops, ATMs, pharmacies',
      'OVO Patagonia capsule lodging — a suspended pod 270m up a rocky cliff face',
      'Los Huemules Reserve and Explora El Chaltén for upscale lodge experiences',
      'Local guides available for all skill levels, from day walks to technical climbing',
      'Base for Huemul Circuit, multi-day backcountry treks and ice field approaches',
      'Craft breweries: El Muro, Latitud 49, Lupulo — Patagonian hops in dramatic settings'
    ],
    tip: 'Accommodation ranges USD $30–250+/night; book well ahead for Dec–Feb. Very limited ATMs — bring cash. Stock all supplies here before backcountry treks. 3-hour drive north from El Calafate on RN 40.',
    weather: 'Nov–Dec: 10–16°C daytime, 14+ hours of daylight by December. Constant wind is a defining feature — 40–70 km/h afternoon gusts are normal. Rain is possible but rarely dominates.'
  },

  // ── EL CHALTÉN — HIKING ──────────────────────────────────────────────────

  {
    id: 'laguna-de-los-tres',
    name: 'Laguna de Los Tres',
    cat: 'hiking',
    sub: 'El Chaltén · Iconic Fitz Roy viewpoint',
    lat: -49.272, lng: -72.987,
    summary: "The most celebrated hike in Los Glaciares National Park leads to a glacial lake perched directly below the granite walls of Mount Fitz Roy. The final 45-minute climb is brutally steep, but the reward — the granite tower reflected in turquoise water — is one of the most dramatic mountain panoramas in the world.",
    highlights: [
      'Close-range view of Fitz Roy\'s 3,405m granite spire reflected in glacial turquoise water',
      'Mirador Fitz Roy and Laguna Capri en route offer excellent build-up views',
      'Laguna Sucia (adjacent) holds a hanging glacier below a secondary rock face',
      'Camp Poincenot (backcountry shelter, USD ~$14/night) enables a calmer early-morning approach',
      'Sunrise reflections at the lake are legendary — requires previous-night camping',
      'Return via Laguna Madre e Hija adds variety without significant extra distance',
      'No entrance fee or permit required',
      'Trail starts from the north edge of El Chaltén town'
    ],
    tip: 'Start by 5–6am to reach the final climb before afternoon winds. The last 300m gain is steep and loose — poles recommended. Camp Poincenot has toilets and potable water. Total 22km round-trip, 900m elevation gain.',
    weather: 'Nov–Dec: 10–15°C; daylight extends to 20+ hours in Dec. Wind peaks in afternoon — 60+ km/h gusts on the exposed upper section. Mornings are dramatically calmer.',
    difficulty: 'Hard',
    duration: '8–9 hours return',
    multiday: false,
  },

  {
    id: 'laguna-torre',
    name: 'Laguna Torre',
    cat: 'hiking',
    sub: 'El Chaltén · Cerro Torre base lake',
    lat: -49.343, lng: -72.998,
    summary: "This long valley walk leads to a glacial lake at the base of the impossibly slender Cerro Torre — considered one of the hardest mountains in the world to climb. The moraine viewpoint above the lake delivers an intimate, close-range look at the spire, its hanging glacier, and the dramatic Adela Range to the south.",
    highlights: [
      'Direct close-up view of Cerro Torre\'s 3,128m granite needle',
      'Glacial lake fed by the Cerro Torre glacier — floating ice common in early season',
      'Mirador Maestri on the lateral moraine: the best elevated viewpoint of the spire',
      'Less exposed to wind than the Fitz Roy route on the upper sections',
      'Can be combined with Laguna de Los Tres via Lagunas Madre e Hija for a 2–3 day loop',
      'River valley approach through lenga beech forest',
      'No entrance fee or permit required',
      '18km round-trip with 400m total elevation gain'
    ],
    tip: 'Trail begins from the south end of El Chaltén. The final moraine section is loose and steeper — take care on descent. Allow extra time to sit at the lake; Cerro Torre often reveals itself gradually as cloud burns off.',
    weather: 'Nov–Dec: 10–15°C. Valley approach is partly sheltered; final moraine and lakeshore are exposed to westerly winds. Afternoons windier — start early.',
    difficulty: 'Moderate',
    duration: '6–7 hours return',
    multiday: false,
  },

  {
    id: 'mirador-laguna-capri',
    name: 'Mirador Laguna Capri',
    cat: 'hiking',
    sub: 'El Chaltén · Accessible Fitz Roy viewpoint',
    lat: -49.311, lng: -72.917,
    summary: "A popular half-day hike offering the first proper view of Mount Fitz Roy reflected in a small glacial lake, accessible to most fitness levels. It sits on the route to Laguna de Los Tres and works well as a standalone destination or as an acclimatisation day before tackling the longer circuits.",
    highlights: [
      'Classic reflection of Fitz Roy in calm glacial water — excellent photography',
      'Accessible for fit walkers without mountaineering experience',
      'Mirador Fitz Roy extension adds 40 minutes and a higher vantage point',
      'First major viewpoint on the Laguna de Los Tres trail — easy starting goal',
      'Lenga beech forest with occasional guanaco sightings',
      'Good orientation to the Fitz Roy massif before committing to longer routes',
      'No permit or fee required',
      '10km round-trip, 400m elevation gain'
    ],
    tip: 'Ideal half-day hike or warm-up walk. Combine with the short detour to Mirador Fitz Roy for a broader panorama. Trail is clearly signed from El Chaltén\'s northern entrance.',
    weather: 'Nov–Dec: 10–15°C, long daylight hours. Sheltered in the lower forest sections; exposed from the lake upward. Afternoon winds.',
    difficulty: 'Easy',
    duration: '3–5 hours return',
    multiday: false,
  },

  {
    id: 'loma-pliegue-tumbado',
    name: 'Loma del Pliegue Tumbado',
    cat: 'hiking',
    sub: 'El Chaltén · High ridge panorama',
    lat: -49.278, lng: -72.825,
    summary: "This exceptional ridge hike climbs to 1,500m — high above the valley floor — delivering the only 360-degree panoramic view of both the Fitz Roy and Torre massifs at once, plus an unobstructed sweep of the Southern Patagonian Ice Field stretching to the horizon. A completely different perspective from every other hike in the area.",
    highlights: [
      '360-degree panorama: Fitz Roy, Cerro Torre, and the full breadth of the Southern Patagonian Ice Field',
      'The only trail that views Fitz Roy from its southeast face — a unique angle',
      'Southern Patagonian Ice Field visible in its full scale from above — raw and humbling',
      'Views extend 60+ km across the ice field on clear days',
      'Optional summit extension adds 280m of gain for an even wider vista',
      'Fewer crowds than the main Fitz Roy / Torre trails',
      'Constantly changing perspectives with elevation throughout the ascent',
      '1,100m total elevation gain from trailhead'
    ],
    tip: 'Allow 8–10 hours for the summit extension. Start very early — the exposed ridge is brutal in afternoon wind (60+ km/h is common). Bring windproof layers even in warm weather. Trail starts from the south end of El Chaltén near the river crossing.',
    weather: 'Nov–Dec: 10–15°C in town, significantly colder on the ridge. Wind on the exposed upper section is the main hazard; midday gusts regularly exceed 60 km/h. Morning starts essential.',
    difficulty: 'Hard',
    duration: '8–10 hours return',
    multiday: false,
  },

  {
    id: 'chorrillo-del-salto',
    name: 'Chorrillo del Salto',
    cat: 'hiking',
    sub: 'El Chaltén · Glacial waterfall walk',
    lat: -49.318, lng: -72.893,
    summary: "El Chaltén\'s most accessible family-friendly walk leads to a 20-metre waterfall formed by glacial meltwater from the Fitz Roy massif. The short forest trail along the river makes this an ideal first outing after arriving — or an active rest day between harder hikes.",
    highlights: [
      '20-metre waterfall from Fitz Roy glacial meltwater — thundering in Nov–Dec snowmelt',
      'Flat, clear trail through lenga beech forest with minimal elevation gain',
      'Guanaco and Andean condor sightings common along the river valley',
      'Only 1km from the RN 23 parking area (or 3km walk from town)',
      'Suitable for children and non-hikers',
      'Good birding along the river, including Austral parakeets and patagonian woodpeckers',
      'Trailhead accessible by car or easy walk from town',
      'No permit or fee required'
    ],
    tip: 'If driving, the round-trip from the roadside parking area is just 2km (30–45 minutes). Walking from town centre adds 6km return. Bring windproof layers; even short walks here can be cold in wind.',
    weather: 'Nov–Dec: 10–15°C, waterfall flow peaks in December with active snowmelt. Morning walks are calmer before afternoon gusts.',
    difficulty: 'Easy',
    duration: '1.5–2 hours return',
    multiday: false,
  },

  {
    id: 'piedra-del-fraile',
    name: 'Piedra del Fraile',
    cat: 'hiking',
    sub: 'El Chaltén · Remote valley basecamp',
    lat: -49.382, lng: -73.008,
    summary: "Piedra del Fraile is a remote mountain basecamp in the dramatic Río Eléctrico valley, accessed via one of the area\'s most scenic approaches. The vivid orange-red rock walls of Cerro Eléctrico dominate the skyline, and the camp serves as a jumping-off point for Lago Eléctrico, Pollone Lagoon, views of the Marconi Glacier, and more technical mountaineering objectives.",
    highlights: [
      'Spectacular approach along Río Eléctrico — electric blue glacial water flanked by forest',
      'Cerro Eléctrico\'s reddish-orange rock walls rising directly above the camp',
      'North face of Mount Fitz Roy visible from the upper valley sections',
      'Lago Eléctrico — a further 9km from basecamp — offers a pristine high-altitude lake',
      'Gateway to Paso del Cuadrado and advanced mountaineering routes',
      'Pollone Lagoon and Marconi Glacier accessible on day hikes from camp',
      'Far fewer visitors than the main Fitz Roy / Torre trails',
      'Basic shelter at the camp; riverside wild camping on approach'
    ],
    tip: 'Located 16km north of El Chaltén via RP 41, then a 2-hour walk from the bridge over Río Eléctrico. Basic camp facilities. Bring all supplies from El Chaltén. Allow 4–5 hours beyond camp to reach Lago Eléctrico. A guide is useful for the Paso del Cuadrado extension.',
    weather: 'Nov–Dec: 10–15°C. More sheltered than exposed ridges but snowmelt peaks in December, raising river levels on crossings. Wind is a constant factor.',
    difficulty: 'Hard',
    duration: '2–3 day recommended',
    multiday: true,
  },

  {
    id: 'huemul-circuit',
    name: 'Huemul Circuit',
    cat: 'hiking',
    sub: 'El Chaltén · 4-day ice field wilderness loop',
    lat: -49.355, lng: -72.825,
    summary: "The Huemul Circuit is widely considered the most challenging and rewarding backcountry trek in Patagonia. This 64km four-day loop crosses high mountain passes, glacier moraines, and Tyrolean traverses over swollen glacial rivers — delivering full panoramic views of the Southern Patagonian Ice Field from multiple vantage points that no other trail can match.",
    highlights: [
      'Only trek offering full panoramic aerial views of the Southern Patagonian Ice Field',
      'Tyrolean traverses over fast-moving glacial rivers — harness and rope required',
      'Three major mountain passes with 3,000+ feet total elevation gain',
      'Knee-deep river crossings and moraine scrambling',
      '64km loop through terrain that is unmarked on sections',
      'Mandatory free permit from the ranger station in El Chaltén',
      'Weather windows on Day 2–3 passes can close for days — flexibility essential',
      'Genuine expedition-style trekking: no services, no rescue infrastructure beyond El Chaltén'
    ],
    tip: 'Free permit required from El Chaltén ranger station (CHALTEN TREK). Mandatory gear: harness, 2 carabiners, safety line, 20m thin cord. Days 2–3 passes impassable in high winds — check conditions daily. Bring 4 days of food minimum. Strong hiking experience and emergency first aid essential; local guide strongly recommended for first-timers.',
    weather: 'Nov–Dec is spring; 10–15°C temperatures but severe exposure on passes. Snowmelt peaks in December, making river crossings more dangerous. Optimal season is December–February. Start each day as early as possible.',
    difficulty: 'Very Hard',
    duration: '4 days',
    multiday: true,
  },

  {
    id: 'paso-del-cuadrado',
    name: 'Paso del Cuadrado',
    cat: 'hiking',
    sub: 'El Chaltén · Remote high pass above the ice field',
    lat: -49.432, lng: -72.988,
    summary: "One of the most demanding and seldom-walked routes in the region, Paso del Cuadrado climbs over 1,000m from Piedra del Fraile basecamp to a wild, windswept pass with a unique northwest perspective of the Fitz Roy massif and an unobstructed view over the Southern Patagonian Ice Field below. This is serious, unmarked terrain for experienced mountain travellers only.",
    highlights: [
      'Unique northwest perspective of Fitz Roy — a viewpoint unavailable from any standard trail',
      'Sweeping view over the Southern Patagonian Ice Field from the pass',
      'Over 1,000m elevation gain on unmarked terrain requiring route-finding',
      'Scree fields, exposed ridges, and technical scrambling sections',
      'Early-season crampons may be needed on north-facing snowfields',
      'Consistently strong wind exposure on the upper ridge (60+ km/h)',
      'Rarely visited — genuine remote Patagonia experience',
      'Requires comfort with technical terrain and emergency self-sufficiency'
    ],
    tip: 'Start from Piedra del Fraile; allow 8+ hours for the pass and return. Not a marked trail — route-finding and scrambling ability essential. Bring crampons in November. Afternoon wind on the ridge is often severe enough to prevent standing upright. Hire a local guide for safety and navigation.',
    weather: 'Nov–Dec: passable but spring snow lingers on shaded slopes. Summit ridge wind consistently exceeds 60 km/h in afternoon. Start before 7am.',
    difficulty: 'Very Hard',
    duration: '10–12 hours from Piedra del Fraile',
    multiday: false,
  },

  {
    id: 'mirador-del-torre',
    name: 'Mirador del Torre',
    cat: 'hiking',
    sub: 'El Chaltén · Half-day Cerro Torre viewpoint',
    lat: -49.335, lng: -72.910,
    summary: "A shorter, lower-key alternative to the full Laguna Torre trek, Mirador del Torre is a half-day walk along the Fitz Roy River valley that delivers direct views of Cerro Torre\'s spire and the Adela Range without the full 18km commitment. Ideal as an acclimatisation walk, rest-day activity, or late-afternoon outing.",
    highlights: [
      'Clear sightline to Cerro Torre from the valley floor',
      'Shorter and less strenuous than Laguna Torre — good first walk after arrival',
      'Follows the Río Fitz Roy with views of several subsidiary peaks',
      'Partially forested with lenga beech — good birdwatching',
      'Can be extended to the Laguna Torre lateral moraine for committed walkers',
      'Northeast-facing views catch excellent morning light',
      'No permit or fee required',
      'Well-marked trail from the southern end of El Chaltén'
    ],
    tip: 'Allow 2–3 hours return from town. Pair with an afternoon at the Chorrillo del Salto waterfall or the Mirador Laguna Capri for a varied full day.',
    weather: 'Nov–Dec: 10–15°C, river valley provides some shelter. Afternoon wind is the main issue — early starts or evening walks are best.',
    difficulty: 'Easy',
    duration: '2–3 hours return',
    multiday: false,
  },

  // ── O'HIGGINS / SAN MARTÍN / BORDER REGION ──────────────────────────────

  {
    id: 'candelario-mancilla',
    name: 'Candelario Mancilla',
    cat: 'hidden',
    sub: 'Lago O\'Higgins / San Martín · Remote cross-border hub',
    lat: -48.833, lng: -72.633,
    summary: "A tiny Argentine settlement on the southern shore of Lago O\'Higgins/San Martín, Candelario Mancilla is one of the most remote inhabited outposts on the continent — and the critical hinge point of the legendary Villa O\'Higgins→El Chaltén border crossing. The O\'Higgins Glacier boat tour stops here; trekkers rest before the long push south.",
    highlights: [
      'Key waypoint on the legendary Villa O\'Higgins → El Chaltén trekking/boat route',
      'Named after pioneer José Candelario Mancilla Uribe, who settled here in 1927',
      'Accessible only by boat from Villa O\'Higgins or by multi-day trek from Lago del Desierto',
      'Stop on the Glaciar O\'Higgins boat tour — panoramic lake views from the Argentine shore',
      'Trailhead for the onward trek south toward Lago del Desierto and El Chaltén',
      'Argentine immigration post — stamp passports before continuing south',
      'Views across the turquoise lake to the Northern Patagonian Ice Field',
      'Minimal infrastructure adds to the authenticity of the wilderness approach'
    ],
    tip: 'No commercial lodging — camping only. Bring all supplies from Villa O\'Higgins or El Chaltén. The O\'Higgins Glacier tour stops here briefly; trekkers on the border crossing spend the night before the onward push. Confirm Argentine immigration hours in advance.',
    weather: 'Nov–Dec: 8–14°C with long daylight hours. Exposed shoreline — wind can be significant. Changeable Patagonian conditions; plan for all weather.',
  },

  {
    id: 'paso-mayer',
    name: 'Paso Mayer Border Crossing',
    cat: 'hiking',
    sub: 'Chile–Argentina · Wild backcountry border route',
    lat: -48.720, lng: -72.502,
    summary: "Paso Mayer is one of the world\'s most remote official land crossings, connecting the Villa O\'Higgins area to Argentine Patagonia via an unmarked 100km mountain route. Used by fewer than 4,000 travellers per year — almost exclusively adventurous cyclists and experienced backpackers — it involves multiple river crossings, unmarked terrain, and genuine wilderness isolation.",
    highlights: [
      'Official open-year border crossing with under 4,000 annual users',
      'Single or double track trail, frequently indistinct — route-finding required',
      'Multiple creek and river crossings demanding knee-high fording',
      'Mountain pass with the actual border marker at the highest point',
      'Snowmelt in Nov–Dec makes river crossings the most serious challenge',
      'Legendary among adventurous cyclists riding the Pan-American route south',
      'No services whatsoever between Villa O\'Higgins and El Chaltén',
      'The journey itself — 2–3 days of absolute wilderness — is the experience'
    ],
    tip: 'Stamp out at Villa O\'Higgins Chilean post, then stamp in at the Argentine border post en route. Allow 2–3 days. Bring a detailed map and compass — GPS strongly recommended. Rivers swell dramatically in December snowmelt; many consider this crossing safer in March–April when water levels drop. Local guides available in Villa O\'Higgins.',
    weather: 'Nov–Dec: 8–14°C but extreme exposure on the pass. Snowmelt peaks in December — river crossings at their most dangerous. Spring wind is constant. March–April often safer and drier.',
    difficulty: 'Very Hard',
    duration: '2–3 days',
    multiday: true,
  },

  {
    id: 'lago-del-desierto',
    name: 'Lago del Desierto',
    cat: 'adventure',
    sub: 'Argentina · Remote glacial lake on the Chile border',
    lat: -49.122, lng: -72.682,
    summary: "Lago del Desierto (Desert Lake) is a remote emerald glacial lake tucked into a high valley on the Argentine side of the border, just 37km north of El Chaltén. The drive and short walk to the lakeside viewpoint is accessible to anyone; the full trek route through Laguna Larga connects onward to Candelario Mancilla and the Villa O\'Higgins crossing — making this lake the southern entry point of one of Patagonia\'s greatest adventures.",
    highlights: [
      'Emerald glacial lake in a steep, untouched valley — far fewer visitors than Fitz Roy area',
      'Accessible by 4WD road from El Chaltén (37km, 1 hour)',
      'Short walk to the north shore and a Glaciar Vespignani viewpoint',
      'Full trekking route continues north via Laguna Larga to Candelario Mancilla',
      'Boat service across the lake in peak season reduces trekking time significantly',
      'Condors regularly soar above the southern shore cliffs',
      'Part of the legendary cross-border Villa O\'Higgins → El Chaltén trekking route',
      'Genuine frontier feel: limited infrastructure, pristine scenery'
    ],
    tip: 'Drive RP 23 north from El Chaltén; 4WD recommended for the final section. Boat across the lake (seasonal, check locally) saves hours of walking. If trekking to Candelario Mancilla, allow 2 full days and bring all camping gear. Immigration check possible at the lake — carry passport.',
    weather: 'Nov–Dec: 10–15°C. Valley location offers some shelter. Glacial snowmelt affects water crossings on the northern continuation route.',
  },

  // ── GLACIER EXPERIENCES ──────────────────────────────────────────────────

  {
    id: 'glaciar-viedma',
    name: 'Glaciar Viedma',
    cat: 'adventure',
    sub: 'Lago Viedma · Argentina\'s largest glacier',
    lat: -49.500, lng: -72.900,
    summary: "Glaciar Viedma is Argentina\'s largest glacier and one of the most dramatic in the entire Southern Patagonian Ice Field — 78km long and covering 978 km². Just 18km from El Chaltén, a full-day boat excursion on Lago Viedma reaches its 40-metre-high ice face, with options for crampon treks onto the glacier surface itself.",
    highlights: [
      'Argentina\'s largest glacier: 78km long, 978 km², 40-metre-high ice face',
      'Less crowded than Perito Moreno — equally dramatic at a fraction of the visitors',
      'Lake navigation among floating icebergs to approach the glacier face',
      'Minitrek option: 1.5 hours on the ice with crampons exploring crevasses and ice caves',
      'Full adventure option: 6–7 hours including boat + 2.5-hour crampon ice trek',
      'Panoramic trail on Cabo de Hornos Peninsula for elevated views',
      'Huemul Circuit (Day 3) offers a rare bird\'s-eye aerial view of this glacier from above',
      'Turquoise Lago Viedma surrounding the glacier is itself a spectacular setting'
    ],
    tip: 'Tours depart from Bahía Túnel (18km from El Chaltén via RP 23). Book through local operators in El Chaltén town. Lake navigation alone: 2.5 hours. Ice trek: add 2.5 hours with crampons provided. Total 6–7 hours. Dress in warm layers; the glacier creates its own cold microclimate.',
    weather: 'Nov–Dec: active glacier melting creates dynamic iceberg formations. 10–15°C on the lake but much colder near the ice face. Wind exposure on the open water — bring windproof outer layers.',
  },

  // ── ARGENTINA GATEWAY — EL CALAFATE REGION ───────────────────────────────

  {
    id: 'el-calafate',
    name: 'El Calafate',
    cat: 'cities',
    sub: 'Santa Cruz, Argentina · Glacier gateway town',
    lat: -50.3443, lng: -72.2625,
    summary: "El Calafate is the main gateway to Los Glaciares National Park and the undisputed logistical hub for the entire southern Argentine Patagonia region. A modern, well-serviced town of around 25,000 people on the southern shore of Lago Argentino, it offers direct flights from Buenos Aires and connects easily to El Chaltén (3 hours), Perito Moreno Glacier (1.5 hours), and the Upsala/Spegazzini boat tours.",
    highlights: [
      'Direct LATAM/Aerolíneas flights from Buenos Aires (3 hours) — the most practical entry point',
      'Fully equipped: restaurants, ATMs, pharmacies, gear shops, car rental agencies',
      'Intendencia del Parque Nacional Los Glaciares — free museum and park information centre',
      'Hub for all Perito Moreno, Upsala, and Spegazzini glacier tours',
      '3-hour drive north to El Chaltén on RN 40 — an excellent scenic road trip',
      'Lago Argentino waterfront walk with sunset views across the lake',
      'Centro de Interpretación Histórica — good introduction to Patagonian natural and human history',
      'Accommodation ranges from hostels (USD $20+) to upscale estancias (USD $300+/night)'
    ],
    tip: 'Book accommodation ahead for Dec–Feb peak season. Most glacier tours depart 7–8am; plan 2–3 nights to cover different excursions without rushing. Rent a car here for maximum flexibility. The town is very walkable. Blue-dollar exchange gives significantly better rates than official — USD cash is king.',
    weather: 'Nov–Dec: 10–16°C with long daylight. Wind is strong but town is less exposed than high altitude. Most activities and tours operate year-round.',
  },

  {
    id: 'perito-moreno',
    name: 'Perito Moreno Glacier',
    cat: 'adventure',
    sub: 'Los Glaciares NP · Argentina\'s most iconic glacier',
    lat: -50.4885, lng: -73.1535,
    summary: "Perito Moreno is one of the world\'s few advancing glaciers and the most accessible large glacier on the planet. Its 5km-wide, 70-metre-high blue-white ice face advances into a narrow channel of Lago Argentino, periodically damming the lake and then rupturing in a catastrophic flood — a natural spectacle that has no equal. The walkway system puts you at arm\'s length from one of Earth\'s most alive places.",
    highlights: [
      'One of the world\'s only advancing glaciers — grows 2 metres per day; calves and retreats 1.7m/day',
      'Walkway system with multiple levels brings you within metres of the ice face',
      'Iceberg calving events every few minutes — audible as cannon fire across the lake',
      'Minitrekking: guided 1.5-hour crampon walk on the glacier surface (USD ~$80)',
      'Full ice trek: 3-hour guided walk exploring crevasses and moulin wells (USD ~$150)',
      'Kayaking in the calving channel among icebergs — surreal perspective from water level',
      'Third-largest freshwater reserve on the planet after Antarctica and Greenland',
      'Views from the balcony walkways at different elevations work for all fitness levels'
    ],
    tip: 'Drive or take a tour from El Calafate (80km, 1.5 hours). Walkways are free with national park entry (~USD $30). Book ice treks and kayak tours the day before through operators in El Calafate. Bring layers — the glacier creates its own wind and cold. Afternoon light hits the ice face directly.',
    weather: 'Nov–Dec: 10–15°C on the walkways; noticeably colder at ice level. December snowmelt increases calving frequency. Best morning light for photography; afternoon wind rises.',
  },

  {
    id: 'glaciar-upsala-spegazzini',
    name: 'Glaciares Upsala & Spegazzini Boat Tour',
    cat: 'adventure',
    sub: 'Lago Argentino · Full-day multi-glacier navigation',
    lat: -50.225, lng: -73.187,
    summary: "The \'Todo Glaciares\' full-day boat cruise is the most comprehensive glacier experience in Los Glaciares National Park, navigating the vast Lago Argentino to approach five major glaciers in a single day. The highlight is Spegazzini — the tallest glacier in the park with near-vertical 135-metre ice walls — and Upsala, once the largest glacier in South America.",
    highlights: [
      'Upsala Glacier: one of the largest in Patagonia — 50km long, visibly retreating at pace',
      'Spegazzini Glacier: the tallest in the park with 135m-high near-vertical ice walls',
      'Five glaciers visited in a single day from one boat tour',
      'Disembarkation at Base Spegazzini for a short forest walk at the foot of the ice',
      'Modern equipped cruise ships with restaurant and heated interiors',
      'Gourmet Glaciers option includes traditional Patagonian lamb asado on board',
      'Dense iceberg field in Upsala arm — navigation through floating ice blocks',
      'Panoramic Southern Patagonian Ice Field views from the open deck'
    ],
    tip: 'Tours depart from Puerto Punta Banderas (47km from El Calafate; arrange transport or self-drive). Depart ~7am, return ~5–6pm. Dress in multiple warm layers — open deck wind is extreme. Sunscreen essential; glare off ice and water is intense. Book through operators in El Calafate; costs USD $200–350+.',
    weather: 'Nov–Dec: 8–14°C on open water with strong westerly wind. Weather can deteriorate rapidly; tours occasionally cancelled in high winds. Morning departures give the best light on the ice.',
  }

);
