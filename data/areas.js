// ─── AREAS DATA ──────────────────────────────────────────────────────────────
// Each area is a focused geographic region shown in the "Areas" tab.
// Activating an area hides the global destination markers and overlays
// area-specific POIs + a polygon boundary on the map.

var AREAS = [
  {
    id: 'lago-villarrica',
    name: 'Lago Villarrica & Surroundings',
    sub: 'Araucanía Region · Lake District · ~227m elevation',
    summary: 'A volcanic lake flanked by the smoking cone of Volcán Villarrica and dense araucaria forests. With a car from Pucón or Villarrica you can reach hot springs, national parks, pristine mountain lakes, and waterfalls — most within 40–60 km. November–December is ideal: the volcano is climbable, the lake warm enough to swim, parks accessible.',
    center: [-39.37, -72.07],
    zoom: 10,
    polygonColor: '#6366F1',

    // Day-trip boundary covering the lake, both flanking national parks,
    // the hot springs corridor, and Lago Calafquén to the south
    polygon: [
      [-39.00, -72.44],
      [-38.92, -72.10],
      [-38.84, -71.82],
      [-38.96, -71.62],
      [-39.28, -71.65],
      [-39.56, -71.76],
      [-39.85, -72.08],
      [-39.68, -72.44],
      [-39.38, -72.54],
      [-39.05, -72.50],
      [-39.00, -72.44]
    ],

    pois: [

      // ── TOWNS & CITIES ──────────────────────────────────────────────────

      {
        id: 'pucon-town',
        name: 'Pucón',
        type: 'town',
        lat: -39.2721, lng: -71.9773,
        sub: 'Adventure capital of the lake district',
        summary: 'Pucón is the logistical hub and social heart of the region. Every adventure operator, gear shop, supermarket, pharmacy, and ATM you need is within a few blocks of Calle O\'Higgins. The smoking volcano dominates the skyline. The town is compact and walkable — you can do everything on foot once parked.',
        highlights: [
          'Calle O\'Higgins: the main strip with all outfitters, gear shops, restaurants, and supermarkets',
          'Playa Grande: main lake beach 5-min walk from center — dark sand, clean water, kayak rentals',
          'Costanera: lakeside promenade with café terraces and SUP hire',
          'Feria Artesanal: craft market near the bus terminal — woodwork, leatherwork, woollens',
          'Dozens of adventure agencies: volcano hikes, rafting, kayaking, horse riding, canopy, paragliding',
          'Microbreweries and lake-view restaurants — El Árbol de Fuego and La Maga are worth seeking out',
          'Supermercado Unimarc (well-stocked) and two smaller co-ops for self-catering',
          'ATMs available (bring cash for remote hot springs and park entries)'
        ],
        tip: 'Park on or near O\'Higgins; most things are walkable from there. Book volcano hikes at least a day ahead — bad-weather cancellations are common and you want a backup day. The town gets very busy from December 15 onward.',
      },
      {
        id: 'villarrica-town',
        name: 'Villarrica',
        type: 'town',
        lat: -39.2797, lng: -72.2277,
        sub: 'Regional city with real market life and Mapuche heritage',
        summary: 'Villarrica is the actual commercial center of the region — twice the size of Pucón, far less touristy, and significantly cheaper. You\'ll find a genuine Mapuche market, the best local supermarkets, good restaurants without the adventure premium, and a quieter black-sand beach on the western lake shore.',
        highlights: [
          'Mercado Municipal: covered market with fresh produce, smoked meats, cheeses, local bread and empanadas',
          'Feria Artesanal Mapuche: authentic hand-woven textiles, silverwork (platería), and carved wood — not tourist kitsch',
          'Museo Histórico y Arqueológico Municipal: small but well-curated Mapuche collection — 45 min well spent',
          'Playa Los Boldos (Playa Negra): black volcanic sand beach on the western lake shore — far quieter than Pucón',
          'Real local restaurant scene: llama stew, curanto, casuela — half the price of Pucón',
          'Main bus hub for routes south (Osorno, Puerto Montt, Chiloé) — useful for onward travel'
        ],
        tip: 'Drive the southern lake road from Pucón (26km along the shore) rather than the fast inland highway — lake views the whole way. Worth a half-day or full day from Pucón.',
      },
      {
        id: 'licanray-town',
        name: 'Licán Ray',
        type: 'town',
        lat: -39.4874, lng: -72.1579,
        sub: 'Small beach resort on Lago Calafquén',
        summary: 'A relaxed, low-key resort town on the north shore of Lago Calafquén (not Villarrica — it\'s 30km south). Popular with Chilean families in January, but genuinely quiet in November. Two sandy beaches, a short pedestrian boulevard with local food stalls, and almost no foreign tourists.',
        highlights: [
          'Playa Grande and Playa Chica: twin sandy beaches with calm, swimmable water',
          'Pedestrian zone: artisan stalls and empanada spots — good cheap lunch',
          'Significantly quieter than Pucón — good rest-day destination',
          'Natural gateway south to Coñaripe and the hot springs corridor',
          'Dark sand beach stretches with views across the volcanic lake system'
        ],
        tip: 'Note that Licán Ray sits on Lago Calafquén, not Lago Villarrica — same volcanic system, different lake. A natural 30-min drive south from Villarrica and easily combined with Coñaripe and Termas Geométricas on a southern loop day.',
      },
      {
        id: 'conaripe-town',
        name: 'Coñaripe',
        type: 'town',
        lat: -39.5679, lng: -72.0075,
        sub: 'Hot springs gateway · eastern shore of Calafquén',
        summary: 'A small Mapuche-heritage town on the eastern shore of Lago Calafquén. The main reason to come is as the launchpad for Termas Geométricas (16km by gravel road). The town has a basic market, a fuel station (fill up here before the gravel road), and a rocky lakeside with fishing boats.',
        highlights: [
          'Last fuel station before Termas Geométricas — always fill up here',
          'Gateway to Termas Geométricas (16km gravel road into the volcanic cordillera)',
          'Termas de Coñaripe: hot springs option a few km from town',
          'Small but active Mapuche weaving co-operative — traditional looms',
          'Virtually no foreign tourism — genuine off-the-beaten-path lake stop',
          'Fishing boats on the shoreline — the lake is popular for trout and salmon'
        ],
        tip: 'Fill up with fuel here. The gravel road to Termas Geométricas is manageable in a normal car in dry conditions but gets rough after rain. Allow 25–30 min from Coñaripe to the termas.',
      },

      // ── VOLCANO ─────────────────────────────────────────────────────────

      {
        id: 'volcan-villarrica',
        name: 'Volcán Villarrica',
        type: 'volcano',
        lat: -39.4208, lng: -71.9392,
        sub: 'Active stratovolcano · 2,847m · One of the world\'s most active',
        summary: 'The most accessible lava-lake summit in the world and the defining experience of the region. From the crater rim you look directly down into a churning lava lake — raw, volcanic, extraordinary. The climb is non-technical but physically demanding. Guided groups depart Pucón at 6am and return by early afternoon. November–December are prime months with the best summit success rates.',
        highlights: [
          'Lava lake visible from the rim — one of very few in the world accessible to non-climbers',
          'Full-day guided ascent: 7–9 hours round-trip, all gear provided (crampons, helmet, ice axe)',
          'Descent via glissade: operators provide plastic sleds for a fast snowfield slide down',
          'On clear days: views extend to Volcan Lanín in Argentina and across the lake district',
          'Volcano base at 1,400m accessible by car (ski resort road, pistes closed Nov–Dec)',
          'Strong fitness required — 1,400m vertical gain on snow and scree',
          'Eruption risk managed by CONAF monitoring — trips cancelled if elevated activity'
        ],
        tip: 'Book with a Pucón agency at least 1–2 days ahead — trips are quota-controlled and weather-cancelled frequently. Cost ~CLP 80–100k (≈€75–90) per person including all gear and guide. Reserve a backup day in your schedule. Trips start at 6am sharp. Wear multiple warm layers — summit temperature can be −10°C even in December.',
        weather: 'November: excellent summit conditions, fewer crowds. December: more cloud risk in afternoons — always go on the earliest possible slot. Avoid going after recent heavy rain when rockfall risk increases.',
      },

      // ── NATIONAL PARKS & RESERVES ────────────────────────────────────────

      {
        id: 'huerquehue',
        name: 'Parque Nacional Huerquehue',
        type: 'park',
        lat: -39.1652, lng: -71.7252,
        sub: '12km from Pucón · Ancient araucaria forest · Lagos circuit trek',
        summary: 'The finest day hike accessible from Pucón, and one of the best in the lake district. The Lagos de Huerquehue circuit (12km, ~600m elevation gain) passes through ancient araucaria forest — some trees estimated over 1,000 years old — and reaches a series of turquoise lakes above the treeline. CONAF-managed, well-maintained, and genuinely stunning.',
        highlights: [
          'Los Lagos Trail: 12km loop, 600m gain — allow 5–6 hours at a comfortable pace',
          'Ancient araucaria (monkey puzzle) trees up to 50m tall and 1,000+ years old',
          'Lagos Tinquilco (park entrance), Verde, El Toro, and Huerquehue — each differently colored',
          'Nido de Cóndores viewpoint at the top: panoramic views of the entire lake district',
          'Native fauna: pudú (smallest deer in the world), Magellanic woodpecker, chucao tapacolo',
          'Clean, marked trail — poles helpful for the descent',
          'Camping available at Lago Tinquilco (pre-book with CONAF)'
        ],
        tip: 'Drive to the park entrance at Lago Tinquilco (36km from Pucón via paved road — no public transport). Arrive by 8am to avoid afternoon heat and crowds. CONAF entry fee ~CLP 8–10k. Bring snacks and 2L water minimum — nothing sold inside. The first 2km is the steepest — pace yourself.',
        weather: 'Nov–Dec: excellent. Afternoon cloud can build — start early. Trail can be muddy for a few days after heavy rain; the araucaria roots double as natural steps.',
      },
      {
        id: 'villarrica-np-palguin',
        name: 'Parque Nacional Villarrica — Palguin Sector',
        type: 'park',
        lat: -39.4138, lng: -71.8523,
        sub: 'Waterfalls, condors, and backcountry hot springs · ~35km from Pucón',
        summary: 'The southern extension of the national park that circles the volcano. The Palguin sector is reached by a gravel road and gives access to two major waterfalls, natural hot spring pools, and deep wilderness camping in old-growth beech forest. Far less visited than Huerquehue — you may have the trails to yourself.',
        highlights: [
          'Salto El Puma (~20m drop) and Salto La China: twin waterfalls via short forest trails',
          'Termas Palguin: natural geothermal pools inside the park with basic changing facilities',
          'Andean condors often spotted on thermals above the Palguin valley',
          'Old-growth coihue and lenga beech forest — some trees over 500 years old',
          'Wilderness camping at CONAF-designated sites along the river',
          'Virtually no other tourists — the experience feels genuinely remote'
        ],
        tip: 'Palguin road from Pucón is gravel but manageable in a normal car in dry conditions (30–40 min). Combine in a day with Termas Los Pozones (same road). CONAF entry applies for the park section.',
      },
      {
        id: 'santuario-cani',
        name: 'Santuario El Cañi',
        type: 'park',
        lat: -39.2552, lng: -71.7667,
        sub: 'Private araucaria reserve · 1,620m summit · Condors',
        summary: 'A 500-hectare private nature sanctuary northeast of Pucón, protecting one of the last intact old-growth araucaria forests in the region. Managed by a local conservation collective — entry fees go directly to conservation. The trail to the summit (1,620m, 5–6 hours) offers 360° views of three volcanoes simultaneously.',
        highlights: [
          'One of the finest surviving old-growth araucaria forests — centuries-old trees in untouched groves',
          'Summit at 1,620m with panoramic views: Villarrica, Quetrupillán, and Lanín all visible',
          'Condors and other raptors frequently ride thermals above the ridgeline',
          'Very few visitors compared to Huerquehue — genuinely off the tourist circuit',
          'Conservation income model: your entry directly funds forest protection',
          'Guided options bookable through Pucón agencies'
        ],
        tip: 'Entry requires a local guide (bookable in Pucón; ~CLP 30–40k pp) or prior arrangement with the collective. Drive northeast on Camino a Caburgua, watch for the signed El Cañi access track. Bring full hiking gear — the summit ridge is exposed.',
      },

      // ── LAKES ────────────────────────────────────────────────────────────

      {
        id: 'lago-caburgua',
        name: 'Lago Caburgua',
        type: 'lake',
        lat: -39.1278, lng: -71.7733,
        sub: 'Crystal-clear volcanic lake · 25km from Pucón',
        summary: 'Fed entirely by underground volcanic springs rather than surface rivers, Caburgua is one of the most transparent lakes in Chile — the water is an unreal turquoise-green that photographs like the Caribbean but sits at altitude in araucaria forest. Playa Blanca (white quartz sand) is the standout beach. No motorboats or jet skis — the lake stays calm and pristine.',
        highlights: [
          'Playa Blanca: white quartz sand beach with extraordinary water clarity (visibility 5m+)',
          'Playa Negra: black volcanic sand beach at the southern end — striking contrast',
          'Swimming, snorkeling, and kayaking in completely calm, motor-free water',
          'Native forest reaches right to the waterline — wild and undeveloped',
          'Ojos del Caburgua springs are 5km before the lake — combine in a half-day',
          'Small camping area near Playa Blanca (basic, self-sufficient)'
        ],
        tip: '25km from Pucón via the Caburgua road (mostly paved, short gravel section near end). Bring everything — no facilities at the main beaches. Morning light gives the best water color. Go on a weekday in November for true solitude.',
      },
      {
        id: 'lago-calafquen',
        name: 'Lago Calafquén',
        type: 'lake',
        lat: -39.5200, lng: -72.1500,
        sub: 'Second major lake · Licán Ray · Coñaripe · Seven Lakes Route',
        summary: 'The next lake south of Villarrica, part of the chain of seven interconnected lakes (Siete Lagos) that runs into Argentina. Darker volcanic sand beaches, araucaria hillsides, and the small towns of Licán Ray and Coñaripe on its shores. Significantly less visited than Lago Villarrica.',
        highlights: [
          'Dark volcanic sand beaches with clear mountain lake water',
          'Licán Ray on the north shore: small resort with twin sandy beaches',
          'Coñaripe on the south shore: Mapuche heritage and hot spring gateway',
          'Part of the Seven Lakes scenic route toward Junín de los Andes, Argentina',
          'Fishing: rainbow trout and introduced salmon — fly fishing is exceptional',
          'Very few foreign tourists even in December — genuinely local scene'
        ],
        tip: 'A natural loop drive: Pucón → Licán Ray → Coñaripe → Termas Geométricas → return. Full-day circuit, highly recommended as a dedicated day trip.',
      },

      // ── HOT SPRINGS ──────────────────────────────────────────────────────

      {
        id: 'termas-geometricas',
        name: 'Termas Geométricas',
        type: 'hotspring',
        lat: -39.5017, lng: -71.8747,
        sub: 'The finest thermal baths in Chile · ~60km from Pucón',
        summary: 'Widely regarded as the best hot springs in the country and some of the finest in South America. Seventeen geometric slate pools cascade down a narrow steaming ravine, fed by volcanic groundwater at 35–45°C. The design — by Chilean architect Germán del Sol — integrates the pools seamlessly into the landscape. An expensive but unforgettable experience.',
        highlights: [
          '17 pools at varying temperatures (35–45°C) stepping down through a forested ravine',
          'Striking minimalist slate architecture that won national design awards',
          'The ravine fills with steam at dawn — one of the most atmospheric settings imaginable',
          'Sauna, changing rooms, and a small café on site',
          'Evening sessions available by separate booking — candles, rain sounds, and lit pools',
          'The pools are kept strictly clean — no sunscreen, food, or phones inside the pool zone'
        ],
        tip: 'Book online well in advance (geometricas.cl) — slots fill days ahead in November/December. Day entry ~CLP 35–40k (≈€30–35) per person. The gravel road from Coñaripe takes 25–30 min. A rainy-day or overcast visit is actually ideal — the steam and forest dripping is atmospheric. Get there at opening time for the quietest experience.',
        weather: 'Year-round accessible (road may close in heavy snow, unlikely Nov–Dec). A slightly cool or misty day makes the warm pools feel even better.',
      },
      {
        id: 'termas-pozones',
        name: 'Termas Los Pozones',
        type: 'hotspring',
        lat: -39.2260, lng: -71.6450,
        sub: 'Cheap roadside hot pools · 35km from Pucón',
        summary: 'The most accessible and affordable thermal option near Pucón — a series of outdoor rock pools beside the Liucura river on the road toward Palguin. Rustic, genuinely hot, and popular with local Chileans. No frills but real volcanic heat. Open day and night — night visits under the stars are a highlight.',
        highlights: [
          'Five stone pools of varying temperatures built against the forested riverbank',
          'River sound, tree canopy above, and steam rising — unpretentious and charming',
          'Night sessions under the stars — bring a torch for the path',
          'Changing rooms and basic facilities; small snack kiosk on site',
          'Perfectly positioned to combine with Palguin waterfalls on the same road'
        ],
        tip: 'Located ~35km from Pucón on the Palguin/Liucura road. Entry ~CLP 8–10k per person. Busy on weekends — go mid-week or on a weekday afternoon. The road continues to Salto El Puma and Salto La China — worthwhile combination.',
      },
      {
        id: 'termas-huife',
        name: 'Termas Huife',
        type: 'hotspring',
        lat: -39.2277, lng: -71.6574,
        sub: 'Upscale resort hot springs · 33km from Pucón',
        summary: 'The most developed and polished thermal resort in the area, set in a river valley with araucaria-covered hillsides. Three large outdoor pools, private tubs for small groups, a proper restaurant, and a lodge. More expensive than Los Pozones but cleaner facilities, far less crowded, and a genuinely relaxing atmosphere.',
        highlights: [
          'Three large outdoor thermal pools with mountain valley views',
          'Private river-edge tubs bookable for small groups',
          'On-site restaurant and bar — eat lunch while looking at the hills',
          'Accommodation available: could serve as an alternative base to Pucón',
          'Araucaria-forested hillsides visible from all pool areas'
        ],
        tip: 'Day entry ~CLP 20–25k. Reserve ahead for weekend visits (huife.cl). On the same road as Lago Caburgua — combine Huife with Caburgua and Ojos del Caburgua in a single day.',
      },
      {
        id: 'termas-menetu',
        name: 'Termas Menetué',
        type: 'hotspring',
        lat: -39.3300, lng: -71.7212,
        sub: 'Thermal park on the Curarrehue road · 30km northeast of Pucón',
        summary: 'A well-developed thermal park on the international road toward Curarrehue, about 30km northeast of Pucón along the Liucura valley. Set in native forest beside Laguna Ancapulli with four thermal pools at 32–40°C. More polished than Los Pozones, less expensive than Huife. A completely different direction from Coñaripe/Geométricas.',
        highlights: [
          'Four thermal pools at 32–40°C in native forest beside Laguna Ancapulli',
          'Accommodation available — cabins with private thermal tubs',
          'On the Pucón–Curarrehue road (the same road as El Cañi sanctuary)',
          'Much quieter than the main hot spring resorts closer to Pucón',
          'Good combination with El Cañi hike on the same road'
        ],
        tip: 'Located at km 30 on the Camino Internacional Pucón–Curarrehue (northeast of Pucón, not toward Coñaripe). Allow 35–40 min from Pucón. Book ahead on weekends.',
      },

      // ── NATURAL FEATURES / WATERFALLS ───────────────────────────────────

      {
        id: 'ojos-caburgua',
        name: 'Ojos del Caburgua',
        type: 'waterfall',
        lat: -39.2469, lng: -71.8428,
        sub: 'Underground volcanic river surfaces in turquoise pools · 21km from Pucón',
        summary: 'A geological curiosity: the outflow of Lago Caburgua disappears underground through porous volcanic rock and re-emerges 5km later as a series of brilliant turquoise pools surrounded by basalt columns. The water is vivid blue-green because it\'s been filtered through the rock and carries dissolved minerals.',
        highlights: [
          'Vivid turquoise pools appearing from seemingly solid rock — a genuinely surprising sight',
          'Dramatic basalt column formations around the pool edges',
          'Upper and lower pools connected by a short walkway and wooden stairs',
          'Swimming permitted in the lower pool in summer',
          'Entirely on the road to Lago Caburgua — a natural 10-min detour'
        ],
        tip: 'Easy 10-minute walk from roadside parking. Entry ~CLP 2–3k. Go before 10am for the clearest water color and fewest visitors. Combine with Lago Caburgua (5km further) as an obvious half-day.',
      },
      {
        id: 'salto-puma-china',
        name: 'Salto El Puma & Salto La China',
        type: 'waterfall',
        lat: -39.4220, lng: -71.8510,
        sub: 'Twin waterfalls in Parque Nacional Villarrica · Palguin sector',
        summary: 'Two distinct waterfalls in the Palguin sector of Villarrica National Park, reached by separate short forest trails from the same parking area. El Puma drops about 20m through old-growth coihue; La China is smaller but framed by dense ferns and feels more intimate.',
        highlights: [
          'Salto El Puma: ~20m drop through old-growth forest — powerful and photogenic',
          'Salto La China: smaller, more enclosed, with dense fern undergrowth',
          'Both reachable in 30–45 minutes round-trip from the car',
          'Old-growth coihue and lenga beech forest surrounding both falls',
          'Often combined with a thermal bath stop at Termas Los Pozones on the same road'
        ],
        tip: 'Located ~33km from Pucón on the Palguin gravel road. Visit in the morning before the hot springs in the afternoon for a full-day Palguin circuit.',
      },
      {
        id: 'ojos-caburgua-arc',
        name: 'Cascada del Arco Iris',
        type: 'waterfall',
        lat: -39.1600, lng: -71.8150,
        sub: 'Rainbow waterfall on the Caburgua road',
        summary: 'A small but photogenic waterfall on the forest edge near the Caburgua road, often producing a rainbow in the late morning spray — hence the name. A quick stop on the way to the lake, barely 15 minutes from the road.',
        highlights: [
          'Rainbow effect visible in mid-morning sun — best between 9–11am',
          'Short 15-min walk from the road through native forest',
          'Dense coihue and fern understory — the forest is part of the attraction',
          'Good natural photography stop on the Caburgua road'
        ],
        tip: 'Signposted from the Caburgua road. Aim for 9–11am for the rainbow. Combine with Ojos del Caburgua and Lago Caburgua in the same half-day.',
      },

      // ── ACTIVITIES ───────────────────────────────────────────────────────

      {
        id: 'rafting-trancura',
        name: 'Rafting — Río Trancura',
        type: 'activity',
        lat: -39.2600, lng: -71.8800,
        sub: 'Grade III–IV rapids · 10km east of Pucón',
        summary: 'The best whitewater rafting accessible from Pucón. The Trancura has two sections: Lower Trancura (Grade III, 2h, beginner-friendly) and Upper Trancura (Grade IV, 3h, more demanding). All gear — wetsuit, helmet, paddle, life vest — provided by operators. Book on Calle O\'Higgins in Pucón.',
        highlights: [
          'Lower Trancura (Grade III): suitable for beginners, families, and first-timers — pure fun',
          'Upper Trancura (Grade IV): more technical drops and longer commitment',
          'Volcanic canyon walls and araucaria forest along the banks',
          'Operators provide full gear — no experience required for the lower section',
          'Natural hot spring pools accessible after some rafting sections — operators often include a dip'
        ],
        tip: 'Book any agency on Calle O\'Higgins — prices are regulated (~CLP 20–30k per person for 2 hours). Morning trips are better: water levels are higher from overnight glacial melt. Combine with hot springs in the afternoon.',
      },
      {
        id: 'kayak-sup-lago',
        name: 'Kayaking & SUP — Lago Villarrica',
        type: 'activity',
        lat: -39.2682, lng: -71.9705,
        sub: 'Paddling with the volcano overhead · Pucón beachfront',
        summary: 'Paddling on Lago Villarrica with the smoking volcano reflected in the water is one of the region\'s iconic experiences. Outfitters on Playa Grande rent kayaks and stand-up paddleboards by the hour. Guided half-day tours reach wild coves inaccessible by road.',
        highlights: [
          'Unobstructed volcano views from the water — the reflection in calm morning conditions is extraordinary',
          'Hourly kayak and SUP rentals directly from Playa Grande beachfront',
          'Guided 2–3 hour cove tours to spots unreachable by road or foot',
          'Calm morning lake surface — afternoon westerlies build from noon onward',
          'Swimming from the kayak in clean, tepid water (17–20°C in Nov, warmer Dec)'
        ],
        tip: 'Go before 11am — afternoon winds can make paddling back shore more work than expected. Outfitters are right on the beach; hourly rentals cost ~CLP 6–8k per person.',
      },
      {
        id: 'horse-riding',
        name: 'Horse Riding — Mapuche Trails',
        type: 'activity',
        lat: -39.2900, lng: -71.9200,
        sub: 'Traditional Mapuche estancias in the lake hills',
        summary: 'Several family-run Mapuche estancias around Pucón offer horse riding through araucaria forest, ridgeline viewpoints, and lakeside farmland. Half-day and full-day routes available. Peaceful, beautiful, and culturally grounded — the guides often share Mapuche history and land knowledge.',
        highlights: [
          'Traditional Mapuche horsemanship with family-owned horses and local knowledge',
          'Routes through araucaria forest, river crossings, and open hillside',
          'Lake and volcano panoramas from elevated forest trails',
          'Half-day (3h) and full-day options, usually including a traditional meal',
          'Suitable for beginners and children from about 8 years old'
        ],
        tip: 'Book through agencies in Pucón or directly with estancias along the Caburgua road (~CLP 25–40k for a half day). Wear long trousers (chaps often provided) and closed shoes. Reserve the day before.',
      },
      {
        id: 'mountain-biking',
        name: 'Mountain Biking — Lake Circuit & Forest Trails',
        type: 'activity',
        lat: -39.2721, lng: -71.9773,
        sub: 'Gravel roads and forest tracks from Pucón',
        summary: 'A network of gravel roads and forest tracks around the lake offers excellent mountain biking. The lake circumference is roughly 80km — doable over a long day. Shorter loops via the Caburgua road or toward Huerquehue are popular half-day options. Full-suspension MTBs available to rent in Pucón.',
        highlights: [
          'Lake circuit: ~80km mixed surface — epic full-day route with constant scenery',
          'Caburgua loop: ~50km combining the lake road with forest and a hot spring stop',
          'Technical forest singletrack options in Villarrica NP for advanced riders',
          'Flat lakeside sections mixed with forest climbs — good variety for all levels',
          'Rental bikes in Pucón: hardtail (~CLP 12k/day) and full-suspension (~CLP 18k/day)'
        ],
        tip: 'Rent at shops on O\'Higgins. Take extra water — shade is limited on the lake road. The Caburgua loop is the most rewarding middle-ground option (3–4 hours). Bring a repair kit and pump.',
      },
      {
        id: 'fly-fishing',
        name: 'Fly Fishing — Río San Pedro & Liucura',
        type: 'activity',
        lat: -39.2430, lng: -71.8680,
        sub: 'World-class trout rivers · guided float and wade trips',
        summary: 'The rivers draining the lake district are among the finest trout fishing rivers in the Southern Hemisphere. Río San Pedro, Río Liucura, and Río Trancura hold large rainbow and brown trout in clear, fast water. Local guides operate in Pucón; catch-and-release is standard.',
        highlights: [
          'Rainbow and brown trout up to 5kg in clear, volcanic-fed rivers',
          'Río San Pedro: classic big-river float fishing by drift boat',
          'Río Liucura: technical wade fishing in gin-clear water through araucaria forest',
          'Dry fly and nymph fishing — sight-fishing to rising fish in the evenings',
          'Full guide service includes all gear, waders, and a packed lunch',
          'November and December: prime season with stable water levels and active fish'
        ],
        tip: 'Half-day and full-day guided trips from Pucón (~USD 200–350 per person for a full day). A Chilean fishing license is required (available from guides or SERNAPESCA). Catch-and-release is mandatory on many sections.',
      },

      // ── BEACHES ──────────────────────────────────────────────────────────

      {
        id: 'playa-grande-pucon',
        name: 'Playa Grande — Pucón',
        type: 'beach',
        lat: -39.2682, lng: -71.9705,
        sub: 'Main beach · dark volcanic sand · volcano views',
        summary: 'The central beach of Pucón — a broad crescent of dark volcanic sand on the northern shore of Lago Villarrica. Clean and swimmable in November–December. Kayak, SUP, and catamaran rentals directly on the sand. The Volcán Villarrica looms over the water and the sunsets behind it are outstanding.',
        highlights: [
          'Broad dark-sand beach with a lifeguarded swimming area (from December)',
          'Direct views of the smoking volcano from the waterline',
          'Full range of water rentals: kayak, SUP, paddleboat, catamaran',
          'Costanera promenade behind the beach with café terraces',
          'Sunsets from the beach with the volcano silhouetted in orange and pink',
          'Water temperature: ~17–18°C in November, climbing to ~20°C by late December'
        ],
        tip: 'Best early morning (9–11am) for calm water and photography. Afternoons get windy from the west. The beach gets very crowded from December 20 onward — plan Pucón for before that if possible.',
      },
      {
        id: 'playa-negra-villarrica',
        name: 'Playa Los Boldos — Villarrica',
        type: 'beach',
        lat: -39.2830, lng: -72.2100,
        sub: 'Black volcanic sand · quiet local beach on the west shore',
        summary: 'A quieter alternative to Pucón\'s beach on the Villarrica side of the lake. Black volcanic sand, very few foreign tourists, and a genuine local Chilean beach atmosphere. A natural combination with a morning at the Villarrica market and museum.',
        highlights: [
          'Black volcanic sand — visually striking against the blue lake water',
          'Almost no foreign tourists — mainly local families from Villarrica',
          'Calmer water than Pucón and much less commercial',
          'Excellent eastern views across the lake toward the volcano'
        ],
        tip: 'Combine with the Mercado Municipal and the Mapuche artisan market for a full Villarrica morning.',
      },
      {
        id: 'playa-blanca-caburgua',
        name: 'Playa Blanca — Lago Caburgua',
        type: 'beach',
        lat: -39.1863, lng: -71.8126,
        sub: 'White quartz sand · crystal-clear water · lake district gem',
        summary: 'One of the most remarkable beaches in the Chilean lake district. White quartz sand — rare in a volcanic region — combined with water so clear you can see the bottom at 5 meters depth. No motorboats, no jet skis, no development on the shoreline. Native araucaria forest comes down to the water\'s edge.',
        highlights: [
          'White quartz sand — visually extraordinary next to the turquoise volcanic lake',
          'Water clarity exceptional: visibility exceeds 5m in calm conditions',
          'Motor-free lake: silent and completely calm in the mornings',
          'Araucaria and coihue forest at the waterline — wild, undeveloped feel',
          'Snorkeling possible — you can see river fish and bottom detail',
          'Small basic camping area nearby (no facilities — completely self-sufficient)'
        ],
        tip: 'Bring everything: food, water, sunscreen. 25km from Pucón (last section on gravel road). Morning visits give the best light and the calmest water. Perfect combination with Ojos del Caburgua on the same road.',
      },

      // ── VIEWPOINTS ───────────────────────────────────────────────────────

      {
        id: 'mirador-lago-volcan',
        name: 'Mirador Lago y Volcán',
        type: 'viewpoint',
        lat: -39.2780, lng: -72.1050,
        sub: 'Roadside panorama · lake and volcano in a single frame',
        summary: 'A well-known pull-off on the road between Villarrica and Pucón where you get an unobstructed view of Volcán Villarrica reflected in the lake — the classic postcard image of the region. No hiking required; it\'s a roadside stop.',
        highlights: [
          'Volcano and lake together in a single frame — the defining image of the region',
          'Best at sunrise (eastern light) or late afternoon (warm golden tones on the cone)',
          'Short grassy area suitable for a picnic',
          'A natural spontaneous stop on any Villarrica–Pucón drive'
        ],
        tip: 'Located on Ruta 199 roughly halfway between Villarrica and Pucón. Look for the pull-off where other cars stop — there is no formal sign. The best volcanic reflections occur on calm, windless mornings.',
      },
      {
        id: 'tres-volcanes-summit',
        name: 'Vista Tres Volcanes — El Cañi Summit',
        type: 'viewpoint',
        lat: -39.2544, lng: -71.7070,
        sub: 'Villarrica · Quetrupillán · Lanín — from 1,620m',
        summary: 'The finest viewpoint in the entire region: from the summit of El Cañi sanctuary, Villarrica, Quetrupillán, and Lanín volcanoes are visible simultaneously, with Lago Villarrica and Lago Caburgua glittering below on either side of the ridgeline.',
        highlights: [
          'Three active Andean volcanoes in a single panorama — very few places on Earth offer this',
          'Lago Villarrica and Lago Caburgua both visible from the summit ridge',
          'Condors frequently ride the thermals above the ridgeline',
          'A 5–6 hour guided return hike from the trailhead',
          'Genuinely uncrowded — you may be the only people on the summit'
        ],
        tip: 'This is the summit of the El Cañi sanctuary hike — see the Santuario El Cañi entry for access and guide details. Plan for a clear day and an early start.',
      },

      // ── CULTURE & HERITAGE ───────────────────────────────────────────────

      {
        id: 'feria-mapuche-villarrica',
        name: 'Feria Artesanal Mapuche — Villarrica',
        type: 'culture',
        lat: -39.2820, lng: -72.2240,
        sub: 'Authentic Mapuche crafts, textiles, and silver',
        summary: 'A covered artisan market in Villarrica selling genuine Mapuche handicrafts: hand-woven textiles in traditional patterns, silver jewelry (platería mapuche), carved ceremonial wooden objects, and local food products including merkén spice and piñones. Far more authentic than the tourist shops in Pucón.',
        highlights: [
          'Hand-woven ponchos, blankets, and shawls in traditional mapuche geometric designs',
          'Platería: elaborate silver jewelry in traditional Mapuche ceremonial patterns',
          'Local food products: merkén (smoked chili), honey, piñones (araucaria nuts), dried herbs',
          'Direct from artisan families — bought directly from the people who made them',
          'Prices significantly lower than equivalent items in Pucón\'s tourist shops'
        ],
        tip: 'Bring cash (pesos). Open daily roughly 9–18h. Located near the main plaza in Villarrica. Ask vendors about the significance of the textile patterns — many families trace them back multiple generations.',
      },
      {
        id: 'museo-mapuche-villarrica',
        name: 'Museo Histórico y Arqueológico — Villarrica',
        type: 'culture',
        lat: -39.2795, lng: -72.2265,
        sub: 'Mapuche heritage and pre-Columbian history',
        summary: 'A small municipal museum with a focused Mapuche archaeological collection: pre-Columbian ceramics, tools, hunting weapons, and ceremonial objects. The Mapuche section contextualizes the living culture you\'ll encounter throughout the region. Well-curated for its size; 45 minutes well spent.',
        highlights: [
          'Pre-Columbian Mapuche ceramics, stone tools, and copper objects',
          'Documentation of Mapuche military resistance to Spanish conquest (the Arauco War)',
          'Traditional weaving loom displays with explanation of pattern symbolism',
          'Colonial-era artifacts from the lake region settlement period',
          'Small but thoughtfully presented — good context for the whole region'
        ],
        tip: 'Free or minimal entry (~CLP 1–2k). Located in Villarrica center near the main plaza. Combine with the artisan market and Mercado Municipal for a full Villarrica cultural morning.',
      },
      {
        id: 'pinones-araucaria',
        name: 'Piñones & Araucaria Groves',
        type: 'culture',
        lat: -39.2000, lng: -71.8500,
        sub: 'Ancient araucaria trees and Mapuche food culture',
        summary: 'The araucaria (monkey puzzle) tree is both ecologically ancient and culturally central to the Mapuche people. Its seeds — piñones — are a nutritious staple food, gathered by Mapuche families in the Cordillera in late autumn. Walking among the ancient groves on the Huerquehue and Cañi roads is one of the quietest and most moving experiences in the region.',
        highlights: [
          'Individual araucaria trees can live over 1,000 years and reach 50m — walking among them is humbling',
          'Piñones (seeds) available roasted at roadside stalls on the Huerquehue road',
          'Roasted piñones taste like chestnuts — distinctive and worth trying',
          'The piñonero tradition: Mapuche families make seasonal treks into the Andes to harvest',
          'Best viewing of ancient groves: inside Huerquehue NP and El Cañi sanctuary',
          'The trees are protected — do not harvest piñones yourself; buy from local vendors'
        ],
        tip: 'Look for roadside stalls on the road toward Huerquehue selling piñones in season (late Feb onward; November visits may find stored piñones from the previous harvest). Ask vendors about the piñonero gathering tradition.',
      },
      {
        id: 'mapuche-community',
        name: 'Comunidad Mapuche Quinchol',
        type: 'culture',
        lat: -39.3930, lng: -72.0850,
        sub: 'Mapuche living culture · traditional ceremonies · weaving',
        summary: 'Several Mapuche communities around the lake remain active cultural centers rather than tourist attractions. Some offer organized visits — traditional food preparation, medicinal plant walks, ruka (traditional house) demonstrations, and nguillatún ceremony explanations. Ask in Pucón for currently active community tourism programs.',
        highlights: [
          'Ruka (traditional Mapuche house) construction and daily life demonstrations',
          'Medicinal plant knowledge — the Mapuche pharmacopoeia is extensive and still practiced',
          'Traditional food preparation: muday (fermented corn drink), locro, catuto (bread)',
          'Weaving demonstrations — learning the symbolic grammar of traditional patterns',
          'Nguillatún ceremony context: the central Mapuche ritual of collective prayer and gratitude',
          'Income goes directly to the community — supports cultural continuity'
        ],
        tip: 'Ask at Pucón\'s tourism office (Municipalidad, Calle O\'Higgins) for currently active community programs. Not all accept drop-in visitors. A half-day organized visit (~CLP 15–25k pp) is the most respectful approach.',
      }
    ]
  }
];
