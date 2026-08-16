// Crop Disease Chatbot - Knowledge Base
const cropKnowledge = {
  // Crop diseases database
  diseases: {
  'Apple_scab': {
  crops: ['apple'],
  scientificName: 'Venturia inaequalis',
  symptoms: 'Olive-green to dark brown velvety spots on leaves and fruits, leading to premature leaf drop and fruit cracking.',
  earlySymptoms: 'Small pale green or light brown spots on young leaves and fruitlets during spring.',
  advancedSymptoms: 'Leaves become distorted, fruits develop corky scabs, and overall fruit quality is severely reduced.',
  cause: 'Fungal disease caused by Venturia inaequalis, which thrives in cool, wet spring weather and spreads via rain-splashed spores.',
  lifecycle: 'Overwinters in fallen leaves and infected twigs. In spring, the fungus produces spores that infect new leaves and fruits.',
  favorableConditions: 'Cool (55–75°F), wet, and humid conditions; frequent rainfall or heavy dew increases infection rate.',
  cure: 'Apply fungicides like Captan, Mancozeb, or Thiophanate-methyl at the green-tip stage and repeat every 10–14 days during wet seasons.',
  organicTreatment: 'Use sulfur-based fungicides, neem oil, or potassium bicarbonate sprays. Rake and destroy infected leaves.',
  prevention: 'Prune for good airflow, remove fallen leaves in autumn, and plant resistant varieties like Liberty or Enterprise.',
  severity: 'High – causes major fruit loss and market quality reduction.',
  chemicalControl: 'Mancozeb 75% WP (2g/L), Captan 50% WP (2g/L), Difenoconazole 25% EC (0.5ml/L).',
  culturalPractices: 'Maintain orchard sanitation, prune to improve airflow, and avoid overhead irrigation.'
},

'Black_rot': {
  crops: ['grape'],
  scientificName: 'Guignardia bidwellii',
  symptoms: 'Circular brown leaf spots with black margins, black shriveled fruits (“mummies”), and stem lesions.',
  earlySymptoms: 'Small reddish-brown leaf spots appearing after rainfall in spring.',
  advancedSymptoms: 'Fruits become hard, black, and wrinkled; leaves drop prematurely; severe yield loss.',
  cause: 'Fungal disease caused by Guignardia bidwellii, spreading via rain-splashed spores from mummified fruit.',
  lifecycle: 'Overwinters in infected fruit mummies and canes; spores released in spring infect new growth.',
  favorableConditions: 'Warm, humid weather (75–85°F) with frequent rainfall or morning dew.',
  cure: 'Apply fungicides like Myclobutanil, Mancozeb, or Ziram from bud break through fruit development.',
  organicTreatment: 'Spray copper-based fungicides and remove mummified fruits after harvest.',
  prevention: 'Prune infected canes, maintain vineyard sanitation, ensure trellis airflow, and avoid overhead watering.',
  severity: 'High – leads to fruit rot and total yield loss under wet conditions.',
  chemicalControl: 'Mancozeb 75% WP (2g/L), Myclobutanil 10% WP (1g/L), Ziram 27% SC (2ml/L).',
  culturalPractices: 'Remove mummified fruits, prune regularly, and train vines for maximum sun exposure.'
},

'Cedar_apple_rust': {
  crops: ['apple'],
  scientificName: 'Gymnosporangium juniperi-virginianae',
  symptoms: 'Bright orange spots with black centers on apple leaves, spore horns on fruit and undersides of leaves.',
  earlySymptoms: 'Yellow-orange circular spots appearing on young apple leaves in spring.',
  advancedSymptoms: 'Fruits develop raised lesions with orange spore horns; leaf drop and defoliation occur.',
  cause: 'Fungus requires both apple and cedar/juniper hosts to complete its lifecycle.',
  lifecycle: 'Overwinters on cedar trees as galls. In spring, spores are released and infect nearby apple trees.',
  favorableConditions: 'Mild temperatures (55–75°F) with spring rains and high humidity.',
  cure: 'Apply fungicides like Myclobutanil or Mancozeb at pink bud and repeat every 7–10 days during wet weather.',
  organicTreatment: 'Remove cedar galls within 1 km radius; apply sulfur sprays preventively.',
  prevention: 'Avoid planting apples near junipers, prune infected areas, and select resistant apple varieties.',
  severity: 'Moderate to High – recurring infections reduce fruit yield and tree vigor.',
  chemicalControl: 'Myclobutanil 10% WP (1g/L), Mancozeb 75% WP (2g/L), Propiconazole 25% EC (1ml/L).',
  culturalPractices: 'Remove nearby cedar hosts, prune for airflow, and apply preventive sprays during early spring.'
},

'Powdery_mildew': {
  crops: ['tomato', 'pepper', 'corn', 'grape', 'apple', 'strawberry', 'wheat'],
  scientificName: 'Erysiphales spp.',
  symptoms: 'White powdery fungal growth on leaf surfaces, stems, and buds causing distortion and stunted growth.',
  earlySymptoms: 'White specks on leaf undersides or new growth during dry warm weather.',
  advancedSymptoms: 'Thick powdery coating on leaves, leaf curling, and premature leaf drop.',
  cause: 'Airborne fungal spores that germinate in warm, dry days and humid nights; spreads rapidly through wind.',
  lifecycle: 'Overwinters in plant debris and buds; spreads by conidia during dry, warm weather.',
  favorableConditions: 'Warm (68–86°F), dry days with 70–80% humidity at night.',
  cure: 'Apply sulfur-based or triazole fungicides (Tebuconazole, Hexaconazole) every 10 days during infection periods.',
  organicTreatment: 'Spray neem oil, milk solution (1:10), or baking soda solution (1 tsp/L) as a foliar treatment.',
  prevention: 'Plant in sunny locations, prune crowded areas, and avoid excess nitrogen fertilizers.',
  severity: 'Moderate to High – reduces photosynthesis and fruit quality.',
  chemicalControl: 'Sulfur 80% WP (3g/L), Tebuconazole 25% EC (1ml/L), Hexaconazole 5% EC (1ml/L).',
  culturalPractices: 'Improve airflow, avoid overhead watering, and rotate crops yearly.'
},

'Cercospora_leaf_spot': {
  crops: ['pepper', 'corn', 'sugar beet', 'banana'],
  scientificName: 'Cercospora spp.',
  symptoms: 'Small gray or tan circular spots with dark borders on leaves, leading to yellowing and defoliation.',
  earlySymptoms: 'Tiny water-soaked or pale lesions on older leaves.',
  advancedSymptoms: 'Large irregular necrotic patches, premature leaf fall, and reduced yield.',
  cause: 'Fungal infection spread by wind, rain splash, and contaminated tools.',
  lifecycle: 'Overwinters in infected debris; spores spread during warm, humid weather.',
  favorableConditions: 'Warm (77–86°F) and humid (>80%) environments with prolonged leaf wetness.',
  cure: 'Apply fungicides like Mancozeb, Copper oxychloride, or Azoxystrobin at early signs.',
  organicTreatment: 'Neem oil, copper hydroxide sprays, and removal of lower infected leaves.',
  prevention: 'Avoid overhead irrigation, maintain spacing, and remove plant debris post-harvest.',
  severity: 'Moderate – reduces photosynthesis and yield quality.',
  chemicalControl: 'Mancozeb 75% WP (2g/L), Copper oxychloride 50% WP (3g/L), Azoxystrobin 23% SC (1ml/L).',
  culturalPractices: 'Crop rotation for 2 years, ensure airflow, and destroy infected residues.'
},

'Gray_leaf_spot': {
  crops: ['corn', 'sorghum', 'wheat'],
  scientificName: 'Cercospora zeae-maydis',
  symptoms: 'Rectangular gray to tan lesions between veins of leaves, which merge and cause blight in severe cases.',
  earlySymptoms: 'Small pinpoint brown lesions on lower leaves during mid-season.',
  advancedSymptoms: 'Lesions coalesce into large necrotic areas; severe infection causes premature death.',
  cause: 'Fungal disease spread by wind-borne conidia and rain splash, surviving in residue and soil.',
  lifecycle: 'Overwinters in infected crop debris; releases spores during humid warm conditions.',
  favorableConditions: 'Warm (75–90°F) and humid (>85%) weather with extended leaf wetness.',
  cure: 'Apply fungicides like Strobilurins (Azoxystrobin, Pyraclostrobin) or Triazoles (Propiconazole).',
  organicTreatment: 'Use neem oil and Trichoderma-based biofungicides; remove infected leaves early.',
  prevention: 'Rotate crops with non-hosts, till soil to bury residue, and use resistant hybrids.',
  severity: 'High – can cause up to 40% yield loss under favorable conditions.',
  chemicalControl: 'Azoxystrobin 23% SC (1ml/L), Propiconazole 25% EC (1ml/L), Mancozeb 75% WP (2g/L).',
  culturalPractices: 'Crop rotation, residue management, and avoid monocropping.'
},
'corn_common_rust': {
  crops: ['corn', 'maize'],
  scientificName: 'Puccinia sorghi',
  symptoms: 'Reddish-brown to orange pustules (uredinia) appear on both leaf surfaces, often surrounded by yellow halos; severe infection leads to premature leaf death and reduced grain fill.',
  earlySymptoms: 'Small chlorotic (yellow) spots on upper leaves, developing into blister-like pustules.',
  advancedSymptoms: 'Coalesced pustules covering large leaf areas, dry and necrotic leaves, shriveled grains.',
  cause: 'Fungus that thrives in warm, humid environments; spreads through windborne spores from southern regions.',
  lifecycle: 'Overwinters in alternate hosts; produces urediniospores that reinfect corn; multiple infection cycles per season under humid conditions.',
  favorableConditions: 'Temperature 16–28°C with high humidity (>90%) and frequent dew.',
  cure: 'Apply fungicides containing Azoxystrobin, Pyraclostrobin, or Propiconazole at early signs of infection.',
  organicTreatment: 'Use neem oil (2%), Trichoderma harzianum foliar sprays, remove infected leaves.',
  prevention: 'Plant resistant hybrids, early planting, avoid dense planting, rotate with non-host crops for 2–3 years.',
  severity: 'Moderate to High – Severe in humid climates with susceptible hybrids.',
  chemicalControl: 'Azoxystrobin 23% SC (1ml/L) or Propiconazole 25% EC (1ml/L) at 15-day intervals.',
  culturalPractices: 'Remove crop residues, ensure air circulation, avoid waterlogging.'
},

'corn_northern_leaf_blight': {
  crops: ['corn', 'maize'],
  scientificName: 'Exserohilum turcicum',
  symptoms: 'Long, elliptical gray-green lesions (up to 15 cm) that turn tan; lesions coalesce forming large necrotic areas leading to leaf death.',
  earlySymptoms: 'Small, oval grayish spots on lower leaves after prolonged wetness.',
  advancedSymptoms: 'Blighting of entire leaves, reduced photosynthesis, weak stalks, yield loss.',
  cause: 'Fungal pathogen spread by spores through wind and rain; thrives in cool (18–27°C), moist conditions.',
  lifecycle: 'Survives in crop debris, spreads by conidia; secondary infections occur during prolonged humidity.',
  favorableConditions: 'High humidity, long dew periods, and temperature 20–27°C.',
  cure: 'Use fungicides containing Mancozeb or Azoxystrobin at early stage.',
  organicTreatment: 'Spray compost tea or neem oil, use resistant hybrids, apply Trichoderma-based biocontrols.',
  prevention: 'Rotate with legumes or non-host crops, plow residues deep, maintain field sanitation.',
  severity: 'High – Major yield losses in susceptible varieties under favorable conditions.',
  chemicalControl: 'Mancozeb 75% WP (2g/L) or Azoxystrobin 23% SC (1ml/L).',
  culturalPractices: 'Plant resistant hybrids, maintain spacing, avoid overhead irrigation.'
},

'grape_leaf_blight': {
  crops: ['grape'],
  scientificName: 'Isariopsis clavispora',
  symptoms: 'Circular to irregular brown lesions with dark borders on leaves; affected leaves yellow and fall off prematurely, reducing vine vigor.',
  earlySymptoms: 'Tiny yellow-green translucent spots on lower leaves.',
  advancedSymptoms: 'Large blighted patches, leaf drop, defoliation leading to poor fruit ripening.',
  cause: 'Fungal disease spread by wind, rain splash, and contaminated pruning tools.',
  lifecycle: 'Fungus overwinters on infected leaves and twigs; spores dispersed during rain in spring.',
  favorableConditions: 'High humidity, dense canopy, temperature 20–28°C.',
  cure: 'Spray Copper oxychloride or Mancozeb at 10–14 day intervals.',
  organicTreatment: 'Neem oil, sulfur dust, garlic-chili extract sprays, and pruning for ventilation.',
  prevention: 'Prune and destroy infected leaves, ensure good air movement, avoid overhead watering.',
  severity: 'Moderate – Defoliation can reduce yield significantly.',
  chemicalControl: 'Copper oxychloride 50% WP (2.5g/L) or Mancozeb 75% WP (2g/L).',
  culturalPractices: 'Maintain canopy aeration, remove weeds and alternate hosts, train vines properly.'
},

'orange_citrus_greening': {
  crops: ['orange', 'citrus'],
  scientificName: 'Candidatus Liberibacter asiaticus (bacterium)',
  symptoms: 'Yellow mottling on leaves, asymmetric leaf chlorosis, small deformed fruits with bitter taste, premature fruit drop.',
  earlySymptoms: 'Random yellow patches on leaves, similar to zinc deficiency.',
  advancedSymptoms: 'Twig dieback, sparse canopy, reduced fruit size, unmarketable produce.',
  cause: 'Transmitted by Asian citrus psyllid (Diaphorina citri).',
  lifecycle: 'Bacteria persist in phloem; psyllid spreads it from infected to healthy trees while feeding.',
  favorableConditions: 'Warm, humid regions where psyllid populations thrive.',
  cure: 'No direct cure. Remove infected trees. Control psyllids with Imidacloprid or Thiamethoxam.',
  organicTreatment: 'Spray neem oil or horticultural mineral oils to deter psyllids, release Tamarixia radiata (parasitoid).',
  prevention: 'Use disease-free seedlings, control psyllids regularly, avoid moving infected plant material.',
  severity: 'Very High – No cure, can wipe out entire orchards.',
  chemicalControl: 'Imidacloprid 17.8% SL (0.5ml/L) or Thiamethoxam 25% WG (0.3g/L).',
  culturalPractices: 'Rogue infected plants, control vectors, use resistant rootstocks.'
},

'peach_bacterial_spot': {
  crops: ['peach', 'nectarine'],
  scientificName: 'Xanthomonas arboricola pv. pruni',
  symptoms: 'Small, water-soaked spots on leaves and fruits, which turn dark brown and scab over; severe infection leads to leaf drop and fruit blemishes.',
  earlySymptoms: 'Tiny translucent leaf spots with yellow halos.',
  advancedSymptoms: 'Cracked and pitted fruits, defoliation, twig dieback.',
  cause: 'Bacterial infection spread by rain splash, wind, and contaminated tools.',
  lifecycle: 'Survives in twig cankers and buds; spreads during rainfall and irrigation.',
  favorableConditions: 'Warm (25–30°C) and humid conditions, frequent rain.',
  cure: 'Apply copper-based bactericides during early season and after heavy rains.',
  organicTreatment: 'Use copper soap or Bordeaux mixture, prune diseased twigs, apply compost tea.',
  prevention: 'Plant resistant cultivars, prune for air circulation, disinfect pruning tools.',
  severity: 'Moderate – Affects fruit quality and yield significantly.',
  chemicalControl: 'Copper oxychloride 50% WP (2.5g/L) or Streptomycin sulfate (100ppm) in severe cases.',
  culturalPractices: 'Avoid overhead irrigation, remove infected debris, ensure pruning sanitation.'
},
'pepper_bell_bacterial_spot': {
  crops: ['pepper', 'bell pepper', 'capsicum'],
  scientificName: 'Xanthomonas campestris pv. vesicatoria',
  symptoms: 'Small, water-soaked spots on leaves that enlarge and turn brown with yellow halos. Fruits show raised, scabby lesions leading to reduced market value.',
  earlySymptoms: 'Tiny translucent leaf spots on lower leaves, especially after rain or overhead watering.',
  advancedSymptoms: 'Leaf drop, fruit lesions becoming corky and cracked, defoliation leading to sunscald on fruits.',
  cause: 'Bacterial pathogen spread by rain splash, contaminated seeds, and pruning tools.',
  lifecycle: 'Bacteria survive in seed, debris, and alternate hosts. Spread is favored by warm, wet conditions.',
  favorableConditions: 'Temperature 25–30°C, high humidity, and frequent rain.',
  cure: 'Apply copper-based bactericides combined with mancozeb during early infection.',
  organicTreatment: 'Use neem oil or copper soap sprays, remove infected leaves, apply compost tea to boost resistance.',
  prevention: 'Use certified disease-free seed, avoid overhead irrigation, rotate with non-host crops for 2–3 years.',
  severity: 'High – Can cause severe leaf drop and unmarketable fruits.',
  chemicalControl: 'Copper oxychloride 50% WP (2.5g/L) + Mancozeb 75% WP (2g/L).',
  culturalPractices: 'Disinfect tools, maintain spacing, avoid working when foliage is wet.'
},

'potato_early_blight': {
  crops: ['potato', 'tomato'],
  scientificName: 'Alternaria solani',
  symptoms: 'Brown concentric ring spots on older leaves, starting from lower canopy and progressing upward; in severe cases, defoliation and yield loss occur.',
  earlySymptoms: 'Small dark spots with faint concentric rings on older leaves.',
  advancedSymptoms: 'Complete leaf blight, shriveled stems, and reduced tuber quality.',
  cause: 'Fungal pathogen spread by wind, water splash, and contaminated debris.',
  lifecycle: 'Overwinters in infected plant debris and soil; conidia infect new growth under moist conditions.',
  favorableConditions: 'Warm (25–30°C) and humid weather, frequent rainfall.',
  cure: 'Spray Mancozeb or Chlorothalonil at 10–14 day intervals from early stage.',
  organicTreatment: 'Use neem oil or Bacillus subtilis sprays, apply compost tea, remove lower infected leaves.',
  prevention: 'Rotate crops for 2–3 years, avoid water stress, use resistant varieties.',
  severity: 'High – Major yield losses in susceptible varieties.',
  chemicalControl: 'Mancozeb 75% WP (2g/L) or Chlorothalonil 75% WP (2.5g/L).',
  culturalPractices: 'Ensure proper field drainage, avoid overhead irrigation, remove debris after harvest.'
},

'potato_late_blight': {
  crops: ['potato', 'tomato'],
  scientificName: 'Phytophthora infestans',
  symptoms: 'Dark brown to black water-soaked spots on leaves, white fuzzy mold on undersides in humid conditions, brown lesions on stems, rotting tubers.',
  earlySymptoms: 'Small pale green spots on leaves, water-soaked appearance on lower canopy.',
  advancedSymptoms: 'Complete plant collapse, foul-smelling rotted tubers.',
  cause: 'Fungal-like oomycete pathogen that thrives in cool, moist conditions.',
  lifecycle: 'Overwinters in infected tubers; spreads rapidly by wind and rain splash; completes infection cycle in 5–7 days.',
  favorableConditions: 'Cool nights (10–15°C), warm days (18–25°C), high humidity (>90%).',
  cure: 'Use systemic fungicides such as Metalaxyl or Cymoxanil + Mancozeb mixtures.',
  organicTreatment: 'Apply copper fungicides (Bordeaux mixture), Trichoderma-based sprays, remove infected plants.',
  prevention: 'Use certified seed, avoid overhead watering, ensure wide spacing, destroy infected residues.',
  severity: 'Very High – Can wipe out entire crop within days.',
  chemicalControl: 'Metalaxyl 8% + Mancozeb 64% WP (2.5g/L) or Cymoxanil 8% + Mancozeb 64% WP (2.5g/L).',
  culturalPractices: 'Plant resistant cultivars, rotate crops, and maintain good field hygiene.'
},

'squash_powdery_mildew': {
  crops: ['squash', 'cucumber', 'pumpkin', 'melon'],
  scientificName: 'Podosphaera xanthii / Erysiphe cichoracearum',
  symptoms: 'White powdery patches on upper leaf surfaces, which expand and coalesce leading to yellowing and drying of leaves.',
  earlySymptoms: 'Small circular white spots on older leaves.',
  advancedSymptoms: 'Leaves turn brown, curl, and dry prematurely; fruits develop sunscald or poor flavor.',
  cause: 'Fungal spores spread by wind under dry conditions with high humidity.',
  lifecycle: 'Fungus overwinters on infected debris and produces conidia in dry weather.',
  favorableConditions: 'Temperature 20–30°C with relative humidity 60–80%.',
  cure: 'Apply fungicides containing Hexaconazole or Tebuconazole at early stage.',
  organicTreatment: 'Use sulfur dust, neem oil (2%), or baking soda spray (1 tsp/litre water) with mild soap.',
  prevention: 'Ensure air circulation, avoid excess nitrogen, water at base not foliage.',
  severity: 'Moderate – Affects yield and fruit quality.',
  chemicalControl: 'Hexaconazole 5% EC (1ml/L) or Tebuconazole 25% EC (1ml/L).',
  culturalPractices: 'Remove infected leaves, rotate crops, use resistant varieties.'
},

'strawberry_leaf_scorch': {
  crops: ['strawberry'],
  scientificName: 'Diplocarpon earliana',
  symptoms: 'Small purplish spots on leaves that enlarge into dark brown blotches with yellow margins; leaves curl and turn brittle, giving a scorched appearance.',
  earlySymptoms: 'Tiny red spots on older leaves near the base.',
  advancedSymptoms: 'Leaf desiccation, reduced photosynthesis, weak plants with fewer berries.',
  cause: 'Fungal infection spread through rain splash and irrigation.',
  lifecycle: 'Survives in infected debris and spreads by conidia during humid conditions.',
  favorableConditions: 'Cool to warm weather (15–25°C) with prolonged leaf wetness.',
  cure: 'Spray Captan or Chlorothalonil at 10-day intervals during early infection.',
  organicTreatment: 'Use neem oil, compost tea sprays, and improve air flow with proper spacing.',
  prevention: 'Avoid overhead watering, remove infected leaves, rotate crops every 2–3 years.',
  severity: 'Moderate – Can reduce vigor and yield over time.',
  chemicalControl: 'Captan 50% WP (2g/L) or Chlorothalonil 75% WP (2.5g/L).',
  culturalPractices: 'Mulch with straw, remove old leaves post-harvest, ensure drainage.'
},
'tomato_bacterial_spot': {
  crops: ['tomato'],
  scientificName: 'Xanthomonas campestris pv. vesicatoria',
  symptoms: 'Small, water-soaked, greasy spots on leaves that enlarge and become dark brown with yellow halos. Fruits show raised, rough lesions that reduce marketability.',
  earlySymptoms: 'Tiny translucent spots on lower leaves, often mistaken for fungal infection.',
  advancedSymptoms: 'Severe defoliation, leaf curling, fruit cracking, and reduced yield.',
  cause: 'Bacterial infection spread through rain splash, contaminated seeds, and pruning tools.',
  lifecycle: 'Bacteria survive on crop debris and seeds; spread is enhanced by high humidity and warm weather.',
  favorableConditions: 'Temperature 25–30°C, high humidity, frequent rain or dew.',
  cure: 'Apply copper-based bactericides (Copper oxychloride or Copper hydroxide) mixed with Mancozeb every 10 days.',
  organicTreatment: 'Neem oil (2%), garlic-chili extract spray, and compost tea applications for resistance.',
  prevention: 'Use certified disease-free seeds, rotate crops 2–3 years, avoid overhead irrigation, disinfect tools.',
  severity: 'High – Causes significant leaf loss and fruit damage.',
  chemicalControl: 'Copper oxychloride 50% WP (2.5g/L) + Mancozeb 75% WP (2g/L).',
  culturalPractices: 'Maintain spacing for air flow, remove infected debris, avoid working when leaves are wet.'
},

'tomato_early_blight': {
  crops: ['tomato', 'potato'],
  scientificName: 'Alternaria solani',
  symptoms: 'Dark concentric ring spots appear first on lower leaves, spreading upward; yellowing follows, leading to premature defoliation.',
  earlySymptoms: 'Small brown spots with faint rings on older leaves near the soil line.',
  advancedSymptoms: 'Leaves turn dry, stems weaken, fruits show sunken lesions near the stem end.',
  cause: 'Fungal infection spread by wind, rain, and infected debris.',
  lifecycle: 'Overwinters in plant residue and soil; spores germinate under moist conditions and infect foliage.',
  favorableConditions: 'Warm temperatures (25–30°C) with high humidity and leaf wetness.',
  cure: 'Apply fungicides like Mancozeb, Chlorothalonil, or Azoxystrobin in rotation every 7–10 days.',
  organicTreatment: 'Spray neem oil or Bacillus subtilis formulations, remove lower leaves after rainfall.',
  prevention: 'Practice crop rotation, avoid water stress, ensure proper staking for air circulation.',
  severity: 'High – Common and destructive during wet seasons.',
  chemicalControl: 'Mancozeb 75% WP (2g/L) or Azoxystrobin 23% SC (1ml/L).',
  culturalPractices: 'Remove infected leaves, use drip irrigation, mulch to prevent soil splash.'
},

'tomato_late_blight': {
  crops: ['tomato', 'potato'],
  scientificName: 'Phytophthora infestans',
  symptoms: 'Water-soaked lesions on leaves and stems, white fuzzy mold under leaves during humidity; fruits develop firm brown rot.',
  earlySymptoms: 'Pale green, greasy spots appearing after cool, moist nights.',
  advancedSymptoms: 'Rapid spread, plant collapse, blackened fruits and stems.',
  cause: 'Fungal-like oomycete pathogen thriving in cool, moist conditions.',
  lifecycle: 'Overwinters in infected tubers and debris; spreads via wind and water in humid conditions.',
  favorableConditions: 'Cool (15–20°C), humid (>90%) weather with leaf wetness over 10 hours.',
  cure: 'Use systemic fungicides like Metalaxyl + Mancozeb or Cymoxanil combinations.',
  organicTreatment: 'Apply Bordeaux mixture, copper hydroxide, or Trichoderma sprays.',
  prevention: 'Plant resistant varieties, ensure field drainage, remove infected debris promptly.',
  severity: 'Very High – Can wipe out entire crop within days in conducive weather.',
  chemicalControl: 'Metalaxyl 8% + Mancozeb 64% WP (2.5g/L) or Cymoxanil 8% + Mancozeb 64% WP (2.5g/L).',
  culturalPractices: 'Avoid dense planting, water in the morning, ensure good ventilation.'
},

'tomato_leaf_mold': {
  crops: ['tomato'],
  scientificName: 'Passalora fulva (Cladosporium fulvum)',
  symptoms: 'Yellow spots on upper leaf surface with olive-green to gray mold growth on undersides; severe infection causes leaf drop and reduced yield.',
  earlySymptoms: 'Pale yellow blotches on lower leaves near the base.',
  advancedSymptoms: 'Leaves dry and curl upward, fruits remain small and unevenly ripened.',
  cause: 'Fungal infection favored by high humidity and poor air circulation.',
  lifecycle: 'Spores survive in soil and debris; infection occurs under 85–100% humidity.',
  favorableConditions: 'Temperature 20–25°C, high humidity (>85%), poor ventilation.',
  cure: 'Apply fungicides such as Mancozeb or Chlorothalonil at early stage of symptoms.',
  organicTreatment: 'Spray with neem oil (2%) or sulfur-based fungicides weekly.',
  prevention: 'Ensure ventilation, reduce humidity, water plants at the base.',
  severity: 'Moderate – Common in greenhouses and shaded areas.',
  chemicalControl: 'Mancozeb 75% WP (2g/L) or Chlorothalonil 75% WP (2.5g/L).',
  culturalPractices: 'Prune lower leaves, increase spacing, use resistant varieties.'
},

'tomato_septoria_leaf_spot': {
  crops: ['tomato'],
  scientificName: 'Septoria lycopersici',
  symptoms: 'Small circular spots with gray centers and dark borders appear on older leaves; heavy infection causes defoliation and yield loss.',
  earlySymptoms: 'Tiny water-soaked spots on lower leaves, later developing gray centers.',
  advancedSymptoms: 'Leaves yellow, shrivel, and fall prematurely; fruits exposed to sunscald.',
  cause: 'Fungal pathogen spread by splashing water, rain, and contaminated debris.',
  lifecycle: 'Overwinters in plant debris; spores germinate and spread via rain splash or tools.',
  favorableConditions: 'Moderate temperatures (20–25°C), high humidity, frequent rainfall.',
  cure: 'Spray copper fungicides or Mancozeb at first sign of symptoms, repeat every 7–10 days.',
  organicTreatment: 'Neem oil (2%), garlic extract, and crop rotation with non-hosts.',
  prevention: 'Remove lower infected leaves, mulch to reduce splash, sanitize stakes and tools.',
  severity: 'High – Rapidly spreads in wet conditions.',
  chemicalControl: 'Mancozeb 75% WP (2g/L) or Copper oxychloride 50% WP (2.5g/L).',
  culturalPractices: 'Avoid overhead watering, rotate crops for 2 years, maintain spacing for air flow.'
},
'tomato_spider_mites_two_spotted': {
  crops: ['tomato'],
  scientificName: 'Tetranychus urticae (Two-spotted spider mite)',
  symptoms: 'Fine yellow or white speckling on upper leaf surfaces, bronzing, and webbing on undersides of leaves. Leaves become dry and fall off in severe infestations.',
  earlySymptoms: 'Tiny white dots on leaves with thin silk-like webbing near veins.',
  advancedSymptoms: 'Leaves turn bronze or gray, extensive webbing on stems and fruits, stunted growth, and yield loss.',
  cause: 'Microscopic mites feeding on plant sap, usually during hot, dry weather.',
  lifecycle: 'Eggs hatch in 3–5 days; adult mites reproduce rapidly, completing a life cycle in 7–10 days under favorable conditions.',
  favorableConditions: 'Hot (30–35°C), dry, dusty environments, and stressed plants.',
  cure: 'Spray acaricides such as Abamectin (1.9 EC, 0.5ml/L) or Fenazaquin (10 EC, 1ml/L). Repeat after 7 days if infestation persists.',
  organicTreatment: 'Neem oil (3%) or soap-water sprays, release predatory mites (Phytoseiulus persimilis).',
  prevention: 'Maintain humidity, avoid dust, and keep weeds down as they host mites.',
  severity: 'Moderate to High – Can cause total leaf drop in severe infestations.',
  chemicalControl: 'Abamectin 1.9 EC (0.5ml/L) or Fenazaquin 10 EC (1ml/L).',
  culturalPractices: 'Mist plants to maintain humidity, prune heavily infested leaves, and rotate with non-host crops.'
},

'tomato_target_spot': {
  crops: ['tomato'],
  scientificName: 'Corynespora cassiicola',
  symptoms: 'Brown circular spots with concentric rings (bull’s-eye pattern) on leaves; lesions may coalesce causing blight; dark spots also appear on stems and fruits.',
  earlySymptoms: 'Small brown pinhead spots on lower leaves.',
  advancedSymptoms: 'Widespread leaf death, black sunken spots on fruit, and defoliation leading to fruit sunscald.',
  cause: 'Fungal pathogen that spreads by wind, rain splash, and contaminated tools.',
  lifecycle: 'Overwinters in crop residue and soil; spores germinate in moist conditions and infect foliage.',
  favorableConditions: 'Warm (25–30°C) and humid (>85%) weather, prolonged leaf wetness.',
  cure: 'Apply fungicides like Chlorothalonil (2.5g/L) or Azoxystrobin (1ml/L) every 10 days.',
  organicTreatment: 'Neem oil (2%) or Bacillus subtilis sprays weekly.',
  prevention: 'Use crop rotation, avoid overwatering, and ensure good airflow.',
  severity: 'High – Major yield reducer in humid tomato zones.',
  chemicalControl: 'Chlorothalonil 75% WP (2.5g/L) or Azoxystrobin 23% SC (1ml/L).',
  culturalPractices: 'Remove infected leaves, avoid late-evening watering, ensure proper spacing.'
},

'tomato_yellow_leaf_curl_virus': {
  crops: ['tomato'],
  scientificName: 'Tomato yellow leaf curl virus (TYLCV)',
  symptoms: 'Severe leaf curling and yellowing, upward leaf cupping, stunted growth, and reduced fruit size.',
  earlySymptoms: 'Mild curling and pale veins on young leaves.',
  advancedSymptoms: 'Entire plant dwarfed with brittle leaves, flower drop, and no fruit set.',
  cause: 'Viral disease transmitted by whiteflies (Bemisia tabaci).',
  lifecycle: 'Virus persists in whiteflies and is transmitted during feeding; does not survive in soil or plant debris.',
  favorableConditions: 'Warm weather (25–35°C), dense whitefly populations, and dry environments.',
  cure: 'No chemical cure. Control vectors using Imidacloprid (0.3ml/L) or Thiamethoxam (0.25g/L).',
  organicTreatment: 'Use yellow sticky traps, neem oil (2%) sprays, and introduce lacewings or lady beetles to control whiteflies.',
  prevention: 'Plant resistant varieties, remove infected plants early, and use insect-proof nets.',
  severity: 'Very High – Can cause up to 100% yield loss in severe outbreaks.',
  chemicalControl: 'Imidacloprid 17.8 SL (0.3ml/L) or Thiamethoxam 25 WG (0.25g/L).',
  culturalPractices: 'Install yellow traps, use reflective mulches, and control weeds hosting whiteflies.'
},

'tomato_mosaic_virus': {
  crops: ['tomato'],
  scientificName: 'Tomato mosaic virus (ToMV)',
  symptoms: 'Mottled light and dark green leaf pattern, distorted and narrow leaves, delayed flowering, and uneven fruit ripening.',
  earlySymptoms: 'Mild leaf mottling and slight curling on younger leaves.',
  advancedSymptoms: 'Severe leaf distortion, blistered leaves, and reduced yield with malformed fruits.',
  cause: 'Viral infection transmitted through infected seeds, tools, or human handling.',
  lifecycle: 'Virus survives in plant debris and remains viable on tools and hands for long periods.',
  favorableConditions: 'Moderate temperature (20–25°C), high plant density, and frequent human contact.',
  cure: 'No direct cure. Remove infected plants and disinfect tools with 10% bleach or trisodium phosphate.',
  organicTreatment: 'Use resistant tomato varieties and maintain strict hygiene.',
  prevention: 'Disinfect tools and hands before handling plants, use certified disease-free seeds, and rotate crops.',
  severity: 'High – Reduces yield and fruit quality significantly.',
  chemicalControl: 'None – Viral disease; control vectors instead.',
  culturalPractices: 'Use resistant hybrids, avoid tobacco use near plants, and disinfect greenhouse equipment regularly.'
},
'Apple___healthy': {
  crops: ['apple'],
  scientificName: 'Malus domestica (Healthy Condition)',
  symptoms: 'Leaves are uniformly green with no spots or deformities. Fruits develop normally with smooth skin and balanced color.',
  earlySymptoms: 'None – healthy plants show steady growth and regular leaf formation.',
  advancedSymptoms: 'None – consistent flowering and fruit set.',
  cause: 'No infection or stress. Indicates balanced nutrient levels and absence of pathogens or pests.',
  lifecycle: 'Healthy apple trees follow seasonal cycles of vegetative growth, flowering, and fruiting.',
  favorableConditions: 'Full sunlight, well-drained loamy soil, and temperature between 18–25°C.',
  cure: 'Not applicable – maintain healthy status through proper pruning, irrigation, and pest monitoring.',
  organicTreatment: 'Regular neem oil sprays (preventive), compost-enriched soil, and companion planting with marigolds.',
  prevention: 'Maintain proper spacing, balanced fertilization, annual pruning, and timely disease monitoring.',
  severity: 'None – represents ideal growth.',
  chemicalControl: 'Preventive copper fungicides once per season if local fungal pressure is high.',
  culturalPractices: 'Use disease-free seedlings, maintain orchard sanitation, ensure adequate airflow.'
},

'Blueberry___healthy': {
  crops: ['blueberry'],
  scientificName: 'Vaccinium corymbosum (Healthy Condition)',
  symptoms: 'Bright green foliage, firm blue fruits, and strong stems with no necrosis or wilting.',
  earlySymptoms: 'None – plants maintain steady vegetative growth.',
  advancedSymptoms: 'None – healthy plants produce full berry clusters.',
  cause: 'Absence of disease or nutrient stress.',
  lifecycle: 'Perennial shrub cycle with annual flowering and fruiting under good management.',
  favorableConditions: 'Slightly acidic soil (pH 4.5–5.5), moderate humidity, good drainage.',
  cure: 'No treatment required; continue consistent irrigation and soil care.',
  organicTreatment: 'Mulching with pine needles, compost application, and regular pruning to maintain airflow.',
  prevention: 'Avoid waterlogging, check for root rot or insect signs, maintain pH and mulch cover.',
  severity: 'None',
  chemicalControl: 'Preventive fungicide spray once annually before flowering if regional pressure is reported.',
  culturalPractices: 'Ensure proper pruning, avoid over-fertilization, and maintain soil acidity.'
},

'Cherry_(including_sour)___healthy': {
  crops: ['cherry', 'sour cherry'],
  scientificName: 'Prunus avium / Prunus cerasus (Healthy Condition)',
  symptoms: 'Leaves are glossy green; no powdery coating or leaf curl. Fruits develop without blemishes.',
  earlySymptoms: 'None',
  advancedSymptoms: 'None',
  cause: 'Healthy state maintained by good hygiene, spacing, and preventive care.',
  lifecycle: 'Seasonal flowering and fruiting with dormancy during winter.',
  favorableConditions: 'Cool climate (15–25°C), well-drained sandy loam soil.',
  cure: 'No cure needed.',
  organicTreatment: 'Neem-based foliar sprays, balanced composting, and manual weed removal.',
  prevention: 'Avoid high humidity stagnation, prune for airflow, remove fallen debris.',
  severity: 'None',
  chemicalControl: 'Optional – copper fungicide at bud break if nearby fungal infection risk exists.',
  culturalPractices: 'Regular pruning, pest inspection, and maintaining balanced moisture.'
},

'Corn_(maize)___healthy': {
  crops: ['maize', 'corn'],
  scientificName: 'Zea mays (Healthy Condition)',
  symptoms: 'Green upright leaves, uniform growth, full tassel and ear formation without spotting or streaking.',
  earlySymptoms: 'None',
  advancedSymptoms: 'None',
  cause: 'No pathogen or nutrient deficiency present.',
  lifecycle: 'Germinates in 7–10 days, vegetative and reproductive stages complete in 90–120 days.',
  favorableConditions: 'Temperature 20–30°C, moderate rainfall, and well-drained loamy soil.',
  cure: 'No cure required.',
  organicTreatment: 'Use of farmyard manure, compost tea sprays, and intercropping for pest deterrence.',
  prevention: 'Seed treatment before sowing, rotation with legumes, and timely pest control.',
  severity: 'None',
  chemicalControl: 'None required unless pest outbreaks reported nearby.',
  culturalPractices: 'Maintain optimal spacing (20–25 cm), proper irrigation schedule, and weed control.'
},

'Tomato___healthy': {
  crops: ['tomato'],
  scientificName: 'Solanum lycopersicum (Healthy Condition)',
  symptoms: 'Dark green foliage, thick stems, smooth fruits, and no signs of yellowing, spots, or curling.',
  earlySymptoms: 'None',
  advancedSymptoms: 'None',
  cause: 'Absence of pathogens, proper nutrition, and favorable weather conditions.',
  lifecycle: 'Complete vegetative, flowering, and fruiting cycle under 25–30°C with sufficient light.',
  favorableConditions: 'Moderate humidity, full sunlight, and nutrient-rich, well-drained soil.',
  cure: 'Not applicable – maintain current conditions.',
  organicTreatment: 'Neem oil (preventive), compost mulch, and use of Trichoderma as soil inoculant.',
  prevention: 'Avoid overhead watering, ensure airflow, and rotate crops annually.',
  severity: 'None',
  chemicalControl: 'Preventive fungicide only during peak monsoon or humidity rise.',
  culturalPractices: 'Stake plants, prune lower leaves, and remove weeds regularly.'
},
'Grape___healthy': {
  crops: ['grape'],
  scientificName: 'Vitis vinifera (Healthy Condition)',
  symptoms: 'Uniformly green leaves, no black spots or lesions, firm fruit clusters with smooth skin.',
  earlySymptoms: 'None – vines show balanced shoot growth and leaf color.',
  advancedSymptoms: 'None – proper fruiting and steady canopy development.',
  cause: 'Free from fungal pathogens, bacterial infection, or nutrient deficiency.',
  lifecycle: 'Perennial vine with vegetative, flowering, and fruiting phases repeated annually.',
  favorableConditions: 'Temperature between 20–28°C, dry climate during flowering and ripening.',
  cure: 'Not applicable – maintain conditions.',
  organicTreatment: 'Compost mulch, neem oil (preventive), and sulfur dusting to deter mites.',
  prevention: 'Ensure trellis support, avoid overwatering, prune old canes, and maintain ventilation.',
  severity: 'None',
  chemicalControl: 'Optional – single copper oxychloride spray pre-flowering in humid areas.',
  culturalPractices: 'Balanced fertilization, removal of dried leaves, and consistent irrigation control.'
},

'Peach___healthy': {
  crops: ['peach'],
  scientificName: 'Prunus persica (Healthy Condition)',
  symptoms: 'Healthy leaves without curl or spots, firm smooth fruits, and balanced canopy growth.',
  earlySymptoms: 'None – even bud burst and leaf expansion.',
  advancedSymptoms: 'None – continuous fruit development and strong shoots.',
  cause: 'No disease or pest presence; good air movement and balanced soil nutrients.',
  lifecycle: 'Deciduous cycle with dormancy in winter and fruiting in summer.',
  favorableConditions: 'Mild climate (15–25°C), sandy loam soil, and moderate humidity.',
  cure: 'No treatment required.',
  organicTreatment: 'Neem oil sprays for preventive care, compost mulch, and balanced pruning.',
  prevention: 'Avoid waterlogging, remove fallen leaves, and inspect early spring buds.',
  severity: 'None',
  chemicalControl: 'Preventive dormant spray (copper oxychloride) before flowering if disease history exists.',
  culturalPractices: 'Prune annually, maintain orchard sanitation, and ensure drip irrigation.'
},

'Pepper,_bell___healthy': {
  crops: ['bell pepper', 'capsicum'],
  scientificName: 'Capsicum annuum (Healthy Condition)',
  symptoms: 'Shiny, dark-green leaves with no blight or bacterial spots, firm fruits, and strong stems.',
  earlySymptoms: 'None – steady vegetative growth.',
  advancedSymptoms: 'None – regular flowering and fruit setting.',
  cause: 'Balanced soil fertility and absence of pathogens.',
  lifecycle: 'Annual herbaceous plant; grows best under tropical and subtropical climates.',
  favorableConditions: 'Warm days (25–30°C), light loamy soil, and moderate irrigation.',
  cure: 'No cure required.',
  organicTreatment: 'Compost-rich soil, neem oil sprays, and use of beneficial microbes (Trichoderma).',
  prevention: 'Crop rotation, avoid excess nitrogen, and ensure good drainage.',
  severity: 'None',
  chemicalControl: 'None required unless pest pressure is high.',
  culturalPractices: 'Regular pruning, staking, and field sanitation.'
},

'Potato___healthy': {
  crops: ['potato'],
  scientificName: 'Solanum tuberosum (Healthy Condition)',
  symptoms: 'Green, upright plants with clean leaves, no spots, and firm tubers with smooth skin.',
  earlySymptoms: 'None – balanced top and root growth.',
  advancedSymptoms: 'None – proper tuber size and uniform plant vigor.',
  cause: 'Healthy state maintained with no pathogen infection and good nutrient balance.',
  lifecycle: 'Germinates, vegetates, tuberizes, and matures over 90–120 days.',
  favorableConditions: 'Cool climate (18–22°C), loose well-drained soil.',
  cure: 'Not applicable.',
  organicTreatment: 'Crop rotation, neem cake soil amendment, and mulching with straw.',
  prevention: 'Use certified seed tubers, avoid water stagnation, and practice 3-year rotation.',
  severity: 'None',
  chemicalControl: 'Optional – one preventive spray of Mancozeb 2g/L during peak humidity.',
  culturalPractices: 'Earthing-up, weed control, and disease-free seed selection.'
},

'Strawberry___healthy': {
  crops: ['strawberry'],
  scientificName: 'Fragaria × ananassa (Healthy Condition)',
  symptoms: 'Vibrant green trifoliate leaves, bright red fruits, no spots or wilt symptoms.',
  earlySymptoms: 'None – steady flowering and runner production.',
  advancedSymptoms: 'None – consistent yield and fruit color.',
  cause: 'No pest or fungal pressure, balanced irrigation, and good ventilation.',
  lifecycle: 'Perennial in mild climates, grown as annual in warm regions.',
  favorableConditions: 'Cool temperatures (15–20°C), well-drained sandy loam soil, high organic matter.',
  cure: 'No cure needed.',
  organicTreatment: 'Mulching with straw, neem oil preventive sprays, and beneficial microbes.',
  prevention: 'Avoid wet foliage, maintain drip irrigation, and rotate crops every 2 years.',
  severity: 'None',
  chemicalControl: 'Preventive fungicide only if disease reported in nearby fields.',
  culturalPractices: 'Remove old leaves, maintain clean beds, and avoid overhead watering.'
},
'Raspberry___healthy': {
  crops: ['raspberry'],
  scientificName: 'Rubus idaeus (Healthy Condition)',
  symptoms: 'Bright green leaves, strong canes, firm fruits with deep red color and no mold or discoloration.',
  earlySymptoms: 'None – vigorous new shoot emergence.',
  advancedSymptoms: 'None – full fruit clusters with uniform ripening.',
  cause: 'Absence of fungal infection, pest attack, or nutrient imbalance.',
  lifecycle: 'Perennial shrub with biennial canes – fruiting occurs in the second year.',
  favorableConditions: 'Cool climate (15–22°C), well-drained loamy soil, and moderate humidity.',
  cure: 'Not applicable.',
  organicTreatment: 'Use compost mulch, neem oil for pest deterrence, and Trichoderma soil treatment.',
  prevention: 'Prune old canes, ensure air circulation, avoid overhead irrigation.',
  severity: 'None',
  chemicalControl: 'Not required unless pest population rises.',
  culturalPractices: 'Maintain spacing (60–90 cm), remove suckers, and keep weeds controlled.'
},

'Soybean___healthy': {
  crops: ['soybean'],
  scientificName: 'Glycine max (Healthy Condition)',
  symptoms: 'Uniformly green trifoliate leaves, strong stems, and well-formed pods with no leaf spots.',
  earlySymptoms: 'None – even germination and steady leaf growth.',
  advancedSymptoms: 'None – proper flowering and pod filling.',
  cause: 'No presence of bacterial pustule, rust, or mosaic virus.',
  lifecycle: 'Annual legume crop – 90–120 days to maturity depending on variety.',
  favorableConditions: 'Warm days (25–30°C), moderate rainfall, and loamy soil.',
  cure: 'Not applicable.',
  organicTreatment: 'Rhizobium inoculation before sowing and neem oil spray for pest prevention.',
  prevention: 'Use certified seeds, practice 2–3 year crop rotation, and avoid waterlogging.',
  severity: 'None',
  chemicalControl: 'Preventive fungicide (Carbendazim 1g/L) only if disease history exists.',
  culturalPractices: 'Timely weeding, balanced fertilization, and adequate irrigation.'
},

'Cherry_(including_sour)___healthy': {
  crops: ['cherry', 'sour cherry'],
  scientificName: 'Prunus avium / Prunus cerasus (Healthy Condition)',
  symptoms: 'Glossy green leaves, well-developed buds, and clean fruits without any powdery residue.',
  earlySymptoms: 'None – healthy flowering and leaf emergence.',
  advancedSymptoms: 'None – full fruit set and absence of leaf curl or mildew.',
  cause: 'Good air circulation, proper pruning, and absence of fungal spores.',
  lifecycle: 'Deciduous tree; flowers in spring and fruits in early summer.',
  favorableConditions: 'Temperate regions with well-drained loamy soil, 16–25°C average temperature.',
  cure: 'Not applicable.',
  organicTreatment: 'Compost mulch, neem oil spray, and pruning of crowded branches.',
  prevention: 'Avoid wet canopy, remove mummified fruits, and ensure proper drainage.',
  severity: 'None',
  chemicalControl: 'Copper oxychloride preventive spray pre-flowering if humidity is high.',
  culturalPractices: 'Prune yearly, thin fruit clusters, and maintain orchard hygiene.'
},

'Blueberry___healthy': {
  crops: ['blueberry'],
  scientificName: 'Vaccinium corymbosum (Healthy Condition)',
  symptoms: 'Dark green foliage, firm berries with uniform blue color, and strong bush growth.',
  earlySymptoms: 'None – healthy flowering and new leaf flush.',
  advancedSymptoms: 'None – even berry development and firm texture.',
  cause: 'No fungal leaf spot, root rot, or nutrient deficiency.',
  lifecycle: 'Perennial shrub producing fruit annually after 2–3 years of establishment.',
  favorableConditions: 'Cool temperate climate, acidic soil (pH 4.5–5.5), high organic matter.',
  cure: 'No treatment required.',
  organicTreatment: 'Pine mulch for acidity maintenance, neem oil spray, and beneficial microbes.',
  prevention: 'Avoid overwatering, test soil pH regularly, and prune after harvest.',
  severity: 'None',
  chemicalControl: 'Optional – single fungicide spray in humid conditions.',
  culturalPractices: 'Mulching, pH adjustment, pruning of old canes, and good field sanitation.'
},

'Corn_(maize)___healthy': {
  crops: ['corn', 'maize'],
  scientificName: 'Zea mays (Healthy Condition)',
  symptoms: 'Vibrant green leaves, strong stalks, no rust pustules or leaf blight marks.',
  earlySymptoms: 'None – uniform seedling growth and leaf expansion.',
  advancedSymptoms: 'None – full tassel emergence and cob filling.',
  cause: 'No fungal infection or nutrient deficiency; optimal irrigation and spacing maintained.',
  lifecycle: 'Annual crop – 90–120 days from germination to harvest.',
  favorableConditions: 'Warm climate (25–32°C), well-drained loamy soil, full sunlight.',
  cure: 'Not applicable.',
  organicTreatment: 'Use compost and neem cake, apply biofertilizers like Azospirillum.',
  prevention: 'Crop rotation, proper nitrogen management, and pest scouting.',
  severity: 'None',
  chemicalControl: 'None required in healthy condition.',
  culturalPractices: 'Timely sowing, weed management, and balanced irrigation.'
},
'Squash___healthy': {
  crops: ['squash', 'pumpkin', 'zucchini'],
  scientificName: 'Cucurbita spp. (Healthy Condition)',
  symptoms: 'Vibrant green leaves, strong vines, well-formed fruits with smooth skin and no spots or powdery residues.',
  earlySymptoms: 'None – uniform leaf growth and strong vine elongation.',
  advancedSymptoms: 'None – healthy flowering and fruit set, no curling or yellowing of leaves.',
  cause: 'Absence of fungal infections, bacterial pathogens, pests, or nutrient deficiencies.',
  lifecycle: 'Annual vine crop – 45–100 days to harvest depending on variety.',
  favorableConditions: 'Warm temperatures (20–30°C), full sun, well-drained fertile soil, and moderate humidity.',
  cure: 'Not applicable.',
  organicTreatment: 'Use compost mulch, neem oil spray for pest prevention, and Trichoderma soil treatment.',
  prevention: 'Ensure good air circulation, proper spacing (90–120 cm), avoid overhead irrigation, rotate crops annually.',
  severity: 'None',
  chemicalControl: 'Not required unless pest/disease pressure develops.',
  culturalPractices: 'Regular watering at the base, mulching, remove old/dead leaves, timely weeding, and trellising of heavy vines if needed.'
}
},


 // General crop information
  crops: {
    'apple': {
  scientificName: 'Malus domestica',
  info: 'Apples are deciduous fruit trees that require cold winters for proper dormancy and fruiting. Rich in fiber, vitamin C, and antioxidants.',
  optimalConditions: 'Temperature: 32-45°F winter chill required; 60-75°F growing season. Soil pH: 6.0-7.0. Full sun exposure.',
  soilRequirements: 'Well-drained loamy soil rich in organic matter. Avoid waterlogged areas.',
  waterRequirements: '1-2 inches per week. Deep watering preferred. Avoid wetting foliage to prevent fungal infections.',
  fertilization: 'Apply balanced fertilizer (10-10-10) in early spring. Supplement nitrogen in growing season based on soil test.',
  spacing: '15-20 feet between trees. Dwarf varieties: 10 feet. Rows: 20-25 feet apart.',
  care: 'Prune annually in late winter to maintain shape and remove dead wood. Thin fruits to prevent overloading branches. Mulch to conserve moisture.',
  commonDiseases: ['apple scab', 'cedar apple rust', 'powdery mildew', 'fire blight'],
  commonPests: 'Codling moth, aphids, apple maggot, spider mites',
  companion: 'Chives, garlic, nasturtium. Avoid: Pears, plums (disease transmission)',
  harvest: 'Varies by variety: early (70-100 days), mid-season (100-130), late (140+). Pick when color and firmness are optimal.',
  varieties: 'Malus domestica varieties: Fuji, Gala, Honeycrisp, Granny Smith, Red Delicious'
},

'blueberry': {
  scientificName: 'Vaccinium corymbosum',
  info: 'Blueberries are perennial shrubs producing small, sweet, antioxidant-rich berries. Prefer acidic soil and temperate climates.',
  optimalConditions: 'Temperature: 60-70°F growing season. Soil pH: 4.5-5.5. Full sun for maximum fruiting.',
  soilRequirements: 'Well-drained, acidic, high organic matter soil. Raised beds preferred if drainage is poor.',
  waterRequirements: '1-2 inches per week, consistent moisture. Avoid waterlogging.',
  fertilization: 'Use acid-loving plant fertilizers. Apply in early spring and after fruiting. Avoid excess nitrogen.',
  spacing: '4-6 feet between shrubs. Rows: 8-10 feet apart.',
  care: 'Mulch with pine needles or sawdust. Prune annually to remove old wood and encourage new growth. Protect from birds.',
  commonDiseases: ['mummy berry', 'botrytis fruit rot', 'phomopsis twig blight'],
  commonPests: 'Blueberry maggot, aphids, spider mites, birds',
  companion: 'Azaleas, rhododendrons, strawberries. Avoid: Brassicas',
  harvest: '70-100 days from flowering. Pick when fully blue and slightly soft.',
  varieties: 'Highbush (Duke, Bluecrop), Rabbiteye (Tifblue), Lowbush (Wild blueberry)'
},

'cherry': {
  scientificName: 'Prunus avium (sweet), Prunus cerasus (sour)',
  info: 'Cherries are deciduous trees producing sweet or tart fruits. Require cold winter for dormancy. Rich in antioxidants, vitamin C, and fiber.',
  optimalConditions: 'Temperature: 32-45°F winter chill; 55-75°F growing season. Soil pH: 6.0-7.0. Full sun.',
  soilRequirements: 'Well-drained sandy loam with organic matter. Avoid heavy clay soils.',
  waterRequirements: '1-2 inches per week. Deep watering to promote strong root development.',
  fertilization: 'Apply balanced fertilizer (10-10-10) in early spring. Adjust nitrogen according to soil test.',
  spacing: '15-25 feet between trees. Rows: 20-25 feet apart.',
  care: 'Prune to maintain shape and airflow. Thin fruits to prevent branch breakage. Mulch to conserve moisture.',
  commonDiseases: ['powdery mildew', 'brown rot', 'bacterial canker', 'leaf spot'],
  commonPests: 'Cherry fruit fly, aphids, spider mites, birds',
  companion: 'Garlic, chives, marigold. Avoid: Peach, plum (disease cross-infection)',
  harvest: 'Sweet cherries: 60-80 days after bloom; sour cherries: 70-90 days. Pick when fully colored and firm.',
  varieties: 'Sweet: Bing, Rainier, Stella; Sour: Montmorency, Morello'
},

'corn': {
  scientificName: 'Zea mays',
  info: 'Corn (maize) is an annual warm-season grain crop. Rich in carbohydrates, fiber, and essential nutrients. Requires full sun and fertile soil.',
  optimalConditions: 'Temperature: 60-95°F. Soil pH: 5.8-7.0. Full sun exposure.',
  soilRequirements: 'Well-drained loamy soil rich in organic matter. Avoid waterlogging.',
  waterRequirements: '1-1.5 inches per week. Ensure deep watering at root zone.',
  fertilization: 'Apply balanced fertilizer at planting. Side-dress with nitrogen when plants are knee-high.',
  spacing: '8-12 inches between plants. Rows: 30-36 inches apart.',
  care: 'Plant in blocks for better pollination. Weed regularly. Mulch to retain soil moisture.',
  commonDiseases: ['common rust', 'northern leaf blight', 'cercospora leaf spot', 'gray leaf spot', 'fusarium stalk rot'],
  commonPests: 'Corn borer, corn rootworm, aphids, armyworms',
  companion: 'Beans, cucumbers, peas, squash. Avoid: Tomatoes, potatoes',
  harvest: '80-120 days depending on variety. Harvest when husks are green and kernels are plump.',
  varieties: 'Sweet corn (sugar-enhanced), Dent corn, Flint corn, Popcorn'
},

'grape': {
  scientificName: 'Vitis vinifera',
  info: 'Grapes are perennial climbing vines producing antioxidant-rich fruit for fresh consumption, juice, or wine. Prefer warm, dry climates.',
  optimalConditions: 'Temperature: 60-85°F. Soil pH: 5.5-7.0. Full sun, good airflow.',
  soilRequirements: 'Well-drained loamy soil. Avoid waterlogging. Soil rich in organic matter preferred.',
  waterRequirements: '1-2 inches per week. Water deeply and infrequently to encourage deep roots.',
  fertilization: 'Apply balanced fertilizer (10-10-10) in early spring. Supplemental nitrogen during growth as needed.',
  spacing: '6-8 feet between vines. Rows: 8-10 feet apart. Trellis for support.',
  care: 'Prune annually in winter to remove old wood. Thin clusters to improve quality. Mulch to conserve moisture. Train vines on trellis.',
  commonDiseases: ['black rot', 'powdery mildew', 'esca', 'leaf blight', 'downy mildew'],
  commonPests: 'Grape berry moth, leafhoppers, spider mites, mealybugs',
  companion: 'Garlic, chives, clover. Avoid: Brassicas',
  harvest: '70-100 days from bloom depending on variety. Pick when fully colored and firm.',
  varieties: 'Concord, Thompson Seedless, Red Globe, Cabernet Sauvignon, Chardonnay'
},
'orange': {
  scientificName: 'Citrus sinensis',
  info: 'Oranges are perennial citrus trees producing vitamin C-rich fruits. Prefer subtropical climates with good sunlight and moderate rainfall.',
  optimalConditions: 'Temperature: 55-100°F. Soil pH: 6.0-7.5. Full sun exposure.',
  soilRequirements: 'Well-drained sandy loam or loamy soil. Avoid waterlogged areas.',
  waterRequirements: '1-2 inches per week, depending on rainfall. Deep irrigation encourages strong roots.',
  fertilization: 'Apply balanced citrus fertilizer 3-4 times per year. Supplement micronutrients like Mg, Zn, and Mn.',
  spacing: '12-25 feet between trees depending on rootstock and variety.',
  care: 'Prune to remove dead or crowded branches. Mulch to retain soil moisture and reduce weeds. Protect from frost.',
  commonDiseases: ['haunglongbing (citrus greening)', 'citrus canker', 'greasy spot', 'melanose'],
  commonPests: 'Asian citrus psyllid, aphids, scale insects, mites',
  companion: 'Legumes, marigold, nasturtium. Avoid: Avocado and other citrus nearby with disease history.',
  harvest: 'Oranges mature 6-12 months after flowering depending on variety. Pick when fully colored and firm.',
  varieties: 'Valencia, Navel, Blood Orange, Hamlin'
},

'peach': {
  scientificName: 'Prunus persica',
  info: 'Peaches are deciduous fruit trees producing sweet, juicy stone fruits. Require cold winter for dormancy and fruit set.',
  optimalConditions: 'Temperature: 32-45°F winter chill; 65-85°F growing season. Soil pH: 6.0-7.0. Full sun exposure.',
  soilRequirements: 'Well-drained sandy loam with organic matter. Avoid heavy clay and waterlogged soils.',
  waterRequirements: '1-2 inches per week. Irrigate deeply during dry periods, reduce near harvest to avoid splitting.',
  fertilization: 'Balanced fertilizer (10-10-10) in early spring. Supplement nitrogen according to growth stage.',
  spacing: '15-20 feet between trees. Rows: 20-25 feet apart.',
  care: 'Prune to maintain open center shape for sunlight penetration. Thin fruits to 6-8 inches apart. Mulch to conserve moisture.',
  commonDiseases: ['bacterial spot', 'brown rot', 'powdery mildew', 'peach leaf curl'],
  commonPests: 'Peach tree borer, aphids, mites, fruit flies',
  companion: 'Garlic, chives, marigold. Avoid: Plum, cherry (disease cross-infection)',
  harvest: '70-90 days after bloom depending on variety. Pick when fully colored and slightly soft to touch.',
  varieties: 'Elberta, Redhaven, Cresthaven, Florida Prince'
},

'pepper': {
  scientificName: 'Capsicum annuum',
  info: 'Peppers (sweet and hot) are warm-season vegetables rich in vitamins A and C. Require full sun and warm temperatures.',
  optimalConditions: 'Temperature: 70-85°F day, 60-70°F night. Soil pH: 6.0-6.8. Full sun for 6-8 hours.',
  soilRequirements: 'Well-drained fertile loamy soil with compost. Avoid waterlogging.',
  waterRequirements: '1-2 inches per week. Consistent moisture for fruit set. Avoid wetting foliage.',
  fertilization: 'Balanced fertilizer at planting. Side-dress with nitrogen during flowering and early fruiting.',
  spacing: '18-24 inches between plants. Rows: 24-36 inches apart.',
  care: 'Support heavy-fruiting plants with stakes. Mulch to conserve moisture and reduce weeds. Remove lower leaves touching soil.',
  commonDiseases: ['bacterial spot', 'anthracnose', 'cercospora leaf spot', 'powdery mildew', 'mosaic virus'],
  commonPests: 'Aphids, whiteflies, thrips, pepper weevil, spider mites',
  companion: 'Basil, carrots, onions, marigold. Avoid: Brassicas, corn',
  harvest: '60-90 days from transplant. Pick fruits fully colored but firm.',
  varieties: 'Bell (California Wonder), Jalapeno, Cayenne, Banana pepper, Habanero'
},

'potato': {
  scientificName: 'Solanum tuberosum',
  info: 'Potatoes are cool-season tuber crops high in carbohydrates and vitamin C. Require loose, well-drained soil.',
  optimalConditions: 'Temperature: 60-70°F for growth. Soil pH: 5.5-6.5. Avoid frost and waterlogged conditions.',
  soilRequirements: 'Loose, friable loam rich in organic matter. Avoid compacted or heavy clay soils.',
  waterRequirements: '1-2 inches per week. Water consistently during tuber development. Avoid wetting foliage.',
  fertilization: 'Balanced fertilizer (10-10-10) at planting. Side-dress with nitrogen during vegetative growth.',
  spacing: '12 inches between plants. Rows: 30-36 inches apart.',
  care: 'Hill soil around stems as plants grow. Mulch to retain moisture. Remove diseased tubers after harvest.',
  commonDiseases: ['late blight', 'early blight', 'mosaic virus', 'scab', 'blackleg'],
  commonPests: 'Colorado potato beetle, aphids, wireworms, nematodes',
  companion: 'Beans, cabbage, corn. Avoid: Tomatoes, peppers (disease risk)',
  harvest: '90-120 days from planting depending on variety. Harvest when foliage dies back.',
  varieties: 'Russet, Yukon Gold, Red Pontiac, Fingerling'
},

'raspberry': {
  scientificName: 'Rubus idaeus',
  info: 'Raspberries are perennial shrubs producing sweet, red or black berries. Rich in vitamins, antioxidants, and dietary fiber.',
  optimalConditions: 'Temperature: 65-75°F growing season. Soil pH: 5.5-6.5. Full sun exposure.',
  soilRequirements: 'Well-drained, fertile loam rich in organic matter. Avoid heavy clay and waterlogged soil.',
  waterRequirements: '1-2 inches per week. Water at base to prevent fungal diseases.',
  fertilization: 'Balanced fertilizer (10-10-10) in early spring. Supplement with compost or manure.',
  spacing: '2-3 feet between plants. Rows: 6-8 feet apart. Provide trellis for support.',
  care: 'Prune annually to remove old canes. Mulch to conserve moisture. Train canes on trellis.',
  commonDiseases: ['anthracnose', 'botrytis fruit rot', 'powdery mildew', 'verticillium wilt'],
  commonPests: 'Raspberry beetle, aphids, spider mites, Japanese beetle',
  companion: 'Garlic, chives, marigold. Avoid: Tomatoes, potatoes',
  harvest: '60-90 days from flowering. Pick when fully colored and firm.',
  varieties: 'Heritage, Caroline, Meeker, Fall Gold'
},
'soybean': {
  scientificName: 'Glycine max',
  info: 'Soybeans are annual leguminous crops grown for protein-rich seeds, used in food, oil, and animal feed. They fix nitrogen in the soil.',
  optimalConditions: 'Temperature: 70-85°F. Soil pH: 6.0-6.8. Full sun exposure for 6-8 hours.',
  soilRequirements: 'Well-drained loamy soil, rich in organic matter. Avoid waterlogged fields.',
  waterRequirements: '1-1.5 inches per week during flowering and pod fill stages. Avoid drought stress.',
  fertilization: 'Phosphorus and potassium recommended based on soil test. Nitrogen often not required due to fixation.',
  spacing: '6-8 inches between plants, 20-30 inches between rows.',
  care: 'Control weeds early. Rotate with cereals to reduce disease. Monitor for pests like aphids and stink bugs.',
  commonDiseases: ['soybean rust', 'brown spot', 'phytophthora root rot', 'sudden death syndrome'],
  commonPests: 'Aphids, bean leaf beetle, cutworms, Japanese beetle',
  companion: 'Corn, cucurbits. Avoid: Other legumes consecutively to reduce disease pressure.',
  harvest: 'Harvest when pods are mature, leaves turn yellow, and moisture content is 13-15%.',
  varieties: 'Williams, Jack, Maverick, Pioneer'
},

'squash': {
  scientificName: 'Cucurbita pepo / Cucurbita maxima',
  info: 'Squash includes summer and winter varieties producing edible fruits. Rich in vitamins A and C, low in calories.',
  optimalConditions: 'Temperature: 70-90°F. Soil pH: 6.0-6.8. Full sun exposure required.',
  soilRequirements: 'Well-drained fertile loam enriched with compost. Avoid waterlogged soils.',
  waterRequirements: '1-2 inches per week. Water at base, avoid wetting leaves to reduce fungal infections.',
  fertilization: 'Balanced fertilizer at planting, side-dress with nitrogen during flowering.',
  spacing: '2-3 feet between plants for bush types, 4-6 feet for vining types. Rows 4-8 feet apart.',
  care: 'Provide trellis or space for vining types. Mulch to conserve moisture. Remove diseased leaves promptly.',
  commonDiseases: ['powdery mildew', 'downy mildew', 'anthracnose', 'bacterial wilt'],
  commonPests: 'Squash bugs, cucumber beetles, aphids, spider mites',
  companion: 'Corn, beans, radishes. Avoid: Potatoes, tomatoes (disease risk)',
  harvest: 'Summer squash: 50-60 days, pick when young and tender. Winter squash: 80-120 days, harvest when rind hard.',
  varieties: 'Zucchini, Yellow Crookneck, Butternut, Acorn'
},

'strawberry': {
  scientificName: 'Fragaria × ananassa',
  info: 'Strawberries are perennial low-growing plants producing sweet, red fruits. Rich in vitamin C and antioxidants.',
  optimalConditions: 'Temperature: 60-80°F. Soil pH: 5.5-6.5. Full sun exposure 6-8 hours.',
  soilRequirements: 'Well-drained sandy loam with organic matter. Avoid heavy clay and waterlogged soil.',
  waterRequirements: '1-1.5 inches per week. Drip irrigation recommended to reduce leaf wetness.',
  fertilization: 'Balanced fertilizer before planting. Side-dress with nitrogen during early growth.',
  spacing: '12-18 inches between plants, 24-36 inches between rows.',
  care: 'Mulch to conserve moisture and control weeds. Remove old leaves after harvest. Protect from birds and frost.',
  commonDiseases: ['leaf scorch', 'gray mold (botrytis)', 'powdery mildew', 'verticillium wilt'],
  commonPests: 'Aphids, spider mites, slugs, strawberry crown borers',
  companion: 'Borage, lettuce, spinach. Avoid: Brassicas and nightshades near planting.',
  harvest: '50-80 days after flowering depending on variety. Pick fully colored, firm berries.',
  varieties: 'Albion, Chandler, Seascape, Sweet Charlie'
},

'tomato': {
  scientificName: 'Solanum lycopersicum',
  info: 'Tomatoes are warm-season vegetables from the nightshade family, rich in vitamins A, C, and lycopene. They require full sun (6-8 hours) and well-drained fertile soil.',
  optimalConditions: 'Temperature: 70-85°F day, 60-70°F night. Soil pH: 6.0-6.8. Full sun exposure.',
  soilRequirements: 'Well-drained, fertile loamy soil rich in organic matter. Add compost before planting.',
  waterRequirements: '1-2 inches per week. Water deeply at base, avoid wetting foliage. Consistent moisture prevents blossom end rot.',
  fertilization: 'Apply balanced fertilizer (10-10-10) at planting. Side-dress with nitrogen when first fruits set. Too much nitrogen reduces fruiting.',
  spacing: '24-36 inches between plants, 3-4 feet between rows for determinate types. 36-48 inches for indeterminate.',
  care: 'Stake or cage plants for support. Prune suckers on indeterminate varieties. Mulch with straw to retain moisture and prevent soil splash. Remove lower leaves touching ground.',
  commonDiseases: ['late blight', 'early blight', 'septoria leaf spot', 'bacterial spot', 'mosaic virus', 'fusarium wilt', 'verticillium wilt', 'leaf mold'],
  commonPests: 'Hornworms, aphids, whiteflies, spider mites, cutworms',
  companion: 'Basil, marigold, carrots, onions. Avoid: Brassicas, corn',
  harvest: '60-85 days from transplant depending on variety. Pick when fully colored but still firm.',
  varieties: 'Determinate (bush, all fruits ripen together) vs Indeterminate (vine, continuous production). Popular: Beefsteak, Roma, Cherry, Heirloom'
}
}
};
// Chatbot response logic
function getChatbotResponse(userMessage) {
  const msg = userMessage.toLowerCase().trim();
// Personalized responses for Raj
  const queeniReplies = [
    "Yo Raj! 😎 How’s my mastermind creator today?",
    "Hey Raj! 😏 Feeling awesome, I hope?",
    "Hello boss Raj! 🌿 What are we cooking up today?",
    "Hey Raj! 👑 The genius who made me, how are you feeling?",
  ];

  // Check if user typed 'queeni'
  if (msg.match(/\bqueeni\b/i)) {
    return queeniReplies[Math.floor(Math.random() * queeniReplies.length)];
  }
 // Greetings
if (msg.match(/hi|hello|hey|namaste|namaskara|greetings|good morning|good afternoon/i)) {
  return "Hello! 👋 I’m your Crop Disease Assistant Queeni 👸. How can I help you today?";
}

// Asking about well-being
if (msg.match(/how are you|how r u|hegidira/i)) {
  return "Thank you for asking! I am good. How are you doing?";
}

// Responding to user feeling good
if (msg.match(/doing great|i am good|i am fine|good|fine/i)) {
  return "That's great! 🌱 Do you have any queries for me?";
}
// Go-ahead when user types 'yes'
if (msg.match(/^(yes|s)$/i)) { // exact match for 'yes'
  return "Awesome! 🌿 You can ask me things like:\n" +
         "• 'Best crop to grow in Karnataka with red soil'\n" +
         "• 'How many months does potato take to grow?'\n" +
         "• 'Pesticide cost for tomato blight'\n" +
         "• 'How to treat grape black rot?'\n\n" +
         "⚡ Tip: Include the crop name or disease for precise guidance!"
         "🦠 **Disease Information & Symptoms:**\n" +
         "• 'What is late blight?'\n" +
         "• 'Symptoms of powdery mildew on squash'\n" +
         "• 'Cure for apple scab'\n" +
         "• 'Identify disease with yellow spots on leaves'\n" +
         "• 'Tomato mosaic virus details'\n\n" +

         "💊 **Treatment & Remedies:**\n" +
         "• 'How to treat grape black rot?'\n" +
         "• 'Organic remedies for powdery mildew'\n" +
         "• 'Chemical control for bacterial spot in pepper'\n" +
         "• 'Preventive measures for early blight in potatoes'\n" +
         "• 'Neem oil usage for tomato pests'\n\n" +

         "📍 **Smart Suggestions & Soil Info:**\n" +
         "• 'Best crop for clay soil in Karnataka'\n" +
         "• 'Which crops grow well in red soil?'\n" +
         "• 'Fertilizer plan for corn in rainy season'\n\n" +

         "📸 **AI Diagnosis & Upload:**\n" +
         "• 'Analyze this leaf image for disease'\n" +
         "• 'Identify crop disease from photo'\n\n" +
         "⚡ Tip: Always include the **crop name, disease, or location** for precise guidance!";
}
  // Help
if (msg.match(/help|what can you do|capabilities|i dont know | idk/)) {
  return "I can assist you with:\n\n📋 **Disease Information** - Ask about specific crop diseases\n🌱 **Crop Care** - Get tips on growing healthy crops\n💊 **Treatment** - Learn about cures and preventive measures\n🔍 **Symptoms** - Identify diseases by symptoms\n\nTry asking: 'What is late blight?' or 'How to care for tomatoes?'";
}
  
  // Advanced Disease Search & Response
for (let disease in cropKnowledge.diseases) {
  if (msg.includes(disease)) {
    const info = cropKnowledge.diseases[disease];
    return `**🧬 ${disease.toUpperCase()} - DISEASE PROFILE**\n\n` +
           `🌾 **Commonly Affects:** ${info.crops.join(', ')}\n\n` +
           `🔎 **Symptoms & Identification:** ${info.symptoms}\n\n` +
           `⚠️ **Causal Agent:** ${info.cause || 'Unknown / Environmental trigger'}\n\n` +
           `🌡️ **Favorable Conditions:** ${info.conditions || 'High humidity, poor drainage, and moderate temperature promote infection.'}\n\n` +
           `💊 **Recommended Treatment & Management:**\n${info.cure || 'Apply suitable fungicide or biocontrol agent; remove infected parts.'}\n\n` +
           `🍃 **Organic Alternatives:** ${info.organic || 'Use neem oil, Trichoderma viride, or copper-based sprays for mild infections.'}\n\n` +
           `🧪 **Chemical Control (if severe):** ${info.chemical || 'Use Mancozeb, Carbendazim, or Propiconazole as per label directions.'}\n\n` +
           `🔰 **Preventive Measures:** ${info.prevention || 'Ensure crop rotation, proper drainage, and regular field monitoring.'}\n\n` +
           `📈 **Severity Level:** ${info.severity || 'Moderate (depends on weather and management practices)'}\n\n` +
           `🧭 *Tip:* For best results, provide the **crop name + disease** (e.g., “tomato early blight treatment”) to get an exact control plan.`;
  }
}
  // Advanced Crop Information & Recommendation Response
for (let crop in cropKnowledge.crops) {
  if (msg.includes(crop)) {
    const info = cropKnowledge.crops[crop];
    
    // Care, Growth, or Cultivation Queries
    if (msg.includes('care') || msg.includes('grow') || msg.includes('cultivate') || msg.includes('how to plant')) {
      return `**🌾 ${crop.toUpperCase()} - COMPLETE CULTIVATION & CARE GUIDE**\n\n` +
             `📘 **Overview:** ${info.info}\n\n` +
             `🌱 **Care Tips:**\n${info.care}\n\n` +
             `🕒 **Growth Duration:** ${info.growthTime || 'Varies by season (generally 3–6 months)'}\n` +
             `🌤️ **Climate & Weather:** ${info.climate || 'Requires moderate temperature and full sunlight'}\n` +
             `🌍 **Suitable Soil:** ${info.soil || 'Prefers well-drained loamy soil rich in organic matter'}\n\n` +
             `💧 **Fertilizer Recommendation:** ${info.fertilizer || 'Balanced NPK (10-10-10) with compost or cow dung manure'}\n` +
             `🐛 **Pesticide / Control:** ${info.pesticide || 'Neem oil or copper oxychloride for early pest prevention'}\n` +
             `💰 **Approximate Cultivation Cost:** ${info.cost || '₹10,000–₹30,000 per acre depending on region'}\n\n` +
             `⚠️ **Common Diseases:** ${info.commonDiseases.join(', ')}\n\n` +
             `📍 **Best Grown In:** ${info.bestRegions || 'Regions with fertile soil and moderate rainfall across India'}\n\n` +
             `💡 *Tip:* For higher yield, ensure crop rotation and maintain ideal soil pH between 6.0–7.5.`;
    }
// Single keyword queries - Enhanced
  if (msg === 'pesticide' || msg === 'pesticides' || msg === 'spray' || msg === 'chemical') {
    return "**Pesticides & Chemical Control:**\n\n" +
           "💊 **Common Fungicides:**\n" +
           "• Mancozeb 75% WP (2g/L) - broad spectrum\n" +
           "• Chlorothalonil 75% WP (2g/L) - preventive\n" +
           "• Copper-based products - organic approved\n" +
           "• Azoxystrobin 23% SC (1ml/L) - systemic\n\n" +
           "🐛 **Insecticides:**\n" +
           "• Imidacloprid (0.5ml/L) - aphids\n" +
           "• Bt (Bacillus thuringiensis) - caterpillars\n" +
           "• Neem oil - organic option\n\n" +
           "⚠️ **Safety Tips:**\n" +
           "• Always read label instructions\n" +
           "• Wear protective equipment\n" +
           "• Follow waiting periods before harvest\n" +
           "• Apply in evening to protect bees\n\n" +
           "💡 Ask: 'organic pest control' for natural options!";
  }

  if (msg === 'months' || msg === 'month' || msg === 'calendar' || msg === 'schedule') {
    return "**Crop Planting Calendar:**\n\n" +
           "🌱 **SPRING (March-May):**\n" +
           "• Early Spring: Lettuce, peas, spinach, radish\n" +
           "• Mid Spring: Tomato transplants, peppers, beans\n" +
           "• Late Spring: Cucumber, squash, corn\n\n" +
           "☀️ **SUMMER (June-August):**\n" +
           "• Succession plant: Beans, cucumber\n" +
           "• Start fall crops: Broccoli, cabbage seeds\n\n" +
           "🍂 **FALL (September-November):**\n" +
           "• Lettuce, spinach, radish, carrots\n" +
           "• Garlic planting (October)\n\n" +
           "❄️ **WINTER (December-February):**\n" +
           "• Plan next season\n" +
           "• Start seeds indoors (February)\n\n" +
           "💡 Ask: 'when to plant tomatoes?' for specific crops!";
  }

  if (msg === 'price' || msg === 'cost' || msg === 'expensive') {
    return "**Farming Cost Management:**\n\n" +
           "💰 **Budget-Friendly Options:**\n\n" +
           "🌱 **Seeds:**\n" +
           "• Save seeds from healthy plants\n" +
           "• Buy in bulk with other farmers\n" +
           "• Start from cuttings when possible\n\n" +
           "🌿 **Organic Alternatives:**\n" +
           "• Homemade compost (free!)\n" +
           "• Baking soda spray (very cheap)\n" +
           "• Neem oil (affordable, multi-use)\n" +
           "• Crop rotation (prevents diseases)\n\n" +
           "💊 **Smart Pesticide Use:**\n" +
           "• Use only when necessary\n" +
           "• Apply preventively (less needed)\n" +
           "• Buy generic brands\n" +
           "• Share equipment with neighbors\n\n" +
           "💡 Prevention saves money - healthy plants need fewer inputs!";
  }

  if (msg === 'water' || msg === 'watering' || msg === 'irrigation') {
    return "**Watering Guide - All Crops:**\n\n" +
           "💧 **General Rules:**\n" +
           "• 1-2 inches per week for most vegetables\n" +
           "• Water deeply, less frequently\n" +
           "• Morning watering is best\n" +
           "• Avoid wetting foliage (prevents disease)\n\n" +
           "🌱 **By Growth Stage:**\n" +
           "• Seedlings: Light daily watering\n" +
           "• Vegetative: Deep watering 2-3x/week\n" +
           "• Flowering/Fruiting: Consistent moisture critical\n\n" +
           "💡 **Water Check Test:**\n" +
           "Stick finger 2 inches into soil\n" +
           "• Dry → Water needed\n" +
           "• Moist → Wait\n" +
           "• Wet → Too much water!\n\n" +
           "🚿 **Best Methods:**\n" +
           "• Drip irrigation (most efficient)\n" +
           "• Soaker hoses\n" +
           "• Watering at base\n\n" +
           "Ask about specific crops: 'tomato watering'";
  }

  if (msg === 'disease' || msg === 'diseases' || msg === 'sick') {
    return "**Common Crop Diseases Overview:**\n\n" +
           "🦠 **Fungal Diseases (Most Common):**\n" +
           "• Late Blight - affects tomatoes & potatoes\n" +
           "• Early Blight - tomatoes & potatoes\n" +
           "• Powdery Mildew - many crops\n\n" +
           "🔴 **Bacterial Diseases:**\n" +
           "• Bacterial Spot - tomatoes & peppers\n" +
           "• Bacterial Wilt - rapid plant death\n\n" +
           "🧬 **Viral Diseases:**\n" +
           "• Mosaic Virus - no cure available\n" +
           "• Spread by aphids and tools\n\n" +
           "⚠️ **Physiological Disorders:**\n" +
           "• Blossom End Rot - calcium/water issue\n" +
           "• Fruit Cracking - inconsistent watering\n\n" +
           "💡 **How to Get Help:**\n" +
           "• Describe symptoms: 'dark spots on leaves'\n" +
           "• Specify crop: 'tomato diseases'\n" +
           "• Use image detection feature\n\n" +
           "Ask about any specific disease!";
  }

  if (msg === 'fertilizer' || msg === 'fertilizers' || msg === 'manure') {
    return "**Fertilizer Guide:**\n\n" +
           "🥗 **NPK Basics:**\n" +
           "• N (Nitrogen) - Leafy growth\n" +
           "• P (Phosphorus) - Roots & flowers\n" +
           "• K (Potassium) - Overall health & disease resistance\n\n" +
           "🌱 **By Crop Type:**\n" +
           "• Leafy vegetables: High N (21-0-0)\n" +
           "• Fruiting crops: Balanced (10-10-10)\n" +
           "• Root crops: Low N, high P (5-10-10)\n\n" +
           "🌿 **Organic Options:**\n" +
           "• Compost (balanced, slow release)\n" +
           "• Cow manure (aged, 2-1-1)\n" +
           "• Blood meal (12-0-0) for nitrogen\n" +
           "• Bone meal (3-15-0) for phosphorus\n" +
           "• Wood ash (0-0-5) for potassium\n\n" +
           "⏰ **When to Apply:**\n" +
           "• At planting: Balanced fertilizer\n" +
           "• Vegetative growth: Nitrogen boost\n" +
           "• Flowering: Reduce nitrogen\n\n" +
           "💡 Ask: 'tomato fertilization' for crop-specific advice!";
  }

  if (msg === 'seeds' || msg === 'seed' || msg === 'planting') {
    return "**Seed & Planting Guide:**\n\n" +
           "🌱 **Starting Seeds:**\n" +
           "• Use seed starting mix (sterile)\n" +
           "• Plant depth: 2-3x seed diameter\n" +
           "• Keep moist but not waterlogged\n" +
           "• Warmth speeds germination\n\n" +
           "📅 **When to Start:**\n" +
           "• Indoors: 6-8 weeks before last frost\n" +
           "• Direct sow: After last frost date\n" +
           "• Cool season crops: 4-6 weeks early\n\n" +
           "💡 **Seed Quality:**\n" +
           "• Buy certified disease-free seeds\n" +
           "• Check germination date\n" +
           "• Store cool & dry\n" +
           "• Test old seeds before planting\n\n" +
           "🌾 **Transplanting:**\n" +
           "• Harden off seedlings (1 week)\n" +
           "• Plant after last frost\n" +
           "• Water immediately after planting\n" +
           "• Provide shade first few days\n\n" +
           "Ask: 'when to plant tomatoes?' for specific crops!";
  }
    // Disease Queries
    else if (msg.includes('disease')) {
      return `**🦠 Common Diseases Affecting ${crop.toUpperCase()}:**\n\n` +
             info.commonDiseases.map(d => `• ${d}`).join('\n') +
             `\n\n💊 Ask like “How to treat ${info.commonDiseases[0]} in ${crop}?” for a detailed solution plan.`;
    }

    // General Crop Info
    else {
      return `**🌿 ${crop.toUpperCase()} INFORMATION SNAPSHOT:**\n\n` +
             `📖 ${info.info}\n\n` +
             `🌾 **Ideal Climate:** ${info.climate || 'Warm and sunny environment'}\n` +
             `🌱 **Soil Preference:** ${info.soil || 'Loamy and well-drained with good fertility'}\n` +
             `🕒 **Growth Time:** ${info.growthTime || 'Varies (typically 3–6 months)'}\n\n` +
             `⚠️ **Common Diseases:** ${info.commonDiseases.join(', ')}\n\n` +
             `💧 **Care Summary:** ${info.care}\n\n` +
             `🔍 Ask for “${crop} care guide” or “${crop} best soil & climate” to get full cultivation advice.`;
    }
  }
}
  // Symptom Query (Advanced Diagnostic Response)
if (msg.match(/symptom|spot|leaf|crop|yellow|brown|black|green|red|white|mold|patch|blotch|rot|curl|wilt/)) {
  return "**🧠 Symptom-Based Disease Identification Guide:**\n\n" +
         "🔍 **Visual Clues & Possible Causes:**\n" +
         "🟤 **Dark concentric rings on leaves** → *Early Blight* (fungal – Alternaria solani)\n" +
         "⚫ **Black spots with fuzzy white mold** → *Late Blight* (Phytophthora infestans)\n" +
         "⚪ **White powdery coating on leaf surface** → *Powdery Mildew* (Erysiphe spp.)\n" +
         "🟡 **Yellowish patches or gray mold under leaves** → *Leaf Mold* (Fulvia fulva)\n" +
         "🔴 **Small dark lesions with yellow halos** → *Bacterial Spot* (Xanthomonas spp.)\n" +
         "🟣 **Wilting with blackened stems or roots** → *Fusarium or Verticillium Wilt*\n" +
         "🟢 **Mosaic or curling leaves** → *Viral Infection* (e.g., TMV or TYLCV)\n\n" +
         "💡 **Next Steps:**\n" +
         "• Mention the **crop name** (e.g., 'tomato' or 'potato') for precise disease prediction.\n" +
         "• Upload or analyze an image using our **AI image detection system** for confirmation.\n" +
         "• Once identified, I can provide the **exact treatment plan** — including organic, biological, and chemical control options.\n\n" +
         "🌱 *Note:* Environmental factors like humidity, temperature, and soil moisture strongly influence symptom appearance. Try to observe patterns before treatment.";
}
  
  // Treatment / Cure Queries (Enhanced Professional Response)
if (msg.match(/treat|cure|control|remedy|solution|fix|manage/)) {
  return "**🩺 Advanced Crop Disease Management & Recovery Guide:**\n\n" +
         "🌿 **1. Immediate Actions (First Response):**\n" +
         "• **Isolate** infected plants to contain spread immediately.\n" +
         "• **Prune & destroy** affected plant parts — sanitize tools with alcohol or bleach.\n" +
         "• Stop **overhead watering**; keep foliage dry to reduce fungal activity.\n" +
         "• Apply a mild **fungicidal spray** within 24 hours if symptoms are active.\n\n" +
         "💚 **2. Organic & Eco-Friendly Treatments:**\n" +
         "• **Neem Oil (Azadirachtin 300–1500 ppm)** – Multi-action insecticidal and antifungal control.\n" +
         "• **Trichoderma viride / Pseudomonas fluorescens** – Biological control for soil and root pathogens.\n" +
         "• **Copper Hydroxide or Bordeaux Mix (1%)** – Effective against bacterial & fungal leaf spots.\n" +
         "• **Baking Soda + Liquid Soap (1 tsp/litre)** – Alters leaf pH, preventing mildew formation.\n" +
         "• **Panchagavya / Jeevamrutha** – Improves resistance and strengthens root microbiota.\n\n" +
         "🧪 **3. Chemical Control (For Severe or Widespread Infection):**\n" +
         "⚠️ Use only when organic methods fail, and always follow local agricultural guidelines.\n" +
         "• **Fungal Diseases:** Mancozeb (0.25%), Carbendazim (0.1%), or Propiconazole (0.1%).\n" +
         "• **Bacterial Diseases:** Streptocycline (200 ppm) or Copper Oxychloride (0.3%).\n" +
         "• **Viral Infections:** No direct cure — manage vectors like aphids, thrips & whiteflies.\n" +
         "• **Compatibility Tip:** Avoid mixing copper-based fungicides with oils or sulfur sprays.\n\n" +
         "🌾 **4. Integrated Disease Management (IDM):**\n" +
         "• Rotate crops and avoid monocropping to break pathogen cycles.\n" +
         "• Maintain balanced **NPK** ratios and micronutrient supply.\n" +
         "• Use certified, treated seeds to prevent seed-borne infections.\n" +
         "• Solarize or treat soil with Trichoderma before planting.\n" +
         "• Promote beneficial insects and microbial life — reduce chemical dependency.\n\n" +
         "🧭 **Pro Tip:** For best results, specify like *'Treatment for bacterial leaf blight in paddy'* or *'How to control wilt in tomato?'* — I’ll return an exact plan with suitable pesticides, cost range, and dosage.\n\n" +
         "🌱 *Smart farming starts with prevention, but recovery begins with precision — diagnose early, act wisely, and restore naturally!*";
}
  
  // Organic / Natural Remedies (Advanced Response)
if (msg.match(/organic|natural|home remedy|neem|eco|biocontrol/)) {
  return "**🍃 Advanced Organic & Natural Disease Management:**\n\n" +
         "🌿 **1. Biocontrol Agents:**\n" +
         "• *Trichoderma harzianum* – Suppresses soil-borne fungi like Fusarium & Rhizoctonia.\n" +
         "• *Pseudomonas fluorescens* – Inhibits bacterial pathogens and boosts root immunity.\n" +
         "• *Bacillus subtilis* – Produces natural antibiotics that protect leaves and roots.\n\n" +
         "🪴 **2. Organic Formulations:**\n" +
         "• **Neem Oil (Azadirachtin)** – Effective against aphids, whiteflies & fungal spores.\n" +
         "• **Copper Hydroxide or Bordeaux Mixture** – Broad-spectrum organic fungicide.\n" +
         "• **Baking Soda + Soap Solution (1 tsp/litre)** – Controls powdery mildew naturally.\n" +
         "• **Garlic + Chili Extract Spray** – Acts as a repellant for sucking pests.\n" +
         "• **Buttermilk or Cow Urine Ferments (Jeevamrutha/Panchagavya)** – Boosts microbial diversity.\n\n" +
         "🌾 **3. Cultural & Preventive Practices:**\n" +
         "• Maintain field hygiene and remove infected debris promptly.\n" +
         "• Use **mulching** to regulate moisture and suppress disease-causing spores.\n" +
         "• Practice **companion planting** – e.g., basil or marigold near tomatoes to deter pests.\n" +
         "• Enhance soil health through compost and green manures.\n\n" +
         "🧬 **4. Eco-Integrated Tips:**\n" +
         "• Rotate organic sprays weekly to avoid pest resistance.\n" +
         "• Apply treatments during early morning or evening to protect beneficial insects.\n" +
         "• Always test sprays on a few leaves before full application.\n\n" +
         "🌱 *Sustainable farming begins with nature’s own chemistry — gentle, effective, and regenerative!*";
}
  
  // Prevention (Advanced Response)
if (msg.match(/prevent|avoid|stop|protection|precaution/)) {
  return "**🛡️ Advanced Disease Prevention Strategies:**\n\n" +
         "🌿 **1. Pre-Planting Measures:**\n" +
         "• Use certified, disease-free seeds or seedlings.\n" +
         "• Treat seeds with bio-fungicides (e.g., *Trichoderma harzianum* or *Pseudomonas fluorescens*).\n" +
         "• Choose disease-resistant crop varieties adapted to local conditions.\n\n" +
         "💧 **2. Field Management:**\n" +
         "• Maintain **optimum spacing** to improve airflow and reduce humidity.\n" +
         "• Implement **drip irrigation** to minimize leaf wetness and fungal growth.\n" +
         "• Practice **crop rotation** with non-host crops every 2–3 seasons.\n" +
         "• Apply **organic compost** to enhance microbial activity and soil immunity.\n\n" +
         "🧰 **3. Sanitation & Hygiene:**\n" +
         "• Disinfect garden tools and equipment regularly.\n" +
         "• Remove and destroy infected plant debris immediately.\n" +
         "• Keep the field weed-free to eliminate alternate hosts.\n\n" +
         "🐞 **4. Pest & Vector Control:**\n" +
         "• Use neem-based sprays or biological predators to manage insect vectors.\n" +
         "• Avoid overuse of nitrogen fertilizers which attract sap-sucking pests.\n\n" +
         "🌾 **5. Regular Monitoring:**\n" +
         "• Use **IoT sensors or mobile apps** to monitor soil moisture and leaf temperature.\n" +
         "• Conduct **weekly scouting** for early detection of symptoms.\n\n" +
         "🧬 **Pro Tip:** Integrate *Integrated Disease Management (IDM)* – combining biological, cultural, and chemical methods for long-term protection.\n\n" +
         "🪴 Remember, prevention isn’t just about avoiding disease — it’s about building plant resilience! 🌱";
}
  
  // Fertilizer / Nutrition
if (msg.match(/fertilizer|nutrition|nutrient|npk|feed|manure/)) {
  return (
    "🌿 **Advanced Crop Nutrition Guide**\n\n" +
    "🌾 **Primary Nutrients (Macronutrients):**\n" +
    "• **Nitrogen (N):** Promotes lush green leaf growth and photosynthesis.\n" +
    "• **Phosphorus (P):** Supports strong root formation and early growth.\n" +
    "• **Potassium (K):** Increases resistance to drought and diseases.\n\n" +
    "🌱 **Secondary Nutrients & Micronutrients:**\n" +
    "• **Calcium (Ca):** Strengthens plant cell walls.\n" +
    "• **Magnesium (Mg):** Essential for chlorophyll formation.\n" +
    "• **Sulphur (S):** Improves protein and oil synthesis.\n" +
    "• **Iron (Fe), Zinc (Zn), Manganese (Mn):** Small but crucial for growth balance.\n\n" +
    "🧪 **Soil-Specific Advice:**\n" +
    "• Clay soil → Use light NPK 15-15-15 + gypsum to improve aeration.\n" +
    "• Sandy soil → Add organic compost and drip irrigation to retain nutrients.\n" +
    "• Loamy soil → Ideal for balanced fertilizer; NPK 10-10-10 works best.\n\n" +
    "💧 **Fertilizer Schedule (General):**\n" +
    "• **Before planting:** Apply compost or farmyard manure (2–3 tons per acre)\n" +
    "• **Mid-growth:** Apply urea or DAP for nitrogen boost\n" +
    "• **Pre-flowering stage:** Add potash (MOP) for fruit/seed development\n\n" +
    "🌻 **Organic Alternatives:**\n" +
    "• Vermicompost or cow dung → ₹5–10/kg\n" +
    "• Neem cake → Controls soil pests & adds nutrients\n" +
    "• Jeevamrutha / Panchagavya → Boosts soil microbes naturally\n\n" +
    "💰 **Chemical Fertilizer Cost Range:** ₹25–₹50 per kg (varies by brand & nutrient mix)\n\n" +
    "🧭 *Tip:* For precision farming, get a **soil test** before fertilizer use — pH 6.0–7.5 is ideal for most crops.\n\n" +
    "Would you like me to show a **crop-wise fertilizer plan** (e.g., for tomato or rice)?"
  );
}
  
  // Goodbye
if (msg.match(/bye|goodbye|thank|thanks|see you|no|take care/)) {
  return (
    "🌾 You're most welcome, farmer friend! 🌱\n\n" +
    "Before you go — remember:\n" +
    "• Healthy soil = Healthy crops 🌍\n" +
    "• Early detection saves 60% yield loss ⚕️\n" +
    "• Rotate your crops & rest your land once a year 🔄\n\n" +
    "📸 Don’t forget — you can upload a leaf image anytime for instant disease analysis.\n\n" +
    "💬 I'll be right here whenever you need farming guidance, pest control tips, or region-wise crop suggestions.\n\n" +
    "👋 Take care, and may your next harvest be abundant!"
  );
}

  
  // Default response
  return (
  "🤖 I couldn’t find a direct match for your question, but here’s what I can do right now:\n\n" +
  "🌱 **Crop Intelligence:** Instantly provide climate, soil type, fertilizer plan, and growth duration for 13+ major crops.\n" +
  "🦠 **Disease Detection:** Identify and explain over 38+ crop diseases with treatment and prevention measures.\n" +
  "💊 **Pesticide Insights:** Get verified pesticide recommendations with approximate cost and safe usage guidelines.\n" +
  "📍 **Smart Suggestions:** I can tell you the *best crops for your location* and *suitable soil type* using region-wise data.\n" +
  "📸 **AI Diagnosis:** Upload an image to analyze visible leaf diseases and get probable causes instantly.\n\n" +
  "💬 **Try examples like:**\n" +
  "• 'Best crop to grow in Tamil Nadu with red soil'\n" +
  "• 'How many months does potato take to grow?'\n" +
  "• 'Pesticide cost for tomato blight'\n" +
  "• 'How to treat grape black rot?'\n\n" +
  "⚡ *Tip:* Include the crop name or disease for precise AI responses — or type **'help'** for full command options."
);
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const chatbot = document.getElementById('chatbot-widget');
  const chatToggle = document.getElementById('chat-toggle');
  const chatClose = document.getElementById('chat-close');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');

  // Toggle chatbot
  chatToggle.addEventListener('click', function() {
    chatbot.style.display = 'flex';
    chatToggle.style.display = 'none';

    // Welcome message on first open
    if (chatMessages.children.length === 0) {
      addMessage("🌱 Hello! I'm your Crop Disease Assistant. I can help with disease identification, crop care tips, and treatment advice. How can I assist you today?", 'bot');
    }
  });

  // Close chatbot
  chatClose.addEventListener('click', function() {
    chatbot.style.display = 'none';
    chatToggle.style.display = 'flex';
  });

  // Send message on button click
  chatSend.addEventListener('click', sendMessage);

  // Send message on Enter key
  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Simulate bot response delay for natural feel
    setTimeout(function() {
      hideTypingIndicator();
      const response = getChatbotResponse(message);
      addMessage(response, 'bot');
    }, 800 + Math.random() * 400); // Random delay for realism
  }
  
  function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}-message`;

  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';

  // Convert markdown and emojis for better readability
  contentDiv.innerHTML = formatMessage(text);

  // Append and scroll
  messageDiv.appendChild(contentDiv);
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Optional: subtle animation
  messageDiv.style.opacity = 0;
  setTimeout(() => {
    messageDiv.style.transition = 'opacity 0.3s';
    messageDiv.style.opacity = 1;
  }, 50);
}

function formatMessage(text) {
  // Bold (**text**) -> <strong>
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Italic (*text*) -> <em>
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Line breaks
  text = text.replace(/\n/g, '<br>');

  // Bullets (•) with proper HTML entity
  text = text.replace(/• /g, '&bull; ');

  // Optional: emoji conversion (text like :smile: -> 😄)
  const emojiMap = {
    ':smile:': '😄',
    ':plant:': '🌱',
    ':warning:': '⚠️',
    ':check:': '✅',
    ':pill:': '💊',
    ':seedling:': '🌿'
  };
  Object.keys(emojiMap).forEach(code => {
    text = text.replaceAll(code, emojiMap[code]);
  });

  return text;
}

function showTypingIndicator() {
  // Only one typing indicator at a time
  if (document.getElementById('typing-indicator')) return;

  const indicator = document.createElement('div');
  indicator.className = 'chat-message bot-message typing-indicator';
  indicator.id = 'typing-indicator';
  indicator.innerHTML = `
    <div class="message-content typing-dots">
      <span></span><span></span><span></span>
    </div>
  `;

  chatMessages.appendChild(indicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Animate dots
  const dots = indicator.querySelectorAll('span');
  let i = 0;
  const interval = setInterval(() => {
    dots.forEach((dot, idx) => dot.style.opacity = (idx === i % 3) ? 1 : 0.3);
    i++;
  }, 400);
  indicator.dataset.interval = interval;
}

function hideTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) {
    clearInterval(indicator.dataset.interval);
    indicator.remove();
  }
}
});
