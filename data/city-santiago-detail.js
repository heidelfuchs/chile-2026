// ─── SANTIAGO CITY DETAIL LAYER ──────────────────────────────────────────────
// Dense POI data that appears only when zoomed in (zoom >= 12).
// Neighborhoods, metro stations, culture/parks/sights.
// Research-verified Nov 2026.

CITY_DETAIL_LAYERS.push({
  id:             'santiago',
  city:           'Santiago',
  destId:         'santiago',
  zoomThreshold:  12,
  pois: [

    /* ══════════ NEIGHBORHOODS ══════════ */

    {
      id: 'stgo-nbhd-bellavista',
      type: 'neighborhood',
      name: 'Bellavista',
      sub: 'Bohemian barrio · Neruda, galleries & nightlife',
      lat: -33.4263, lng: -70.6348,
      summary: "Santiago's original bohemian quarter nestled between the Mapocho River and San Cristóbal Hill. Colourful homes, narrow tree-lined streets, and a thriving arts scene draw travellers and locals alike. Galleries and restaurants spill onto the street, especially around Plaza Baquedano.",
      highlights: [
        'Casa La Chascona — Pablo Neruda\'s whimsical house-hideaway',
        'Art galleries and boutique shops on Pío Nono',
        'Some of the city\'s best cocktail bars and music venues',
        'Antique markets and local bookstores',
        'Direct access to Parque Metropolitano hiking trails'
      ],
      tip: 'Best Wed–Sun; weekends are livelier. Safe during the day; stick to lit streets at night. Baquedano metro (L1/L5) puts you right here.'
    },

    {
      id: 'stgo-nbhd-lastarria',
      type: 'neighborhood',
      name: 'Lastarria',
      sub: 'Hip arts hub · boutiques, cafés & craft beer',
      lat: -33.4334, lng: -70.6384,
      summary: "Santiago's contemporary arts district, immediately adjacent to Parque Forestal. Bohemian galleries, independent bookstores, design shops, and craft-beverage bars create a cosmopolitan feel that's simultaneously relaxed and curated.",
      highlights: [
        'Plaza Lastarria — shaded square lined with café terraces',
        'Independent art galleries and artist studios',
        'Artisanal coffee roasters and craft breweries',
        'Vintage and design shopping',
        'Short walk to MNBA and Parque Forestal'
      ],
      tip: 'Explore on foot around calles Lastarria and Ernesto Pinto Lagarrigue. Most galleries open Tue–Sun. Bellas Artes metro (L5) is the closest stop.'
    },

    {
      id: 'stgo-nbhd-barrio-italia',
      type: 'neighborhood',
      name: 'Barrio Italia',
      sub: 'Design & vintage · Av. Italia boutiques & dining',
      lat: -33.4415, lng: -70.6145,
      summary: 'A slowly gentrifying neighbourhood in Ñuñoa known for vintage clothing, design boutiques, and independent coffee shops. Avenida Italia and surrounding streets mix local families with a growing creative class — unpretentious, affordable, and genuinely local.',
      highlights: [
        'Antique and vintage shops along Av. Italia',
        'Third-wave coffee shops and natural wine bars',
        'Design studios and independent bookshops',
        'Saturday flea markets',
        'Quieter and cheaper than Bellavista or Lastarria'
      ],
      tip: 'Best explored on a weekday afternoon or Saturday. Manuel Montt metro (L1) is a 10-min walk north.'
    },

    {
      id: 'stgo-nbhd-brasil-yungay',
      type: 'neighborhood',
      name: 'Barrio Brasil / Yungay',
      sub: 'Eclectic west side · street art, markets & local life',
      lat: -33.4395, lng: -70.6633,
      summary: "A grittier, bohemian barrio west of downtown with street art murals, vintage shops, and local markets. More authentic and less touristy than Bellavista — this is what Santiago looked like before the boutique hotels arrived.",
      highlights: [
        'Street art murals throughout the barrio',
        'Mercado Tirso de Molina (produce and street food)',
        'Vintage clothing and antique shops',
        'Independent cafés and casual eateries',
        'Plaza Brasil as a neighbourhood social hub'
      ],
      tip: 'Visit during daylight hours. República metro (L1) and Cumming (L6) are nearby. Pair with a walk down Compañía de Jesús for mansions and murals.'
    },

    {
      id: 'stgo-nbhd-meiggs-chinatown',
      type: 'neighborhood',
      name: 'Barrio Meiggs / Chinatown',
      sub: 'Wholesale & discount · dense commerce & dim sum',
      lat: -33.4448, lng: -70.6779,
      summary: "Santiago's historic Chinatown and wholesale district, packed with cheap textiles, electronics, and housewares. Barrio Meiggs is the chaotic, authentic commercial engine of the city — a long way from the boutique barrios.",
      highlights: [
        'Wholesale textiles, clothing and electronics',
        'Chinese restaurants and dim sum',
        'New Chinatown archway (inaugurated 2024)',
        'Housewares and hardware at street-level prices',
        'Adjacent to Estación Central bus hub'
      ],
      tip: 'Visit 10am–6pm on business days. Watch your belongings in crowds. Estación Central metro (L2) is adjacent.'
    },

    {
      id: 'stgo-nbhd-centro',
      type: 'neighborhood',
      name: 'Centro Histórico',
      sub: 'Colonial heart · plazas, markets & government',
      lat: -33.4378, lng: -70.6530,
      summary: 'The historic centre of Santiago radiates from Plaza de Armas. Colonial architecture, La Moneda, the Metropolitan Cathedral, Mercado Central, and a cluster of museums fill these blocks. Both monumental and street-level busy.',
      highlights: [
        'Plaza de Armas — the main colonial square',
        'La Moneda presidential palace & plaza',
        'Mercado Central fresh fish and seafood',
        'Museo Chileno de Arte Precolombino',
        'Paseo Ahumada pedestrian shopping street'
      ],
      tip: 'Best explored on foot 9am–5pm. Multiple metro lines converge here (L1, L2, L3, L5). Avoid after dark in quiet side streets.'
    },

    {
      id: 'stgo-nbhd-providencia',
      type: 'neighborhood',
      name: 'Providencia',
      sub: 'Residential & commercial · tree-lined, walkable',
      lat: -33.4296, lng: -70.6094,
      summary: "A solidly middle-class neighbourhood east of downtown with tree-lined avenues, good local restaurants, and a mix of shops. Safe, walkable, and less touristy than Bellavista — a good home base for a longer stay.",
      highlights: [
        'Avenida 11 de Septiembre commercial strip',
        'Good local restaurants away from tourist pricing',
        'Parque Balmaceda for a green afternoon',
        'Los Leones metro (L1/L6) for easy access',
        'Short ride to Parque Metropolitano east entrance'
      ],
      tip: 'Safe day and night. Excellent metro access. Fewer tourist attractions but better prices than Bellavista.'
    },

    {
      id: 'stgo-nbhd-nunoa',
      type: 'neighborhood',
      name: 'Ñuñoa',
      sub: 'Live music & dining · Plaza Ñuñoa & venue culture',
      lat: -33.4567, lng: -70.5978,
      summary: "A relaxed, vibrant neighbourhood southeast of the centre known for live music, craft bars, and dining. Plaza Ñuñoa is the social hub — outdoor terraces, beer, and live performance well into the evening.",
      highlights: [
        'Plaza Ñuñoa terrace bars and live music',
        'Tango, rock, jazz venues within a few blocks',
        'Craft beer and natural wine bars',
        'Casual restaurants with long opening hours',
        'Estadio Nacional — major concerts here'
      ],
      tip: 'Excellent for evening and nightlife. Safe neighbourhood. Irarrázaval metro (L3) gets you here from downtown in ~15 min.'
    },

    {
      id: 'stgo-nbhd-las-condes',
      type: 'neighborhood',
      name: 'Las Condes / El Golf',
      sub: 'Upscale finance district · high-rise, expensive',
      lat: -33.4153, lng: -70.5965,
      summary: "Santiago's wealthiest neighbourhood, dominated by corporate towers, luxury shopping, and fine dining. Tourist value is limited unless visiting Costanera Center or seeking upscale restaurants.",
      highlights: [
        'Costanera Center — South America\'s tallest building + views',
        'Avenida El Golf luxury dining and wine bars',
        'Parque Arauco shopping mall',
        'High-end hotels and rooftop bars',
        'Bicentenario Park for jogging'
      ],
      tip: 'Best for shopping and upscale dining. Expensive but safe. El Golf metro (L1) is direct. Less character than older barrios.'
    },

    {
      id: 'stgo-nbhd-vitacura',
      type: 'neighborhood',
      name: 'Vitacura',
      sub: 'Luxury residential · Av. Alonso de Córdoba & fine dining',
      lat: -33.3987, lng: -70.5924,
      summary: "One of Santiago's most expensive areas — exclusive homes, tree-lined avenues, upscale dining, and designer boutiques along Avenida Vitacura and Alonso de Córdoba. Budget travellers can day-trip for a good lunch.",
      highlights: [
        'Avenida Alonso de Córdoba (designer boutiques)',
        'Fine dining and cellar-restaurant experiences',
        'Natural wine bars',
        'Bicentenario Park (Parque Bicentenario)',
        'Museo de la Moda (fashion museum)'
      ],
      tip: 'Expensive but safe. Nearest metro: Tobalaba (L1), then microbus or taxi north along the Mapocho.'
    },

    {
      id: 'stgo-nbhd-patronato',
      type: 'neighborhood',
      name: 'Barrio Patronato',
      sub: 'Multicultural trade · Middle Eastern food & textiles',
      lat: -33.4285, lng: -70.6550,
      summary: "A bustling, multicultural barrio north of the centre known for Middle Eastern and Asian cuisine, fabric wholesalers, and produce markets. Less polished than Bellavista, but more authentic and cheaper.",
      highlights: [
        'Middle Eastern restaurants and shawarma',
        'Fabric and textile wholesalers',
        'Fresh produce and spice markets',
        'Family-run eateries with Chilean staples',
        'Street food culture'
      ],
      tip: 'Visit during business hours. Busy and gritty — watch your belongings. Cal y Canto metro (L2/L3) is the entry point.'
    },

    {
      id: 'stgo-nbhd-concha-y-toro',
      type: 'neighborhood',
      name: 'Barrio Concha y Toro',
      sub: 'Historic palaces · colonial grandeur & quiet streets',
      lat: -33.4419, lng: -70.6709,
      summary: "A small historic barrio west of downtown declared a Typical Zone — colonial-era mansions and tree-lined streets preserved from the 19th century. Quiet, residential, and far from tourist crowds.",
      highlights: [
        'Palacio Concha — grand neo-classical mansion',
        'Quiet tree-lined streets and colonial architecture',
        'Historical plaques and preserved facades',
        'Proximity to Parque O\'Higgins',
        'Genuine residential neighbourhood character'
      ],
      tip: 'Best visited daytime. República metro (L1) or Cumming (L6) are nearby. Pair with Barrio Brasil for more street life.'
    },

    {
      id: 'stgo-nbhd-bellas-artes',
      type: 'neighborhood',
      name: 'Barrio Bellas Artes',
      sub: 'Museum quarter · MNBA, Parque Forestal & galleries',
      lat: -33.4360, lng: -70.6350,
      summary: "A cultural microdistrict centred on Parque Forestal and the Museo Nacional de Bellas Artes. Tree-lined paths, museums, galleries, and outdoor art make this a great half-day stroll.",
      highlights: [
        'Museo Nacional de Bellas Artes (free entry)',
        'Parque Forestal walking paths and outdoor sculptures',
        'Contemporary art museums nearby',
        'Galleries spilling into Lastarria',
        'Museum cafés and outdoor seating'
      ],
      tip: 'Combine museum visits with a Parque Forestal walk. Allow 3–4 hours. Bellas Artes metro (L5) drops you right here.'
    },

    /* ══════════ METRO STATIONS ══════════ */

    {
      id: 'metro-baquedano',
      type: 'metro',
      name: 'Baquedano',
      sub: 'L1 · L5 · interchange',
      lat: -33.4365, lng: -70.6328,
      lines: ['L1', 'L5'],
      summary: 'Major interchange on the Alameda, gateway to Bellavista and Lastarria. One of the busiest stations — useful for changing between east-west (L1) and the northern arc (L5).',
      tip: 'Walk north over the Mapocho bridge for Bellavista. Walk south along the Alameda toward downtown. Always busy — keep bags close.'
    },

    {
      id: 'metro-bellas-artes',
      type: 'metro',
      name: 'Bellas Artes',
      sub: 'L5',
      lat: -33.4366, lng: -70.6362,
      lines: ['L5'],
      summary: 'Direct access to Parque Forestal and the MNBA. Short walk to Lastarria. Best station for the museum quarter.',
      tip: 'Exit toward Parque Forestal for MNBA and galleries. Morning visits less crowded.'
    },

    {
      id: 'metro-univ-de-chile',
      type: 'metro',
      name: 'Universidad de Chile',
      sub: 'L1 · L3 · interchange',
      lat: -33.4377, lng: -70.6494,
      lines: ['L1', 'L3'],
      summary: 'Central interchange on the Alameda between Plaza de Armas and Cerro Santa Lucía. Walking distance to GAM, La Moneda, and downtown museums.',
      tip: 'Good all-round downtown hub. Exit toward Alameda for GAM. Exit toward Monjitas for museums.'
    },

    {
      id: 'metro-santa-lucia',
      type: 'metro',
      name: 'Santa Lucía',
      sub: 'L1',
      lat: -33.4398, lng: -70.6447,
      lines: ['L1'],
      summary: 'At the foot of Cerro Santa Lucía hill. Direct access to the hill itself, and a short walk to downtown museums and Parque Forestal.',
      tip: 'The hill entrance is two blocks east of the station. Visit late afternoon for sunset views.'
    },

    {
      id: 'metro-la-moneda',
      type: 'metro',
      name: 'La Moneda',
      sub: 'L1',
      lat: -33.4416, lng: -70.6534,
      lines: ['L1'],
      summary: 'Under the Alameda adjacent to the presidential palace. Walking distance to La Moneda, downtown museums, and Mercado Central.',
      tip: 'Best entry for La Moneda palace and nearby Museo Precolombino. The palace is visible from the exit.'
    },

    {
      id: 'metro-plaza-de-armas',
      type: 'metro',
      name: 'Plaza de Armas',
      sub: 'L5 · L3',
      lat: -33.4375, lng: -70.6511,
      lines: ['L5', 'L3'],
      summary: 'Directly under the main plaza. Central access to the cathedral, Mercado Central, government buildings, and the historic centre.',
      tip: 'Busiest downtown station. Take the exit toward Plaza de Armas for immediate landmark access.'
    },

    {
      id: 'metro-los-heroes',
      type: 'metro',
      name: 'Los Héroes',
      sub: 'L1 · L2 · interchange',
      lat: -33.4461, lng: -70.6594,
      lines: ['L1', 'L2'],
      summary: 'Second major interchange after Baquedano, where the east-west Line 1 crosses the north-south Line 2. Useful for reaching República and Barrio Brasil.',
      tip: 'Good transfer point for west-side barrios. Exit north toward Barrio Brasil or south toward Parque O\'Higgins.'
    },

    {
      id: 'metro-cal-y-canto',
      type: 'metro',
      name: 'Puente Cal y Canto',
      sub: 'L2 · L3',
      lat: -33.4358, lng: -70.6527,
      lines: ['L2', 'L3'],
      summary: 'At the Mapocho River, gateway to Barrio Patronato and northern neighbourhoods. Also useful for Mercado Central (10-min walk).',
      tip: 'Cross the Mapocho bridge for Barrio Patronato. Easy transfer between north-south lines.'
    },

    {
      id: 'metro-republica',
      type: 'metro',
      name: 'República',
      sub: 'L1',
      lat: -33.4478, lng: -70.6602,
      lines: ['L1'],
      summary: 'Entry to Barrio Brasil, Barrio Yungay, and Barrio Concha y Toro. Less touristy station — local feel.',
      tip: 'Exit toward Compañía de Jesús for Barrio Brasil murals and mansions.'
    },

    {
      id: 'metro-estacion-central',
      type: 'metro',
      name: 'Estación Central',
      sub: 'L2',
      lat: -33.4467, lng: -70.6785,
      lines: ['L2'],
      summary: 'Main long-distance train and bus hub for Santiago. Adjacent to Barrio Meiggs wholesale district. Chaotic but centrally connected.',
      tip: 'Use for inter-city buses south or for exploring Barrio Meiggs. Crowded — watch belongings.'
    },

    {
      id: 'metro-quinta-normal',
      type: 'metro',
      name: 'Quinta Normal',
      sub: 'L5',
      lat: -33.4483, lng: -70.6800,
      lines: ['L5'],
      summary: 'Western Santiago, access to Quinta Normal park and its cluster of natural history and science museums.',
      tip: 'Good for a quieter morning away from downtown crowds. Free museum entry on Sundays.'
    },

    {
      id: 'metro-parque-ohiggins',
      type: 'metro',
      name: "Parque O'Higgins",
      sub: 'L2',
      lat: -33.4733, lng: -70.6652,
      lines: ['L2'],
      summary: "Direct access to O'Higgins Park, Fantasilandia amusement park, and the Chinese Garden. Southern terminus area.",
      tip: "Walk through the park entrance gate. Fantasilandia is ~5 min walk from the station."
    },

    {
      id: 'metro-baquedano-l5',
      type: 'metro',
      name: 'Manuel Montt',
      sub: 'L1',
      lat: -33.4254, lng: -70.6218,
      lines: ['L1'],
      summary: 'Providencia, near Barrio Italia. Walking distance to Av. Italia boutiques, design shops, and independent restaurants.',
      tip: 'Best station for exploring Barrio Italia. Safe, quiet exit onto Av. Providencia.'
    },

    {
      id: 'metro-pedro-de-valdivia',
      type: 'metro',
      name: 'Pedro de Valdivia',
      sub: 'L1',
      lat: -33.4243, lng: -70.6025,
      lines: ['L1'],
      summary: "Eastern Providencia. Walking distance to local restaurants and the neighbourhood's commercial strips along Av. Providencia.",
      tip: 'Good stop for exploring residential Providencia dining and shopping without tourist crowds.'
    },

    {
      id: 'metro-los-leones',
      type: 'metro',
      name: 'Los Leones',
      sub: 'L1 · L6',
      lat: -33.4214, lng: -70.5970,
      lines: ['L1', 'L6'],
      summary: "Providencia's main commercial intersection. Access to local restaurants, shops, and eastern Parque Metropolitano.",
      tip: 'Good transfer for Line 6 south toward Ñuñoa. Exit west for Av. 11 de Septiembre dining.'
    },

    {
      id: 'metro-tobalaba',
      type: 'metro',
      name: 'Tobalaba',
      sub: 'L1',
      lat: -33.4216, lng: -70.5974,
      lines: ['L1'],
      summary: 'Gateway to Las Condes and Costanera Center. Walking distance to El Golf district and upscale shopping.',
      tip: 'For Costanera Center observation deck walk west ~10 min. Bus connections to Vitacura from here.'
    },

    {
      id: 'metro-el-golf',
      type: 'metro',
      name: 'El Golf',
      sub: 'L1',
      lat: -33.4166, lng: -70.5957,
      lines: ['L1'],
      summary: 'Heart of El Golf business district. Access to luxury shopping, fine dining, and Costanera Center.',
      tip: '5-min walk to Costanera Center. Best station if you\'re eating or shopping in Las Condes.'
    },

    {
      id: 'metro-irarrazaval',
      type: 'metro',
      name: 'Irarrázaval',
      sub: 'L3',
      lat: -33.4550, lng: -70.5915,
      lines: ['L3'],
      summary: 'Gateway to Ñuñoa neighbourhood. Walking distance to Plaza Ñuñoa, live music venues, and local dining.',
      tip: 'Key station for Ñuñoa nightlife. Walk south 5 min to Plaza Ñuñoa terrace bars.'
    },

    /* ══════════ CULTURE, PARKS & SIGHTS ══════════ */

    {
      id: 'stgo-cerro-santa-lucia',
      type: 'park',
      name: 'Cerro Santa Lucía',
      sub: 'Urban hill · 360° views · free entry',
      lat: -33.4398, lng: -70.6447,
      summary: 'A compact urban park rising 69 metres above the centre. Stone staircases and terraces climb to a viewpoint with sweeping views of Santiago and the Andes on a clear day. Free but register at the gate.',
      highlights: [
        'Multi-level terraces with staircase ascent',
        'Torre Mirador viewpoint — city and Andes panorama',
        'Historic hilltop fort and colonial fountains',
        'Beautiful at sunset (4–6pm)',
        'Peaceful despite central location'
      ],
      tip: 'Late afternoon gives the best light and coolest temperatures. Santa Lucía metro (L1) is at the base. Entry registration at the gate is quick.'
    },

    {
      id: 'stgo-cerro-san-cristobal',
      type: 'park',
      name: 'Cerro San Cristóbal',
      sub: 'Massive urban park · funicular · Andes backdrop',
      lat: -33.4204, lng: -70.6300,
      summary: 'One of Latin America\'s largest urban parks (722 ha), crowned by a 14-metre Christ statue with panoramic views. Funicular, cable car, or hiking access. Multiple trails, gardens, and viewpoints.',
      highlights: [
        'White Christ statue and 360° city panorama',
        'Funicular from Bellavista (take up, walk/cable car down)',
        'Botanical Garden (Jardín Botánico)',
        'Zoo on the hillside',
        'Hiking trails from Bellavista and Providencia'
      ],
      tip: 'Go early (before 9am) to avoid crowds and haze. Nov–Dec afternoons often get smoggy. Bellavista metro then 10-min walk to funicular station.'
    },

    {
      id: 'stgo-plaza-de-armas',
      type: 'sight',
      name: 'Plaza de Armas',
      sub: "Main colonial square · cathedral & street life",
      lat: -33.4375, lng: -70.6511,
      summary: "Santiago's foundational plaza. Surrounded by the Metropolitan Cathedral, colonial buildings, and outdoor cafés. Always animated — locals, vendors, musicians, and pigeons. The geometric centre of old Santiago.",
      highlights: [
        'Metropolitan Cathedral (founded 1748, rebuilt 1800s)',
        'Central fountain and colonial neoclassical facades',
        'Outdoor café culture and chess tables',
        'Street performers and portrait painters',
        'Central access to Mercado Central (10-min walk)'
      ],
      tip: 'Visit morning or evening — harsh midday sun. Best in combination with a Mercado Central visit. Plaza de Armas metro (L5/L3) direct.'
    },

    {
      id: 'stgo-la-moneda',
      type: 'sight',
      name: 'La Moneda & Plaza de la Constitución',
      sub: "Presidential palace · neoclassical landmark",
      lat: -33.4441, lng: -70.6543,
      summary: "Santiago's iconic presidential palace (1846), set on a broad plaza. Changing of the guard at midday. The palace is open for guided tours (book ahead). Significant historical weight — this is where the 1973 coup took place.",
      highlights: [
        'Neoclassical façade and broad plaza',
        'Changing of the guard ~12:15pm on weekdays',
        'Guided palace interior tours (advance booking required)',
        'Cultural Centre de la Moneda below the plaza',
        'Adjacent to Alameda and metro hub'
      ],
      tip: 'Guard change is worth catching on a clear midday. Palace tours book via government website — worth the effort. La Moneda metro (L1) is adjacent.'
    },

    {
      id: 'stgo-mercado-central',
      type: 'market',
      name: 'Mercado Central',
      sub: "Fresh seafood market · 1872 iron & glass building",
      lat: -33.4374, lng: -70.6563,
      summary: "Santiago's iconic covered market built in 1872. Fresh fish, seafood, produce, and prepared foods. Touristy but authentic — this is where chefs and local families shop. Restaurants line the upper galleries.",
      highlights: [
        'Best fresh seafood in central Santiago',
        'Iconic Victorian iron-and-glass architecture',
        'Second-level restaurants with market-floor views',
        'Ceviche, congrio, and centolla crab',
        'Produce stalls and Chilean specialities'
      ],
      tip: 'Go early (8–10am) for freshness and fewer tourists. Eat lunch at a second-floor restaurant. Cal y Canto or Plaza de Armas metro, then 5-min walk.'
    },

    {
      id: 'stgo-parque-forestal',
      type: 'park',
      name: 'Parque Forestal',
      sub: "Museum quarter park · tree-lined cultural axis",
      lat: -33.4371, lng: -70.6395,
      summary: 'An urban linear park running through the heart of Santiago along the Mapocho. Tree-lined paths, outdoor sculptures, museums, and café terraces line the route. Connects Barrio Bellas Artes to Lastarria.',
      highlights: [
        'Tree-lined paths perfect for walking or cycling',
        'MNBA at the northern end',
        'Outdoor art installations throughout',
        'Café terraces spilling from Lastarria',
        'Morning joggers and families at weekends'
      ],
      tip: 'Great morning activity — park is pleasant 7–10am. Combine with a museum visit. Bellas Artes metro (L5) at one end.'
    },

    {
      id: 'stgo-mnba',
      type: 'culture',
      name: 'Museo Nacional de Bellas Artes (MNBA)',
      sub: "Fine arts · Chilean & Latin American masters · free",
      lat: -33.4370, lng: -70.6348,
      summary: "Santiago's premier art museum in a Beaux-Arts building (1910) facing Parque Forestal. Permanent collection focuses on Chilean and South American painters from the 19th century onward. Free admission.",
      highlights: [
        'Beaux-Arts building — one of the finest in Santiago',
        'Chilean masters including Rugendas and Valenzuela Llanos',
        '19th–20th century paintings and sculpture',
        'Rotating international exhibitions',
        'Museum shop with art books and prints'
      ],
      tip: 'Free entry; suggested donation welcome. Tue–Sun 10am–6pm. Bellas Artes metro (L5) directly adjacent. Morning visits least crowded.'
    },

    {
      id: 'stgo-gam',
      type: 'culture',
      name: 'GAM — Centro Gabriela Mistral',
      sub: "Contemporary culture · theatre, art & design",
      lat: -33.4442, lng: -70.6487,
      summary: "A sprawling cultural centre on the Alameda hosting theatre, dance, exhibitions, film, and design events. Named for Chilean Nobel laureate Gabriela Mistral. Variable programming — check what's on.",
      highlights: [
        'Contemporary and experimental art exhibitions',
        'Theatre and dance performances',
        'Film screenings and festivals',
        'Free public gallery spaces',
        'Café and outdoor plaza'
      ],
      tip: 'Check gam.cl for current programme. Most galleries free; performances ticketed. Universidad de Chile metro (L1/L3) is 5-min walk.'
    },

    {
      id: 'stgo-casa-la-chascona',
      type: 'sight',
      name: 'Casa La Chascona',
      sub: "Neruda's Bellavista hideaway · ship-themed architecture",
      lat: -33.4245, lng: -70.6336,
      summary: "Pablo Neruda's whimsical Bellavista house, built as a hideaway with his lover Matilde Urrutia. Ship-shaped architecture, coloured-glass windows, and eccentric collections of shells, figureheads, and wine glasses make it feel like a children's book come to life.",
      highlights: [
        'Ship-shaped rooms styled as a captain\'s quarters',
        'Living room designed as a lighthouse interior',
        'Neruda\'s collection of shells, art, and curiosities',
        'Audio tours available in 5 languages',
        'Garden and outdoor terraces'
      ],
      tip: 'Open Wed–Sun 10am–6pm (last entry 5pm). Admission ~CLP 12,000 (~$13). Book ahead in peak season. 10-min walk from Baquedano metro, through Bellavista.'
    },

    {
      id: 'stgo-museo-precolombino',
      type: 'culture',
      name: 'Museo de Arte Precolombino',
      sub: "Pre-Columbian artifacts · textiles, ceramics & stone",
      lat: -33.4389, lng: -70.6521,
      summary: "World-class collection of pre-Columbian art from across the Americas, housed in the Palacio de la Real Aduana (1807) near Plaza de Armas. Atacama textiles, Andean ceramics, and stone sculpture from Chile and neighbouring civilisations.",
      highlights: [
        'Rare textiles from the Atacama — extraordinarily preserved',
        'Andean ceramics and Mapuche silverwork',
        'Stone sculpture and Tiwanaku artefacts',
        'Beautifully lit exhibitions in colonial rooms',
        'Historic palace building from 1807'
      ],
      tip: 'One of the best museums in Chile — easily overlooked. Tue–Sun 10am–6pm. Admission ~CLP 8,000 (~$9). Bandera 361, Plaza de Armas metro direct.'
    },

    {
      id: 'stgo-parque-ohiggins-park',
      type: 'park',
      name: "Parque O'Higgins",
      sub: "Large urban park · Chinese Garden & Fantasilandia",
      lat: -33.4680, lng: -70.6600,
      summary: "An 80-hectare urban park in the southwest hosting Fantasilandia amusement park, a Chinese Garden, artificial ponds, and wide open lawns. Less cultural than the central parks but spacious and family-friendly.",
      highlights: [
        'Fantasilandia — major amusement park (separate entry)',
        'Chinese Garden (Jardín Chino)',
        'Artificial ponds and walking paths',
        'Open lawns for picnics',
        'Natural history and science museums inside'
      ],
      tip: "Good for families or a relaxed afternoon. Parque O'Higgins metro (L2) direct access. Fantasilandia hours vary — check fantasilandia.cl."
    },

    {
      id: 'stgo-costanera-center',
      type: 'viewpoint',
      name: 'Costanera Center / Torre Sky',
      sub: "South America's tallest building · observation deck",
      lat: -33.4172, lng: -70.6040,
      summary: "South America's tallest building (300m) containing a shopping mall, restaurants, and the Sky Costanera observation deck on floors 61–62. On a clear day the Andes are spectacular from here.",
      highlights: [
        'Sky Costanera observation deck — 360° views',
        'Andes panorama on clear winter mornings',
        'Shopping mall (H&M, Zara, Chilean brands)',
        'Upscale dining and food courts',
        'Architectural landmark visible citywide'
      ],
      tip: "Best clear days: mornings in Nov–Dec before haze builds. Admission ~CLP 12,000 (~$13). El Golf metro (L1), then 5-min walk."
    },

    {
      id: 'stgo-cementerio-general',
      type: 'sight',
      name: 'Cementerio General',
      sub: "Historic cemetery · sculpture & mausoleum art",
      lat: -33.4153, lng: -70.6872,
      summary: "A sprawling, ornate cemetery founded in 1821, often cited among the world's most architecturally interesting. Mausoleums, sculptures, and monuments spanning two centuries. Peaceful, surprising, and genuinely moving.",
      highlights: [
        'Grand neoclassical and art nouveau mausoleums',
        'Notable Chileans buried here (Salvador Allende, Violeta Parra)',
        'Sculpture spanning two centuries',
        'Tree-lined pathways for quiet walking',
        'Museum and guided tours available'
      ],
      tip: 'Allow 1–2 hours. Respectful dress. Open daily; best visited morning. Take Línea 2 to Cal y Canto, then bus west — or taxi from downtown.'
    }

  ]
});
