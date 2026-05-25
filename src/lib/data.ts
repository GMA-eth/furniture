import { Product, Category, CatalogFilters, PriceRange } from "@/types";

export const categories: Category[] = [
  {
    slug: "living-room",
    name: "Living Room",
    description: "Sofas, coffee tables, and everything for your gathering space",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    productCount: 24,
    translations: { ar: { name: "غرفة المعيشة", description: "أرائك وطاولات قهوة وكل ما تحتاجه لمساحة التجمع الخاصة بك" } }, updatedAt: new Date("2026-05-20"),
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    description: "Beds, dressers, and nightstands for restful retreats",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
    productCount: 18,
    translations: { ar: { name: "غرفة النوم", description: "أسرة وخزائن وطاولات جانبية لملاذات هادئة" } }, updatedAt: new Date("2026-05-19"),
  },
  {
    slug: "dining",
    name: "Dining Room",
    description: "Tables, chairs, and storage for memorable meals",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop",
    productCount: 16,
    translations: { ar: { name: "غرفة الطعام", description: "طاولات وكراسي وتخزين لوجبات لا تُنسى" } }, updatedAt: new Date("2026-05-18"),
  },
  {
    slug: "office",
    name: "Home Office",
    description: "Desks, chairs, and shelving for productive workspaces",
    image: "https://images.unsplash.com/photo-1593476550610-87baa860004a?w=800&h=600&fit=crop",
    productCount: 14,
    translations: { ar: { name: "المكتب المنزلي", description: "مكاتب وكراسي ورفوف لمساحات عمل منتجة" } }, updatedAt: new Date("2026-05-17"),
  },
  {
    slug: "outdoor",
    name: "Outdoor",
    description: "Patio furniture built to weather the elements",
    image: "https://images.unsplash.com/photo-1600562356262-9f6e2834a9be?w=800&h=600&fit=crop",
    productCount: 10,
    translations: { ar: { name: "المساحات الخارجية", description: "أثاث فناء مبني لتحمل العوامل الجوية" } }, updatedAt: new Date("2026-05-15"),
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Oslo Sofa",
    slug: "oslo-sofa",
    seoDescription:
      "The Oslo Sofa brings Scandinavian simplicity to your living room. Solid oak frame, feather-blend cushions, and a timeless silhouette.",
    price: 189900,
    compareAtPrice: 219900,
    category: "living-room",
    subcategory: "Sofas & Sectionals",
    tags: ["bestseller", "new"],
    images: [
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=900&fit=crop", alt: "Oslo Sofa in warm beige linen, front view", width: 1200, height: 900, isPrimary: true },
      { src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&h=900&fit=crop", alt: "Oslo Sofa side profile", width: 1200, height: 900 },
      { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop", alt: "Oslo Sofa detail of oak legs", width: 1200, height: 900 },
    ],
    colorVariants: [
      {
        name: "Warm Beige",
        hex: "#D4C5B9",
        images: [
          { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=900&fit=crop", alt: "Oslo Sofa in Warm Beige", width: 1200, height: 900, isPrimary: true },
        ],
      },
      {
        name: "Charcoal",
        hex: "#3D3D3D",
        images: [
          { src: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&h=900&fit=crop", alt: "Oslo Sofa in Charcoal", width: 1200, height: 900, isPrimary: true },
        ],
      },
      {
        name: "Sage Green",
        hex: "#9CAF88",
        images: [
          { src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&h=900&fit=crop", alt: "Oslo Sofa in Sage Green", width: 1200, height: 900, isPrimary: true },
        ],
      },
    ],
    materials: ["Solid oak frame", "Feather-blend cushions", "Linen-blend upholstery"],
    dimensions: { width: 84, depth: 36, height: 32, unit: "in" },
    weight: 140,
    inStock: true,
    leadTime: "Ships in 5-7 business days",
    rating: 4.8,
    reviewCount: 127,
    reviews: [
      { rating: 5, text: "Absolutely stunning. The fabric is soft but durable, and it's incredibly comfortable.", author: "Sarah M.", date: "2026-04-15" },
      { rating: 5, text: "Worth every penny. The oak frame is beautiful and the cushions hold their shape.", author: "James K.", date: "2026-04-02" },
      { rating: 4, text: "Great sofa. Only wish it came in more colors, but the beige is lovely.", author: "Priya R.", date: "2026-03-20" },
    ],
    description: "The Oslo Sofa is where Scandinavian design meets everyday comfort. With its clean lines, tapered oak legs, and deep feather-blend seating, it anchors any living room with quiet confidence. Built to last from FSC-certified solid oak.",
    highlights: ["FSC-certified solid oak frame", "Feather-blend seat cushions with high-resilience foam core", "Removable, machine-washable cushion covers", "10-year frame warranty"],
    faq: [
      { question: "Are the cushion covers removable?", answer: "Yes, all cushion covers are removable and machine-washable on a gentle cycle." },
      { question: "What is the weight capacity of the sofa?", answer: "The Oslo Sofa supports up to 900 lbs evenly distributed across the seating area." },
      { question: "Does it require assembly?", answer: "Minimal assembly required. Simply attach the legs — takes about 10 minutes with the included tool." },
    ],
    careInstructions: "Vacuum weekly with an upholstery attachment. Spot clean spills immediately with a damp cloth. Professional cleaning recommended annually.",
    shippingMethod: "freight",
    shippingCost: 4900,
    freeShippingThreshold: 200000,
    roomType: "living-room",
    translations: {
    ar: {
      name: "أريكة أوسلو",
      seoTitle: "أريكة أوسلو — تصميم إسكندنافي | فورني",
      seoDescription: "أريكة أوسلو تجمع بين البساطة الإسكندنافية وراحة المعيشة اليومية. إطار من خشب البلوط الصلب ووسائد من مزيج الريش.",
      description: "أريكة أوسلو حيث يلتقي التصميم الإسكندنافي بالراحة اليومية. بخطوطها النظيفة وأرجل البلوط المستدقة ومقاعدها العميقة من مزيج الريش، تضفي على أي غرفة معيشة طابعاً من الثقة الهادئة. مصنوعة لتدوم من خشب البلوط الصلب المعتمد من FSC.",
      highlights: ["إطار من خشب البلوط الصلب المعتمد من FSC", "وسائد من مزيج الريش مع لب إسفنجي عالي المرونة", "أغطية وسائد قابلة للإزالة والغسل في الغسالة", "ضمان 10 سنوات على الإطار"],
      materials: ["إطار من خشب البلوط الصلب", "وسائد من مزيج الريش", "تنجيد من مزيج الكتان"],
      reviews: [{ text: "جميلة ورائعة. القماش ناعم ومتين، ومريحة بشكل لا يصدق." }, { text: "تستحق كل قرش. إطار البلوط جميل والوسائد تحافظ على شكلها." }, { text: "أريكة رائعة. كنت أتمنى لو توفرت بألوان أكثر، لكن البيج جميل." }],
      faq: [{ question: "هل أغطية الوسائد قابلة للإزالة؟", answer: "نعم، جميع أغطية الوسائد قابلة للإزالة والغسل في الغسالة على دورة خفيفة." }, { question: "ما هي سعة الوزن للأريكة؟", answer: "تتحمل أريكة أوسلو حتى ٤٠٠ كجم موزعة بالتساوي على منطقة الجلوس." }, { question: "هل تحتاج إلى تركيب؟", answer: "تحتاج إلى تركيب بسيط. فقط قم بتركيب الأرجل — يستغرق حوالي ١٠ دقائق باستخدام الأداة المرفقة." }],
      careInstructions: "استخدم المكنسة الكهربائية أسبوعياً مع ملحق التنجيد. نظف البقع فوراً بقطعة قماش مبللة. يُنصح بالتنظيف الاحترافي سنوياً.",
      images: [
        { alt: "أريكة أوسلو باللون البيج الدافئ، منظر أمامي" },
        { alt: "أريكة أوسلو، منظر جانبي" },
        { alt: "أريكة أوسلو، تفاصيل أرجل البلوط" },
      ],
      colorVariants: [
        { name: "بيج دافئ" },
        { name: "فحمي" },
        { name: "أخضر مريمية" },
      ],},
  },
  updatedAt: new Date("2026-05-20"),
  },
  {
    id: "p2",
    name: "Hemnes Dresser",
    slug: "hemnes-8-drawer-dresser",
    seoDescription:
      "The Hemnes 8-Drawer Dresser offers generous storage with clean traditional styling. Solid pine construction, available in white stain or black-brown.",
    price: 49900,
    category: "bedroom",
    subcategory: "Dressers & Chests",
    tags: ["bestseller"],
    images: [
      { src: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?w=1200&h=1200&fit=crop", alt: "Hemnes 8-Drawer Dresser in white stain, front view", width: 1200, height: 1200, isPrimary: true },
      { src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=1200&fit=crop", alt: "Hemnes dresser drawer detail", width: 1200, height: 1200 },
      { src: "https://images.unsplash.com/photo-1597072689227-8882273e8caa?w=1200&h=900&fit=crop", alt: "Hemnes dresser in bedroom setting", width: 1200, height: 900 },
    ],
    colorVariants: [
      { name: "White Stain", hex: "#F5F0EB", images: [{ src: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?w=1200&h=1200&fit=crop", alt: "Hemnes Dresser in White Stain", width: 1200, height: 1200, isPrimary: true }] },
      { name: "Black-Brown", hex: "#2C1810", images: [{ src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=1200&fit=crop", alt: "Hemnes Dresser in Black-Brown", width: 1200, height: 1200, isPrimary: true }] },
    ],
    materials: ["Solid pine", "Stain finish", "Metal hardware"],
    dimensions: { width: 63, depth: 19.75, height: 37.75, unit: "in" },
    weight: 126,
    assemblyRequired: true,
    inStock: true,
    leadTime: "Ships in 3-5 business days",
    rating: 4.6,
    reviewCount: 342,
    reviews: [
      { rating: 5, text: "Sturdy and beautiful. Took about 3 hours to assemble with two people.", author: "Michael T.", date: "2026-05-10" },
      { rating: 4, text: "Great storage capacity. The drawers slide smoothly. Assembly is a project.", author: "Lisa W.", date: "2026-04-28" },
    ],
    description: "The Hemnes 8-Drawer Dresser brings timeless style and generous storage to your bedroom. Crafted from solid pine with a durable stain finish, it features smooth-gliding drawers with metal hardware. A classic piece that grows with you.",
    highlights: ["Solid pine construction", "8 spacious drawers with smooth metal runners", "Fits standard closets and bedrooms", "Coordinates with the full Hemnes collection"],
    faq: [
      { question: "How do I clean the Hemnes dresser?", answer: "Wipe clean with a damp cloth and mild cleaner. Avoid abrasive cleaners that could damage the stain finish." },
      { question: "What is the weight capacity per drawer?", answer: "Each drawer supports up to 35 lbs when evenly distributed." },
    ],
    careInstructions: "Dust regularly with a soft, dry cloth. Clean spills immediately with a damp cloth. Avoid placing in direct sunlight to prevent fading.",
    shippingMethod: "parcel",
    shippingCost: 1999,
    freeShippingThreshold: 100000,
    roomType: "bedroom",
    translations: {
    ar: {
      name: "خزانة هيمنيس بـ ٨ أدراج",
      seoTitle: "خزانة هيمنيس بـ ٨ أدراج — تخزين كلاسيكي | فورني",
      seoDescription: "خزانة هيمنيس بـ ٨ أدراج توفر تخزيناً واسعاً بتصميم كلاسيكي أنيق. مصنوعة من خشب الصنوبر الصلب، متوفرة بلون البلوط الأبيض أو البني الداكن.",
      description: "تضفي خزانة هيمنيس بـ ٨ أدراج أناقة خالدة وتخزيناً واسعاً إلى غرفة نومك. مصنوعة من خشب الصنوبر الصلب بطبقة نهائية متينة، تتميز بأدراج تنزلق بسلاسة مع مقابض معدنية. قطعة كلاسيكية تنمو معك.",
      highlights: ["مصنوعة من خشب الصنوبر الصلب", "٨ أدراج واسعة بمجاري معدنية ناعمة", "تناسب الخزائن وغرف النوم القياسية", "تتناسق مع مجموعة هيمنيس الكاملة"],
      materials: ["خشب الصنوبر الصلب", "طبقة نهائية ملونة", "مقابض معدنية"],
      reviews: [{ text: "متينة وجميلة. استغرق التركيب حوالي ٣ ساعات مع شخصين." }, { text: "سعة تخزين رائعة. الأدراج تنزلق بسلاسة. التركيب مشروع كبير." }],
      faq: [{ question: "كيف أنظف خزانة هيمنيس؟", answer: "امسح بقطعة قماش مبللة ومنظف خفيف. تجنب المنظفات الكاشطة التي قد تضر بالطبقة النهائية." }, { question: "ما هي سعة الوزن لكل درج؟", answer: "يتحمل كل درج حتى ١٦ كجم عند توزيعه بالتساوي." }],
      careInstructions: "انفض الغبار بانتظام بقطعة قماش ناعمة وجافة. نظف الانسكابات فوراً بقطعة قماش مبللة. تجنب وضعها في ضوء الشمس المباشر لمنع بهتان اللون.",
      images: [
        { alt: "خزانة هيمنيس بثمانية أدراج باللون الأبيض، منظر أمامي" },
        { alt: "خزانة هيمنيس، تفاصيل الدرج" },
        { alt: "خزانة هيمنيس في غرفة النوم" },
      ],
      colorVariants: [
        { name: "أبيض مصبوغ" },
        { name: "بني داكن" },
      ],},
  },
  updatedAt: new Date("2026-05-19"),
  },
  {
    id: "p3",
    name: "Vreta Dining Table",
    slug: "vreta-dining-table",
    seoDescription:
      "The Vreta Dining Table seats 6-8 comfortably. Solid walnut top with matte black steel legs. A modern centerpiece for your dining room.",
    price: 129900,
    category: "dining",
    subcategory: "Dining Tables",
    tags: ["bestseller", "new"],
    images: [
      { src: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=1200&h=800&fit=crop", alt: "Vreta Dining Table with walnut top, front view", width: 1200, height: 800, isPrimary: true },
      { src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&h=800&fit=crop", alt: "Vreta table detail showing walnut grain", width: 1200, height: 800 },
    ],
    colorVariants: [
      { name: "Walnut", hex: "#5C3A21", images: [{ src: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=1200&h=800&fit=crop", alt: "Vreta Table in Walnut", width: 1200, height: 800, isPrimary: true }] },
      { name: "Natural Oak", hex: "#C4A97D", images: [{ src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&h=800&fit=crop", alt: "Vreta Table in Natural Oak", width: 1200, height: 800, isPrimary: true }] },
    ],
    sizeVariants: [
      { label: "72\"", dimensions: { width: 72, depth: 38, height: 30 } },
      { label: "84\"", dimensions: { width: 84, depth: 40, height: 30 }, priceModifier: 20000 },
    ],
    materials: ["Solid walnut", "Matte black powder-coated steel"],
    dimensions: { width: 72, depth: 38, height: 30, unit: "in" },
    weight: 155,
    inStock: true,
    leadTime: "Ships in 7-10 business days",
    rating: 4.9,
    reviewCount: 89,
    reviews: [
      { rating: 5, text: "The walnut grain is absolutely gorgeous. This table is the centerpiece of our home.", author: "David L.", date: "2026-05-05" },
      { rating: 5, text: "Solid, well-crafted, and the matte steel legs are a perfect contrast to the warm wood.", author: "Emma S.", date: "2026-04-18" },
    ],
    description: "The Vreta Dining Table combines a thick solid walnut top with architectural matte black steel legs. Designed to seat 6-8 comfortably, it's equally at home hosting dinner parties or quiet family meals. Each table showcases unique wood grain — no two are alike.",
    highlights: ["Solid walnut top with natural edge detailing", "Matte black powder-coated steel legs", "Seats 6-8 comfortably", "Floor protectors included"],
    faq: [
      { question: "How do I maintain the walnut surface?", answer: "Use coasters and placemats for hot items and liquids. Apply furniture wax every 6 months to preserve the finish." },
      { question: "Can it be used outdoors?", answer: "No, the Vreta is designed for indoor use only. For outdoor dining, see our Terras collection." },
    ],
    careInstructions: "Dust with a soft, dry microfiber cloth. For deeper cleaning, use a slightly damp cloth and dry immediately. Apply wood conditioner every 6 months.",
    shippingMethod: "freight",
    shippingCost: 9900,
    freeShippingThreshold: 200000,
    roomType: "dining",
    translations: {
    ar: {
      name: "طاولة طعام فريتا",
      seoTitle: "طاولة طعام فريتا — خشب الجوز الصلب | فورني",
      seoDescription: "طاولة طعام فريتا تتسع لـ ٦-٨ أشخاص براحة. سطح من خشب الجوز الصلب مع أرجل فولاذية سوداء غير لامعة. قطعة مركزية عصرية لغرفة طعامك.",
      description: "تجمع طاولة طعام فريتا بين سطح سميك من خشب الجوز الصلب وأرجل فولاذية معمارية سوداء غير لامعة. مصممة لتتسع لـ ٦-٨ أشخاص براحة، وهي مناسبة لاستضافة حفلات العشاء أو الوجبات العائلية الهادئة. كل طاولة فريدة بنقوش خشبية مميزة.",
      highlights: ["سطح من خشب الجوز الصلب بتفاصيل حواف طبيعية", "أرجل فولاذية سوداء غير لامعة بطلاء بودرة", "تتسع لـ ٦-٨ أشخاص براحة", "واقيات أرضية مرفقة"],
      materials: ["خشب الجوز الصلب", "فولاذ أسود غير لامع بطلاء بودرة"],
      reviews: [{ text: "نقوش خشب الجوز رائعة للغاية. هذه الطاولة هي محور منزلنا." }, { text: "صلبة ومصنوعة بشكل جيد، والأرجل الفولاذية غير اللامعة تباين مثالي مع الخشب الدافئ." }],
      faq: [{ question: "كيف أحافظ على سطح الجوز؟", answer: "استخدم الوقايات والمفارش للأغراض الساخنة والسوائل. ضع شمع الأثاث كل ٦ أشهر للحفاظ على اللمسة النهائية." }, { question: "هل يمكن استخدامها في الخارج؟", answer: "لا، طاولة فريتا مصممة للاستخدام الداخلي فقط. للاستخدام الخارجي، راجع مجموعة تيراس." }],
      careInstructions: "انفض الغبار بقطعة قماش ناعمة وجافة من المايكروفايبر. للتنظيف العميق، استخدم قطعة قماش مبللة قليلاً وجفف فوراً. ضع مرطب الخشب كل ٦ أشهر.",
      images: [
        { alt: "طاولة طعام فريتا بسطح الجوز، منظر أمامي" },
        { alt: "طاولة فريتا، تفاصيل نقشة خشب الجوز" },
      ],
      colorVariants: [
        { name: "جوز" },
        { name: "بلوط طبيعي" },
      ],},
  },
  updatedAt: new Date("2026-05-18"),
  },
  {
    id: "p4",
    name: "Arkad Desk",
    slug: "arkad-desk",
    seoDescription:
      "The Arkad Desk combines a spacious walnut work surface with integrated cable management. Perfect for your home office.",
    price: 89900,
    category: "office",
    subcategory: "Desks",
    tags: ["new"],
    images: [
      { src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1200&h=800&fit=crop", alt: "Arkad Desk in walnut, front view with accessories", width: 1200, height: 800, isPrimary: true },
      { src: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1200&h=800&fit=crop", alt: "Arkad Desk detail showing cable management", width: 1200, height: 800 },
      { src: "https://images.unsplash.com/photo-1593476550610-87baa860004a?w=1200&h=900&fit=crop", alt: "Arkad Desk in home office setting", width: 1200, height: 900 },
    ],
    colorVariants: [
      { name: "Walnut", hex: "#5C3A21", images: [{ src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1200&h=800&fit=crop", alt: "Arkad Desk in Walnut", width: 1200, height: 800, isPrimary: true }] },
      { name: "White Oak", hex: "#D4C5B9", images: [{ src: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1200&h=800&fit=crop", alt: "Arkad Desk in White Oak", width: 1200, height: 800, isPrimary: true }] },
    ],
    materials: ["Walnut veneer", "Powder-coated steel legs", "Integrated cable tray"],
    dimensions: { width: 55, depth: 28, height: 29.5, unit: "in" },
    weight: 72,
    inStock: true,
    leadTime: "Ships in 3-5 business days",
    rating: 4.7,
    reviewCount: 56,
    reviews: [
      { rating: 5, text: "Finally, a desk with thoughtful cable management. My workspace has never been cleaner.", author: "Alex N.", date: "2026-05-01" },
      { rating: 4, text: "Beautiful desk. The assembly was straightforward. Wish the drawer was slightly deeper.", author: "Rachel K.", date: "2026-04-12" },
    ],
    description: "The Arkad Desk brings form and function to your home office. A spacious walnut veneer work surface sits atop sleek steel legs, while the integrated cable management tray keeps cords hidden and organized. A slim drawer holds essentials.",
    highlights: ["Integrated cable management tray", "Slim storage drawer", "Adjustable leveling feet", "Pre-drilled monitor mount grommet"],
    faq: [
      { question: "Can I mount a monitor arm to this desk?", answer: "Yes, the Arkad Desk includes a pre-drilled grommet hole compatible with most monitor arm clamps." },
      { question: "What is the weight capacity?", answer: "The desk surface supports up to 150 lbs evenly distributed." },
    ],
    careInstructions: "Wipe clean with a damp cloth. Avoid harsh chemicals. Use coasters for drinks.",
    shippingMethod: "parcel",
    shippingCost: 2499,
    freeShippingThreshold: 100000,
    roomType: "office",
    translations: {
    ar: {
      name: "مكتب أركاد",
      seoTitle: "مكتب أركاد — مساحة عمل منزلية أنيقة | فورني",
      seoDescription: "مكتب أركاد يجمع بين سطح عمل واسع من قشرة الجوز ونظام إدارة كابلات مدمج. مثالي لمكتبك المنزلي.",
      description: "يضفي مكتب أركاد الشكل والوظيفة إلى مكتبك المنزلي. سطح عمل واسع من قشرة الجوز يجلس على أرجل فولاذية أنيقة، بينما تحافظ صينية إدارة الكابلات المدمجة على الأسلاك مخفية ومنظمة. درج نحيف يحمل الأساسيات.",
      highlights: ["صينية إدارة كابلات مدمجة", "درج تخزين نحيف", "أقدام تسوية قابلة للتعديل", "فتحة محفورة مسبقاً لذراع الشاشة"],
      materials: ["قشرة الجوز", "أرجل فولاذية بطلاء بودرة", "صينية كابلات مدمجة"],
      faq: [{ question: "هل يمكنني تركيب ذراع شاشة على هذا المكتب؟", answer: "نعم، يتضمن مكتب أركاد فتحة محفورة مسبقاً متوافقة مع معظم مشابك أذرع الشاشات." }, { question: "ما هي سعة الوزن؟", answer: "يتحمل سطح المكتب حتى ٦٨ كجم موزعة بالتساوي." }],
      reviews: [{ text: "أخيراً، مكتب بإدارة كابلات مدروسة. مساحة عملي لم تكن أنظف من أي وقت مضى." }, { text: "مكتب جميل. التركيب بسيط. كنت أتمنى لو كان الدرج أعمق قليلاً." }],
      careInstructions: "امسح بقطعة قماش مبللة. تجنب المواد الكيميائية القاسية. استخدم الوقايات للمشروبات.",
      images: [
        { alt: "مكتب أركاد بالجوز، منظر أمامي مع إكسسوارات" },
        { alt: "مكتب أركاد، تفاصيل إدارة الكابلات" },
        { alt: "مكتب أركاد في مكتب منزلي" },
      ],
      colorVariants: [
        { name: "جوز" },
        { name: "بلوط أبيض" },
      ],},
  },
  updatedAt: new Date("2026-05-17"),
  },
  {
    id: "p5",
    name: "Terras Lounge Chair",
    slug: "terras-lounge-chair",
    seoDescription:
      "The Terras Lounge Chair is built for outdoor living. Weather-resistant teak frame with quick-dry foam cushions in fade-resistant Sunbrella fabric.",
    price: 74900,
    category: "outdoor",
    subcategory: "Outdoor Seating",
    tags: [],
    images: [
      { src: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&h=900&fit=crop", alt: "Terras Lounge Chair on patio, front view", width: 1200, height: 900, isPrimary: true },
      { src: "https://images.unsplash.com/photo-1600562356262-9f6e2834a9be?w=1200&h=900&fit=crop", alt: "Terras chair detail showing teak grain", width: 1200, height: 900 },
    ],
    colorVariants: [
      { name: "Sand", hex: "#D2B48C", images: [{ src: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&h=900&fit=crop", alt: "Terras Chair in Sand", width: 1200, height: 900, isPrimary: true }] },
      { name: "Navy", hex: "#1B2A4A", images: [{ src: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1200&h=900&fit=crop", alt: "Terras Chair in Navy", width: 1200, height: 900, isPrimary: true }] },
      { name: "Terracotta", hex: "#CC4E2E", images: [{ src: "https://images.unsplash.com/photo-1600562356262-9f6e2834a9be?w=1200&h=900&fit=crop", alt: "Terras Chair in Terracotta", width: 1200, height: 900, isPrimary: true }] },
    ],
    materials: ["Grade-A teak", "Sunbrella acrylic fabric", "Quick-dry foam", "Stainless steel hardware"],
    dimensions: { width: 28, depth: 32, height: 34, unit: "in" },
    weight: 38,
    inStock: false,
    leadTime: "Backordered — ships in 4-6 weeks",
    rating: 4.9,
    reviewCount: 34,
    reviews: [
      { rating: 5, text: "These chairs transformed our patio. The teak is aging beautifully to a silver-gray.", author: "Tom H.", date: "2026-04-25" },
      { rating: 5, text: "Worth the wait. Incredibly comfortable and the Navy fabric hasn't faded at all.", author: "Clara J.", date: "2026-04-10" },
    ],
    description: "The Terras Lounge Chair is built for a life outdoors. A Grade-A teak frame weathers gracefully to a silver patina over time, while Sunbrella cushions resist fading, mold, and mildew. Deep seating with quick-dry foam means it's always ready after rain.",
    highlights: ["Grade-A teak — sustainably harvested", "Sunbrella fabric: UV-resistant, mold-resistant, easy to clean", "Quick-dry foam cushions", "Stainless steel hardware won't rust"],
    faq: [
      { question: "Can I leave the Terras chair outside year-round?", answer: "Yes, teak and Sunbrella are designed for outdoor exposure. We recommend a furniture cover in harsh winters for best longevity." },
      { question: "How does the teak age?", answer: "Natural teak develops a beautiful silver-gray patina over 6-12 months outdoors. To maintain the original honey color, apply teak oil every 3 months." },
    ],
    careInstructions: "Brush off debris weekly. For deeper cleaning, use mild soap and water on the teak. Cushion covers are removable and machine-washable. Cover or store during extended harsh weather.",
    shippingMethod: "parcel",
    shippingCost: 0,
    freeShippingThreshold: 50000,
    roomType: "outdoor",
    translations: {
    ar: {
      name: "كرسي تيراس للاسترخاء",
      seoTitle: "كرسي تيراس — أثاث خارجي فاخر | فورني",
      seoDescription: "كرسي تيراس للاسترخاء مصمم للحياة الخارجية. إطار من خشب الساج المقاوم للعوامل الجوية مع وسائد إسفنجية سريعة الجفاف بنسيج صن بريلا المقاوم للبهتان.",
      description: "كرسي تيراس للاسترخاء مصمم للحياة في الهواء الطلق. إطار من خشب الساج من الدرجة الأولى يكتسب لوناً فضياً جميلاً مع مرور الوقت، بينما تقاوم وسائد صن بريلا البهتان والعفن والفطريات. مقاعد عميقة مع إسفنج سريع الجفاف يعني أنه جاهز دائماً بعد المطر.",
      highlights: ["خشب ساج من الدرجة الأولى — محصود بشكل مستدام", "نسيج صن بريلا: مقاوم للأشعة فوق البنفسجية والعفن وسهل التنظيف", "وسائد إسفنجية سريعة الجفاف", "مقابض من الفولاذ المقاوم للصدأ لا تصدأ"],
      materials: ["خشب ساج من الدرجة الأولى", "نسيج أكريليك صن بريلا", "إسفنج سريع الجفاف", "مقابض من الفولاذ المقاوم للصدأ"],
      reviews: [{ text: "هذه الكراسي غيرت فناء منزلنا. خشب الساج يكتسب لوناً رمادياً فضياً بشكل جميل." }, { text: "تستحق الانتظار. مريحة بشكل لا يصدق ولم يبهت لون النسيج الأزرق الداكن على الإطلاق." }],
      faq: [{ question: "هل يمكنني ترك كرسي تيراس في الخارج طوال العام؟", answer: "نعم، خشب الساج وصن بريلا مصممان للتعرض الخارجي. نوصي بغطاء أثاث في الشتاء القاسي للحفاظ على الجودة." }, { question: "كيف يتغير لون خشب الساج مع الوقت؟", answer: "يكتسب خشب الساج الطبيعي لوناً رمادياً فضياً جميلاً خلال ٦-١٢ شهراً في الهواء الطلق. للحفاظ على اللون العسلي الأصلي، ضع زيت الساج كل ٣ أشهر." }],
      careInstructions: "أزل الأوساخ أسبوعياً. للتنظيف العميق، استخدم صابوناً خفيفاً وماء على خشب الساج. أغطية الوسائد قابلة للإزالة والغسل في الغسالة. غطِّ أو خزّن أثناء الطقس القاسي الممتد.",
      images: [
        { alt: "كرسي تيراس للاسترخاء في الفناء، منظر أمامي" },
        { alt: "كرسي تيراس، تفاصيل نقشة خشب الساج" },
      ],
      colorVariants: [
        { name: "رملي" },
        { name: "كحلي" },
        { name: "طيني" },
      ],},
  },
  updatedAt: new Date("2026-05-15"),
  },
  {
    id: "p6",
    name: "Lotta Coffee Table",
    slug: "lotta-coffee-table",
    seoDescription:
      "The Lotta Coffee Table features a minimalist round design in solid ash. Perfect for small spaces and open floor plans alike.",
    price: 44900,
    category: "living-room",
    subcategory: "Coffee & Side Tables",
    tags: ["sale"],
    images: [
      { src: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=1200&h=1200&fit=crop", alt: "Lotta Coffee Table in natural ash, top view", width: 1200, height: 1200, isPrimary: true },
      { src: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=1200&h=900&fit=crop", alt: "Lotta Coffee Table in living room setting", width: 1200, height: 900 },
    ],
    colorVariants: [
      { name: "Natural Ash", hex: "#E8D5B7", images: [{ src: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=1200&h=1200&fit=crop", alt: "Lotta Table in Natural Ash", width: 1200, height: 1200, isPrimary: true }] },
      { name: "Black Stain", hex: "#2C2C2C", images: [{ src: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=1200&h=1200&fit=crop", alt: "Lotta Table in Black Stain", width: 1200, height: 1200, isPrimary: true }] },
    ],
    materials: ["Solid ash", "Stain finish"],
    dimensions: { width: 36, depth: 36, height: 16, unit: "in" },
    weight: 42,
    inStock: true,
    leadTime: "Ships in 3-5 business days",
    rating: 4.5,
    reviewCount: 78,
    reviews: [
      { rating: 5, text: "Simple, elegant, and exactly what our living room needed. Love the rounded edges.", author: "Nina P.", date: "2026-05-08" },
      { rating: 4, text: "Nice table. The ash grain is beautiful but it does show water rings easily — use coasters!", author: "Mark R.", date: "2026-04-22" },
    ],
    description: "The Lotta Coffee Table proves that less is more. A single piece of solid ash, shaped into a perfect circle with softly rounded edges. Place it in the center of your living room — it asks for nothing but gives everything.",
    highlights: ["Solid ash construction", "Rounded edges — safe for families", "Leveling feet for uneven floors", "Pairs with the Lotta Side Table"],
    faq: [{ question: "Does it need assembly?", answer: "No, the Lotta arrives fully assembled. Simply remove from packaging and place." }],
    careInstructions: "Use coasters for all beverages. Clean with a damp cloth and dry immediately. Apply furniture oil annually.",
    shippingMethod: "parcel",
    shippingCost: 1499,
    freeShippingThreshold: 100000,
    roomType: "living-room",
    translations: {
    ar: {
      name: "طاولة قهوة لوتا",
      seoTitle: "طاولة قهوة لوتا — تصميم دائري بسيط | فورني",
      seoDescription: "طاولة قهوة لوتا تتميز بتصميم دائري بسيط من خشب الدردار الصلب. مثالية للمساحات الصغيرة والمخططات المفتوحة على حد سواء.",
      description: "تثبت طاولة قهوة لوتا أن الأقل هو الأكثر. قطعة واحدة من خشب الدردار الصلب، مشكلة في دائرة مثالية بحواف مستديرة بنعومة. ضعها في وسط غرفة معيشتك — لا تطلب شيئاً لكنها تمنح كل شيء.",
      highlights: ["مصنوعة من خشب الدردار الصلب", "حواف مستديرة — آمنة للعائلات", "أقدام تسوية للأرضيات غير المستوية", "تتناسق مع طاولة لوتا الجانبية"],
      materials: ["خشب الدردار الصلب", "طبقة نهائية ملونة"],
      faq: [{ question: "هل تحتاج إلى تركيب؟", answer: "لا، تصل لوتا مجمعة بالكامل. فقط أخرجها من العبوة وضعها." }],
      reviews: [{ text: "بسيطة وأنيقة، وهذا بالضبط ما احتاجته غرفة معيشتنا. أحب الحواف المستديرة." }],
      careInstructions: "استخدم الوقايات لجميع المشروبات. نظف بقطعة قماش مبللة وجفف فوراً. ضع زيت الأثاث سنوياً.",
      images: [
        { alt: "طاولة قهوة لوتا بخشب الدردار الطبيعي، منظر علوي" },
        { alt: "طاولة قهوة لوتا في غرفة المعيشة" },
      ],
      colorVariants: [
        { name: "دردار طبيعي" },
        { name: "أسود مصبوغ" },
      ],},
  },
  updatedAt: new Date("2026-05-16"),
  },
  {
    id: "p7",
    name: "Nore Bed Frame",
    slug: "nore-bed-frame",
    seoDescription:
      "The Nore Bed Frame combines a upholstered headboard with a solid wood platform base. No box spring needed. Available in Queen and King.",
    price: 119900,
    category: "bedroom",
    subcategory: "Beds & Headboards",
    tags: ["bestseller"],
    images: [
      { src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1200&h=800&fit=crop", alt: "Nore Bed Frame in cream upholstery, front view", width: 1200, height: 800, isPrimary: true },
      { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&h=800&fit=crop", alt: "Nore bed detail showing headboard tufting", width: 1200, height: 800 },
    ],
    colorVariants: [
      { name: "Cream", hex: "#F5F0EB", images: [{ src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1200&h=800&fit=crop", alt: "Nore Bed in Cream", width: 1200, height: 800, isPrimary: true }] },
      { name: "Slate", hex: "#708090", images: [{ src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&h=800&fit=crop", alt: "Nore Bed in Slate", width: 1200, height: 800, isPrimary: true }] },
    ],
    sizeVariants: [
      { label: "Queen", dimensions: { width: 64, depth: 84, height: 48 } },
      { label: "King", dimensions: { width: 80, depth: 84, height: 48 }, priceModifier: 20000 },
    ],
    materials: ["Solid pine platform", "Polyester-blend upholstery", "High-density foam padding"],
    dimensions: { width: 64, depth: 84, height: 48, unit: "in" },
    weight: 110,
    assemblyRequired: true,
    inStock: true,
    leadTime: "Ships in 5-7 business days",
    rating: 4.7,
    reviewCount: 203,
    reviews: [
      { rating: 5, text: "This bed is stunning. The upholstered headboard makes reading in bed so comfortable.", author: "Jessica M.", date: "2026-05-12" },
      { rating: 5, text: "Easy to assemble with two people. The platform slats are solid — no squeaking at all.", author: "Brian C.", date: "2026-04-30" },
    ],
    description: "The Nore Bed Frame is where soft meets solid. An upholstered headboard with vertical channel tufting invites you to lean back and relax, while the solid pine platform base provides sturdy, no-box-spring-needed support.",
    highlights: ["Upholstered headboard with channel tufting", "Solid pine slat platform — no box spring required", "Available in Queen and King", "12\" under-bed clearance for storage"],
    faq: [
      { question: "Do I need a box spring?", answer: "No, the Nore uses a slatted platform base that supports your mattress directly. No box spring needed." },
      { question: "What mattress thickness works best?", answer: "The Nore works with mattresses 8-14 inches thick. The headboard is visible above mattresses up to 12 inches." },
    ],
    careInstructions: "Vacuum upholstery with a soft brush attachment monthly. Spot clean stains with upholstery cleaner. Tighten frame bolts every 6 months.",
    shippingMethod: "freight",
    shippingCost: 4900,
    freeShippingThreshold: 200000,
    roomType: "bedroom",
    translations: {
    ar: {
      name: "سرير نوري",
      seoTitle: "سرير نوري — لوح رأسي منجد | فورني",
      seoDescription: "سرير نوري يجمع بين لوح رأسي منجد وقاعدة منصة من الخشب الصلب. لا حاجة لصندوق نوابض. متوفر بمقاس كوين وكينغ.",
      description: "سرير نوري هو حيث يلتقي الناعم بالصلب. لوح رأسي منجد بتطريز عمودي يدعوك للاسترخاء والاستناد إلى الخلف، بينما توفر قاعدة المنصة من خشب الصنوبر الصلب دعماً قوياً دون الحاجة لصندوق نوابض.",
      highlights: ["لوح رأسي منجد بتطريز عمودي", "منصة شرائح من خشب الصنوبر الصلب — لا حاجة لصندوق نوابض", "متوفر بمقاس كوين وكينغ", "مساحة تخزين بارتفاع ٣٠ سم تحت السرير"],
      materials: ["منصة من خشب الصنوبر الصلب", "تنجيد من مزيج البوليستر", "حشوة إسفنجية عالية الكثافة"],
      faq: [{ question: "هل أحتاج إلى صندوق نوابض؟", answer: "لا، يستخدم سرير نوري قاعدة منصة بشرائح تدعم المرتبة مباشرة. لا حاجة لصندوق نوابض." }, { question: "ما هو سمك المرتبة الأنسب؟", answer: "يعمل سرير نوري مع المراتب بسماكة ٢٠-٣٥ سم. يظهر اللوح الرأسي فوق المراتب حتى سماكة ٣٠ سم." }],
      reviews: [{ text: "هذا السرير رائع. اللوح الرأسي المنجد يجعل القراءة في السرير مريحة جداً." }, { text: "سهل التركيب مع شخصين. شرائح المنصة صلبة — لا صرير على الإطلاق." }],
      careInstructions: "نظف التنجيد بالمكنسة الكهربائية بفرشاة ناعمة شهرياً. نظف البقع بمنظف تنجيد. أحكم ربط مسامير الإطار كل ٦ أشهر.",
      images: [
        { alt: "سرير نوري بتنجيد كريمي، منظر أمامي" },
        { alt: "سرير نوري، تفاصيل تطريز اللوح الرأسي" },
      ],
      colorVariants: [
        { name: "كريمي" },
        { name: "رمادي" },
      ],},
  },
  updatedAt: new Date("2026-05-21"),
  },
  {
    id: "p8",
    name: "Form Bookshelf",
    slug: "form-bookshelf",
    seoDescription:
      "The Form Bookshelf is a modular shelving system in powder-coated steel. Configure it vertically or horizontally to fit your space.",
    price: 34900,
    category: "office",
    subcategory: "Shelving & Storage",
    tags: ["new"],
    images: [
      { src: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1200&h=1200&fit=crop", alt: "Form Bookshelf in matte white, front view with books", width: 1200, height: 1200, isPrimary: true },
      { src: "https://images.unsplash.com/photo-1588279103152-51fc4322f836?w=1200&h=900&fit=crop", alt: "Form Bookshelf styling inspiration", width: 1200, height: 900 },
    ],
    colorVariants: [
      { name: "Matte White", hex: "#F0F0F0", images: [{ src: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1200&h=1200&fit=crop", alt: "Form Bookshelf in Matte White", width: 1200, height: 1200, isPrimary: true }] },
      { name: "Sage", hex: "#9CAF88", images: [{ src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=1200&fit=crop", alt: "Form Bookshelf in Sage", width: 1200, height: 1200, isPrimary: true }] },
      { name: "Terracotta", hex: "#CC4E2E", images: [{ src: "https://images.unsplash.com/photo-1588279103152-51fc4322f836?w=1200&h=900&fit=crop", alt: "Form Bookshelf in Terracotta", width: 1200, height: 1200, isPrimary: true }] },
    ],
    materials: ["Powder-coated steel"],
    dimensions: { width: 31.5, depth: 11.8, height: 70.9, unit: "in" },
    weight: 48,
    inStock: true,
    leadTime: "Ships in 3-5 business days",
    rating: 4.4,
    reviewCount: 45,
    reviews: [
      { rating: 5, text: "Love the modular design — bought two and configured them side by side.", author: "Olivia T.", date: "2026-04-28" },
      { rating: 4, text: "Looks great, easy to assemble. Shelves are a bit shallow for large art books.", author: "Daniel W.", date: "2026-04-10" },
    ],
    description: "The Form Bookshelf brings industrial elegance to your storage. Powder-coated steel shelves in a choice of modern colors create an airy, lightweight feel that lets your books and objects take center stage. Modular by design — add units as your collection grows.",
    highlights: ["Modular — connect multiple units", "Powder-coated steel resists scratches", "Adjustable shelf heights", "Wall anchor included for safety"],
    faq: [{ question: "Can I connect two Form Bookshelves side by side?", answer: "Yes, the Form Bookshelf includes connectors to securely join multiple units side by side or stacked vertically." }],
    careInstructions: "Dust with a dry cloth. For marks, use a damp cloth with mild soap and dry immediately.",
    shippingMethod: "parcel",
    shippingCost: 1999,
    freeShippingThreshold: 100000,
    roomType: "office",
    translations: {
    ar: {
      name: "رف كتب فورم",
      seoTitle: "رف كتب فورم — نظام رفوف معياري | فورني",
      seoDescription: "رف كتب فورم هو نظام رفوف معياري من الفولاذ بطلاء بودرة. يمكن تكوينه عمودياً أو أفقياً ليناسب مساحتك.",
      description: "يضفي رف كتب فورم أناقة صناعية إلى تخزينك. رفوف من الفولاذ بطلاء بودرة بألوان عصرية مختارة تخلق إحساساً خفيفاً ومتجدد الهواء يسمح لكتبك وأغراضك بأن تكون محور الاهتمام. تصميم معياري — أضف وحدات مع نمو مجموعتك.",
      highlights: ["تصميم معياري — يمكن توصيل وحدات متعددة", "فولاذ بطلاء بودرة مقاوم للخدوش", "ارتفاعات أرفف قابلة للتعديل", "مثبت حائط مرفق للسلامة"],
      materials: ["فولاذ بطلاء بودرة"],
      faq: [{ question: "هل يمكنني توصيل رفي فورم جنباً إلى جنب؟", answer: "نعم، يتضمن رف فورم موصلات لربط وحدات متعددة بشكل آمن جنباً إلى جنب أو مكدسة عمودياً." }],
      reviews: [{ text: "أحب التصميم المعياري — اشتريت اثنين ورتبتهما جنباً إلى جنب." }, { text: "يبدو رائعاً وسهل التركيب. الأرفف ضحلة قليلاً للكتب الفنية الكبيرة." }],
      careInstructions: "انفض الغبار بقطعة قماش جافة. للعلامات، استخدم قطعة قماش مبللة بصابون خفيف وجفف فوراً.",
      images: [
        { alt: "رف كتب فورم باللون الأبيض المطفي، منظر أمامي مع كتب" },
        { alt: "رف كتب فورم، إلهام للتنسيق" },
      ],
      colorVariants: [
        { name: "أبيض مطفي" },
        { name: "أخضر مريمية" },
        { name: "طيني" },
      ],},
  },
  updatedAt: new Date("2026-05-14"),
  },
];

export const bestsellerSlugs = ["oslo-sofa", "hemnes-8-drawer-dresser", "vreta-dining-table", "nore-bed-frame"];
export const newArrivalSlugs = ["oslo-sofa", "vreta-dining-table", "arkad-desk", "form-bookshelf"];

export function getProducts(): Product[] {
  return products;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => bestsellerSlugs.includes(p.slug));
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => newArrivalSlugs.includes(p.slug));
}

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getPriceRange(): PriceRange {
  const prices = products.map((p) => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

export function getFilteredProducts(filters: CatalogFilters): Product[] {
  let result = [...products];

  if (filters.category) {
    result = result.filter((p) => p.category === filters.category);
  }
  if (filters.minPrice !== undefined) {
    result = result.filter((p) => p.price >= filters.minPrice!);
  }
  if (filters.maxPrice !== undefined) {
    result = result.filter((p) => p.price <= filters.maxPrice!);
  }
  if (filters.inStock) {
    result = result.filter((p) => p.inStock);
  }
  if (filters.rating) {
    result = result.filter((p) => p.rating >= filters.rating!);
  }

  switch (filters.sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      result.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    default:
      result.sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount);
  }

  return result;
}
