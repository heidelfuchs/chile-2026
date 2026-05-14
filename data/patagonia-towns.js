// ─── PATAGONIA GATEWAY TOWNS ─────────────────────────────────────────────────
// Hiking base towns and logistics hubs for Chilean and Argentine Patagonia.
// Chilean side: Carretera Austral towns south of Puerto Montt.
// Argentine side: Lake District and Southern Patagonia towns.
// Note: Puerto Montt, Coyhaique, Puerto Natales, Punta Arenas, Villa O'Higgins,
//       Caleta Tortel, El Chaltén, El Calafate are in other data files.

DESTINATIONS.push(

  // ── CHILEAN CARRETERA AUSTRAL TOWNS ──────────────────────────────────────

  {
    id: 'chaiten',
    name: 'Chaitén',
    cat: 'cities',
    sub: 'Los Lagos · Northern Carretera Austral gateway, ferry from Puerto Montt',
    lat: -42.9169, lng: -72.7082,
    summary: "Chaitén is the northern gateway to the Carretera Austral and the main ferry arrival point from Puerto Montt. The town was almost entirely destroyed by the Chaitén volcano eruption and lahars of 2008, then rebuilt on higher ground nearby. Today it sits at the edge of Pumalín Douglas Tompkins National Park — one of the largest temperate rainforest reserves on Earth — and serves as the first real stop for travellers heading south.",
    highlights: [
      'Ferry connection from Puerto Montt (12 hours) and Puerto Chacabuco — the main gateway into the Carretera Austral',
      'Gateway to Pumalín Douglas Tompkins National Park: vast alerce forests, volcanoes, fjords, and thermal baths',
      'Chaitén Volcano crater hike (30km south) — dramatic 2008 eruption dome clearly visible from town',
      'Hiking to the edge of the active lava dome: guided access from the Pumalín park entrance',
      'Old Chaitén: haunting ghost streets slowly being reclaimed by vegetation and lahar deposits',
      'Small airport (PMT) with flights to Puerto Montt via JetSMART (limited schedule)',
      'Caleta Gonzalo (45km north): Pumalín park headquarters, campsite, wooden walkways into alerce forest',
      'Essential resupply before heading south: last full services before Coyhaique (420km)'
    ],
    tip: 'Book ferry ahead during Nov–Feb peak season (Naviera Austral, Broom). The 42-hour Navimag route from Puerto Montt via Puerto Natales no longer stops here — use the direct Chaitén ferry. Fuel and provisions available in town. Confirm the volcano access trail is open before the trip (park rangers at Caleta Gonzalo).',
    weather: 'Nov–Dec: 13–18°C, frequent rain. Aysén/Los Lagos is one of the wettest zones on the Carretera — expect overcast days, misty fjords, and sudden heavy showers. Pack full waterproofs.'
  },

  {
    id: 'futaleufu',
    name: 'Futaleufú',
    cat: 'cities',
    sub: 'Los Lagos · World-class whitewater and trekking valley',
    lat: -43.1833, lng: -71.8667,
    summary: "Futaleufú sits in a spectacular high Andean valley at the end of a 75km gravel spur off the Carretera Austral — or, more easily, via a one-hour drive from Esquel in Argentina. Its river, the Futaleufú, is widely considered one of the top five whitewater rivers on the planet, running continuous Class IV–V rapids through deep turquoise gorges. Beyond rafting, the valley offers excellent trekking, fly-fishing, horse riding, and mountain biking.",
    highlights: [
      'Río Futaleufú: world-class Class IV–V whitewater — consecutive rapid runs including the infamous \'Throne Room\' and \'Hellcat\' stretches',
      'Multi-day rafting expeditions through deep granite canyons with camp on remote river beaches',
      'Fly-fishing on Lago Yelcho (50km north) — one of Chile\'s finest brown and rainbow trout lakes',
      'Trekking in the upper valley: unmarked routes to high lakes and viewpoints above the gorge',
      'Horse-riding with local arrieros through the Andean foothills and alerce forests',
      'Zip-line crossing above the canyon — spectacular aerial view of the turquoise rapids below',
      'Kayak instruction for all skill levels offered by several local operators',
      'Argentine border crossing 10km east at Paso Futaleufú — one-hour drive to Esquel'
    ],
    tip: 'More accessible from Argentina (Esquel, 1 hour via RN 259) than from the Carretera Austral (long detour). Book rafting and adventure operators in advance for Dec–Feb. Accommodation is limited; small hospedajes and campsites only. Carry Argentine pesos for the border crossing if continuing east.',
    weather: 'Nov–Dec: 14–20°C, long sunny days in the high valley. Less rain than the coast but afternoon thunderstorms possible. The valley microclimate is noticeably warmer and drier than Chaitén or Puyuhuapi.'
  },

  {
    id: 'puyuhuapi',
    name: 'Puyuhuapi',
    cat: 'cities',
    sub: 'Aysén · German fjord village, Queulat NP gateway, thermal baths',
    lat: -44.3333, lng: -72.5500,
    summary: "Puyuhuapi is one of the most atmospheric stops on the Carretera Austral — a tiny village of 500 people founded in 1935 by four German settlers who arrived by boat and cleared the rainforest by hand. Sitting at the head of the Puyuhuapi Fjord, it has wooden pioneer houses, a world-famous thermal lodge on its own island, and serves as the gateway to Queulat National Park and its hanging glacier. The carpets woven here since 1947 are still exported worldwide.",
    highlights: [
      'Queulat National Park (30km south): Ventisquero Colgante hanging glacier, suspended between two rock faces above a turquoise lagoon',
      'Termas de Puyuhuapi Lodge: island hot springs accessible only by small boat — open to day visitors (book ahead)',
      'Parque Nacional Queulat: Sendero Laguna Los Patos, Sendero Padre García coastal walk, Bosque Enano dwarf forest',
      'Alfombras Puyuhuapi: wool carpets woven by hand since the 1940s, using original German looms — factory visits possible',
      'Walking the fjord waterfront at sunset: dramatic reflections of forested peaks in the calm inlet',
      'Río Queulat kayak trips through the glacier-fed river valley',
      'Pioneer cemetery and original German settler houses — a living piece of Patagonian history',
      'Midpoint between Puerto Montt and Coyhaique on the Carretera Austral (290km each)'
    ],
    tip: 'Termas Lodge day visits require advance reservation (expensive but unique). The Ventisquero Colgante viewpoint is a 2km walk from the park entrance and is not to be missed. Fuel available in town. This stretch of the Carretera Austral (south of Puyuhuapi) includes the Queulat pass — unpaved, steep, and spectacular.',
    weather: 'Nov–Dec: 12–17°C. One of the wettest points on the Carretera Austral — the fjord location traps Pacific rain systems. Expect 4–5 days of heavy rain per week. The hanging glacier is most dramatic in rainy mist, surprisingly.'
  },

  {
    id: 'la-junta',
    name: 'La Junta',
    cat: 'cities',
    sub: 'Aysén · Carretera Austral crossroads, Palena river valleys',
    lat: -43.9667, lng: -72.4000,
    summary: "La Junta is a small crossroads town on the Carretera Austral, sitting at the confluence of the Río Palena and Río Rosselot. It is the main junction for the remote road east toward Argentina via the Palena Valley, and the gateway to the Reserva Nacional Lago Rosselot — one of the least-visited protected areas in Chile. Raúl Marín Balmaceda, a remote coastal hamlet with dolphin tours and wild beaches, is 73km west.",
    highlights: [
      'Gateway to Raúl Marín Balmaceda (73km west): isolated coastal hamlet on the Palena Fjord with dolphin watching and empty beaches',
      'Reserva Nacional Lago Rosselot: pristine alerce and lenga forests, fishing, and lakeside camping',
      'Río Palena fly-fishing: world-class trout fishing on a remote, lightly fished river system',
      'Road east toward Argentina via Río Palena Valley — a genuine wilderness route for 4WD vehicles',
      'Sendero Mirador La Junta: short forested hill walk with views over the Palena confluence',
      'Last major fuel and resupply between Chaitén and Coyhaique — stock up here',
      'Authentic Carretera Austral village: guesthouses, a restaurant or two, no tourism infrastructure',
      'Jump-off point for exploring the Palena province — one of the least-visited regions of Chilean Patagonia'
    ],
    tip: 'The road to Raúl Marín Balmaceda is gravel and rough in places — allow 2 hours each way. The coastal hamlet has limited accommodation; book ahead or bring camping gear. Fuel in La Junta is essential — the next reliable station is Puyuhuapi (50km north) or Coyhaique (150km south). No ATMs.',
    weather: 'Nov–Dec: 13–18°C. Inland valley location means slightly less rain than the coast but still expect heavy showers. The Palena Valley tends to have morning mist burning off to afternoon sun in good weather.'
  },

  {
    id: 'villa-cerro-castillo',
    name: 'Villa Cerro Castillo',
    cat: 'cities',
    sub: 'Aysén · Cerro Castillo Trek trailhead, 90km south of Coyhaique',
    lat: -46.1167, lng: -71.9167,
    summary: "A tiny, windswept village of around 400 people on the Carretera Austral, Villa Cerro Castillo is almost entirely defined by the jagged basalt pinnacles of Cerro Castillo that loom 2,675m above it. The four-day circuit trek through the national reserve of the same name begins and ends near the village and is considered one of the finest multi-day hikes on the Carretera Austral — far less crowded than Torres del Paine with equally dramatic mountain scenery.",
    highlights: [
      'Cerro Castillo Circuit Trek: 60km, 4–5 days through remote valleys to the base of razor-edged basalt towers',
      'Campamento Neozelandés: high-altitude lakeside camp directly beneath the castle-like rock spires',
      'Lagunas Las Horquetas and Los Porteadores: turquoise glacial lakes in the upper circuit',
      'Huemul deer sightings: the endangered South Andean huemul inhabits the high valleys here',
      'Glaciar Colgante viewpoint accessible on a day hike from the village without the full circuit',
      'Cerro Castillo Trek: excellent alternative to the W Trek for travellers avoiding the Torres del Paine crowds',
      'Annual Cerro Castillo gathering in February: traditional gaucho festival with horsemanship and asado',
      'Simple guesthouses and camping near the trailhead — very limited, book ahead in peak season'
    ],
    tip: 'The Cerro Castillo trek can also be started from Las Horquetas (35km north on the Carretera Austral) for a through-route option. River crossings on the circuit vary in depth — check conditions at the Coyhaique CONAF office before setting out. Bring all food from Coyhaique. Permit required from CONAF (free).',
    weather: 'Nov–Dec: 10–17°C in the valley, much colder at altitude. The passes are exposed to strong westerlies — afternoon gusts are normal. Snow possible on passes in early November. Mornings are calm; start each day early.'
  },

  // ── ARGENTINA — LAKE DISTRICT ─────────────────────────────────────────────

  {
    id: 'bariloche',
    name: 'San Carlos de Bariloche',
    cat: 'cities',
    sub: 'Río Negro, Argentina · Argentine Patagonia\'s main city, Nahuel Huapi hub',
    lat: -41.1335, lng: -71.3103,
    summary: "Bariloche is the undisputed capital of Argentine Lake District tourism — a city of 130,000 people on the southern shore of Lago Nahuel Huapi, ringed by snow-capped peaks. Swiss-German architecture, world-class chocolate shops, and a booming outdoor industry make it the Chamonix of South America. It's also the departure point for the legendary Cruce de Lagos crossing to Puerto Montt, Chile, and the hub for accessing some of the finest mountain hiking in Argentine Patagonia.",
    highlights: [
      'Nahuel Huapi National Park: Argentina\'s first national park (1934) — hiking, trekking, and cycling in an enormous lake and mountain landscape',
      'Cerro Catedral (22km from town): premier Argentine ski resort; in summer, chairlifts access high-altitude trekking routes and refugios',
      'Cerro Tronador (80km west): 3,478m dormant volcano straddling the Chilean border, with three glaciers — a full-day 4WD drive + guided glacier walk',
      'Cruce de Lagos: 3-day boat-and-bus crossing to Puerto Montt via Peulla and Puerto Blest — one of South America\'s great travel experiences',
      'Circuito Chico and Circuito Grande: classic self-drive loops through the lake district (60km and 250km)',
      'Cerro Campanario viewpoint (8km east): accessible by chairlift — panoramic view of lakes and volcanoes named one of the world\'s best viewpoints by National Geographic',
      'Refugio Frey and Refugio Jakob: classic multi-day trekking circuit through alpine lakes and granite peaks above the Catedral valley',
      'Direct flights to Buenos Aires (1h30min) and Santiago (JetSMART nonstop) via BRC airport'
    ],
    tip: 'BRC airport is 15km from centre. Book flights from Buenos Aires months ahead for Dec–Feb peak season. For the Cruce de Lagos, book through Cruce Andino at least 6 weeks ahead. Car rental at the airport gives maximum flexibility. Argentine pesos: blue-dollar rate still applies — USD cash gives significantly better value. Refugio hut bookings (Catedral, Frey, Jakob) open in October.',
    weather: 'Nov–Dec: 16–22°C days, 5–10°C nights. More stable than coastal Patagonia — many sunny days but afternoon thunderstorms build quickly. Wind picks up in December. Cerro Catedral ski lifts run for hiking from November.'
  },

  {
    id: 'san-martin-de-los-andes',
    name: 'San Martín de los Andes',
    cat: 'cities',
    sub: 'Neuquén, Argentina · Lanín NP gateway, border crossing to Pucón',
    lat: -40.1572, lng: -71.3569,
    summary: "San Martín de los Andes is a handsome mountain resort town of 35,000 people on the eastern shore of Lago Lácar, at the foot of Volcán Lanín. The gateway to Lanín National Park and the snowcapped 3,776m Lanín volcano, it also controls the Paso Mamuil Malal (Tromen) border crossing to Pucón, Chile — making it a critical hinge point for anyone traversing between the Argentine and Chilean lake districts. Upscale, well-serviced, and beautifully located.",
    highlights: [
      'Volcán Lanín: perfectly conical 3,776m volcano on the Chilean border — guided ascent (1–2 days, technical ice axe required) is one of Argentina\'s great mountaineering objectives',
      'Paso Mamuil Malal (Tromen): most practical border crossing to Pucón, Chile (75km west) — open year-round, vehicle and pedestrian crossing',
      'Lanín National Park: vast forest and lake landscape; Huechulaufquen Lake fishing, trekking on Lanín\'s lower slopes, huerquehue-style circuit hikes',
      'Ruta de los Siete Lagos: spectacular 110km drive south to Villa La Angostura and Bariloche through seven interconnected lakes',
      'Cerro Chapelco (20km east): ski resort in winter; mountain biking and trekking access in summer with panoramic lake views',
      'Lago Lácar kayaking: calm glacial lake inside the national park — full-day kayak tours to the Quila Quina beach and forest',
      'Quila Quina: remote beach community across Lago Lácar accessible by boat — hiking trails through coihue forest',
      'Direct bus to Osorno and Puerto Montt (Chile) via Paso Mamuil Malal (3–4 hours)'
    ],
    tip: 'Border crossing to Pucón via Paso Tromen is generally open year-round but can close temporarily in winter or due to Lanín volcanic activity. Confirm status before setting out. The Lanín ascent requires prior registration at the national park entrance and a guide for the upper glacier section. Book Chapelco lifts and mountain bikes at the base lodge.',
    weather: 'Nov–Dec: 18–24°C on sunny days, cooler near the water. More Mediterranean than Bariloche — noticeably drier and sunnier. Lanín summit wind is always severe; full alpine kit required on the ascent.'
  },

  {
    id: 'villa-la-angostura',
    name: 'Villa La Angostura',
    cat: 'cities',
    sub: 'Neuquén, Argentina · Arrayanes NP, Nahuel Huapi lakeside village',
    lat: -40.7561, lng: -71.6468,
    summary: "Villa La Angostura sits on a peninsula jutting into Lago Nahuel Huapi, 80km north of Bariloche. One of Argentina's most elegant and expensive small resort towns, it's the gateway to Bosque de Arrayanes National Park — the only native arrayán forest in the world, with twisted cinnamon-coloured trunks that stand in shallow lake water. The Ruta de los Siete Lagos passes through, making this a natural stop between San Martín de los Andes and Bariloche.",
    highlights: [
      'Bosque de Arrayanes: world\'s only intact arrayán forest — 300-year-old trees with flame-coloured bark on a peninsula; 12km walking trail or 1-hour boat from town',
      'Ruta de los Siete Lagos: this is the midpoint of the famous Seven Lakes road (RN 231/RN 40) — all seven lakes visible within a 110km stretch',
      'Cerro Bayo ski resort (9km east): summer hiking trails and mountain bike descents with panoramic Nahuel Huapi views',
      'Mirador Belvedere: short hike above town — sweeping 180-degree view across the lake to Chilean volcanoes',
      'Canopy del Arrayán: guided zip-line through native forest above the lakeside — family-friendly',
      'Lago Espejo and Lago Correntoso (north): two of the seven lakes with forest campsites accessible on foot or bike',
      'Upscale dining and boutique lodges: La Angostura has the most sophisticated accommodation on the Argentine lake circuit',
      'El Cruce village: lower town with supermarkets, fuel, and bus connections north and south'
    ],
    tip: 'The Arrayanes forest walk (12km return) is also accessible by ferry from the El Cruce pier — the boat cuts 4 hours off the walking time. Book the ferry in season. Most lodges are small and fill quickly; book 2–3 months ahead for December. Cerro Bayo lift tickets sold at the base station.',
    weather: 'Nov–Dec: 18–22°C in the valley, cooler on the lake. The deep fjord-like location of the town means surprisingly calm mornings even when Bariloche is windy. Afternoon southerly wind arrives from the lake.'
  },

  {
    id: 'el-bolson',
    name: 'El Bolsón',
    cat: 'cities',
    sub: 'Río Negro, Argentina · Craft beer capital, valley hiking, artisan market',
    lat: -41.9588, lng: -71.5344,
    summary: "El Bolsón sits in a wide, fertile valley between Bariloche and Esquel — warmer and sunnier than both, with a famously relaxed hippie-artisan culture that has persisted since the 1970s. Declared an 'ecological municipality' in 1984, it banned nuclear activity and committed to organic farming. Today it's Argentina's undisputed craft beer capital and one of its best hiking valleys, with routes to alpine refugios, hanging glaciers, and dramatic rock formations on every side.",
    highlights: [
      'Cajón del Azul trek: 14km each way to a famous glacial swimming hole and refugio in a stunning canyon — classic 2-day hike with overnight at Refugio Cajón del Azul',
      'Cerro Piltriquitrón (2,284m): the signature hike above town — steep forest trail to a boulder field and sky-high views; refugio at 1,400m',
      'Refugio Hielo Azul: 3-day circuit through beech forest and glaciers to a high alpine lake with resident glacier on the Chilean border',
      'Feria Artesanal El Bolsón: enormous open-air market every Thursday, Saturday, and Sunday — local food, crafts, wool, and woodwork',
      'Craft breweries: Cerveza El Bolsón (the original), Berlina, El Ovejero, and a dozen more — the valley has more breweries per capita than anywhere in South America',
      'Cascada Escondida: short 3km walk to a hidden waterfall through native coihue-cypress forest',
      'Lago Puelo National Park (18km south): cerulean glacial lake; boat trips across the lake to the Chilean border for day walkers',
      'Río Azul: excellent fly-fishing for brown trout in clear glacial water'
    ],
    tip: 'The Thursday artisan market is the best day to visit if you have flexibility. For Cajón del Azul, book the Refugio (cash only, bring Argentine pesos) and start early — the trail crosses a rope bridge that can close in high water. Lago Puelo boat tours run daily Nov–Apr. El Bolsón is 130km south of Bariloche on RN 40.',
    weather: 'Nov–Dec: 20–28°C on sunny afternoons — markedly warmer than Bariloche. The valley creates a thermal pocket. Afternoon thunderstorms build on the peaks by 3pm in December. Higher trails cool significantly above 1,500m.'
  },

  {
    id: 'esquel',
    name: 'Esquel',
    cat: 'cities',
    sub: 'Chubut, Argentina · Los Alerces NP gateway, La Trochita steam railway',
    lat: -42.9092, lng: -71.3178,
    summary: "Esquel is a no-frills Patagonian city of 40,000 people — a working town, not a resort, which is part of its appeal. It sits at the southern end of Argentina's lake district and serves as the gateway to Los Alerces National Park (UNESCO World Heritage), one of the most pristine temperate rainforests on the continent. Its other claim to fame is La Trochita — the narrow-gauge steam railway immortalised by Paul Theroux — which still runs on weekends through the Patagonian steppe.",
    highlights: [
      'Los Alerces National Park (30km west): UNESCO World Heritage site protecting ancient alerce trees over 3,000 years old; Lago Futalaufquen, Lago Menéndez, and the El Abuelo giant alerce',
      'La Trochita (Old Patagonian Express): 75cm-gauge steam train through the steppe — a UNESCO heritage railway; weekend departures from Esquel station',
      'Lago Futalaufquen circuit: multi-day trekking and kayaking loop through the national park with refugios and campsites',
      'Trevelin (25km south): a living Welsh colony founded in 1891, with a working flour mill, Welsh teahouses, and Cwm Hyfryd valley walks',
      'Paso Futaleufú border crossing (100km north): easy route to Futaleufú, Chile for whitewater rafting day trips or onward travel',
      'Cerro La Torta short hike: above the city — views of the steppe, the lake district, and the Andes in one panorama',
      'Fly-fishing: Río Carrileufu, Lago Futalaufquen, and Río Percy — some of the most pristine trout fishing in Patagonia',
      'Esquel airport (EQS): LATAM flights from Buenos Aires; useful entry point if combining with Patagonia cross-border trekking'
    ],
    tip: 'La Trochita runs Saturday and Sunday year-round from Esquel station — book ahead for Dec–Feb. Los Alerces El Abuelo alerce tree requires a full-day boat tour on Lago Menéndez (departs from Villa Futalaufquen); book the day before. Rent a car at the airport for park access — no public bus to the national park.',
    weather: 'Nov–Dec: 18–23°C, drier and more stable than the coast — the Andes block the Pacific rain here. Sunny mornings are common but afternoon wind across the steppe is strong (40–50 km/h). Los Alerces park gets more rain than Esquel itself.'
  },

  // ── ARGENTINA — SOUTHERN PATAGONIA ───────────────────────────────────────

  {
    id: 'los-antiguos',
    name: 'Los Antiguos',
    cat: 'cities',
    sub: 'Santa Cruz, Argentina · Lago Buenos Aires / General Carrera, border with Chile Chico',
    lat: -46.5500, lng: -71.6167,
    summary: "Los Antiguos sits on the southern shore of Lago Buenos Aires — the same body of water Chileans call Lago General Carrera. The micro-climate here is the warmest and sunniest in all of Argentine Patagonia, allowing cherries, strawberries, and stone fruits to grow abundantly on the wind-sheltered lakeshore. The border crossing into Chile Chico is just 3km from town — making this the natural Argentine side arrival point for travellers crossing to or from the Chilean Carretera Austral.",
    highlights: [
      'Border crossing to Chile Chico (3km): one of the easiest Chile–Argentina crossings — pedestrian and vehicle access',
      'Lago Buenos Aires: the same lake as Lago General Carrera in Chile — second largest in South America; fishing and boat tours',
      'Cherry orchards and fruit farms: the sunniest microclimate in Patagonia produces exceptional stone fruit (harvest Jan–Feb)',
      'Perito Moreno (town, 60km east on RN 40): the nearest real town with fuel, ATMs, and bus connections north and south',
      'Cueva de las Manos (RN 40, ~170km east): UNESCO World Heritage rock art site — 9,000-year-old hand stencils in a remote canyon (best combined with a multi-day RN 40 road trip)',
      'Fishing: Lago Buenos Aires holds huge brown and rainbow trout — guides and boat rental available in town',
      'Hostería la Posada de los Sueños and small guesthouses: friendly local accommodation on the lakeshore',
      'Kayaking and paddleboarding on the turquoise lake under Andean peaks'
    ],
    tip: 'The border opens standard hours — confirm at the Gendarmería. Chile Chico on the other side has a ferry to Puerto Ingeniero Ibáñez on Lago General Carrera, giving onward access to Coyhaique. Bring USD cash from Argentina — Los Antiguos ATMs frequently run out. Stock up on fuel before heading east on RN 40.',
    weather: 'Nov–Dec: 20–26°C on calm days — startlingly warm by Patagonian standards. The mountain backdrop blocks most Pacific rain. Wind from the west arrives in afternoon gusts but the sheltered lakeshore dampens it. Best weather window in all of Patagonia for this time of year.'
  },

  {
    id: 'ushuaia',
    name: 'Ushuaia',
    cat: 'cities',
    sub: 'Tierra del Fuego, Argentina · World\'s southernmost city, Beagle Channel, Antarctica',
    lat: -54.8019, lng: -68.3030,
    summary: "The world's southernmost city sits on the Beagle Channel in Tierra del Fuego — the island divided between Argentina and Chile at the bottom of the Americas. A city of 70,000 people that has reinvented itself from penal colony to international adventure tourism hub, Ushuaia is the last port of call before Antarctica, the end of the Ruta 3 Pan-American Highway, and the gateway to some of the most dramatic trekking in South America: Tierra del Fuego National Park, the Dientes del Navarino circuit, and the Beagle Channel islands.",
    highlights: [
      'Tierra del Fuego National Park (12km west): hiking trails through lenga beech and ñire forests to Lago Roca, Laguna Esmeralda, and the Valle de Lobos',
      'Laguna Esmeralda: one of the best day hikes near Ushuaia — 6-hour return through peat bogs and forest to a turquoise glacial lake',
      'Beagle Channel boat tours: sea lions, seabirds, Les Eclaireurs lighthouse, and Isla de los Pájaros colonies visible from daily cruises',
      'Cerro Martial: cable car above town and trekking to the Martial Glacier viewpoint (4km from centre)',
      'End of the World Museum: the story of the Yaghan people, the penal colony, and Tierra del Fuego\'s extraordinary history',
      'Train del Fin del Mundo: narrow-gauge railway through the national park following the original penal colony supply route',
      'Antarctica cruise departures: Oct–Mar, most cruises to the Antarctic Peninsula depart from Ushuaia — last-minute berths available 15–30% cheaper',
      'Crossing to Chilean Puerto Williams (30 minutes by boat): gateway to the Dientes del Navarino circuit and the remotest trekking in South America'
    ],
    tip: 'Ushuaia airport (USH) has regular flights from Buenos Aires (3 hours). Book accommodation early for Dec–Feb — the city is packed with Antarctic tourists. Laguna Esmeralda trail starts just outside town (taxi or walk). For the Dientes del Navarino circuit, cross to Puerto Williams first (book the catamaran or aerovías DAP flight). Bring full waterproofs — Tierra del Fuego weather is genuinely unpredictable.',
    weather: 'Nov–Dec: 10–15°C days, 3–7°C nights. Tierra del Fuego has weather from all four seasons in any single day. Wind off the Beagle Channel is persistent (40–60 km/h). Clear days are spectacular but dress for rain regardless.'
  }

);
