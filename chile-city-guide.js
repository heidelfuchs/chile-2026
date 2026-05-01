// Chile 8-Week Travel Map (November–December 2026)
// North to South: 19 Essential Cities & Towns
// Format: JavaScript object literals for integration into travel app

const chilenCities = [

// 1. ARICA
{
  id: 'arica',
  name: 'Arica',
  cat: 'cities',
  sub: 'Arica y Parinacota Region · Northernmost desert city where Andes meet the Pacific',
  lat: -18.4746,
  lng: -70.2979,
  summary: 'Chile\'s northernmost city sits perched above the Pacific with rare dazzling light—18km from Peru, it carries the ghosts of the War of the Pacific and the soul of Peruvian border culture. The lush Azapa Valley cuts through the Atacama just inland, where pre-Columbian archaeology and impossible green agriculture define the region. This is the driest inhabited place on Earth, yet water-fed valleys make it feel like an oasis.',
  highlights: [
    'Morro de Arica (139m cliff fortress): walk paved paths to summit for 360° views of city, port, and coastline; small military history museum explores 1880 War of the Pacific',
    'Azapa Valley archaeological zone: drive 12km south to explore pre-Columbian burial sites, pottery workshops, and the Museum of San Miguel de Azapa (artifact-rich colonial cemetery)',
    'Chinchorro mummies (Museum of San Miguel de Azapa): 7,000-year-old preserved bodies—older than Egyptian mummies—housed in this excellent regional museum',
    'Pica and its thermal springs: 200km southeast, this oasis town offers natural pools (Cocha Resbaladora) and aguardiente distilleries; day trip or overnight',
    'Lauca National Park (60km northeast): altiplano lake at 4,520m surrounded by volcanoes, flamingos, and sparse settlements—requires acclimatization but extraordinary',
    'Puerto Viejo waterfront: colonial streets, fishing boats unloading catch, local restaurants serving ceviche and agua de mariscos (shellfish broth)',
    'Arts and crafts markets near Plaza Colón: hand-woven textiles, copper work, and Peruvian-influenced crafts (haggle expected)'
  ],
  tip: 'Fly into Arica International (ARI, 18km north). The city sits at the Peru-Bolivia-Chile triple border; if wife has family here, expect extended visits. November temps hit 25–28°C with zero rain. Inland to Pica and Lauca requires 4WD; book tours from Arica proper. Most restaurants cluster near the port and historic center. Stock up on altitude meds if heading to Lauca.',
  weather: 'November–December: 25–28°C (77–82°F) daytime, 15–18°C (59–64°F) nights. Virtually no rainfall. Intense UV—sunscreen essential. Clear skies ideal for stargazing and photography. Ocean breezes cool the waterfront afternoons.'
},

// 2. IQUIQUE
{
  id: 'iquique',
  name: 'Iquique',
  cat: 'cities',
  sub: 'Tarapacá Region · Cliff-top city, duty-free zone, kitesurfing capital',
  lat: -20.2735,
  lng: -70.1520,
  summary: 'Perched on a 40m cliff above the Pacific, Iquique is a paradox: a duty-free shopping mecca built on nitrate-boom wealth, a windswept kitesurfing playground, and a surprisingly cultured city with theaters and museums. The zona franca sprawls with 600+ shops; offshore, winds create perfect conditions for extreme sports. The past echoes through mansions and cemeteries from the guano era.',
  highlights: [
    'ZOFRI (Zona Franca): massive 240-hectare duty-free zone, 30,000 m² mall with 600+ stores (perfume, electronics, liquor, clothing). Bring passport. Tax savings substantial on international brands.',
    'Barrio Histórico (Historic Quarter): restored Victorian mansions from nitrate boom; Teatro Municipal (1890); Plaza Prat with colonial buildings; best walking route: Calle Tarapacá to Calle Serrano',
    'Cavancha Beach and Playa Brava: dramatic cliff-backed beach for swimming; strong winds make it world-class for kitesurfing and windsurfing; November water temp 18–20°C',
    'Pica (150km inland): oasis town in the Atacama with thermal pools (Cocha Resbaladora), aguardiente distilleries, and Peruvian food scene; day trip or overnight',
    'Humberstone & Santa Laura (70km southeast): UNESCO-listed abandoned saltpeter refineries—haunting 1920s-30s ghost towns with workers\' housing, theater, schools—explore at dusk for full effect',
    'Museo Corbeta Esmeralda: retired Chilean warship open for tours (Naval War of the Pacific history)',
    'Pisco tasting tours: nearby distilleries produce some of Peru/Chile\'s finest pisco; book tastings in advance'
  ],
  tip: 'Fly into Diego Aracena (IQT, 35km south). ZOFRI requires passport and registration; most tour operators arrange logistics. The city sits 1,000m above sea level on a cliff plateau—wind is constant and fierce. October–November conditions are optimal; December can be turbulent for kite sports. Restaurants cluster near Plaza Prat and the waterfront. Book accommodation near Cavancha Beach if planning water sports. Pico trip usually full-day; arrange through your hotel.',
  weather: 'November–December: 22–25°C (72–77°F) daytime, 14–18°C (57–64°F) nights. Wind averages 15–25 km/h, gusting higher—essential for kite sports, challenging for walking. Almost zero precipitation. Clear skies 300+ days/year.'
},

// 3. CALAMA
{
  id: 'calama',
  name: 'Calama',
  cat: 'cities',
  sub: 'Antofagasta Region · Mining town and gateway to San Pedro de Atacama',
  lat: -22.4532,
  lng: -68.9253,
  summary: 'Calama is the workaday mining hub and essential launching pad for San Pedro de Atacama, the Atacama Desert\'s spiritual capital 100km east. The city itself is functional but unremarkable; its value lies in El Loa airport and as a supply point before heading into one of Earth\'s most alien landscapes.',
  highlights: [
    'San Pedro de Atacama (100km, 1h 15min by car): the desert town everyone comes for—otherworldly landscapes, stargazing capital, trekking base',
    'Atacama Salt Flat (Salar de Atacama): otherworldly white salt expanse, flamingo lagoons, surreal mirror reflections',
    'Valley of the Moon (Valle de la Luna): multi-colored rock formations, sunset hikes, alien terrain',
    'Geyser field El Tatio (4,300m): 80+ active geysers, steaming at dawn, accessible only by tour from San Pedro',
    'Laguna Cejar: salt lagoon where you float, impossible to sink, surrounded by desert',
    'Atacama Archaeological Museum (San Pedro): excellent Atacama Culture collection, pre-Hispanic artifacts, mummies',
    'Los Flamencos National Park: flamingo colonies (James, Andean, Chilean varieties) at multiple lagoons'
  ],
  tip: 'Fly into El Loa (CJC, 70km north; 90min drive to San Pedro). Calama itself has decent hotels and restaurants but no major attractions—most travelers sleep here one night before heading to San Pedro. Book all desert tours in San Pedro, not Calama. The drive to San Pedro is 1h 15min via Route 23; arrange pickup from your hotel. November water temps in lagoons 20–22°C; still cold. Altitude in San Pedro is 2,410m—arrive early to acclimatize. Stock up on snacks and water in Calama.',
  weather: 'November–December: 28–32°C (82–90°F) daytime, 10–15°C (50–59°F) nights. Virtually zero rain. Intense high-altitude UV. San Pedro runs 8–10°C cooler due to elevation. Clear nights perfect for stargazing (300+ clear nights/year).'
},

// 4. ANTOFAGASTA
{
  id: 'antofagasta',
  name: 'Antofagasta',
  cat: 'cities',
  sub: 'Antofagasta Region · Mining capital with iconic rock arch and ghost towns',
  lat: -23.6500,
  lng: -70.4000,
  summary: 'Antofagasta is Chile\'s mining capital, sprawling along the desert coast. While the city itself is industrial and modern, the payoff lies north: La Portada, an iconic 40–50m sea arch rising impossibly from the Pacific, and nearby ghost towns (Chacabuco, Humberstone) frozen in the nitrate boom\'s death throes.',
  highlights: [
    'La Portada rock arch (18km north): 40–50m sea arch jutting from cliffs, perfect for photographs at sunset; easily visited by car or tour',
    'Chacabuco ghost town (70km north): 1924 nitrate mining town abandoned since the 1930s; explore workers\' housing, church, schoolhouse, theater, prison—feels like time stopped',
    'Humberstone and Santa Laura Saltpeter Works (45km northeast, near Iquique): UNESCO World Heritage Site; two refineries frozen in time with machinery, housing, hospitals, theaters from the 1920s–30s',
    'Antofagasta Regional Museum: nitrate boom artifacts, pre-Hispanic textiles, colonial history',
    'Juan López Beach: northernmost swimming beach, rocky coves, less crowded than city beaches',
    'Pier Memorial: historic port structure with shops and seafood restaurants',
    'Antofagasta waterfront promenade: restored colonial quarter with shops, cafes, views toward La Portada'
  ],
  tip: 'Fly into Andrés Bello (ANF, 24km south; 30min drive to city center). La Portada is essential and easily done as a morning trip or 2-hour excursion by car rental or tour. Ghost towns require full-day tours—book through your hotel; they\'re often combined with Iquique or a multi-day northern loop. Most infrastructure (hotels, restaurants) clusters in central Antofagasta near the port and main avenue. November is perfect for coastal exploration.',
  weather: 'November–December: 26–29°C (79–84°F) daytime, 16–20°C (61–68°F) nights. Ocean breeze keeps afternoons pleasant. Almost no rain. Clear skies ideal for photography. Water temp 18–19°C (cold for swimming).'
},

// 5. LA SERENA
{
  id: 'la-serena',
  name: 'La Serena',
  cat: 'cities',
  sub: 'Coquimbo Region · Colonial churches, pisco valley gateway, historic beach city',
  lat: -29.9027,
  lng: -71.3525,
  summary: 'La Serena is Chile\'s oldest city (founded 1544) and most architectural gem north of Santiago. More than 30 churches with distinctive belfries earned it the nickname "City of the Belfries." The carmine-on-white historic quarter is walkable and charming; 12 beaches line the Avenida del Mar. Gateway to the Elqui Valley, famous for pisco production and spiritual retreats.',
  highlights: [
    'Catedral Metropolitana (1856): neo-classical masterpiece dominating Plaza de Armas; restored, open for visits and Mass',
    'San Francisco Church: colonial sedimentary stone, roughly 350 years old; interior retablo stunning',
    'San Agustín and Santo Domingo churches: 350-year-old restored colonial temples; combined walking tour of 30+ churches covers Barrio Histórico',
    'Avenida del Mar beaches (Mansa, Blanca, Canto del Agua, others): 12 named beaches; Mansa is calmest, Brava has more waves; promenade lined with shops and restaurants',
    'Elqui Valley pisco distilleries (55km east, 1h): Pisco Capel, Pisco Control, smaller artisanal producers; full-day tastings include vineyard tours, lunch',
    'Montegrande (Elqui Valley): spiritual retreat town famous for yoga, meditation, alternative therapies; day trip from La Serena',
    'Mercado de La Serena (Central Market): fresh produce, fish, local foods, artisanal crafts; Peruvian and Chilean fusion cuisine'
  ],
  tip: 'Fly into La Florida (LSC, 11km south; 15min drive). La Serena is Chile\'s most accessible colonial experience and a natural stopover between Santiago and the north. The historic quarter is walkable (2–3 hours for full tour). Beach swimming is safe and pleasant; November water temp 19–21°C. Elqui Valley day trips are easy; book with tour operators in the historic center. Restaurants cluster around Plaza de Armas and along the Avenida del Mar. Book pisco tastings in advance if planning weekends.',
  weather: 'November–December: 23–30°C (73–86°F) daytime, 13–18°C (55–64°F) nights. Spring in November; summer heat rising in December. Almost no rainfall. Clear skies 300+ days/year. Ocean breeze moderates afternoon heat.'
},

// 6. VIÑA DEL MAR
{
  id: 'vina-del-mar',
  name: 'Viña del Mar',
  cat: 'cities',
  sub: 'Valparaíso Region · Garden City, beach resort, casino, Casablanca Valley gateway',
  lat: -33.0327,
  lng: -71.5527,
  summary: 'Viña del Mar ("Vineyard by the Sea") earned its nickname "Garden City" for cultivated parks and Victorian architecture. It\'s a beach resort with an iconic 1930 casino, manicured waterfront, and proximity to Casablanca Valley wineries. The city feels more polished than its older sister Valparaíso, though less bohemian.',
  highlights: [
    'Viña del Mar Casino (opened 1930): art deco palace with restaurants, shows, gaming; dress code enforced (jacket required for men); evening shows and fine dining',
    'Reñaca Beach and Promenade: upscale beach with clubs, restaurants, surfing; long seaside walk with sculpture gardens',
    'Quinta Vergara: botanical garden with 8,000+ plant species, museums, concerts venue; peaceful inland escape from beach bustle',
    'Casablanca Valley wine tour (30km east, 45min): Casas del Bosque, Santa Rita, other wineries; tasting rooms often have restaurants; full-day tour includes lunch',
    'Cerro Castillo (Valparaíso, 10km south): historic fort with panoramic views; funicular railway; colorful bohemian quarter (Cerro Alegre, Cerro Concepción) nearby',
    'Caleta Abarca Beach: sheltered cove perfect for swimming; restaurants and seaside promenade',
    'Avda del Mar promenade: 1.5km seaside walk with gardens, sculptures, restaurants, and beach access'
  ],
  tip: 'Viña del Mar is a 1.5-hour drive from Santiago (easy day trip) and a 30-minute drive to Valparaíso. Frequent metro and buses connect the coast. Hotels range from luxury beachfront (Enjoy, Sheraton) to mid-range. Casablanca Valley wineries are best visited on organized day tours; rental car also works. Casino requires passport; dress code enforced. Swimming is safe; water temp 17–19°C (November–December). Restaurants and nightlife are good but touristy—venture inland for local flavor.',
  weather: 'November–December: 22–28°C (72–82°F) daytime, 12–17°C (54–63°F) nights. Spring warmth building into summer. Occasional rain in November. Ocean breeze and humidity create Mediterranean feel. Water temp 17–19°C; wetsuit helpful for extended swimming.'
},

// 7. RANCAGUA
{
  id: 'rancagua',
  name: 'Rancagua',
  cat: 'cities',
  sub: 'O\'Higgins Region · Colchagua wine capital, hot springs, historic battles',
  lat: -34.1701,
  lng: -70.7406,
  summary: 'Rancagua is the capital of O\'Higgins Region, 35km south of Santiago. The city itself is functional and modern with little charm, but it\'s the gateway to Colchagua Valley\'s renowned wineries and Cauquenes Hot Springs. Historically significant as the site of the Battles of Rancagua (1814) during Chilean independence.',
  highlights: [
    'Colchagua Valley wine route (30–60km east): Montes, Santa Rita, Lapostolle, Viu Manent, others; tasting rooms, restaurants, some have hotels; full day easily consumed',
    'Cauquenes Hot Springs (19km east, Machalí): oldest thermal center in Chile; 19th-century wooden pavilions; outdoor and indoor pools, spa services',
    'Plaza de los Héroes (Rancagua center): colonial square with statue of O\'Higgins; museums nearby',
    'Cachapoal Valley archaeology: Colchagua Museum in Santa Cruz (40km south) has exceptional pre-Hispanic textiles and artifacts',
    'Wine Route restaurants and lodges: many wineries offer fine dining with vineyard views; Carménère, Cabernet Sauvignon, Merlot dominate',
    'Viña La Posada (mid-valley): smaller, family-run winery popular with travelers',
    'Mariposa Reserve (Colchagua): butterfly sanctuary, gardens, bird watching'
  ],
  tip: 'Rancagua is best accessed by car rental from Santiago (1-hour drive south) or as a stopover on the Pan-American Highway heading further south. Most travelers base in the wine valley (Santa Cruz area) rather than in Rancagua proper. Wineries are spread across 60km; book tours or rent a car with a designated driver or tour guide. Cauquenes Hot Springs is a relaxing afternoon activity post-wine tasting. November weather is warm and perfect for wine touring.',
  weather: 'November–December: 25–32°C (77–90°F) daytime, 10–15°C (50–59°F) nights. Spring warmth building; occasional late-November rains. Generally sunny and clear. Ideal for wine touring and hot springs visits.'
},

// 8. TALCA
{
  id: 'talca',
  name: 'Talca',
  cat: 'cities',
  sub: 'Maule Region · Wine capital, earthquake heritage, Vilches Alto gateway',
  lat: -35.4359,
  lng: -71.6673,
  summary: 'Talca is Maule Region\'s capital and the heart of Chile\'s largest wine-producing area (45% of national output). The 2010 earthquake devastated the city center, but restoration revealed renewed focus on heritage architecture and wine culture. The city is a practical base for exploring the Maule Valley and mountain gateway to Vilches Alto.',
  highlights: [
    'Maule Valley wineries (Cauquita, Gillmore, Viu Manent, Hacienda López): full-day wine tours from Talca; tasting rooms, restaurants, many offer lodging',
    'Cathedral and Plaza de Armas (rebuilt post-2010): reconstructed neo-classical cathedral; restored historic quarter with shops and restaurants',
    'Vilches Alto (70km east, 2 hours): mountain refuge in the Andes at 1,500m; treks to Laguna del Alto, waterfall hikes, and back-to-nature retreats; cold mountain climate, excellent for hikers',
    'Vilches Bajo (lower lodge): starting point for trails into Descabezado Grande volcano and Vilches Alto area',
    'Maule Museum: wine history, regional archaeology, pre-Hispanic artifacts',
    'Talca Central Market: fresh produce, local foods, artisanal goods',
    'San Clemente (nearby): wine and agricultural village with smaller producers and rural accommodations'
  ],
  tip: 'Talca is on the Pan-American Highway, 255km south of Santiago (3–4 hours drive). Direct buses connect Santiago and Talca. Most travelers rent cars for wine touring. Maule Valley spreads across 80km; day tours are essential or hire a driver. Vilches Alto is a cool mountain retreat but requires acclimatization if coming from lower elevations. November is excellent for wine touring; December can be hot in the valley. Restaurants cluster around Plaza de Armas. Book wine tours in advance.',
  weather: 'November–December: 24–31°C (75–88°F) daytime (lower in mountains), 10–15°C (50–59°F) nights. Spring warmth building. Occasional November rain. Clear skies favor wine touring. Vilches Alto at 1,500m runs 10–15°C cooler.'
},

// 9. CONCEPCIÓN
{
  id: 'concepcion',
  name: 'Concepción',
  cat: 'cities',
  sub: 'Biobío Region · Chile\'s second city, university hub, cultural center, river city',
  lat: -36.8270,
  lng: -73.0498,
  summary: 'Concepción is Chile\'s second-largest city and intellectual heart—home to universities (Concepción, Catholic, Biobío) that drive a vibrant culture, music scene, and creative energy. Perched on the Biobío River, it suffered severe earthquake damage in 2010 but has re-emerged with revitalized cultural districts. Less touristy than Santiago but richer in local character.',
  highlights: [
    'Universidad de Concepción campus: beautiful grounds with museums and galleries; university history museum',
    'Biobío River waterfront (Costanera): restored promenade with parks, restaurants, evening strolls; river views',
    'Regional art galleries and museums: Galería de Arte Macro, Pinacoteca Municipal; contemporary Chilean art',
    'Barrio Universitario: bohemian quarter near universities; bookstores, cafes, live music venues, graffiti art',
    'Concepción Cathedral: restored post-2010; neo-gothic architecture; Plaza Independencia nearby',
    'Local music scene: check for concerts and live performances at university venues and smaller clubs',
    'Mercado de Abastos: central market with fresh produce, local foods, and regional crafts',
    'Talcahuano port (nearby, 15km): Chile\'s largest naval base; industrial but functional'
  ],
  tip: 'Concepción is served by Carriel Sur Airport (CCP, 8km south). It\'s on the Pan-American Highway (2h south of Santiago). The city has good hotels, restaurants, and transport. Local buses are reliable but confusing for newcomers. Most travelers spend 1–2 nights here as a cultural stopover en route south. The university quarter is safest and most interesting. November is perfect for walking the river and exploring local art. Public transport connects to nearby Talcahuano and nature areas.',
  weather: 'November–December: 20–27°C (68–81°F) daytime, 10–14°C (50–57°F) nights. Spring warmth building. Occasional November rain. Biobío River creates some microclimate variation. Moderate humidity. River-side afternoon breezes.'
},

// 10. CHILLÁN
{
  id: 'chillan',
  name: 'Chillán',
  cat: 'cities',
  sub: 'Ñuble Region · Birthplace of Bernardo O\'Higgins, Nevados ski resort, famous market',
  lat: -36.6066,
  lng: -72.0987,
  summary: 'Chillán is Ñuble Region\'s capital and birthplace of Bernardo O\'Higgins, Chile\'s independence hero. The city is modest and functional but anchors access to Nevados de Chillán ski resort (85km northeast) and hosts a legendary open-air market. The region feels rural and authentic, far from coastal tourism.',
  highlights: [
    'Nevados de Chillán Ski Resort (85km east, 2 hours): 28 ski tracks, 35km of runs, 10,000 hectares skiable area; elevation 1,530–2,500m; also thermal pools and summer trekking',
    'Chillán Market (Mercado Municipal): multi-block open-air market famous for Longanizas (spiced sausages), local produce, crafts, artisanal goods; lively atmosphere, haggle expected',
    'Bernardo O\'Higgins birthplace (Chillán Viejo, nearby): historic colonial site; museum and monument to Chile\'s founding father',
    'Plaza Bernardo O\'Higgins: city center square with shops, restaurants, and local services',
    'Antuco Volcano and Laguna del Laja National Park (north): 60km; lake surrounded by volcanic peaks; hiking, camping, scenic drives',
    'Termas de Chillán (resort): thermal hot springs and spa at base of ski area',
    'Regional markets and craft fairs: local weaving, pottery, agricultural goods'
  ],
  tip: 'Chillán is on the Pan-American Highway, 400km south of Santiago (5–6 hours drive). Direct buses connect Santiago and Chillán. To access Nevados ski resort, hire a car or arrange resort shuttle from Chillán. The market is a full sensory experience; arrive early for best selection. November temperatures are pleasant for market exploring. Ski resort is closed in November–December (Southern Hemisphere winter is June–September). Thermal pools at Nevados are open year-round. Most hotels and restaurants are simple and functional.',
  weather: 'November–December: 20–28°C (68–82°F) daytime, 10–14°C (50–59°F) nights. Spring warmth. Occasional late-November rains. Nevados peaks run much cooler (5–10°C at 2,500m elevation). Clear skies favor market visits and mountain views.'
},

// 11. LOS ÁNGELES
{
  id: 'los-angeles',
  name: 'Los Ángeles',
  cat: 'cities',
  sub: 'Biobío Region · Gateway to Laguna del Laja National Park, quiet base city',
  lat: -37.4691,
  lng: -72.3352,
  summary: 'Los Ángeles is a small, quiet city in Biobío Region, primarily valuable as a gateway to Laguna del Laja National Park (60km north). The city itself is modest and functional with basic services, but it\'s the launching point for one of Chile\'s most spectacular alpine lakes and nearby Antuco Volcano.',
  highlights: [
    'Laguna del Laja National Park (60km north, 1h 45min): stunning alpine lake surrounded by volcanic peaks (Sierra Velluda, Antuco Volcano); hiking, camping, scenic drives',
    'Saltos del Laja (Laja Waterfalls): impressive multi-tiered waterfall near Los Ángeles; accessible by short walk from road',
    'Antuco Volcano (2,979m): accessible by 4WD track from park; demanding climb with volcanic vistas',
    'Los Ángeles city center: simple colonial plaza with shops and restaurants; local market with agricultural goods',
    'Biobío River: scenic river valley; fishing and kayaking opportunities',
    'Regional hot springs (nearby): smaller thermal spas in surrounding area'
  ],
  tip: 'Los Ángeles is on the Pan-American Highway, 100km south of Concepción (1.5h drive). Direct buses connect larger cities. Rent a car to explore Laguna del Laja; the city has few attractions in itself. Most travelers spend 1 night in Los Ángeles as a stopover en route to Laguna del Laja. Hotels are basic but functional. Park access requires early morning departure for full-day visits.',
  weather: 'November–December: 20–26°C (68–79°F) daytime, 10–13°C (50–55°F) nights. Laguna del Laja runs 10–15°C cooler due to 1,500m+ elevation. Spring warmth. Occasional rains. Clear mornings best for mountain visibility.'
},

// 12. VALDIVIA
{
  id: 'valdivia',
  name: 'Valdivia',
  cat: 'cities',
  sub: 'Los Ríos Region · German heritage, craft beer capital, historic forts, sea lions, rainy soul',
  lat: -39.8140,
  lng: -73.2450,
  summary: 'Valdivia is southern Chile\'s most cultured small city, defined by German-Swiss-Austrian settlement (1850s onward), resulting in exceptional beer culture, heavy wooden architecture, and Germanic surnames on every street. Perched on the confluence of three rivers, it\'s famous for Kunstmann Brewery, colonial forts guarding the harbor, and sea lions lounging in the central market. The weather is rainy and moody, fitting the landscape.',
  highlights: [
    'Cervecería Kunstmann (Isla Teja brewery, Km5 toward Niebla): German brewery founded 1997, continuing tradition from 1851; 45-min or 90-min brewery tours with tastings; beers brewed by Reinheitsgebot (1516 German purity law); restaurant with German fare',
    'Floating Market (Mercado Fluvial): sea lions and birds scavenge at the docks; fresh fish, seafood restaurants on stilts over water; lively morning scene',
    'Forts of Valdivia: 10+ Spanish colonial fortifications scattered across rivers (Corral, Niebla, on mainland); Castillo San Paul, Fuerte de la Mancera most accessible; combine boat tour with walking',
    'Isla Teja (island): home to Kunstmann, botanical gardens, local museums; car-free walks and river views',
    'Mercado Modelo central market: produce, fish, German cold cuts (wurst), artisanal goods, local food stalls',
    'Niebla (15km west): coastal village with beach, more forts, fishing village charm; day trip from Valdivia',
    'Casa-Museo Haverbeck (historic mansion): German immigrant\'s home, now museum; period furnishings and regional history',
    'River kayaking and boat tours: Calle-Calle, Valdivia, Cau-Cau rivers merge; hire guides locally'
  ],
  tip: 'Valdivia is 220km south of Concepción (3h drive), or accessible by bus on Pan-American Highway. The city sits at the confluence of three rivers and is surrounded by rainforest. Weather is rainy and moody year-round (pack waterproof jacket). November is spring and relatively drier than winter. Brewery tours require reservation; best booked in advance or through hotels. Most restaurants and beer bars cluster near the floating market and central plaza. German beer culture is genuine and excellent. Sea lion sightings in the central market are reliable. Forts require organized boat tours or private boat rental.',
  weather: 'November–December: 17–24°C (63–75°F) daytime, 8–12°C (46–54°F) nights. Spring; rainfall begins increasing. Overcast, rainy days common (bring jacket). Humidity high. River and microclimate moderates temps. Water temp 14–16°C (cold).'
},

// 13. OSORNO
{
  id: 'osorno',
  name: 'Osorno',
  cat: 'cities',
  sub: 'Los Lagos Region · Lake District hub, German architecture, volcanoes, Puyehue gateway',
  lat: -40.5336,
  lng: -73.1435,
  summary: 'Osorno is the Lake District\'s main hub and gateway to some of southern Chile\'s most spectacular scenery. The 2,652m Osorno Volcano dominates the skyline (locals call it Chile\'s Mount Fuji). The city itself is modern and functional but defined by German-Swiss heritage—architecture, dairy farming, and hearty food traditions. It\'s the jumping-off point for Puyehue National Park and lakeside adventures.',
  highlights: [
    'Osorno Volcano (2,652m): iconic cone looming over Lake Llanquihue; accessible by car partway, then hiking; summit trek requires mountaineering skills; base walks offer views',
    'Lake Llanquihue: Chile\'s largest lake (870 km²); sailing, kayaking, beaches; Puerto Varas and Frutillar are scenic towns on shore',
    'Puyehue National Park (45km east): temperate rainforest, thermal springs (Termas de Puyehue), Laguna Verde hikes, volcanic landscapes',
    'Antillanca Ski Resort (Puyehue area, summer trekking available): ski in winter; hiking and nature in November–December',
    'Osorno city center: restored colonial plaza with German-influenced architecture; shops and restaurants',
    'Frutillar (30km south on lake): charming German immigrant village with excellent lake views; museums and restaurants',
    'Puerto Varas (30km south): picturesque lake town with German-style houses, handicraft markets, brewery bars'
  ],
  tip: 'Osorno is 850km south of Santiago (12–14 hours drive or domestic flight to Puerto Montt nearby airport, 90min drive). The city is the Lake District\'s practical hub but less scenic than Puerto Varas or Frutillar. Hotels range from simple to upscale (Sonesta Hotel Osorno has 2 restaurants). Rent a car to explore lake towns and national parks; bus transport is available but less flexible. November is perfect for hiking and water sports. Thermal pools at Puyehue are open year-round.',
  weather: 'November–December: 18–26°C (64–79°F) daytime, 8–13°C (46–55°F) nights. Spring warmth. Rainfall increasing. Overcast days common. Humidity high (temperate rainforest climate). Water temp 17–19°C. Osorno Volcano peak always cold.'
},

// 14. PUERTO MONTT
{
  id: 'puerto-montt',
  name: 'Puerto Montt',
  cat: 'cities',
  sub: 'Los Lagos Region · Major southern hub, Navimag ferry base, Angelmo fish market',
  lat: -41.3167,
  lng: -72.7451,
  summary: 'Puerto Montt is Chile\'s major southern gateway—the last large city before Patagonia\'s wilderness and the crucial ferry hub for the Navimag four-day voyage through the fjords to Puerto Natales. The city pulses with working fisheries, craft beer, German heritage, and the Angelmo fish market, one of Chile\'s most authentic food experiences. Functionally chaotic, culturally rich.',
  highlights: [
    'Angelmo Fish Market (2km west): working fish market built on stilts over water with boats unloading daily catch; seafood restaurants serving ceviche, caldillos (shellfish soups), and steaming platters; morning liveliest; second section sells local handicrafts',
    'Navimag Ferry terminal: departs twice weekly for 4-day journey through Patagonian fjords to Puerto Natales; book 6–8 weeks in advance; ferries visit Puerto Eden and glacier-carved channels',
    'Alerce Andino National Park (37km south): ancient alerce (Patagonian cypress) trees, some 3,000+ years old; short walks among primordial forest',
    'Puerto Varas (20km south): prettier than Puerto Montt; lakeside German architecture, chocolate shops, craft breweries; good base for Lake District',
    'Chiloé Island gateway (Pargua ferry, 60km south): 35-min ferry every 15 min (24/7) to Ancud; ferry fares included in bus tickets or pay separately for car rental',
    'Craft beer scene: several breweries cluster near city center (Puerto Montt Brewery, others); tastings and tours available',
    'Mercado Fluvial (city center): local fish, produce, and handicraft market; less touristy than Angelmo'
  ],
  tip: 'Puerto Montt is 1,050km south of Santiago (14–16 hours drive or domestic flight). It\'s the major transportation hub for the south. Hotels range from budget hostels (Sacho Cabezas) to upscale (Hotel don Luis, Sonesta). Most travelers spend 1–2 nights; many are transiting to Chiloé or boarding the Navimag. Angelmo is a must-see and working market experience. Navimag ferry bookings are crucial (November–December fill quickly)—book 6–8 weeks ahead; accommodations range from shared bunks to private cabins. City center has restaurants and shops, but Angelmo is the authentic food destination. Buses to Chiloé Pargua depart from central bus terminal; ferries are every 15 minutes.',
  weather: 'November–December: 18–25°C (64–77°F) daytime, 8–12°C (46–54°F) nights. Spring. Rainfall common; bring waterproof jacket. Humidity and overcast days typical. Water temp 14–16°C. Angelmo can be windy and rainy—visit morning for conditions and market energy.'
},

// 15. ANCUD
{
  id: 'ancud',
  name: 'Ancud',
  cat: 'cities',
  sub: 'Los Lagos Region / Chiloé · Northern Chiloé, penguins, historic fort, Chiloé introduction',
  lat: -41.8717,
  lng: -73.8309,
  summary: 'Ancud is the main town on northern Chiloé Island and travelers\' first taste of an archipelago\'s unique culture. Perched on a bay with dramatic tidal flats, Ancud serves as the gateway to Chiloé\'s mythology (the Caleuche ghost ship haunts these waters), penguin colonies, and the 1770 Fuerte San Antonio where Spain\'s last Chilean stronghold fell. The town is compact, authentic, and charmingly weathered.',
  highlights: [
    'Fuerte San Antonio (1770): restored stone fortress overlooking bay; museum and cannon displays; views of Ancud harbor and tidal flats; last Spanish stronghold in Chile after independence',
    'Penguin tours to Puñihuil (30km south, 1h): Magellanic and Humboldt penguin colonies coexist here—unique globally; boat tours depart early morning; combine with local restaurant lunch',
    'Mercado de Ancud: local fish, seafood, vegetables, handicrafts; Chiloé-specific foods like curanto (earth oven feast) and sopaipillas',
    'Museum of Chiloé History: artifacts, photographs, and stories of archipelago settlement and culture',
    'Tidal flats and bay walks: dramatic tides expose sand flats; walks at low tide reveal landscape',
    'Caleuche legend tours: local guides share mythology of ghost ship that sails Chiloé\'s waters (night tours available)',
    'Nearby Caulin (10km): small village known for its beaches and cultural authenticity'
  ],
  tip: 'Ancud is accessible via Pargua ferry (35 min from Puerto Montt; ferries every 15 min, 24/7). From ferry terminal, buses and taxis go to Ancud town center (20km, 30min). Stay 1–2 nights in Ancud to explore northern Chiloé. Hotels are simple but comfortable (Guesthouse La Nave, Hotel Galeon Azul). Penguin tours must be booked evening before; depart 7–8 am. Fuerte San Antonio visit is morning-friendly; avoid midday crowds. Food is locally sourced; try fresh seafood. November weather is cool and can be rainy; waterproof jacket essential.',
  weather: 'November–December: 16–23°C (61–73°F) daytime, 8–11°C (46–52°F) nights. Spring; rainfall common. Overcast, misty mornings (clearing by afternoon). Humidity high. Wind can be strong. Water temp 13–15°C. Tidal flats dramatic at low tide.'
},

// 16. COYHAIQUE
{
  id: 'coyhaique',
  name: 'Coyhaique',
  cat: 'cities',
  sub: 'Aysén Region · Carretera Austral hub, fly-fishing capital of South America',
  lat: -45.5752,
  lng: -71.9446,
  summary: 'Coyhaique is Aysén Region\'s capital and the beating heart of the Carretera Austral—the 1,200km highway that opened Patagonia to the world in 1976. A young city (founded 1929), Coyhaique sits at the confluence of two rivers and is the world\'s fly-fishing capital, drawing anglers to pristine trout rivers. The landscape is raw, thinly settled, and genuinely remote.',
  highlights: [
    'Carretera Austral (Ruta 7): 1,200km highway carved through Patagonia; epic drive with suspension bridges, turquoise lagoons, and wilderness; Coyhaique is ideal midpoint for north–south traverse',
    'Fly-fishing on Río Simpson and surrounding rivers: world-class brown and rainbow trout; guides available through hotels; season is November–April',
    'Marble Cathedral (Puerto Tranquilo, 70km north): stunning turquoise lake with marble caves; boat tours; geological marvel',
    'Cerro Castillo trek (40km south): 4–5 hour hike with 360° views of Aysén landscape; accessible directly from Coyhaique',
    'Villa Santa Lucía (100km north): junction town on Carretera Austral; gateway to Laguna San Rafael (calving glaciers)',
    'Laguna San Rafael National Park (accessible from Coyhaique): UNESCO Biosphere Reserve with Laguna San Rafael glacier and marine biodiversity; requires tour',
    'Coyhaique city center: modest shops and restaurants; central market with regional foods'
  ],
  tip: 'Coyhaique is accessed by flights from Santiago (LATAM, Sky Airline) to Teniente Vidal Airport (55km north; 1h drive). The Carretera Austral is drivable but requires 4WD or high-clearance vehicle, especially south of Coyhaique. Rental car options are limited; book ahead. Most travelers spend 2–3 nights in Coyhaique as a base for Carretera Austral exploration. Fly-fishing requires advance booking (November–December is mid-season; December–February is peak). Hotels are modest (Hotel Copihue, Hotel Terrado) but functional. Road south from Coyhaique can be slow and rough; allow extra time.',
  weather: 'November–December: 15–22°C (59–72°F) daytime, 5–10°C (41–50°F) nights. Spring; rainfall common (Aysén is very wet year-round). Overcast, misty days frequent. Wind can be strong. Humidity high. Expect rain on Carretera Austral drive.'
},

// 17. PUERTO NATALES
{
  id: 'puerto-natales',
  name: 'Puerto Natales',
  cat: 'cities',
  sub: 'Magallanes Region · Torres del Paine gateway, Navimag terminus, end-of-the-world feel',
  lat: -51.7297,
  lng: -72.5155,
  summary: 'Puerto Natales is the gateway to Torres del Paine National Park and the southern terminus of the Navimag ferry. The town sits on Última Esperanza Sound ("Last Hope Fjord"), named by explorers; dramatic snow-capped peaks frame the colorful wooden houses perched above the water. It\'s the last real settlement before Antarctic waters—romantic, slightly rugged, end-of-the-world authentic.',
  highlights: [
    'Torres del Paine National Park (70km south, 1.5h): W Trek (4–5 days) or circuits; base camps and refuge lodges available; November–December spring meadows, melting lakes; iconic three granite towers',
    'Balmaceda and Serrano Glaciers boat tour: full-day cruise from Puerto Natales through Última Esperanza Fjord to two massive glaciers; sea lions, waterfalls, icebergs',
    'Cueva del Milodon (24km north): large cave where prehistoric ground sloth remains were found; museum and walking trail',
    'Puerto Natales waterfront: colorful wooden houses on stilts; fresh seafood restaurants; Magellanic lamb and spider crab specialties',
    'Afrigonia restaurant: African-inspired cuisine using local ingredients; excellent meals',
    'Holaste! coffee shop: locally beloved cafe with good coffee and pastries',
    'Última Esperanza Sound cruises: various operators offer fjord cruises, glacier tours, wildlife viewing'
  ],
  tip: 'Puerto Natales is 247km northwest of Punta Arenas (3.5h drive) or accessible via the Navimag ferry from Puerto Montt (4 days). Fly into Punta Arenas (PUQ) or Puerto Natales (PMC) if available. Most travelers spend 2–3 nights before/after Torres del Paine trek. Hotels range from budget hostels (Erratic Rock, Hesingel) to mid-range and upscale (Explora, Salto Chico). Glacier tours and Torres del Paine logistics are best booked through hotel or tour operators. Restaurants are good but limited; book dinner ahead during peak season. Navimag ferry bookings require advance planning (6–8 weeks); departures are Tuesday and Friday (check schedule). Weather is unpredictable; pack for rain and wind.',
  weather: 'November–December: 13–19°C (55–66°F) daytime, 4–8°C (39–46°F) nights. Spring; rapid weather changes. Frequent rain and wind (Patagonia trademark). Clear days are spectacular. Water temp 8–10°C (cold). Layering essential.'
},

// 18. PUNTA ARENAS
{
  id: 'punta-arenas',
  name: 'Punta Arenas',
  cat: 'cities',
  sub: 'Magallanes Region · Patagonia\'s southernmost capital, Magellan Strait, penguin colonies',
  lat: -53.1638,
  lng: -70.9181,
  summary: 'Punta Arenas is the world\'s southernmost large city, perched on the Strait of Magellan between Atlantic and Pacific. This is the last outpost before Antarctica—rough, windswept, historically maritime, and home to three penguin colonies. The city pulses with guano-era wealth (visible in grand cemeteries with ornate chapels) and modern energy as the gateway to Tierra del Fuego and the extreme south.',
  highlights: [
    'Isla Magdalena penguin colony (32km northeast, 2h boat journey): 120,000 Magellanic penguins in breeding season (September–March); 800m walking trail among nesting birds; boat tours depart 7–8 am',
    'Isla Marta penguin colony (nearby Magdalena Island tours): alternative penguin viewing; some tours combine both islands',
    'Cemetery of Punta Arenas: 19th-century graves with elaborate marble and wooden chapels built by wealthy families; museum-like historic site; self-guided walk among monuments',
    'Museo Regional Magallánico (Regional Museum): shipwrecks, maritime history, indigenous artifacts, colonial period',
    'Strait of Magellan views: dramatic seascape; ferry terminal; maritime heritage center',
    'Street market and local restaurants: Magellanic lamb, king crab (centolla), fresh fish; Mercado Municipal for local foods',
    'Tierra del Fuego (Argentine side, 1h drive across via ferry): Ushuaia and Cape Horn access (advance planning required)'
  ],
  tip: 'Punta Arenas is accessible by domestic flights (LATAM, Sky Airline from Santiago; 4h flight or overnight connections) or via Navimag ferry from Puerto Natales (4 days). The city serves as base for Antarctica cruises, Tierra del Fuego visits, and penguin tours. Hotels range from simple (Hotel Patagonia) to upscale (Westin). Penguin tours must be booked through tour operators; early morning departures are standard. Weather is extreme; strong winds (up to 130 km/h in summer) are common. November is spring with relatively better conditions. Pack for severe weather (waterproof jacket, wind-resistant gear). Restaurants are good but limited; dinner reservations recommended. Most travelers spend 1–2 nights before penguin tour and/or Tierra del Fuego access.',
  weather: 'November–December: 10–18°C (50–64°F) daytime, 3–8°C (37–46°F) nights. Spring. High winds (up to 130 km/h in December). Frequent rain and misty conditions. Clear days rare but spectacular. Water temp 7–9°C. Extremely exposed location.'
},

// 19. PUERTO WILLIAMS
{
  id: 'puerto-williams',
  name: 'Puerto Williams',
  cat: 'cities',
  sub: 'Magallanes Region · Southernmost city on Earth, Dientes Circuit base, Cape Horn gateway',
  lat: -54.9167,
  lng: -67.6167,
  summary: 'Puerto Williams claims the title of world\'s southernmost city (though disputed by Argentine Ushuaia and Chilean Punta Arenas). This is the true end of the road—a small naval base and frontier village on Navarino Island with raw, sub-Antarctic character. The Dientes de Navarino trek (43km, 5 days) is the world\'s southernmost multi-day hike, and Cape Horn lies just offshore. It\'s adventure tourism at the literal edge of the world.',
  highlights: [
    'Dientes de Navarino Circuit (Dientes de Navarino Trek): 5-day, 43–70km circumnavigation of Navarino Island; challenging alpine trekking; starts/ends in Puerto Williams; hut-to-hut or camping; steep passes with 360° views',
    'Cape Horn (Cabo de Hornos): southernmost point of South America; accessible by boat tour from Puerto Williams (weather permitting); historic lighthouse; dramatic seascapes',
    'Lapataia Bay: scenic excursion from Puerto Williams; hiking and small boat access',
    'Beagle Channel cruises: boat tours exploring fjords, wildlife (sea lions, cormorants), glaciers',
    'Puerto Williams town: small naval base with basic services; museum of southern history; restaurants and lodging',
    'Navarino Island wilderness: sub-Antarctic landscape; pelagic birds; pristine ecosystems',
    'Cape Horn Biosphere Reserve: protected region; extreme maritime environment'
  ],
  tip: 'Puerto Williams is accessible only by flights from Punta Arenas (45min, expensive LATAM flights; book well in advance) or by sea (very rare for tourists). The town is small with limited infrastructure; book hotels and Dientes trek logistics 2–3 months in advance. Only one or two flights daily depart Punta Arenas to Puerto Williams; weather frequently cancels flights. Dientes de Navarino trek requires guides and permits; book through tour operators (HelloPatagonia, Swoop Patagonia, others). Hotels are basic (Lakutaia, Navarino) but comfortable. Food options are limited; eat at your accommodation. November–December is spring, best season for Dientes trek (less snow, longer daylight). This is the absolute southern frontier; extreme weather, remoteness, and adventure.',
  weather: 'November–December: 10–15°C (50–59°F) daytime, 3–7°C (37–45°F) nights. Spring; rapid weather changes. Frequent rain, wind, and sudden storms. Clear days rare. Water temp 6–8°C (extremely cold). Sub-Antarctic climate. Strong winds constant.'
}

];

// Export for module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = chilenCities;
}
