// Central data for all 17 premium category pages.
// Every category has unique copy, imagery, styles, materials, features and FAQs.

export type CategoryStyle = { title: string; description: string; image: string };
export type CategoryFeature = { title: string; description: string };
export type CategoryFAQ = { q: string; a: string };

export type CategoryContent = {
  slug: string;
  eyebrow: string;
  title: string;
  headline: string;
  heroSubtitle: string;
  heroImage: string;
  // Intro
  introEyebrow: string;
  introHeading: string;
  introParagraphs: string[];
  introKeyBenefit: string;
  introImage: string;
  // Design options
  stylesHeading: string;
  stylesSubtitle: string;
  styles: CategoryStyle[];
  // Materials
  materialsHeading: string;
  materials: string[];
  // Features
  featuresHeading: string;
  features: CategoryFeature[];
  // Gallery
  gallery: string[];
  // FAQs
  faqs: CategoryFAQ[];
  // SEO
  metaTitle: string;
  metaDescription: string;
};

// Helper: build an Unsplash image URL. Uses well-known photo IDs of real
// editorial interior photography — no AI-generated imagery.
const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const PROCESS_TAG = "process";
void PROCESS_TAG;

/* ------------------------------------------------------------------ */
/*  KITCHENS                                                          */
/* ------------------------------------------------------------------ */

const modularKitchen: CategoryContent = {
  slug: "modular-kitchen",
  eyebrow: "Kitchens",
  title: "Modular Kitchen",
  headline: "Intelligent Kitchens. Designed Around You.",
  heroSubtitle:
    "Transform everyday cooking into a refined experience with custom modular kitchens designed around your space, lifestyle and storage needs.",
  heroImage: img("1600585154340-be6161a56a0c"),
  introEyebrow: "Precision-planned kitchens",
  introHeading: "Modular kitchens engineered for how you actually cook.",
  introParagraphs: [
    "Every Wood Lab modular kitchen starts with a detailed study of your space, cooking habits and daily workflow. We plan work zones, appliance positions and traffic flow so the kitchen truly works — not just looks good in photos.",
    "Cabinets are fabricated in-workshop from high-density boards with imported soft-close hinges and drawer runners, then finished in your choice of matte, high-gloss, acrylic or PU. Countertops are cut from premium quartz, marble or granite for durability and character.",
    "From tall pantry pull-outs and magic corners to cutlery organisers and integrated waste bins, every module is chosen to eliminate wasted space and turn the kitchen into a room you love spending time in.",
  ],
  introKeyBenefit:
    "One team designs and executes the entire kitchen — cabinetry, worktops, lighting, hardware and appliance integration.",
  introImage: img("1600566753051-6057f4d0b8b6"),
  stylesHeading: "Modular Kitchen Layouts",
  stylesSubtitle:
    "Every layout below can be customised in size, finish and internal organisation to suit your home.",
  styles: [
    { title: "L-Shaped Kitchens", description: "Efficient two-wall layout that maximises corner storage and workflow.", image: img("1556909114-f6e7ad7d3136") },
    { title: "U-Shaped Kitchens", description: "Three-wall layout offering maximum counter space and dedicated zones.", image: img("1600607687939-ce8a6c25118c") },
    { title: "Island Kitchens", description: "A central island for prep, seating and a striking architectural focal point.", image: img("1556909172-54557c7e4fb7") },
    { title: "Parallel Kitchens", description: "Two facing runs for a highly efficient cook-and-clean workflow.", image: img("1556912167-f556f1f39fdf") },
    { title: "Straight Kitchens", description: "Single-wall layouts perfect for apartments and open-plan living rooms.", image: img("1600585154526-990dced4db0d") },
    { title: "Peninsula Kitchens", description: "An island-style extension attached to a wall for space-tight homes.", image: img("1556909195-4e5d12d0d3d0") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["MDF Boards", "HDF Boards", "High-Pressure Laminates", "Acrylic Fronts", "PU High Gloss", "Matte PU", "Natural Veneer", "Solid Wood Accents", "Quartz Countertops", "Marble & Granite", "Blum / Hettich Hardware", "Integrated LED Lighting"],
  featuresHeading: "Designed in Every Detail",
  features: [
    { title: "Custom Measurements", description: "Every cabinet cut to your exact wall, floor and appliance dimensions." },
    { title: "Smart Storage", description: "Tall pull-outs, magic corners, cutlery inserts and integrated waste solutions." },
    { title: "Premium Hardware", description: "Imported soft-close hinges and full-extension drawer runners as standard." },
    { title: "Integrated Appliances", description: "Ovens, hobs, hoods, dishwashers and refrigeration built seamlessly into the run." },
    { title: "Layered Lighting", description: "Under-cabinet task lighting, in-drawer LEDs and accent lighting for shelves." },
    { title: "Turnkey Execution", description: "Design, fabrication, installation and finishing handled by one accountable team." },
  ],
  gallery: [
    img("1556911220-bff31c812dba"), img("1600566752355-35792bedcfea"), img("1600585154063-8b5d55f5f0c1"),
    img("1600607686527-6fb886090705"), img("1556909212-d5b604d0c90d"), img("1560448204-603b3fc33ddc"),
    img("1600585154206-3d3dea7c1f8f"), img("1600210492493-0946911123ea"),
  ],
  faqs: [
    { q: "What exactly is a modular kitchen?", a: "A modular kitchen is built from pre-planned, factory-finished cabinet modules — base units, wall units, tall units and accessories — assembled on site into a fully custom layout." },
    { q: "Can you design a kitchen around my available space?", a: "Yes. We start with an on-site measurement and a detailed conversation about how you cook, then design a layout that fits your exact floor plan, plumbing and appliances." },
    { q: "Which materials do you offer?", a: "MDF and HDF cores with laminate, acrylic, PU (matte or gloss) or natural veneer fronts. Countertops in quartz, marble, granite or engineered stone." },
    { q: "Do you handle both design and execution?", a: "Yes — Wood Lab is an in-house design + execution studio. One team owns the project from first sketch to final handover." },
    { q: "Can you renovate my existing kitchen?", a: "Absolutely. We can strip out and replace an existing kitchen, or upgrade shutters, hardware and countertops while retaining sound existing carcasses." },
    { q: "How long does a full kitchen take?", a: "A typical modular kitchen is delivered in 3–5 weeks from design freeze, depending on finish and hardware lead times." },
    { q: "Do you serve Islamabad and Rawalpindi?", a: "Yes. Our workshop is in Islamabad and we regularly execute projects across Islamabad, Rawalpindi and surrounding areas." },
  ],
  metaTitle: "Modular Kitchen Design in Islamabad | Wood Lab",
  metaDescription: "Premium custom modular kitchens in Islamabad — L, U, island and parallel layouts with soft-close hardware, quartz tops and full execution by Wood Lab.",
};

const classicKitchen: CategoryContent = {
  slug: "classic-kitchen",
  eyebrow: "Kitchens",
  title: "Classic Kitchen",
  headline: "Timeless Kitchens. Crafted to Last.",
  heroSubtitle:
    "Detailed cabinet profiles, hand-finished mouldings and warm timeless finishes for kitchens that feel like they belong.",
  heroImage: img("1600566753190-17f0baa2a6c3"),
  introEyebrow: "Heritage-inspired craftsmanship",
  introHeading: "A classic kitchen is a room, not just a workspace.",
  introParagraphs: [
    "Our classic kitchens draw on traditional cabinet-making — shaker rails, raised-panel doors, applied mouldings and detailed cornices — executed with the tolerances of modern joinery.",
    "We work primarily in solid wood, engineered timber and hand-lacquered MDF, finishing in warm ivories, deep greens, muted greys and rich walnut stains. Every panel is sanded, sealed and finished by hand.",
    "The result is a kitchen that reads instantly as considered and permanent — a space that welcomes family, hosts guests and gets more beautiful with age.",
  ],
  introKeyBenefit:
    "Full custom joinery — no off-the-shelf carcasses. Every profile, moulding and colour is specified to your home.",
  introImage: img("1600585154526-990dced4db0d"),
  stylesHeading: "Classic Kitchen Styles",
  stylesSubtitle: "Choose a direction — we tailor every profile and finish from there.",
  styles: [
    { title: "Shaker Style", description: "Clean rails and recessed panels — the definitive classic silhouette.", image: img("1556909114-f6e7ad7d3136") },
    { title: "Raised Panel", description: "Sculpted panel fronts with detailed profiles for a formal look.", image: img("1600566753051-6057f4d0b8b6") },
    { title: "Traditional Wood", description: "Warm stained timber with visible grain and classic hardware.", image: img("1556909172-54557c7e4fb7") },
    { title: "Luxury White Classic", description: "Ivory and cream palettes with brass or antique hardware.", image: img("1600607687939-ce8a6c25118c") },
    { title: "Decorative Moulding", description: "Cornices, plinths and applied trim for architectural depth.", image: img("1556912167-f556f1f39fdf") },
    { title: "Heritage Inspired", description: "Freestanding-style dressers, plate racks and glazed uppers.", image: img("1600585154340-be6161a56a0c") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Solid Wood", "Engineered Timber", "MDF Cores", "Hand-Applied PU Lacquer", "Natural Veneer", "Marble Countertops", "Granite Countertops", "Antique Brass Hardware", "Ceramic Handles", "Glass Cabinet Inserts", "In-cabinet Lighting"],
  featuresHeading: "Crafted in Every Detail",
  features: [
    { title: "Custom Profiles", description: "Rails, panels and mouldings profiled to your chosen design language." },
    { title: "Hand-Applied Finish", description: "Multi-coat lacquering and sanding for a truly furniture-grade surface." },
    { title: "Traditional Joinery", description: "Dowels, dominos and glued-and-clamped construction built to last." },
    { title: "Feature Cabinetry", description: "Plate racks, glazed uppers, curved corners and hutch-style dressers." },
    { title: "Warm Layered Lighting", description: "Cove, in-cabinet and pendant lighting to enrich the classic atmosphere." },
    { title: "Full Execution", description: "Design, fabrication, painting, installation and finishing under one roof." },
  ],
  gallery: [
    img("1556911220-bff31c812dba"), img("1600566752355-35792bedcfea"), img("1600585154063-8b5d55f5f0c1"),
    img("1600607686527-6fb886090705"), img("1556909212-d5b604d0c90d"), img("1560448204-603b3fc33ddc"),
    img("1600585154206-3d3dea7c1f8f"), img("1600210492493-0946911123ea"),
  ],
  faqs: [
    { q: "What defines a classic kitchen?", a: "Detailed cabinet profiles — shaker or raised panels — with applied mouldings, warm finishes and traditional hardware. It's a look that ages gracefully." },
    { q: "Are classic kitchens practical for daily use?", a: "Yes. We build the interior with the same modern hardware as our modular kitchens — soft-close hinges, full-extension drawers and smart storage." },
    { q: "Can I get a classic kitchen in a modern colour?", a: "Absolutely. Classic profiles work beautifully in muted greens, blues, greys, ivories and even matte black." },
    { q: "Do you work in solid wood?", a: "Yes — solid wood door frames and panels are available, as well as painted MDF and engineered timber for stability." },
    { q: "How long does a classic kitchen take?", a: "Because of hand-finishing, plan on 5–7 weeks from design freeze depending on complexity." },
    { q: "Do you provide design and execution?", a: "Yes — one team handles the full journey from concept to installation." },
    { q: "Do you cover Islamabad and Rawalpindi?", a: "Yes, and select projects further afield. Contact us with your location." },
  ],
  metaTitle: "Classic Kitchen Design in Islamabad | Wood Lab",
  metaDescription: "Timeless classic kitchens in Islamabad — shaker, raised-panel and heritage styles hand-crafted by Wood Lab with premium finishes and full execution.",
};

const modernKitchen: CategoryContent = {
  slug: "modern-kitchen",
  eyebrow: "Kitchens",
  title: "Modern Kitchen",
  headline: "Minimal. Handleless. Effortless.",
  heroSubtitle:
    "Clean lines, integrated appliances and refined surfaces for kitchens that feel calm, contemporary and quietly luxurious.",
  heroImage: img("1556909114-f6e7ad7d3136"),
  introEyebrow: "Contemporary kitchen design",
  introHeading: "A modern kitchen is defined by what you don't see.",
  introParagraphs: [
    "Modern kitchens are as much about restraint as they are about design. Handleless fronts, flush appliances and continuous surfaces create an uncluttered rhythm that lets materials speak for themselves.",
    "We build ours in matte lacquer, fenix, high-gloss acrylic and natural veneer, finished with push-to-open or J-profile openings. Worktops flow from stone to stainless steel to engineered quartz depending on the look.",
    "Behind the calm surface is a highly organised interior — full-extension drawers, inserts, integrated lighting and precisely planned appliance zones — engineered for everyday performance.",
  ],
  introKeyBenefit:
    "Handleless, seamless and integrated — a kitchen that reads as architecture, not furniture.",
  introImage: img("1600566752355-35792bedcfea"),
  stylesHeading: "Modern Kitchen Styles",
  stylesSubtitle: "Six directions we love — combine and adapt to suit your space.",
  styles: [
    { title: "Handleless Kitchens", description: "Push-to-open or J-profile fronts for an uninterrupted surface.", image: img("1600585154340-be6161a56a0c") },
    { title: "Matte Finish Kitchens", description: "Soft, non-reflective surfaces that hide fingerprints beautifully.", image: img("1556912167-f556f1f39fdf") },
    { title: "High Gloss Kitchens", description: "Reflective acrylic fronts that bounce light and expand the room.", image: img("1600607687939-ce8a6c25118c") },
    { title: "Minimal Kitchens", description: "Reduced material palette and hidden storage for a serene look.", image: img("1556909172-54557c7e4fb7") },
    { title: "Integrated Kitchens", description: "Appliances hidden behind matching cabinet fronts.", image: img("1600585154526-990dced4db0d") },
    { title: "Contemporary Island", description: "A sculptural island as the centrepiece of open-plan living.", image: img("1600566753051-6057f4d0b8b6") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Matte PU Lacquer", "High-Gloss Acrylic", "Fenix NTM", "Natural Veneer", "MDF & HDF Cores", "Engineered Quartz", "Sintered Stone", "Stainless Steel", "Blum / Hettich Hardware", "Integrated LED Lighting", "Push-to-Open Mechanisms"],
  featuresHeading: "Designed for Modern Living",
  features: [
    { title: "Handleless Design", description: "Push-open and J-profile systems for continuous, minimalist fronts." },
    { title: "Integrated Appliances", description: "Ovens, fridges and dishwashers concealed behind matching cabinetry." },
    { title: "Seamless Countertops", description: "Continuous stone or quartz worktops with integrated sinks." },
    { title: "Concealed Storage", description: "Tall pantries, corner solutions and internal drawers keep counters clear." },
    { title: "Ambient Lighting", description: "Under-cabinet, cove and toe-kick lighting for a soft evening glow." },
    { title: "Turnkey Delivery", description: "Design, joinery, stone, appliances and installation coordinated by one team." },
  ],
  gallery: [
    img("1600566753190-17f0baa2a6c3"), img("1600585154063-8b5d55f5f0c1"), img("1560448204-603b3fc33ddc"),
    img("1556909212-d5b604d0c90d"), img("1556911220-bff31c812dba"), img("1600607686527-6fb886090705"),
    img("1556909195-4e5d12d0d3d0"), img("1600210492493-0946911123ea"),
  ],
  faqs: [
    { q: "What defines a modern kitchen?", a: "Handleless fronts, integrated appliances, continuous surfaces and a restrained material palette." },
    { q: "Are handleless kitchens practical?", a: "Yes — push-to-open and J-profile systems are engineered for daily use and open reliably for years." },
    { q: "Matte or gloss?", a: "Matte hides fingerprints and feels calm; gloss reflects light and makes small rooms feel larger. Both are available." },
    { q: "Can appliances really be hidden?", a: "Yes. Fridges, dishwashers and even ovens can sit behind matching cabinet fronts for a seamless look." },
    { q: "Which countertops suit modern kitchens best?", a: "Engineered quartz, sintered stone and stainless steel — all offer continuous surfaces with minimal jointing." },
    { q: "How long is production?", a: "3–5 weeks from design freeze depending on finish and appliance lead times." },
    { q: "Do you cover Islamabad and Rawalpindi?", a: "Yes — our workshop and design studio are based in Islamabad." },
  ],
  metaTitle: "Modern Kitchen Design in Islamabad | Wood Lab",
  metaDescription: "Handleless, minimal modern kitchens in Islamabad. Matte, gloss and integrated designs with quartz tops, built and installed by Wood Lab.",
};

/* ------------------------------------------------------------------ */
/*  WARDROBES                                                         */
/* ------------------------------------------------------------------ */

const classicWardrobe: CategoryContent = {
  slug: "classic-wardrobe",
  eyebrow: "Wardrobes",
  title: "Classic Wardrobe",
  headline: "Wardrobes with the weight of real furniture.",
  heroSubtitle:
    "Panelled fronts, detailed profiles and warm timber finishes for wardrobes that feel like heirloom pieces.",
  heroImage: img("1595526114035-0d45ed16cfbf"),
  introEyebrow: "Traditional joinery, everyday practicality",
  introHeading: "Panelled wardrobes crafted like fine furniture.",
  introParagraphs: [
    "Our classic wardrobes are built with the same detailing as fine cabinetry — framed doors with recessed or raised panels, applied mouldings, cornice tops and traditional hardware.",
    "Fronts are finished by hand in warm stains, ivories or muted colours, while the interior is fitted with soft-close drawers, adjustable shelves and specialised organisers for shirts, suits, ties and accessories.",
    "The result is a wardrobe that reads as a genuine furniture piece — not a laminated box — and continues to feel considered decades after installation.",
  ],
  introKeyBenefit:
    "Fully custom sizes, panels and profiles — designed to suit period homes and contemporary interiors alike.",
  introImage: img("1594026112284-02bb6f3352fe"),
  stylesHeading: "Classic Wardrobe Styles",
  stylesSubtitle: "Six directions we regularly execute for Wood Lab clients.",
  styles: [
    { title: "Shaker Panel", description: "Clean rails and recessed panels — the definitive classic wardrobe.", image: img("1595428774223-ef52624120d2") },
    { title: "Raised Panel", description: "Sculpted panels with rich profiles for a formal look.", image: img("1616627981429-c0be0f7f57ce") },
    { title: "Fluted Timber", description: "Vertical fluting for texture and warmth.", image: img("1595526114035-0d45ed16cfbf") },
    { title: "Warm Stained Wood", description: "Rich walnut, teak or oak with visible grain.", image: img("1594026112284-02bb6f3352fe") },
    { title: "Ivory Classic", description: "Cream and ivory palettes with brass hardware.", image: img("1595428774223-ef52624120d2") },
    { title: "Heritage Detailed", description: "Applied mouldings, cornices and glazed inserts.", image: img("1616627981429-c0be0f7f57ce") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Solid Wood Frames", "Engineered Timber", "MDF Cores", "PU Lacquer", "Natural Veneer", "Glass Inserts", "Antique Brass Hardware", "Soft-Close Hinges", "Full-Extension Drawer Runners", "Internal LED Lighting"],
  featuresHeading: "Detailed Everywhere You Look",
  features: [
    { title: "Framed Panelled Doors", description: "Traditional stiles and rails with recessed or raised panels." },
    { title: "Custom Profiles", description: "Mouldings, cornices and plinths chosen to suit your interior." },
    { title: "Tailored Interior", description: "Hanging, shelving and drawers laid out around your wardrobe collection." },
    { title: "Soft-Close Hardware", description: "Premium hinges and drawer runners for silent everyday use." },
    { title: "Integrated Lighting", description: "Motion-activated LEDs illuminate the interior on opening." },
    { title: "Furniture-Grade Finish", description: "Multi-coat hand-applied lacquering for a truly premium surface." },
  ],
  gallery: [
    img("1595526114035-0d45ed16cfbf"), img("1594026112284-02bb6f3352fe"), img("1595428774223-ef52624120d2"),
    img("1616627981429-c0be0f7f57ce"), img("1616627981566-2c9ecfff28b0"), img("1616486338812-3dadae4b4ace"),
    img("1616627981459-6bb7a1cfc19d"), img("1616486701797-0f33f61038df"),
  ],
  faqs: [
    { q: "What makes a classic wardrobe different?", a: "It's built as furniture — framed doors, real profiles, applied mouldings and hand-finishing — rather than a plain laminated box." },
    { q: "Can I mix classic doors with a modern interior?", a: "Yes. Many clients pair classic panelled fronts with a fully modern soft-close interior — the best of both worlds." },
    { q: "Which materials do you offer?", a: "Solid wood, engineered timber and MDF cores finished in hand-applied PU lacquer, natural veneer or painted colours." },
    { q: "Are internal LEDs included?", a: "Motion-sensor LED lighting can be included on request in shelves, hanging areas and drawers." },
    { q: "Can you match my existing bedroom furniture?", a: "Yes — we colour-match to existing pieces and can replicate profiles for a coherent room." },
    { q: "How long does a classic wardrobe take?", a: "4–6 weeks from design freeze depending on size and complexity of the finish." },
    { q: "Do you cover Islamabad and Rawalpindi?", a: "Yes, we install throughout Islamabad and Rawalpindi." },
  ],
  metaTitle: "Classic Wardrobe Design in Islamabad | Wood Lab",
  metaDescription: "Custom classic wardrobes in Islamabad — panelled doors, hand-applied finishes and premium interiors built by Wood Lab.",
};

const aluminiumWardrobe: CategoryContent = {
  slug: "aluminium-wardrobe",
  eyebrow: "Wardrobes",
  title: "Aluminium Wardrobe",
  headline: "Sleek profiles. Glass fronts. Zero clutter.",
  heroSubtitle:
    "Aluminium-framed wardrobes with tinted glass shutters, integrated lighting and boutique-grade internal organisation.",
  heroImage: img("1616627981429-c0be0f7f57ce"),
  introEyebrow: "Modern aluminium profile systems",
  introHeading: "A contemporary wardrobe engineered like a display case.",
  introParagraphs: [
    "Aluminium profile wardrobes are the modern answer to bedroom storage — slim metal frames, large panel shutters and precisely engineered sliding tracks that glide with barely a whisper.",
    "We build them with a choice of tinted, frosted, lacquered or ribbed glass panels, or laminate and veneer inserts, framed in matte black, champagne, brushed steel or bronze aluminium.",
    "Behind the shutters, the interior is planned around your wardrobe: hanging rails, drawer stacks, jewellery inserts, shoe pull-outs and integrated LEDs that switch on with movement.",
  ],
  introKeyBenefit:
    "A boutique-grade look with the practicality of soft-close sliding shutters and fully custom internals.",
  introImage: img("1595428774223-ef52624120d2"),
  stylesHeading: "Aluminium Wardrobe Styles",
  stylesSubtitle: "Choose the frame profile, panel infill and internal layout — we build it around your room.",
  styles: [
    { title: "Slim Frame Glass", description: "Minimal aluminium frames with tinted glass shutters.", image: img("1616627981429-c0be0f7f57ce") },
    { title: "Fluted Glass", description: "Ribbed glass panels for privacy with a modern texture.", image: img("1616627981459-6bb7a1cfc19d") },
    { title: "Matte Black Frame", description: "Architectural black profiles with lacquered glass inserts.", image: img("1595428774223-ef52624120d2") },
    { title: "Champagne / Bronze", description: "Warm metallic profiles that pair with luxury bedroom palettes.", image: img("1616486338812-3dadae4b4ace") },
    { title: "Mixed Panel Infill", description: "Combine glass, laminate, veneer or upholstered panels in one wardrobe.", image: img("1616486701797-0f33f61038df") },
    { title: "Full-Height Sliding", description: "Floor-to-ceiling shutters for a truly architectural statement.", image: img("1595526114035-0d45ed16cfbf") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Aluminium Profiles (matte black / champagne / bronze / brushed)", "Tinted Glass", "Frosted Glass", "Lacquered Glass", "Fluted Glass", "High-Pressure Laminate", "Veneer Inserts", "MDF Cores", "Soft-Close Sliding Tracks", "Motion-Activated LEDs"],
  featuresHeading: "Engineered for Modern Bedrooms",
  features: [
    { title: "Silent Sliding", description: "Premium top-hung tracks with soft-close both ways." },
    { title: "Slim Frame Profiles", description: "Minimal aluminium sightlines for maximum panel area." },
    { title: "Custom Internals", description: "Hanging, drawers, shoe racks and jewellery inserts to your spec." },
    { title: "Integrated LED Lighting", description: "Motion sensors switch lighting on and off as you open the wardrobe." },
    { title: "Space Efficient", description: "Sliding doors reclaim floor space next to the wardrobe." },
    { title: "Turnkey Installation", description: "Delivered, installed, aligned and levelled by our on-site team." },
  ],
  gallery: [
    img("1616627981429-c0be0f7f57ce"), img("1616627981459-6bb7a1cfc19d"), img("1595428774223-ef52624120d2"),
    img("1616486338812-3dadae4b4ace"), img("1616486701797-0f33f61038df"), img("1595526114035-0d45ed16cfbf"),
    img("1616627981566-2c9ecfff28b0"), img("1594026112284-02bb6f3352fe"),
  ],
  faqs: [
    { q: "What is an aluminium profile wardrobe?", a: "A wardrobe whose shutters are framed with slim aluminium profiles filled with glass, laminate or veneer panels — usually as sliding doors." },
    { q: "Are the glass panels safe?", a: "Yes — we use toughened or laminated safety glass throughout, framed on all four sides for full support." },
    { q: "Are the sliders smooth over time?", a: "We use premium top-hung tracks rated for tens of thousands of cycles, with soft-close both ways." },
    { q: "Can I customise the interior?", a: "Yes — hanging rails, drawer stacks, shoe pull-outs and jewellery inserts are all planned around your wardrobe." },
    { q: "Which frame colours are available?", a: "Matte black, champagne, bronze and brushed steel are our most requested finishes." },
    { q: "How long does production take?", a: "Typically 3–4 weeks depending on glass and profile lead times." },
    { q: "Do you install in Islamabad and Rawalpindi?", a: "Yes, throughout Islamabad and Rawalpindi." },
  ],
  metaTitle: "Aluminium Profile Wardrobes in Islamabad | Wood Lab",
  metaDescription: "Modern aluminium wardrobes with glass shutters, soft-close sliders and custom internals — designed and installed in Islamabad by Wood Lab.",
};

const walkInCloset: CategoryContent = {
  slug: "walk-in-closet",
  eyebrow: "Wardrobes",
  title: "Walk-in Closet",
  headline: "Your wardrobe, elevated to a private dressing room.",
  heroSubtitle:
    "Open storage, display shelves, dedicated shoe walls and layered lighting — a boutique dressing room designed around you.",
  heroImage: img("1594026112284-02bb6f3352fe"),
  introEyebrow: "Boutique-grade dressing rooms",
  introHeading: "A walk-in closet is a room designed around a ritual.",
  introParagraphs: [
    "A great walk-in isn't just more storage — it's a room engineered around how you dress. We map your existing wardrobe, footwear, accessories and jewellery, then plan zones and sightlines that make choosing an outfit effortless.",
    "Open hanging with warm interior LEDs, display shelves for handbags and shoes, glass-fronted drawers for jewellery, an island for folding and a full-height mirror sit inside a refined material palette of stained oak, brushed metals and stone.",
    "Every walk-in is scoped, designed, joinery-built and installed by Wood Lab — a single accountable team from concept to completion.",
  ],
  introKeyBenefit:
    "A private boutique in your own home — planned around your exact wardrobe and dressing routine.",
  introImage: img("1595526114035-0d45ed16cfbf"),
  stylesHeading: "Walk-in Closet Configurations",
  stylesSubtitle: "The right layout depends on your room dimensions and personal routine.",
  styles: [
    { title: "Walk-through", description: "Storage along two facing walls, ideal for narrower spaces.", image: img("1595428774223-ef52624120d2") },
    { title: "L-Shaped Walk-in", description: "Two connected walls of storage with room for a bench.", image: img("1616627981429-c0be0f7f57ce") },
    { title: "U-Shaped Walk-in", description: "Three walls of storage — maximum capacity with a central open zone.", image: img("1616486338812-3dadae4b4ace") },
    { title: "Island Dressing Room", description: "A central island for folding, jewellery and display.", image: img("1594026112284-02bb6f3352fe") },
    { title: "Boutique Display", description: "Open hanging with backlit shelving and glass drawers.", image: img("1595526114035-0d45ed16cfbf") },
    { title: "Compact Walk-in", description: "Small-space walk-ins that still feel like a private room.", image: img("1616627981566-2c9ecfff28b0") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Natural Veneer", "PU Lacquer", "Fluted Timber", "Stone Countertops", "Glass Fronts", "Brushed Metal Handles", "Soft-Close Hardware", "Integrated LED Lighting", "Upholstered Panels", "Full-Height Mirrors"],
  featuresHeading: "Designed Around You",
  features: [
    { title: "Open Hanging", description: "Long and short hanging tuned to your wardrobe mix." },
    { title: "Shoe Walls", description: "Dedicated inclined shelves or drawer units for your shoe collection." },
    { title: "Jewellery Drawers", description: "Felt-lined, glass-fronted drawers with subtle lighting." },
    { title: "Dressing Island", description: "Folding space, hidden drawers and display in one piece." },
    { title: "Layered Lighting", description: "Task, accent and ambient lighting for a boutique feel." },
    { title: "Fully Custom Layout", description: "Every measurement, module and finish tailored to your room." },
  ],
  gallery: [
    img("1594026112284-02bb6f3352fe"), img("1595526114035-0d45ed16cfbf"), img("1595428774223-ef52624120d2"),
    img("1616627981429-c0be0f7f57ce"), img("1616486338812-3dadae4b4ace"), img("1616486701797-0f33f61038df"),
    img("1616627981459-6bb7a1cfc19d"), img("1616627981566-2c9ecfff28b0"),
  ],
  faqs: [
    { q: "How much space does a walk-in closet need?", a: "As little as 6ft x 6ft can work as a compact walk-in. Larger rooms allow islands and dedicated zones for shoes and jewellery." },
    { q: "Open shelves or closed doors?", a: "Both — most walk-ins mix open hanging with closed drawers and glass-fronted display units to balance access and dust protection." },
    { q: "Can you include a dressing island?", a: "Yes — islands add folding surface, hidden storage and become a natural focal point." },
    { q: "How is lighting handled?", a: "We layer ambient ceiling light with in-cabinet LEDs, accent shelf lighting and often mirror lighting for a true dressing-room feel." },
    { q: "Can you convert a spare bedroom?", a: "Absolutely — spare bedrooms often make ideal walk-ins with minimal structural work." },
    { q: "How long does a walk-in project take?", a: "Typically 5–7 weeks from design freeze depending on complexity of finish." },
    { q: "Do you work across Islamabad?", a: "Yes, throughout Islamabad and Rawalpindi." },
  ],
  metaTitle: "Walk-in Closet Design Islamabad | Wood Lab",
  metaDescription: "Boutique walk-in closets designed and built in Islamabad — open hanging, shoe walls, dressing islands and layered lighting by Wood Lab.",
};

/* ------------------------------------------------------------------ */
/*  DOORS                                                             */
/* ------------------------------------------------------------------ */

const mainDoors: CategoryContent = {
  slug: "main-doors",
  eyebrow: "Doors",
  title: "Main Doors",
  headline: "The first impression of your home, made grand.",
  heroSubtitle:
    "Solid hardwood main doors with custom carving, premium security hardware and weather-sealed finishes.",
  heroImage: img("1558618666-fcd25c85cd64"),
  introEyebrow: "Grand entrances, built to last",
  introHeading: "A main door is architecture — plan it that way.",
  introParagraphs: [
    "Your front door is the single most seen element of your home. We build ours from selected solid hardwoods — teak, walnut, mahogany and oak — with traditional joinery and modern reinforcement for long-term stability.",
    "Panels, mouldings and grille work are drawn to complement your façade, whether it's a classical villa, a contemporary house or a heritage renovation. Finishes are hand-sanded and sealed for weather resistance and depth of grain.",
    "Every main door is fitted with high-security multi-point locking, precision-engineered hinges and optional smart access — the elegance is visible, the security isn't.",
  ],
  introKeyBenefit:
    "Full-custom design, from panel layout to hardware — no off-the-shelf doors, ever.",
  introImage: img("1600585152220-90363fe7e115"),
  stylesHeading: "Main Door Styles",
  stylesSubtitle: "A starting point — every door is drawn from scratch to suit your façade.",
  styles: [
    { title: "Solid Panel", description: "Bold panelled fronts in solid hardwood with rich stains.", image: img("1558618666-fcd25c85cd64") },
    { title: "Carved Traditional", description: "Hand-carved details for classical and heritage homes.", image: img("1600585152220-90363fe7e115") },
    { title: "Pivot Doors", description: "Oversized pivoting fronts for a dramatic modern entrance.", image: img("1509644851169-2acc08aa25b5") },
    { title: "Double Leaf", description: "Grand twin-leaf doors for wider entrances.", image: img("1558618666-fcd25c85cd64") },
    { title: "Glass & Wood", description: "Wood frames with sandblasted or leaded glass inserts.", image: img("1600585152220-90363fe7e115") },
    { title: "Contemporary Slab", description: "Flush hardwood slabs with concealed hardware.", image: img("1509644851169-2acc08aa25b5") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Solid Teak", "Solid Walnut", "Solid Mahogany", "Solid Oak", "Engineered Cores", "Natural Veneer", "Marine Ply", "Weather-Sealed PU Finish", "Multi-Point Locks", "Concealed Pivot Hinges", "Brass & Bronze Hardware"],
  featuresHeading: "A Door You Feel When You Touch It",
  features: [
    { title: "Solid Hardwood", description: "Selected timbers, kiln-dried and finished for stability." },
    { title: "Custom Carving", description: "Traditional carved details or contemporary grooved patterns." },
    { title: "High-Security Locks", description: "Multi-point locking with reinforced strike plates." },
    { title: "Weather-Sealed Finish", description: "PU top-coats designed for exterior sun and rain exposure." },
    { title: "Premium Hardware", description: "Concealed hinges, pivot systems and designer handle sets." },
    { title: "Site-Precise Install", description: "On-site fitting, sealing and finishing by our own team." },
  ],
  gallery: [
    img("1558618666-fcd25c85cd64"), img("1600585152220-90363fe7e115"), img("1509644851169-2acc08aa25b5"),
    img("1523575708161-ad0fc2a9b951"), img("1600585154340-be6161a56a0c"), img("1560448204-603b3fc33ddc"),
    img("1600607686527-6fb886090705"), img("1600566753051-6057f4d0b8b6"),
  ],
  faqs: [
    { q: "Which woods do you use for main doors?", a: "Primarily solid teak, walnut, mahogany and oak — chosen for stability, grain and long-term durability outdoors." },
    { q: "Can you match my existing façade?", a: "Yes — we draw every door from your elevation, matching proportions, panel layouts and material palette." },
    { q: "Are your doors weather-resistant?", a: "Yes. Kiln-dried timber is sealed with exterior-grade PU finishes, and we recommend a protective canopy where practical." },
    { q: "What kind of locks do you provide?", a: "High-security multi-point locking systems as standard, with smart-lock options available." },
    { q: "Can you do pivot or oversized doors?", a: "Yes — we build pivot doors up to 3m tall using engineered cores and premium pivot hinges." },
    { q: "How long does production take?", a: "5–8 weeks depending on carving, hardware and finish specification." },
    { q: "Do you install outside Islamabad?", a: "Yes — we install throughout Islamabad and Rawalpindi and take select projects further afield." },
  ],
  metaTitle: "Custom Main Doors in Islamabad | Wood Lab",
  metaDescription: "Solid hardwood main doors designed and built in Islamabad — panelled, carved and pivot doors with premium hardware and weather-sealed finishes.",
};

const bedBathroomDoors: CategoryContent = {
  slug: "bed-bathroom-doors",
  eyebrow: "Doors",
  title: "Bed & Bathroom Doors",
  headline: "Quiet, private, beautifully finished.",
  heroSubtitle:
    "Interior doors tuned for acoustic comfort, moisture resistance and refined everyday elegance.",
  heroImage: img("1600607687939-ce8a6c25118c"),
  introEyebrow: "Everyday interior doors",
  introHeading: "The doors you use most should be the ones you love most.",
  introParagraphs: [
    "Bedroom and bathroom doors get used dozens of times a day. We build ours with dimensionally stable engineered cores, sealed edges and moisture-resistant finishes so they stay flat, quiet and beautiful for years.",
    "Fronts can be finished in natural veneer, PU lacquer, hand-painted panels or lightly grooved profiles — matched exactly to your interior scheme, joinery and hardware palette.",
    "Silent soft-close hinges, magnetic latches and privacy locks come as standard, along with concealed hardware options for a truly seamless look.",
  ],
  introKeyBenefit:
    "Doors that read as architecture — flush with walls, colour-matched and acoustically comfortable.",
  introImage: img("1600585154206-3d3dea7c1f8f"),
  stylesHeading: "Interior Door Styles",
  stylesSubtitle: "Choose a language — we tailor every profile and finish to your project.",
  styles: [
    { title: "Flush Veneered", description: "Clean flush doors in natural veneer, edge-sealed and stable.", image: img("1600607687939-ce8a6c25118c") },
    { title: "Panelled Classic", description: "Framed panels with hand-applied finishes.", image: img("1600585152220-90363fe7e115") },
    { title: "Grooved Modern", description: "Subtle vertical or horizontal grooving for texture.", image: img("1600566753190-17f0baa2a6c3") },
    { title: "Full-Height Doors", description: "Floor-to-ceiling doors for architectural drama.", image: img("1509644851169-2acc08aa25b5") },
    { title: "Concealed Hinge", description: "Invisible hinges for a truly minimalist face.", image: img("1600566752355-35792bedcfea") },
    { title: "Bathroom Moisture-Safe", description: "Sealed cores and finishes designed for wet areas.", image: img("1600585154340-be6161a56a0c") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Engineered Stable Cores", "Natural Veneer", "Marine Ply (bathrooms)", "PU Lacquer", "Hand-Painted MDF", "Solid Wood Edges", "Concealed Hinges", "Soft-Close Hinges", "Magnetic Latches", "Privacy Locks"],
  featuresHeading: "Refined Where It Matters",
  features: [
    { title: "Acoustic Comfort", description: "Engineered cores dampen noise between rooms." },
    { title: "Moisture-Safe Finishes", description: "Sealed edges and PU top-coats for bathroom environments." },
    { title: "Silent Hinges", description: "Soft-close hinges eliminate slamming and rattling." },
    { title: "Custom Colours", description: "Hand-matched paint and stains to your palette." },
    { title: "Concealed Hardware", description: "Invisible hinges and magnetic latches for a clean face." },
    { title: "Precision Install", description: "On-site alignment and levelling by trained fitters." },
  ],
  gallery: [
    img("1600607687939-ce8a6c25118c"), img("1600585152220-90363fe7e115"), img("1600566753190-17f0baa2a6c3"),
    img("1509644851169-2acc08aa25b5"), img("1600566752355-35792bedcfea"), img("1600585154340-be6161a56a0c"),
    img("1600585154206-3d3dea7c1f8f"), img("1600585154063-8b5d55f5f0c1"),
  ],
  faqs: [
    { q: "Which finishes suit bathrooms?", a: "Sealed cores with PU top-coats and marine-ply construction — designed for humid environments." },
    { q: "Can I get concealed hinges?", a: "Yes — invisible hinges provide a totally flush face with the wall." },
    { q: "How well do they insulate sound?", a: "Our engineered cores meaningfully reduce room-to-room noise compared to hollow-core doors." },
    { q: "Can you match my joinery?", a: "Yes — we colour-match to wardrobes, panelling and cabinetry for a coherent scheme." },
    { q: "Full-height doors — are they practical?", a: "Yes, we build them on engineered cores with correctly rated hinges and pivots." },
    { q: "How long does production take?", a: "Typically 3–5 weeks depending on finish and quantity." },
    { q: "Do you install in Islamabad?", a: "Yes, throughout Islamabad and Rawalpindi." },
  ],
  metaTitle: "Bedroom & Bathroom Doors in Islamabad | Wood Lab",
  metaDescription: "Custom interior doors for bedrooms and bathrooms — engineered cores, silent hinges and refined finishes, built and installed in Islamabad by Wood Lab.",
};

const engineeredDoors: CategoryContent = {
  slug: "engineered-doors",
  eyebrow: "Doors",
  title: "Engineered Doors",
  headline: "The stability of engineering. The soul of real wood.",
  heroSubtitle:
    "Dimensionally stable engineered doors with premium veneered surfaces — quiet, flat and finished for the long run.",
  heroImage: img("1600585152220-90363fe7e115"),
  introEyebrow: "Modern engineered construction",
  introHeading: "Engineered doors keep their shape — decade after decade.",
  introParagraphs: [
    "Traditional solid-wood doors can twist, cup and swell with seasonal humidity. Engineered doors solve that with a stable multi-layer core wrapped in real wood veneer — you keep the look of timber and eliminate the movement.",
    "We laminate high-density cores with cross-oriented plies, then finish in natural veneers, laminates or lacquers. The result is a door that stays flat, insulates sound, and takes a flawless finish.",
    "Available in flush, panelled, grooved and full-height configurations, engineered doors are ideal for modern homes, apartments and commercial fit-outs where consistency really matters.",
  ],
  introKeyBenefit:
    "Long-term stability with the natural depth of veneer — the smartest choice for modern interiors.",
  introImage: img("1600585154206-3d3dea7c1f8f"),
  stylesHeading: "Engineered Door Styles",
  stylesSubtitle: "Six directions that translate beautifully to engineered construction.",
  styles: [
    { title: "Flush Veneered", description: "Continuous veneer face with no visible joints.", image: img("1600585152220-90363fe7e115") },
    { title: "Grooved Panel", description: "Subtle machined grooves for gentle texture.", image: img("1600566753190-17f0baa2a6c3") },
    { title: "Full-Height Slab", description: "Floor-to-ceiling doors for architectural drama.", image: img("1509644851169-2acc08aa25b5") },
    { title: "Panelled Classic", description: "Applied panel details on a stable engineered face.", image: img("1600607687939-ce8a6c25118c") },
    { title: "Matte Lacquered", description: "Solid colour finishes over an engineered core.", image: img("1600566752355-35792bedcfea") },
    { title: "Fluted Timber", description: "Vertical fluting bonded to a stable substrate.", image: img("1600585154340-be6161a56a0c") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Multi-Ply Engineered Cores", "Natural Veneer", "High-Pressure Laminate", "PU Lacquer", "Solid Wood Edges", "Concealed Hinges", "Soft-Close Hinges", "Magnetic Latches", "Acoustic Seals", "Precision Hardware"],
  featuresHeading: "Why Engineered Wins",
  features: [
    { title: "Dimensionally Stable", description: "Cross-plied cores resist warping and cupping." },
    { title: "Better Sound Control", description: "Denser cores reduce sound transmission between rooms." },
    { title: "Flawless Finish", description: "Stable substrates take veneer and lacquer beautifully." },
    { title: "Consistent Quality", description: "Machine-controlled fabrication for repeatable results." },
    { title: "Longer Lifespan", description: "Engineered doors resist seasonal humidity movement." },
    { title: "Wide Design Range", description: "Flush, panelled, grooved and full-height variants available." },
  ],
  gallery: [
    img("1600585152220-90363fe7e115"), img("1600607687939-ce8a6c25118c"), img("1600566753190-17f0baa2a6c3"),
    img("1509644851169-2acc08aa25b5"), img("1600566752355-35792bedcfea"), img("1600585154340-be6161a56a0c"),
    img("1600585154206-3d3dea7c1f8f"), img("1600585154063-8b5d55f5f0c1"),
  ],
  faqs: [
    { q: "How are engineered doors made?", a: "They combine cross-laminated cores with a real-wood veneer or lacquered face — stable, quiet and beautifully finished." },
    { q: "Are they as durable as solid wood?", a: "For interior use, engineered doors are typically more durable because they resist seasonal warping." },
    { q: "Can they be full-height?", a: "Yes — engineered construction is ideal for oversized doors that would twist if built in solid timber." },
    { q: "What finishes are available?", a: "Natural veneer, high-pressure laminate and PU lacquer in matte or satin." },
    { q: "Do you offer acoustic seals?", a: "Yes — acoustic seals and drop-down bottom seals are available for bedrooms and studies." },
    { q: "How long does production take?", a: "Typically 3–5 weeks depending on finish." },
    { q: "Do you install in Islamabad?", a: "Yes — Islamabad, Rawalpindi and surrounding areas." },
  ],
  metaTitle: "Engineered Interior Doors in Islamabad | Wood Lab",
  metaDescription: "Stable, quiet, beautifully veneered engineered doors — flush, panelled and full-height, built and installed in Islamabad by Wood Lab.",
};

const slidingDoors: CategoryContent = {
  slug: "sliding-doors",
  eyebrow: "Doors",
  title: "Sliding Doors",
  headline: "Reclaim your floor. Redefine your space.",
  heroSubtitle:
    "Wall-mounted, cavity and full-height sliding door systems that glide effortlessly and rewrite the layout of a room.",
  heroImage: img("1509644851169-2acc08aa25b5"),
  introEyebrow: "Space-saving door systems",
  introHeading: "Sliding doors let architecture breathe.",
  introParagraphs: [
    "A conventional swinging door sterilises a large arc of floor space. Sliding doors return that space to the room — a huge win in apartments, walk-ins, kitchens and en-suites.",
    "We fit premium top-hung tracks — engineered for tens of thousands of cycles — with soft-close both ways. Panels can be timber, glass, aluminium-framed or upholstered, in single or double configurations.",
    "For a truly seamless look, we install cavity sliders that disappear entirely into the wall when open — perfect for connecting rooms without visual clutter.",
  ],
  introKeyBenefit:
    "A category shift, not just a door — sliders change how rooms feel and function.",
  introImage: img("1616627981429-c0be0f7f57ce"),
  stylesHeading: "Sliding Door Systems",
  stylesSubtitle: "Choose the mechanism, then the panel — we specify the entire system.",
  styles: [
    { title: "Wall-Mounted Sliders", description: "Track fixed to the wall — the classic barn-style application.", image: img("1509644851169-2acc08aa25b5") },
    { title: "Cavity Sliders", description: "Doors that disappear entirely into the wall when open.", image: img("1600585152220-90363fe7e115") },
    { title: "Aluminium Frame Glass", description: "Slim metal profiles with glass or panel infills.", image: img("1616627981429-c0be0f7f57ce") },
    { title: "Full-Height Room Dividers", description: "Floor-to-ceiling sliders that partition open-plan spaces.", image: img("1600607687939-ce8a6c25118c") },
    { title: "Double-Leaf Sliders", description: "Twin panels that meet in the middle for grand openings.", image: img("1600566752355-35792bedcfea") },
    { title: "Concealed Track", description: "Recessed ceiling tracks for a fully invisible mechanism.", image: img("1600585154340-be6161a56a0c") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Solid Wood Panels", "Veneered Engineered Panels", "Aluminium Profiles", "Tinted / Frosted / Fluted Glass", "Upholstered Panels", "Premium Top-Hung Tracks", "Soft-Close Both Ways", "Concealed Ceiling Tracks", "Recessed Handle Details"],
  featuresHeading: "Systems That Glide for Years",
  features: [
    { title: "Silent Soft-Close", description: "Damped tracks close doors gently in both directions." },
    { title: "Zero Floor Track", description: "Top-hung systems keep floors clean and step-free." },
    { title: "Custom Panel Sizes", description: "Doors built to your exact opening for a perfect fit." },
    { title: "Cavity Options", description: "Wall-recessed pockets for doors that fully disappear." },
    { title: "High-Cycle Hardware", description: "Rated for years of daily use in busy homes." },
    { title: "Turnkey Install", description: "We handle carpentry, track alignment and finishing." },
  ],
  gallery: [
    img("1509644851169-2acc08aa25b5"), img("1600585152220-90363fe7e115"), img("1616627981429-c0be0f7f57ce"),
    img("1600607687939-ce8a6c25118c"), img("1600566752355-35792bedcfea"), img("1600585154340-be6161a56a0c"),
    img("1600585154206-3d3dea7c1f8f"), img("1600585154063-8b5d55f5f0c1"),
  ],
  faqs: [
    { q: "How much space do sliding doors save?", a: "A typical 900mm door reclaims about 1.5 sqm of floor space by removing the swing arc." },
    { q: "Are sliding doors soundproof?", a: "They can be tuned for reasonable acoustic performance, though hinged doors with seals will always be quieter." },
    { q: "What's a cavity slider?", a: "A door that slides into a hollow pocket built inside the wall — completely invisible when open." },
    { q: "Which panel materials work best?", a: "Engineered wood, aluminium-framed glass and upholstered panels — all light enough for smooth sliding." },
    { q: "Do they need floor tracks?", a: "Our systems are top-hung — no floor track, so nothing to trip over or clean around." },
    { q: "How long does installation take?", a: "Track and door installation is typically a 1–2 day process once the opening is prepared." },
    { q: "Do you install in Islamabad?", a: "Yes, throughout Islamabad and Rawalpindi." },
  ],
  metaTitle: "Sliding Doors & Room Dividers in Islamabad | Wood Lab",
  metaDescription: "Premium sliding door systems — wall-mounted, cavity, full-height and aluminium frame glass — designed and installed in Islamabad by Wood Lab.",
};

/* ------------------------------------------------------------------ */
/*  INTERIORS                                                         */
/* ------------------------------------------------------------------ */

const mediaWalls: CategoryContent = {
  slug: "media-walls",
  eyebrow: "Interiors",
  title: "Media Walls",
  headline: "A cinematic centrepiece for your living room.",
  heroSubtitle:
    "Custom TV media walls with wooden panels, backlit shelving, concealed wiring and integrated storage.",
  heroImage: img("1600210492486-724fe5c67fb0"),
  introEyebrow: "The new focal point of the living room",
  introHeading: "The TV disappears — the wall takes over.",
  introParagraphs: [
    "A great media wall reframes the entire living room. Instead of a screen on a bare wall, you get a full-height architectural feature — panels, textures, lighting and storage — that turns the TV into just one element in a considered composition.",
    "We design each wall around your seating layout and screen size, plan cable routes, integrate the amplifier, console and speakers, and hide it all behind a flawless timber, marble-effect or lacquered surface.",
    "Backlit shelves, tucked-away drawers and low storage benches keep the room clean and functional while adding the depth and warmth that turn a living room into a lounge.",
  ],
  introKeyBenefit:
    "One coherent architectural feature — no more black rectangle on an empty wall.",
  introImage: img("1618221195710-dd6b41faaea6"),
  stylesHeading: "Media Wall Directions",
  stylesSubtitle: "A starting point — we always design around your room proportions.",
  styles: [
    { title: "Fluted Timber", description: "Vertical fluting for warmth and shadow play.", image: img("1600210492486-724fe5c67fb0") },
    { title: "Panelled Contemporary", description: "Framed panels with subtle inset lighting.", image: img("1618221195710-dd6b41faaea6") },
    { title: "Stone & Wood", description: "Marble or travertine surrounds paired with timber shelves.", image: img("1616486338812-3dadae4b4ace") },
    { title: "Backlit Shelving", description: "Floating shelves with concealed LED strips.", image: img("1616486701797-0f33f61038df") },
    { title: "Minimal Recess", description: "Recessed TV niche with a clean plaster finish.", image: img("1616627981459-6bb7a1cfc19d") },
    { title: "Full-Height Cabinetry", description: "Cabinetry, hidden storage and display in one wall.", image: img("1616627981429-c0be0f7f57ce") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Natural Veneer", "Fluted Timber", "PU Lacquer", "Marble & Travertine", "Sintered Stone", "MDF Cores", "Concealed LED Strips", "Concealed Cable Trunking", "Push-to-Open Drawers", "Soft-Close Hardware"],
  featuresHeading: "The Details That Make It",
  features: [
    { title: "Concealed Wiring", description: "All power and AV cabling hidden inside the wall assembly." },
    { title: "Integrated Storage", description: "Drawers, cabinets and open shelves as part of the wall." },
    { title: "Backlit Detail", description: "LED-lit shelves and cove lighting for evening ambience." },
    { title: "Custom Proportions", description: "Panel layout drawn from your screen size and seating position." },
    { title: "Mixed Materials", description: "Timber, stone, plaster and metal combined for depth." },
    { title: "Turnkey Fit-Out", description: "Design, joinery, electrical and finishing under one team." },
  ],
  gallery: [
    img("1600210492486-724fe5c67fb0"), img("1618221195710-dd6b41faaea6"), img("1616486338812-3dadae4b4ace"),
    img("1616486701797-0f33f61038df"), img("1616627981459-6bb7a1cfc19d"), img("1616627981429-c0be0f7f57ce"),
    img("1600585154340-be6161a56a0c"), img("1560448204-e02f11c3d0e2"),
  ],
  faqs: [
    { q: "Can you build around my existing TV?", a: "Yes — we plan every wall around your specific screen size, seating distance and AV components." },
    { q: "How is wiring handled?", a: "All cables are routed through concealed trunking inside the wall assembly, with service loops for future upgrades." },
    { q: "Can the wall include storage?", a: "Absolutely — hidden drawers, closed cabinets and open shelving are core parts of most designs." },
    { q: "What about the sound system?", a: "Speaker positions, subwoofer and amplifier bays are planned into the wall from the start." },
    { q: "How long does execution take?", a: "Typically 3–5 weeks from design freeze depending on materials and finishes." },
    { q: "Can you incorporate marble or stone?", a: "Yes — we regularly combine timber joinery with marble, travertine or sintered stone." },
    { q: "Do you install in Islamabad?", a: "Yes, throughout Islamabad and Rawalpindi." },
  ],
  metaTitle: "Media Wall Design Islamabad | Wood Lab",
  metaDescription: "Luxury TV media walls in Islamabad — fluted timber, stone surrounds, backlit shelving and concealed wiring, designed and built by Wood Lab.",
};

const featureWalls: CategoryContent = {
  slug: "feature-walls",
  eyebrow: "Interiors",
  title: "Feature Walls",
  headline: "One wall. Enough to change the entire room.",
  heroSubtitle:
    "Fluted timber, textured plaster, decorative stone and backlit detail — feature walls that anchor an interior.",
  heroImage: img("1616486338812-3dadae4b4ace"),
  introEyebrow: "Architectural focal points",
  introHeading: "The wall that turns a room into an interior.",
  introParagraphs: [
    "A feature wall does more than decorate — it shifts the room's centre of gravity. Done well, it can define zones in open-plan spaces, frame a fireplace or bed, and give an interior a distinct identity.",
    "Our feature walls combine timber fluting, sculpted plaster, natural stone, decorative moulding and accent lighting. Every wall is drawn as a proper elevation — proportions, joins and shadows planned before a single cut.",
    "Because we design and execute in-house, the feature integrates cleanly with adjacent joinery, electrical points and ceilings — no visual seams, no compromises.",
  ],
  introKeyBenefit:
    "A single feature wall can transform the character of an entire room — for a fraction of a full renovation.",
  introImage: img("1616486701797-0f33f61038df"),
  stylesHeading: "Feature Wall Directions",
  stylesSubtitle: "Six approaches we frequently execute for Wood Lab clients.",
  styles: [
    { title: "Fluted Timber", description: "Vertical fluting in warm stains for depth and rhythm.", image: img("1616486338812-3dadae4b4ace") },
    { title: "Textured Plaster", description: "Hand-applied plaster with tonal shifts and subtle sheen.", image: img("1616486701797-0f33f61038df") },
    { title: "Natural Stone", description: "Marble, travertine or slate feature panels.", image: img("1616627981429-c0be0f7f57ce") },
    { title: "Panelled Classic", description: "Framed panels with applied mouldings.", image: img("1600607687939-ce8a6c25118c") },
    { title: "Backlit Slats", description: "Vertical slats with LED backlighting for evening drama.", image: img("1600210492486-724fe5c67fb0") },
    { title: "Mixed Material", description: "Combinations of wood, stone and metal for a bespoke look.", image: img("1618221195710-dd6b41faaea6") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Fluted Timber", "Natural Veneer", "PU Lacquer", "Marble & Travertine", "Sintered Stone", "Sculpted Plaster", "Micro-Cement", "Brass Trims", "Concealed LED Detail", "Applied Mouldings"],
  featuresHeading: "Composed Down to the Shadow",
  features: [
    { title: "Elevation-Drawn Design", description: "Every wall drawn full-size before fabrication." },
    { title: "Integrated Lighting", description: "Cove, back and grazing lights specified with the surface." },
    { title: "Clean Joinery", description: "Mitred edges, hidden fixings and matched grain flow." },
    { title: "Mixed Materials", description: "Timber, stone, plaster and metal combined without visual noise." },
    { title: "Room-Aware Scaling", description: "Panel widths tuned to the wall proportions, not off a stock list." },
    { title: "Turnkey Execution", description: "Design, joinery, electrical and finishing under one team." },
  ],
  gallery: [
    img("1616486338812-3dadae4b4ace"), img("1616486701797-0f33f61038df"), img("1616627981429-c0be0f7f57ce"),
    img("1600607687939-ce8a6c25118c"), img("1600210492486-724fe5c67fb0"), img("1618221195710-dd6b41faaea6"),
    img("1616627981459-6bb7a1cfc19d"), img("1616627981566-2c9ecfff28b0"),
  ],
  faqs: [
    { q: "Where do feature walls work best?", a: "Behind sofas, beds and dining tables, or as dividers in open-plan spaces where a focal point is needed." },
    { q: "Are fluted panels durable?", a: "Yes — properly finished timber flutes are extremely durable and easy to clean." },
    { q: "Can lighting be integrated?", a: "Absolutely — cove, backlight and grazing lights are specified at the design stage." },
    { q: "Can you match my existing joinery?", a: "Yes — we colour-match to existing woodwork, doors and cabinetry." },
    { q: "How long does installation take?", a: "Typically 1–3 weeks depending on wall size and materials." },
    { q: "Do you handle electrical work?", a: "Yes — all integrated lighting and electrical work is coordinated by our team." },
    { q: "Do you cover Islamabad?", a: "Yes, throughout Islamabad and Rawalpindi." },
  ],
  metaTitle: "Feature Wall Design Islamabad | Wood Lab",
  metaDescription: "Custom feature walls in Islamabad — fluted timber, textured plaster, stone and backlit details, designed and executed by Wood Lab.",
};

const bedWalls: CategoryContent = {
  slug: "bed-walls",
  eyebrow: "Interiors",
  title: "Bed Walls",
  headline: "The bedroom, anchored in quiet luxury.",
  heroSubtitle:
    "Panelled bed walls with upholstered accents, integrated bedside lighting and refined joinery.",
  heroImage: img("1616486338812-3dadae4b4ace"),
  introEyebrow: "Hotel-grade bedroom design",
  introHeading: "A full bed wall changes the whole room.",
  introParagraphs: [
    "A great bed wall does what a standalone headboard cannot — it anchors the bedroom, integrates lighting, wraps the bedside tables and creates a single continuous composition.",
    "We combine framed timber panels, upholstered inserts, brushed metal reveals and integrated bedside lighting, all drawn to your ceiling height and room proportions.",
    "Concealed niches for books and phones, USB and power points at pillow height and dimmable ambient light complete the design — a bed wall that reads as a proper piece of architecture.",
  ],
  introKeyBenefit:
    "A full-wall bedroom feature that integrates headboard, side tables and lighting into one calm composition.",
  introImage: img("1616486701797-0f33f61038df"),
  stylesHeading: "Bed Wall Directions",
  stylesSubtitle: "Six directions we regularly execute for Wood Lab clients.",
  styles: [
    { title: "Panelled Timber", description: "Framed vertical panels in stained oak or walnut.", image: img("1616486338812-3dadae4b4ace") },
    { title: "Upholstered Insert", description: "A soft fabric headboard set into a timber frame.", image: img("1616486701797-0f33f61038df") },
    { title: "Fluted Warm Wood", description: "Vertical fluting flanked by integrated side tables.", image: img("1616627981429-c0be0f7f57ce") },
    { title: "Textured Plaster", description: "Sculpted plaster with concealed cove lighting.", image: img("1616627981459-6bb7a1cfc19d") },
    { title: "Stone & Wood", description: "Marble insert framed by timber panels.", image: img("1616627981566-2c9ecfff28b0") },
    { title: "Minimal Contemporary", description: "Clean panels with brushed metal reveals and pendant lighting.", image: img("1600210492486-724fe5c67fb0") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Natural Veneer", "Fluted Timber", "Upholstered Panels", "PU Lacquer", "Marble & Travertine", "Micro-Cement", "Brass & Bronze Reveals", "Integrated Bedside Lighting", "Concealed USB & Power", "Soft-Close Bedside Drawers"],
  featuresHeading: "Considered Down to the Pillow",
  features: [
    { title: "Full-Wall Composition", description: "Bed, side tables and lighting drawn as one wall." },
    { title: "Integrated Lighting", description: "Reading lights, cove wash and pendant integration." },
    { title: "Upholstered Comfort", description: "Fabric or leather headboard inserts on request." },
    { title: "Concealed Niches", description: "Space for books, phones and personal items at pillow height." },
    { title: "Custom Proportions", description: "Panel widths tuned to your bed and ceiling height." },
    { title: "Turnkey Execution", description: "Joinery, upholstery, electrical and installation by one team." },
  ],
  gallery: [
    img("1616486338812-3dadae4b4ace"), img("1616486701797-0f33f61038df"), img("1616627981429-c0be0f7f57ce"),
    img("1616627981459-6bb7a1cfc19d"), img("1616627981566-2c9ecfff28b0"), img("1600210492486-724fe5c67fb0"),
    img("1618221195710-dd6b41faaea6"), img("1600585154340-be6161a56a0c"),
  ],
  faqs: [
    { q: "How much of the wall does it cover?", a: "Most bed walls run wall-to-wall and floor-to-ceiling for maximum architectural impact." },
    { q: "Do you upholster in-house?", a: "Yes — we can upholster headboard inserts in your chosen fabric or leather." },
    { q: "Can bedside tables be integrated?", a: "Yes — floating or fitted side tables are part of the composition." },
    { q: "What lighting do you include?", a: "Reading lights, cove wash and often pendant drops flanking the bed." },
    { q: "Can you include USB and power points?", a: "Yes — at pillow height for phones and reading devices." },
    { q: "How long does installation take?", a: "Typically 2–4 weeks depending on materials and upholstery." },
    { q: "Do you install in Islamabad?", a: "Yes, throughout Islamabad and Rawalpindi." },
  ],
  metaTitle: "Bed Wall & Headboard Design Islamabad | Wood Lab",
  metaDescription: "Custom bed walls in Islamabad — panelled timber, upholstered inserts, integrated lighting and bedside integration by Wood Lab.",
};

const woodenFlooring: CategoryContent = {
  slug: "wooden-flooring",
  eyebrow: "Interiors",
  title: "Wooden Flooring",
  headline: "Warmth underfoot. Character above.",
  heroSubtitle:
    "Premium engineered and solid wooden flooring in wide-plank formats and matte, satin or oiled finishes.",
  heroImage: img("1583847268964-b28dc8f51f92"),
  introEyebrow: "Real wood flooring, correctly installed",
  introHeading: "Flooring sets the tone for everything above it.",
  introParagraphs: [
    "Wood is still the material of choice for premium interiors — it adds warmth, softens acoustics and improves with age. We supply and install both engineered and solid wooden flooring, choosing the right build for each room.",
    "Engineered planks are laminated in cross-oriented layers for stability, then finished with a real wood top layer — ideal over most sub-floors and underfloor heating. Solid planks are a heavier investment for principal rooms.",
    "We handle sub-floor preparation, moisture control, underlay, laying pattern (straight, herringbone, chevron) and finishing — including sanding, oiling and lacquering — so the floor is delivered flawlessly turnkey.",
  ],
  introKeyBenefit:
    "Real wood, correctly installed — with sub-floor prep, underlay and moisture control done properly the first time.",
  introImage: img("1615529182904-14819c35db37"),
  stylesHeading: "Flooring Styles & Patterns",
  stylesSubtitle: "Choose the plank format, tone and pattern — we cover the rest.",
  styles: [
    { title: "Wide-Plank Oak", description: "Long, wide oak boards for a calm, contemporary floor.", image: img("1583847268964-b28dc8f51f92") },
    { title: "Herringbone", description: "Classic zigzag pattern in engineered oak or walnut.", image: img("1615529182904-14819c35db37") },
    { title: "Chevron", description: "Angled parallelogram pattern for a formal, elegant look.", image: img("1600566753051-6057f4d0b8b6") },
    { title: "Warm Walnut", description: "Rich walnut tones with visible grain.", image: img("1600585154340-be6161a56a0c") },
    { title: "Whitewashed Oak", description: "Light Scandinavian oak with a matte finish.", image: img("1560448204-603b3fc33ddc") },
    { title: "Smoked Timber", description: "Deep, moody smoked and fumed finishes.", image: img("1600585154063-8b5d55f5f0c1") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Engineered Oak", "Engineered Walnut", "Solid Oak", "Solid Teak", "Wide-Plank Formats", "Herringbone & Chevron", "Matte Lacquer", "Satin Lacquer", "UV Oiled Finish", "Acoustic Underlay", "Moisture Barrier"],
  featuresHeading: "Installed Correctly, Once",
  features: [
    { title: "Sub-Floor Preparation", description: "Levelling, moisture control and underlay before a plank is laid." },
    { title: "Real Wood Surface", description: "Only genuine oak, walnut and teak — never laminate imitations." },
    { title: "Multiple Patterns", description: "Straight, herringbone and chevron layouts on request." },
    { title: "Underfloor Heating Compatible", description: "Engineered constructions designed for UFH systems." },
    { title: "Sanding & Refinishing", description: "Timber floors can be sanded and refinished decades later." },
    { title: "Full Installation", description: "Delivered, laid and finished by our own crews." },
  ],
  gallery: [
    img("1583847268964-b28dc8f51f92"), img("1615529182904-14819c35db37"), img("1600566753051-6057f4d0b8b6"),
    img("1600585154340-be6161a56a0c"), img("1560448204-603b3fc33ddc"), img("1600585154063-8b5d55f5f0c1"),
    img("1600607686527-6fb886090705"), img("1600210492493-0946911123ea"),
  ],
  faqs: [
    { q: "Solid or engineered flooring?", a: "Engineered flooring is more stable, works over concrete and underfloor heating, and looks identical to solid on the surface. Solid is ideal for principal rooms with timber sub-floors." },
    { q: "Which timbers do you offer?", a: "Oak, walnut and teak in wide plank, herringbone and chevron formats." },
    { q: "Can wooden floors go over underfloor heating?", a: "Yes — with the right engineered construction and a compatible underlay." },
    { q: "How is the sub-floor prepared?", a: "Levelled, cleaned, damp-proofed if required and fitted with the correct underlay." },
    { q: "Can I refinish it later?", a: "Yes — the real-wood top layer can be sanded and refinished multiple times." },
    { q: "How long does installation take?", a: "Typically 1–2 weeks per home depending on area and pattern complexity." },
    { q: "Do you install in Islamabad?", a: "Yes, throughout Islamabad and Rawalpindi." },
  ],
  metaTitle: "Wooden Flooring in Islamabad | Wood Lab",
  metaDescription: "Premium engineered and solid wooden flooring in Islamabad — oak, walnut and teak in wide-plank, herringbone and chevron patterns, installed by Wood Lab.",
};

/* ------------------------------------------------------------------ */
/*  HOME FURNITURES                                                   */
/* ------------------------------------------------------------------ */

const laminatedFurnitures: CategoryContent = {
  slug: "laminated",
  eyebrow: "Home Furnitures",
  title: "Laminated Furnitures",
  headline: "Modern furniture, engineered for real life.",
  heroSubtitle:
    "Custom laminated furniture with high-pressure surfaces, modular configurations and everyday durability.",
  heroImage: img("1555041469-a586c61ea9bc"),
  introEyebrow: "Practical everyday furniture",
  introHeading: "Laminate has grown up — and it's now a premium finish.",
  introParagraphs: [
    "Modern high-pressure laminates deliver the look of veneer, matte lacquer or textured stone at a fraction of the maintenance. They resist scratches, stains, heat and everyday knocks — making them ideal for kids' rooms, offices and busy family spaces.",
    "We build laminated furniture on high-density cores with sealed edges, then finish with soft-close hardware and precision joinery. The result is a piece that looks contemporary and stays that way.",
    "TV units, wall systems, bookcases, study desks, storage benches and full-wall wardrobes — all designed and made to your specification and installed by our own team.",
  ],
  introKeyBenefit:
    "The look of premium furniture with the daily-use resilience of high-pressure laminate.",
  introImage: img("1567538096630-e0c55bd6374c"),
  stylesHeading: "Laminated Furniture Types",
  stylesSubtitle: "Common configurations — every piece is fully custom.",
  styles: [
    { title: "TV & Media Units", description: "Wall-hung or floor-standing units for the living room.", image: img("1555041469-a586c61ea9bc") },
    { title: "Study Desks", description: "Custom desks with cable management and drawers.", image: img("1567538096630-e0c55bd6374c") },
    { title: "Bookcases", description: "Full-height and modular bookcases in matched laminates.", image: img("1519710164239-da123dc03ef4") },
    { title: "Storage Benches", description: "Multi-purpose bench and storage units.", image: img("1600585154340-be6161a56a0c") },
    { title: "Wall Systems", description: "Full-wall storage combining closed and open modules.", image: img("1560448204-603b3fc33ddc") },
    { title: "Kids' & Study Rooms", description: "Colourful, durable furniture built to grow with your child.", image: img("1600607686527-6fb886090705") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["High-Pressure Laminates", "Textured Laminates", "Matte & Gloss Laminates", "MDF & HDF Cores", "Solid Wood Edges", "Soft-Close Hinges", "Full-Extension Drawers", "Push-to-Open Mechanisms", "Concealed Cable Management"],
  featuresHeading: "Built for Daily Use",
  features: [
    { title: "Scratch-Resistant", description: "High-pressure laminates handle daily knocks and scrapes." },
    { title: "Stain & Heat Resistant", description: "Easy to clean and forgiving in family environments." },
    { title: "Custom Modules", description: "Every piece built to your exact wall and requirements." },
    { title: "Soft-Close Hardware", description: "Silent hinges and drawer runners as standard." },
    { title: "Wide Colour Range", description: "Hundreds of laminate colours and textures available." },
    { title: "Full Installation", description: "Delivered, assembled, aligned and installed on site." },
  ],
  gallery: [
    img("1555041469-a586c61ea9bc"), img("1567538096630-e0c55bd6374c"), img("1519710164239-da123dc03ef4"),
    img("1600585154340-be6161a56a0c"), img("1560448204-603b3fc33ddc"), img("1600607686527-6fb886090705"),
    img("1600585154063-8b5d55f5f0c1"), img("1600585154206-3d3dea7c1f8f"),
  ],
  faqs: [
    { q: "Is laminate really a premium finish?", a: "High-pressure laminates today rival veneer and lacquer visually while offering far higher scratch and stain resistance." },
    { q: "Can you match any colour?", a: "Yes — we source from major laminate manufacturers with hundreds of colours and textures." },
    { q: "How long does laminated furniture last?", a: "With sealed edges and quality cores, laminated furniture will look great for a decade or more." },
    { q: "Can you match my existing wardrobes?", a: "Yes — we colour and finish match to any existing joinery." },
    { q: "How long does production take?", a: "Typically 2–4 weeks depending on size and complexity." },
    { q: "Do you install in Islamabad?", a: "Yes — throughout Islamabad and Rawalpindi." },
    { q: "Do you handle wall-hung units?", a: "Yes — we use rated brackets and hidden fixings for wall-hung TV units and shelves." },
  ],
  metaTitle: "Laminated Furniture in Islamabad | Wood Lab",
  metaDescription: "Custom laminated furniture in Islamabad — TV units, desks, bookcases and wall systems built by Wood Lab with premium hardware.",
};

const cushionFurnitures: CategoryContent = {
  slug: "cushion",
  eyebrow: "Home Furnitures",
  title: "Cushion Furnitures",
  headline: "Sink-in comfort. Built to keep its shape.",
  heroSubtitle:
    "Custom sofas, sectionals and lounge seating on hardwood frames with high-resilience foam and premium fabrics.",
  heroImage: img("1555041469-a586c61ea9bc"),
  introEyebrow: "Bespoke upholstered furniture",
  introHeading: "A sofa isn't just fabric — it's a frame, foam and craft.",
  introParagraphs: [
    "A comfortable sofa is engineered from the inside out. We build ours on jointed hardwood inner frames, layered with high-resilience foam, feather-fibre wrap and hand-tailored covers.",
    "Configurations are drawn to your living room — corner sectionals, chaise ends, three-seaters, love seats, benches and armchairs — with your preferred seat depth, back height and cushion softness.",
    "Choose from a wide range of upholstery — performance fabrics, natural linens, boucle, velvet and Italian leathers — all with removable covers where possible.",
  ],
  introKeyBenefit:
    "A sofa built to your room, your posture and your fabric — not a compromise off the showroom floor.",
  introImage: img("1567538096630-e0c55bd6374c"),
  stylesHeading: "Cushioned Furniture Types",
  stylesSubtitle: "Common configurations — every piece is fully custom-made.",
  styles: [
    { title: "Corner Sectionals", description: "L-shaped sofas with chaise ends for larger living rooms.", image: img("1555041469-a586c61ea9bc") },
    { title: "Three-Seat Sofas", description: "Classic three-seater with tailored proportions.", image: img("1567538096630-e0c55bd6374c") },
    { title: "Love Seats & Benches", description: "Compact upholstered seating for smaller rooms.", image: img("1519710164239-da123dc03ef4") },
    { title: "Lounge Armchairs", description: "Sculptural chairs with deep cushioned comfort.", image: img("1600585154340-be6161a56a0c") },
    { title: "Modular Sofas", description: "Reconfigurable sections that adapt to your room.", image: img("1560448204-603b3fc33ddc") },
    { title: "Dining Benches", description: "Upholstered benches for dining and entryways.", image: img("1600607686527-6fb886090705") },
  ],
  materialsHeading: "Materials & Fabrics",
  materials: ["Hardwood Inner Frames", "High-Resilience Foam", "Feather-Fibre Wrap", "Serpentine Springs", "Performance Fabrics", "Natural Linens", "Boucle & Chenille", "Velvet", "Italian Leather", "Solid Wood Legs"],
  featuresHeading: "Built to Last, Made to Wear In",
  features: [
    { title: "Hardwood Frames", description: "Jointed and glued for decades of daily use." },
    { title: "HR Foam & Fibre", description: "High-resilience foam wrapped in feather-fibre for premium comfort." },
    { title: "Custom Dimensions", description: "Seat depth, back height and length tailored to you." },
    { title: "Premium Upholstery", description: "Performance fabrics, natural linens, velvet and leather." },
    { title: "Removable Covers", description: "Where possible, covers zip off for professional cleaning." },
    { title: "In-House Craftsmanship", description: "Frames, foam and upholstery all executed in our own workshop." },
  ],
  gallery: [
    img("1555041469-a586c61ea9bc"), img("1567538096630-e0c55bd6374c"), img("1519710164239-da123dc03ef4"),
    img("1600585154340-be6161a56a0c"), img("1560448204-603b3fc33ddc"), img("1600607686527-6fb886090705"),
    img("1600585154063-8b5d55f5f0c1"), img("1600585154206-3d3dea7c1f8f"),
  ],
  faqs: [
    { q: "How do you make a sofa last?", a: "Jointed hardwood frames, high-resilience foam and quality serpentine springs — the fundamentals of a long-life sofa." },
    { q: "Can I choose the fabric?", a: "Yes — we work with a wide range of Pakistani and imported upholstery fabrics and leathers." },
    { q: "Can you match my room dimensions?", a: "Every sofa is drawn to your room — no compromises to fit a stock size." },
    { q: "How firm can the cushions be?", a: "From very soft to firm — we tune the foam density to your preference." },
    { q: "Are covers removable?", a: "Where possible, seat and back covers are zipped for cleaning." },
    { q: "How long does production take?", a: "Typically 4–6 weeks depending on fabric lead times." },
    { q: "Do you deliver across Islamabad?", a: "Yes — throughout Islamabad and Rawalpindi." },
  ],
  metaTitle: "Custom Sofas & Upholstered Furniture Islamabad | Wood Lab",
  metaDescription: "Custom sofas, sectionals and lounge seating in Islamabad — hardwood frames, HR foam and premium fabrics, built by Wood Lab.",
};

const woodenFurnitures: CategoryContent = {
  slug: "wooden",
  eyebrow: "Home Furnitures",
  title: "Wooden Furnitures",
  headline: "Heirloom-grade wood, built to last generations.",
  heroSubtitle:
    "Solid wood dining tables, beds, sideboards and consoles crafted with traditional joinery and hand-applied finishes.",
  heroImage: img("1519710164239-da123dc03ef4"),
  introEyebrow: "Solid wood, traditional craftsmanship",
  introHeading: "Real wood furniture — designed to be inherited.",
  introParagraphs: [
    "There's a reason solid wood furniture stays in families for generations. Built correctly, it accepts everyday life without complaint and looks richer with time — no other material offers that combination.",
    "We work primarily in solid oak, walnut, teak and mahogany, using traditional joinery — mortise and tenon, dovetails, dowels — reinforced with modern adhesives. Every surface is hand-sanded and finished in oil, wax or PU.",
    "Dining tables, beds, side tables, consoles, sideboards and bookcases — all made to your specification, in your choice of timber, colour and hardware.",
  ],
  introKeyBenefit:
    "Traditional joinery, real timber and hand-finishing — furniture that becomes an heirloom, not a purchase.",
  introImage: img("1567538096630-e0c55bd6374c"),
  stylesHeading: "Wooden Furniture Types",
  stylesSubtitle: "Common categories — every piece is fully bespoke.",
  styles: [
    { title: "Dining Tables", description: "Solid wood tables in refectory, extending and pedestal designs.", image: img("1519710164239-da123dc03ef4") },
    { title: "Beds & Headboards", description: "Solid wood beds with panelled or upholstered headboards.", image: img("1616486338812-3dadae4b4ace") },
    { title: "Sideboards & Consoles", description: "Long, low storage pieces in walnut, oak or teak.", image: img("1560448204-603b3fc33ddc") },
    { title: "Coffee & Side Tables", description: "Sculptural occasional tables to anchor a living room.", image: img("1567538096630-e0c55bd6374c") },
    { title: "Bookcases & Cabinets", description: "Solid wood display and storage cabinetry.", image: img("1600607686527-6fb886090705") },
    { title: "Study Desks", description: "Custom-built desks with drawers and cable management.", image: img("1555041469-a586c61ea9bc") },
  ],
  materialsHeading: "Materials & Finishes",
  materials: ["Solid Oak", "Solid Walnut", "Solid Teak", "Solid Mahogany", "Natural Veneer", "Traditional Joinery", "Hand-Applied Oil Finish", "PU Lacquer", "Wax Finish", "Brass & Iron Hardware"],
  featuresHeading: "Made With the Old Rules",
  features: [
    { title: "Solid Timber", description: "Kiln-dried oak, walnut, teak and mahogany — no MDF substitutes." },
    { title: "Traditional Joinery", description: "Mortise and tenon, dovetails and dowels for lifelong strength." },
    { title: "Hand-Finished", description: "Multi-stage sanding, staining and oiling for depth of grain." },
    { title: "Fully Bespoke", description: "Every dimension, profile and finish drawn for you." },
    { title: "Timeless Design", description: "Classical proportions and detailing that never date." },
    { title: "In-House Production", description: "Designed, made and finished by our own craftsmen." },
  ],
  gallery: [
    img("1519710164239-da123dc03ef4"), img("1616486338812-3dadae4b4ace"), img("1560448204-603b3fc33ddc"),
    img("1567538096630-e0c55bd6374c"), img("1600607686527-6fb886090705"), img("1555041469-a586c61ea9bc"),
    img("1600585154063-8b5d55f5f0c1"), img("1600585154206-3d3dea7c1f8f"),
  ],
  faqs: [
    { q: "Is your furniture really solid wood?", a: "Yes — genuine solid oak, walnut, teak and mahogany. No MDF or particleboard cores masquerading as solid timber." },
    { q: "Which finish should I choose?", a: "Oil finishes show grain beautifully and are easy to refresh; PU lacquer is more resistant to water and stains. We'll advise per piece." },
    { q: "Can you match existing furniture?", a: "Yes — we can colour and grain-match new pieces to existing furniture." },
    { q: "How is a solid wood table looked after?", a: "Regular dusting, occasional oiling for oiled finishes, and coasters for hot dishes. We provide a care sheet with every piece." },
    { q: "How long does production take?", a: "Typically 4–8 weeks depending on piece and finish." },
    { q: "Can you build to unusual sizes?", a: "Yes — most pieces are drawn to your exact dimensions." },
    { q: "Do you deliver across Islamabad?", a: "Yes — throughout Islamabad and Rawalpindi." },
  ],
  metaTitle: "Solid Wood Furniture in Islamabad | Wood Lab",
  metaDescription: "Bespoke solid wood dining tables, beds, sideboards and consoles built in Islamabad with traditional joinery and hand-applied finishes.",
};

/* ------------------------------------------------------------------ */
/*  EXPORT MAP                                                        */
/* ------------------------------------------------------------------ */

export const CATEGORIES = {
  "modular-kitchen": modularKitchen,
  "classic-kitchen": classicKitchen,
  "modern-kitchen": modernKitchen,
  "classic-wardrobe": classicWardrobe,
  "aluminium-wardrobe": aluminiumWardrobe,
  "walk-in-closet": walkInCloset,
  "main-doors": mainDoors,
  "bed-bathroom-doors": bedBathroomDoors,
  "engineered-doors": engineeredDoors,
  "sliding-doors": slidingDoors,
  "media-walls": mediaWalls,
  "feature-walls": featureWalls,
  "bed-walls": bedWalls,
  "wooden-flooring": woodenFlooring,
  "laminated": laminatedFurnitures,
  "cushion": cushionFurnitures,
  "wooden": woodenFurnitures,
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
