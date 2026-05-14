// ─── PUCÓN / VILLARRICA CITY DETAIL LAYER ────────────────────────────────────
// Wide-area adventure region layer — appears at zoom 11.
// Covers the full Pucón corridor: town, parks, hot springs, lakes, border.
// Research-verified Nov 2026.

CITY_DETAIL_LAYERS.push({
  id:             'pucon',
  city:           'Pucón / Villarrica',
  destId:         'villarrica',
  zoomThreshold:  11,
  pois: [

    /* ══════════ TOWN SECTORS ══════════ */

    {
      id:   'pucon-centro',
      type: 'neighborhood',
      name: 'Pucón Centro',
      sub:  'Tour operators, restaurants & services along Av. O\'Higgins',
      lat: -39.2822, lng: -71.9543,
      summary: "Pucón's compact commercial core stretches along Avenida Bernardo O'Higgins — tour operator offices, gear rental shops, restaurants, and banks all within a few walkable blocks. The social and logistical hub for the entire adventure corridor.",
      highlights: [
        'Av. O\'Higgins — all tour operators within 3 blocks (volcano climbs, rafting, kayaking)',
        'Plaza Teodoro Schmidt (town square, good for orientation)',
        'Banking and ATMs (important — Atacama and Patagonia have gaps)',
        'Gear rental shops and pharmacies',
        'Supermarkets Unimarc and Líder Express'
      ],
      tip: 'Book Villarrica volcano climbs as soon as you arrive — slots fill 1–2 days ahead in Dec. Most operators open from 9am.'
    },

    {
      id:   'pucon-costanera',
      type: 'neighborhood',
      name: 'Pucón Lakefront',
      sub:  'Playa Grande, volcano views & kayak rentals',
      lat: -39.2737, lng: -71.9580,
      summary: 'The paved waterfront promenade along Lago Villarrica with a sandy beach, direct volcano views, kayak and paddleboard rentals, and casual lakefront restaurants. Families congregate here in December; sunsets with the volcano smoking in the background are genuinely spectacular.',
      highlights: [
        'Playa Grande — sandy beach for swimming and sunbathing (cold water, Dec is warmest)',
        'Unobstructed Volcán Villarrica view across the lake',
        'Kayak and SUP rentals along the Costanera',
        'Sunset viewpoint — arrive 1 hour before for best light'
      ],
      tip: 'Water is cold year-round (snowmelt-fed lake). Bring a wetsuit if you plan to swim for more than 10 minutes.'
    },

    {
      id:   'villarrica-plaza',
      type: 'neighborhood',
      name: 'Villarrica Town',
      sub:  'Quieter lakeside town 25 km west — Mapuche museum & local pace',
      lat: -39.2857, lng: -72.2279,
      summary: 'A separate, quieter town on the western shore of Lago Villarrica. Leafy Plaza de Armas, a genuine Mapuche heritage museum, and slower pace than Pucón. Worth a half-day for cultural immersion and lakefront dining without the tourist premium.',
      highlights: [
        'Museo Histórico y Arqueológico Municipal (Mapuche artefacts, pre-Columbian ceramics)',
        'Centro Cultural Mapuche',
        'Plaza de Armas — local vendors and benches',
        'Quieter lakefront with restaurants'
      ],
      tip: 'Museum is on the 2nd floor of the municipal library at Pedro de Valdivia 1050. Colectivo or rental car from Pucón is easiest; buses run regularly from the terminal.'
    },

    {
      id:   'curarrehue-gateway',
      type: 'neighborhood',
      name: 'Curarrehue',
      sub:  'Last Chilean village before Argentina, 45 km southeast',
      lat: -39.3600, lng: -71.5700,
      summary: "A small colonial village at the end of Route 199, just before Paso Mamuil Malal. Limited services but authentic small-town character. Entry point for the border crossing into Junín de los Andes, Argentina — worth planning if crossing or doing a day loop.",
      highlights: [
        'Last fuel and supplies before the Argentina border',
        'Small village plaza and basic services',
        'Scenic route through mountain valleys',
        'Access to border crossing and Argentine lake district'
      ],
      tip: "The border crossing (Paso Mamuil Malal) is 30km further east from here. Fill up with fuel in Curarrehue — no services beyond this point."
    },

    {
      id:   'huife-valley-zone',
      type: 'neighborhood',
      name: 'Huife Valley (Hot Springs Zone)',
      sub:  'River valley with 3 hot spring resorts, 33–36 km northeast',
      lat: -39.2750, lng: -71.7600,
      summary: "A scenic valley along Río Liucura hosting three major hot spring resorts — Termas de Huife, Termas Los Pozones, and nearby El Cañi forest reserve. All accessible via Camino Huife (paved), making a full day of thermal bathing feasible as a loop from Pucón.",
      highlights: [
        'Three distinct hot spring options in one valley',
        'Río Liucura for riverside picnics between soaks',
        'Santuario El Cañi (forest reserve) turnoff at km 21',
        'Native lenga and coigüe forest scenery throughout'
      ],
      tip: 'Book Huife or San Luis in advance for weekends in Dec. Pozones is more rustic and cash-only. All pools are outdoors — bring warm layers for the 40-min drive back at night.'
    },

    {
      id:   'caburgua-district',
      type: 'neighborhood',
      name: 'Lago Caburgua District',
      sub:  'Two beaches + natural pools, 15–23 km northeast',
      lat: -39.1100, lng: -71.7800,
      summary: 'A cluster of outdoor attractions northeast of Pucón around Lago Caburgua: Playa Negra (black volcanic sand), Playa Blanca (white sand, calmer), and Ojos del Caburgua (natural waterfall pools). Accessible by summer bus or car; good for a full-day expedition.',
      highlights: [
        'Playa Negra (19 km) — dramatic black sand, volcano backdrop',
        'Playa Blanca (23 km) — white sand, gentler for families',
        'Ojos del Caburgua (20 km) — natural pools and cascades',
        'Summer buses every 30 min from Pucón terminal in Dec'
      ],
      tip: 'Car is more flexible but buses work. Arrive early at the beaches on weekends — parking fills up. Water is cold at all three sites; wetsuits recommended for extended swimming.'
    },

    {
      id:   'paillaco-huerquehue-fork',
      type: 'neighborhood',
      name: 'Paillaco (Huerquehue Turnoff)',
      sub:  'Junction village for Huerquehue National Park, 27 km northeast',
      lat: -39.2300, lng: -71.7800,
      summary: 'A small settlement at the fork where you turn north toward Huerquehue National Park. The last place to refuel and check conditions before the 8 km winding access road to Tinquilco Lake.',
      highlights: [
        'Junction for Huerquehue access (turn north here)',
        'Last small stores and fuel before the park',
        'Winding road through native forest from here',
        'Views of Andean foothills on the drive in'
      ],
      tip: 'Allow 1 hour total from Pucón. From Paillaco, the park entrance is 8 km of winding unpaved road. 4WD not required in dry weather, but check conditions after rain.'
    },

    /* ══════════ OUTDOOR ATTRACTIONS ══════════ */

    {
      id:   'pucon-volcan-villarrica',
      type: 'volcano',
      name: 'Volcán Villarrica',
      sub:  '2,847 m active volcano — mandatory guided summit climb',
      lat: -39.4197, lng: -71.9383,
      summary: 'The defining experience of the region — an 8–10 hour guided ascent of one of South America\'s most consistently active volcanoes. Summit views span the entire Lake District and into Argentina. Nov–Dec conditions are ideal: least snow, best weather windows, no ice below the crater zone.',
      highlights: [
        '2,847 m summit — peer into an active lava crater',
        '360° panorama: Lago Villarrica, Andes, Lago Caburga visible on clear days',
        'Chairlift option from Ski Pucón base (saves 1.5 hrs)',
        'Snowboard/slide descent option from near-summit on snow',
        'Guides mandatory — book via Pucón operators 1–2 days ahead'
      ],
      tip: 'Cost ~CLP 60,000–80,000 with guide. Early start (6am pickup) is essential — clouds build by midday. Bring SPF 50+, glacier goggles, warm layers. CONAF registration handled by guides. Weather cancellations are common — flexible dates help.'
    },

    {
      id:   'pnv-rucapillan',
      type: 'park',
      name: 'Parque Nacional Villarrica (Sector Rucapillán)',
      sub:  'CONAF entrance gate for volcano trails, 14 km south',
      lat: -39.3400, lng: -71.9350,
      summary: 'The staffed entrance to Villarrica National Park — all volcano climbs and day hikes depart through here. CONAF rangers provide trail conditions, weather updates, and mandatory registration for the summit. Several lower-altitude trails also start from the park zone.',
      highlights: [
        'CONAF office with trail maps and conditions info',
        'Mandatory registration for volcano ascents (guides handle this)',
        'Day-use hiking trails at lower altitudes (no guide required)',
        'Araucaria forest begins here — ancient monkey-puzzle trees',
        'Ski Pucón base station 5 km further up'
      ],
      tip: 'Park entry ~CLP 5,000. Open 8am–5pm daily. If hiking independently (lower trails only), bring water and layers — altitude gain is significant. Contact: +56 45 244 3781.'
    },

    {
      id:   'ski-pucon-summer',
      type: 'viewpoint',
      name: 'Ski Pucón (Pillán) — Summer Base',
      sub:  'Ski resort open for summer hiking & chairlift, 19 km south',
      lat: -39.3800, lng: -71.9200,
      summary: 'Ski Pucón (Pillán Villarrica) operates its chairlift in summer for hikers and volcano climbers. The base station at 1,550 m is above the treeline — views are immediately rewarding. This is where guided volcano groups begin the technical ascent. Summer café and facilities open Nov–Mar.',
      highlights: [
        'Chairlift to ~1,900 m (saves 1.5 hrs on volcano climb, ~CLP 20,000)',
        'Alpine meadows and views above tree line',
        'Café and facilities at base station',
        'Starting point for all guided volcano summit groups'
      ],
      tip: 'Confirm summer operating hours before driving up — weather-dependent. Road is 14 km paved then 5 km gravel. Tour operators coordinate pickups from Pucón at 5:30–6am.'
    },

    {
      id:   'huerquehue-entrance',
      type: 'park',
      name: 'Parque Nacional Huerquehue',
      sub:  'Alpine lake circuit — Los Lagos trail, 35 km northeast',
      lat: -39.1700, lng: -71.7200,
      summary: 'A compact national park with three crystal-clear alpine lakes (Chico, Verde, Toro) linked by the famous Los Lagos circuit. Thick araucaria and coigüe forest, no guide required, and far less crowded than the volcano. A superb full-day walk for strong hikers.',
      highlights: [
        'Los Lagos circuit: 13 km short or 16 km full (5–7 hrs)',
        'Lakes Chico, Verde, Toro — each with distinct character',
        'Ancient araucaria forest (specimens over 1,000 years old)',
        'Lower altitude than Villarrica — less snow in Nov–Dec',
        'No guide required; trails well-marked'
      ],
      tip: 'Park entry ~CLP 15,000. Allow 1 hour drive from Pucón (8 km unpaved at the end). Bring trekking poles, lunch, and rain gear. Trail starts directly from Lago Tinquilco parking area. Start by 8am to complete the circuit comfortably.'
    },

    {
      id:   'lago-tinquilco',
      type: 'lake',
      name: 'Lago Tinquilco (Huerquehue)',
      sub:  'Park\'s main lake — trailhead for Los Lagos circuit',
      lat: -39.1648, lng: -71.7253,
      summary: 'The largest lake in Huerquehue National Park and the starting point for all trails. Surrounded by steep araucaria-clad hillsides, its turquoise water reflects the sky in the morning. The CONAF station and parking area are on the shore.',
      highlights: [
        'Primary trailhead for Los Lagos and all park circuits',
        'Turquoise water with araucaria and mountain reflection',
        'Boat rentals available seasonally',
        'CONAF ranger station for maps and conditions'
      ],
      tip: 'Parking CLP 500. Trails are well-marked from the parking area. The ascent to the first alpine lake (Lago Chico) takes ~1.5 hrs — a significant climb, but worth it.'
    },

    {
      id:   'lago-caburga-beaches',
      type: 'lake',
      name: 'Lago Caburgua',
      sub:  'Clear lake — Playa Blanca & Playa Negra, 19–23 km northeast',
      lat: -39.0950, lng: -71.7800,
      summary: 'Lago Caburgua is fed partly by underground springs, giving it unusually clear turquoise water. Two public beaches serve swimmers: Playa Negra (dramatic black volcanic sand, volcano backdrop) and Playa Blanca (white sand, calmer, more family-friendly). A classic half-day trip from Pucón.',
      highlights: [
        'Playa Negra — black volcanic sand, open volcano view',
        'Playa Blanca — white sand, gentler water, good for families',
        'Exceptionally clear water (underground spring-fed)',
        'Kayak and boat rentals seasonally at both beaches'
      ],
      tip: 'Summer buses from Pucón serve both beaches every 30 min in Dec. No entry fee. Arrive early on weekends. Water is cold even in Dec — wetsuits extend swimming time significantly.'
    },

    {
      id:   'ojos-del-caburga',
      type: 'waterfall',
      name: 'Ojos del Caburgua',
      sub:  'Natural spring-fed pools & waterfalls, 20 km northeast',
      lat: -39.1050, lng: -71.7950,
      summary: 'Two stunning natural pools fed by underground springs, with 15–20 m cascades tumbling through thick native forest. A 20-minute boardwalk trail from the entrance gate makes this accessible for all fitness levels. One of the most photogenic spots in the region.',
      highlights: [
        'Twin turquoise pools with waterfall views',
        'Wooden boardwalk trail (easy, 20 min round trip)',
        'Dense native forest canopy overhead',
        'Morning photography is best (light angle)'
      ],
      tip: 'Entry CLP 2,000, paid at the gate. Accessible by car or via the Caburgua bus route (25-min walk from bus stop). Bring water shoes for wading — pools are cold. Arrive before 10am on clear days for the best light and fewer people.'
    },

    {
      id:   'rio-trancura-rafting',
      type: 'river',
      name: 'Río Trancura (Rafting)',
      sub:  'Class III–IV whitewater rafting, 15 km northeast',
      lat: -39.1800, lng: -71.8500,
      summary: 'The Trancura offers two rafting sections: Bajo (Class III, family-friendly from age 8) and Alto (Class III–IV, minimum age 14, more technical). All trips are guided, departing from Pucón offices with transport to the put-in ~15 km away. One of the best-value adventure activities in the region.',
      highlights: [
        'Trancura Bajo: scenic canyon, great for families and first-timers',
        'Trancura Alto: technical rapids, adrenaline, for confident swimmers',
        'Full-day and half-day trips available',
        'Guides provide wetsuits, helmets, and all equipment'
      ],
      tip: 'Book same-day or morning of via Pucón tour operators. Cost CLP 40,000–60,000 for half-day. Bring swimwear and a change of clothes. Groups depart around 9am and 2pm. Minimum age: 8 for Bajo, 14 for Alto.'
    },

    {
      id:   'santuario-el-cani',
      type: 'forest',
      name: 'Santuario El Cañi',
      sub:  'Private araucaria forest reserve, 21 km northeast',
      lat: -39.2700, lng: -71.8030,
      summary: 'A private conservation reserve protecting some of the oldest araucaria forest in Chile — individual trees are estimated at 2,000–3,000 years old. Multiple self-guided trails (2–8 hrs), natural thermal pools integrated into the property, and excellent bird-watching. Quieter and more intimate than the national parks.',
      highlights: [
        'Ancient araucaria trees — specimens up to 3,000 years old',
        'Trail loops ranging 2–8 hours (well-marked)',
        'Bird-watching: Magellanic woodpecker, austral parakeet',
        'Natural thermal pools on-site',
        'Far fewer visitors than Huerquehue or the volcano zone'
      ],
      tip: 'Entry CLP 12,000–15,000 (includes pool access). Contact ahead via santuariocani.cl. Best Nov–Jan. Bring binoculars. The araucaria viewpoints at 1,200 m are the highlight — allow a full day.'
    },

    {
      id:   'paso-mamuil-malal',
      type: 'viewpoint',
      name: 'Paso Mamuil Malal',
      sub:  'Chile–Argentina border crossing at 1,253 m, 75 km southeast',
      lat: -39.5350, lng: -71.6170,
      summary: "A high-altitude Andean border pass connecting Pucón to Junín de los Andes, Argentina. The drive up is scenic — the pass delivers views of Volcán Lanín (3,776 m) on the Argentine side. Open 8am–8pm daily; paved all the way to Chilean customs. Worth doing as a day loop into Argentina if currency and time allow.",
      highlights: [
        'Volcán Lanín views from the Argentine side (one of Patagonia\'s most elegant peaks)',
        'Paved road to Chilean customs, well-maintained',
        'Gateway to Junín de los Andes and San Martín de los Andes (Argentina)',
        'Scenic Andean valley drive throughout'
      ],
      tip: 'Open daily 8am–8pm. Bring passport and vehicle papers (car rental contracts too). Argentine side uses pesos or USD cash — blue rate significantly better than official. No special permit needed for 90-day tourist visa holders. Junín de los Andes has fuel, restaurants, and ATMs.'
    },

    {
      id:   'lago-colico',
      type: 'lake',
      name: 'Lago Cólico',
      sub:  'Remote pristine lake, 60 km south near Cunco',
      lat: -39.4600, lng: -71.9800,
      summary: "A lesser-known but strikingly beautiful lake south of the main Pucón area. Crystalline turquoise water, surrounding araucaria and coigüe forest, and complete solitude. Playa de las Hadas (Fairies' Beach) is its most photographed spot. Best as a full-day destination with a car.",
      highlights: [
        'Playa de las Hadas — turquoise water, white-grey sand, no crowds',
        'Ancient araucaria and coigüe forest around the shore',
        'Excellent kayaking in calm, clear water',
        'Near-zero commercial infrastructure — bring everything'
      ],
      tip: 'Allow ~1.5 hrs from Pucón via Ruta S-61 toward Cunco (~60 km). Rental car essential — bus service is very infrequent. No services on-site; bring food, water, and fuel. Worth combining with a Termas Geométricas visit (both are south).'
    },

    /* ══════════ HOT SPRINGS ══════════ */

    {
      id:   'termas-san-luis',
      type: 'hotspring',
      name: 'Termas San Luis',
      sub:  'Modern resort, 27 km south — easiest access from Pucón',
      lat: -39.3200, lng: -71.9100,
      summary: 'The most convenient hot spring resort from Pucón — 35 min on paved road, no gravel, no steep descent. Four thermal pools plus hydrotherapy tubs, a hotel with 40+ rooms, and a restaurant. Good choice for a shorter half-day soak without committing to a full excursion.',
      highlights: [
        '4 outdoor pools + hydrotherapy tubs (38–42°C)',
        'Hotel and à la carte restaurant',
        'Semi-covered pool for cool or rainy days',
        'Paved road access — easiest drive of all options'
      ],
      tip: 'Day-use CLP 18,000–25,000. Open daily 11am–9pm. 35 min from Pucón. Book ahead on weekends in Dec. termasdesanluis.cl'
    },

    {
      id:   'termas-manzanar',
      type: 'hotspring',
      name: 'Termas Manzanar',
      sub:  'Mid-range resort with spa, 28 km south on Curarrehue road',
      lat: -39.3000, lng: -71.8950,
      summary: 'A comfortable mid-range thermal resort on the Curarrehue road with indoor and outdoor pools, a 10-room hotel, restaurant with local ingredients, and spa treatments. Good value, accessible, and a useful stop if also heading toward the Argentina border.',
      highlights: [
        'Indoor and outdoor thermal pools (38–42°C)',
        'Spa massages and treatments',
        'Restaurant with local produce',
        'Good mid-point stop on the Curarrehue road'
      ],
      tip: 'Day-use CLP 15,000–20,000. 30 min from Pucón. Paved access road. termasdemanzanar.com. Good combined with an afternoon at Paso Mamuil Malal.'
    },

    {
      id:   'termas-palguin',
      type: 'hotspring',
      name: 'Termas de Palguin',
      sub:  'Hotel & pools inside Villarrica National Park, 30 km south',
      lat: -39.3500, lng: -71.8800,
      summary: 'A thermal resort sitting inside Villarrica National Park in the Palguin Alto sector. Less crowded than Huife and with a genuine national park setting — araucaria forest, river, and mountain backdrop. Indoor and outdoor pools, hotel rooms, and a quieter atmosphere.',
      highlights: [
        'Inside national park boundary — forest setting',
        'Indoor and outdoor thermal pools',
        'Less crowded than Huife or Los Pozones',
        'Good proximity to Villarrica park trails'
      ],
      tip: 'Day-use CLP 15,000–20,000. At km 30 on Pucón–Curarrehue road, then 10 km inland. palguinalto.cl. Combine with lower-altitude Villarrica park hiking for a full nature day.'
    },

    {
      id:   'termas-huife',
      type: 'hotspring',
      name: 'Termas de Huife',
      sub:  'Full hotel resort on Río Liucura, 33 km northeast',
      lat: -39.2750, lng: -71.7830,
      summary: 'The most established hot spring resort near Pucón: full-service hotel, multiple indoor and outdoor thermal pools (38–40°C), restaurant, and a beautiful native forest setting on the Liucura River. Most accessible via Camino Huife (paved). Family-friendly and well-maintained.',
      highlights: [
        'Multiple thermal pools indoor and outdoor',
        'Hotel, restaurant and bar',
        'Native forest on the Liucura river bank',
        'Well-maintained infrastructure and clean water'
      ],
      tip: 'Day-use CLP 20,000–25,000. Book ahead for weekends in Dec — fills up. 40 min from Pucón. termashuife.cl. Most popular of the hot spring options; can be busy on sunny weekends.'
    },

    {
      id:   'termas-los-pozones',
      type: 'hotspring',
      name: 'Termas Los Pozones',
      sub:  'Natural riverside pools — rustic & untamed, 36 km northeast',
      lat: -39.2800, lng: -71.7500,
      summary: "The most authentic hot spring experience near Pucón: natural outdoor pools directly on the Liucura River bank, no hotel, steep terrain to access. Preferred by younger travellers and those wanting natural immersion over resort polish. Bring everything you need.",
      highlights: [
        'Natural riverside thermal pools — water bubbles up from riverbed',
        'Steep terrain access (20–30 min descent)',
        'Most rustic and atmospheric of the hot spring options',
        'Popular with younger, adventurous travellers'
      ],
      tip: 'Entry CLP 12,000–15,000. Cash only. No restaurant — bring snacks and water. Wear proper shoes for the steep access path. lospozones.cl. Quieter than Huife on most days.'
    },

    {
      id:   'termas-geometricas',
      type: 'hotspring',
      name: 'Termas Geométricas',
      sub:  'Luxury mountain design resort, 65 km southeast near Coñaripe',
      lat: -39.5400, lng: -71.7150,
      summary: "The most celebrated hot spring resort in the Lake District — possibly in all of Chile. Striking contemporary architecture: geometric timber pools and decking integrated into steep mountain forest. Water 38–45°C. The setting is extraordinary and worth the 1-hour drive from Pucón for a full day.",
      highlights: [
        'Iconic geometric timber architecture in deep forest',
        'Natural water 38–45°C in multiple pools at different temperatures',
        'Restaurant and changing facilities',
        'Mountain and forest views throughout',
        'An aesthetic experience as much as a thermal one'
      ],
      tip: 'Day pass CLP 75,000–95,000 (includes lunch option). Book 1–2 days ahead — fills fast in Dec. About 65 km from Pucón via scenic Coñaripe road (~1 hr). termasgeometricas.cl. Best combined with Lago Cólico (nearby) for a full southern day trip.'
    },

    /* ══════════ PRACTICAL ══════════ */

    {
      id:   'pucon-bus-terminal',
      type: 'practical',
      name: 'Bus Terminals (Turbus / Pullman / JAC)',
      sub:  'Long-distance and regional routes from central Pucón',
      lat: -39.2810, lng: -71.9560,
      summary: "Pucón has three separate terminal buildings close to each other. Turbus (Blanco Encalada 2245), Pullman Bus (Palguin 452), and JAC (Palguin 640) operate routes to Santiago (16 hrs overnight), Temuco (2 hrs), Puerto Montt, Valdivia, and Osorno.",
      highlights: [
        'Overnight buses to Santiago (16 hrs, semi-cama and cama classes)',
        'Temuco (2 hrs) — main regional hub with airport',
        'Puerto Varas / Puerto Montt (4–5 hrs south)',
        'Regional colectivos to Villarrica depart nearby'
      ],
      tip: 'Book overnight buses to Santiago 1–2 days ahead in Dec. Compare Turbus and Pullman — prices differ. For Villarrica colectivos, ask at the terminal area; they depart frequently throughout the day.'
    },

    {
      id:   'pucon-tour-operators',
      type: 'practical',
      name: 'Tour Operator Strip (Av. O\'Higgins)',
      sub:  'All adventure bookings — volcano, rafting, kayaking, horseback',
      lat: -39.2825, lng: -71.9550,
      summary: "Every outdoor activity in the region can be booked from Av. O'Higgins. Key operators include Politur, Turismo Trancura, Baum Adventure, and Aguaventura. Walk the block to compare prices and group sizes — quality varies.",
      highlights: [
        'Volcano climb bookings (mandatory guide ~CLP 65,000)',
        'Rafting Trancura Bajo and Alto (CLP 40,000–60,000)',
        'Kayaking, paragliding, horseback riding',
        'Equipment rental: wetsuits, helmets, harnesses, trekking poles'
      ],
      tip: 'Politur and Turismo Trancura are established and reliable. Book volcano climbs as soon as you arrive — weather windows get filled quickly in peak season. Ask about group sizes before booking; smaller groups mean better guide attention.'
    },

    {
      id:   'pucon-supermarket',
      type: 'practical',
      name: 'Unimarc Supermarket',
      sub:  'Main grocery for provisions, snacks & camping supplies',
      lat: -39.2800, lng: -71.9520,
      summary: 'The primary supermarket for groceries, camping food, and supplies. Unimarc (Av. O\'Higgins 752) has the best produce selection; Líder Express is nearby for convenience items. Both are central and well-stocked.',
      highlights: [
        'Fresh produce, meat, dairy and packaged goods',
        'Trail snacks and lunch supplies',
        'ATM and electronic payment',
        'Basics for multi-day self-catering'
      ],
      tip: 'Shop early on days you plan activities — stores open at 9am. Pack supplies the night before long excursions. Brings bags; plastic bags are not provided.'
    },

    {
      id:   'pucon-tourist-office',
      type: 'practical',
      name: 'Tourist Information Office',
      sub:  'Free maps, trail conditions & operator advice — Av. O\'Higgins 483',
      lat: -39.2820, lng: -71.9540,
      summary: "The municipal tourism office provides free maps (town, parks, regional), accommodation recommendations, and up-to-date trail and weather conditions. Essential first stop on arrival — especially for volcano and Huerquehue trail status.",
      highlights: [
        'Free regional and park maps',
        'Current trail and road conditions',
        'Accommodation and operator recommendations',
        'Phone contact: +56 45 244 3781'
      ],
      tip: 'Visit on arrival to ask about weather windows and current conditions. Staff are helpful and can advise on quality operators. Open Mon–Fri 9am–1pm, 3–6pm; weekends variable in Dec.'
    },

    {
      id:   'pucon-equipment-rental',
      type: 'practical',
      name: 'Gear Rental Shops',
      sub:  'Hiking, climbing & water sports kit for daily hire',
      lat: -39.2830, lng: -71.9555,
      summary: 'Several small shops along Av. O\'Higgins and near the Costanera rent trekking poles, hiking boots, wetsuits, helmets, climbing harnesses, kayaks, and camping gear. Daily rates CLP 8,000–15,000 per item. Many tour operator packages include gear — check before renting separately.',
      highlights: [
        'Trekking poles and boots for Huerquehue and Cañi',
        'Wetsuits for rafting and cold lake swimming',
        'Climbing harnesses for volcano ascent (guides often provide)',
        'Kayak and SUP rentals (seasonal)'
      ],
      tip: 'Inspect gear condition before taking it. Multi-day rentals are negotiable. If booked through a tour operator, ask what\'s included — volcano climb packages often include helmet, crampons, and ice axe.'
    }

  ]
});
