export type AxisDetail = {
  slug: string;
  order: number;
  systemTitleAr: string;
  systemTitleEn: string;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  paragraphsAr: string[];
  paragraphsEn: string[];
  imageUrl: string;
  keywords: string[];
};

export type SystemPointIcon = "leaf" | "wave" | "spark" | "network";

export type SmartSystemPoint = {
  point: string;
  pointEn: string;
  idea: string;
  ideaEn: string;
  goal: string;
  goalEn: string;
  icon: SystemPointIcon;
};

export const axes: AxisDetail[] = [
  {
    slug: "axis-1",
    order: 1,
    systemTitleAr: "نظام مراقبة بيئية ذكي",
    systemTitleEn: "Smart Environmental Monitoring System",
    titleAr: "المحور الأول: التغير المناخي وفقدان التنوع البيولوجي",
    titleEn: "Axis 1: Climate Change and Biodiversity Loss",
    summaryAr:
      "يراقب النظام الذكي المؤشرات البيئية الحساسة ويحوّلها إلى إنذارات مبكرة تساعد الجهات المختصة في حماية الحياة البرية قبل وقوع الأزمات.",
    summaryEn:
      "The smart system tracks fragile environmental indicators and turns them into early warnings that help authorities protect biodiversity before crises unfold.",
    paragraphsAr: [
      "يعمل النظام الذكي على مراقبة مؤشرات التغير المناخي والتنوع البيولوجي من خلال تحليل بيانات بيئية حية تُجمع من الحساسات الميدانية والأقمار الصناعية.",
      "يستطيع النظام تحديد المناطق المهددة بفقدان الحياة البرية أو ارتفاع درجات الحرارة، وإرسال تنبيهات فورية للجهات المختصة.",
      "بهذه الطريقة يتحول الذكاء الاصطناعي إلى عينٍ تراقب الأرض وتُسهم في تقليل الخطر قبل حدوثه.",
    ],
    paragraphsEn: [
      "The smart system monitors indicators of climate change and biodiversity loss by analyzing live environmental data collected from sensors and satellites.",
      "It identifies areas at risk of rising temperatures or wildlife loss and sends instant alerts to environmental authorities.",
      "In this way, artificial intelligence becomes an eye that watches over the Earth, helping prevent crises before they occur.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    keywords: ["استشعار", "أقمار صناعية", "تنبيه مبكر"],
  },
  {
    slug: "axis-2",
    order: 2,
    systemTitleAr: "نظام زراعة ذكي",
    systemTitleEn: "Smart Regeneration System",
    titleAr: "المحور الثاني: الوعي البيئي ومسؤولية الإنسان",
    titleEn: "Axis 2: Environmental Awareness and Human Responsibility",
    summaryAr:
      "يمنح المنصة لكل فرد ليتتبع أثره البيئي اليومي ويحوّل المراقبة الشخصية إلى التزام إيجابي تجاه الطبيعة.",
    summaryEn:
      "The platform lets every individual track a daily footprint and turns personal monitoring into a positive commitment to nature.",
    paragraphsAr: [
      "يقدّم النظام الذكي منصة تفاعلية تُمكّن الأفراد من متابعة أثرهم البيئي اليومي.",
      "يُظهر للمستخدمين كيف يستهلكون الطاقة والماء، ويقترح خطوات صغيرة لتقليل الأثر الكربوني.",
      "لا يهدف إلى المراقبة، بل إلى بناء وعيٍ شخصي يجعل كل إنسان شريكًا في حماية الكوكب.",
    ],
    paragraphsEn: [
      "The smart system offers an interactive platform that allows individuals to track their daily environmental footprint.",
      "It displays energy and water usage patterns and suggests small steps to reduce carbon impact.",
      "Its goal is not surveillance, but building personal awareness that makes every person a partner in protecting the planet.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
    keywords: ["منصة تفاعلية", "أثر كربوني", "تغيير سلوك"],
  },
  {
    slug: "axis-3",
    order: 3,
    systemTitleAr: "نظام تحليل بيانات بيئية",
    systemTitleEn: "Environmental Data Intelligence",
    titleAr: "المحور الثالث: دور جامعة صحار في مواجهة الأزمات البيئية",
    titleEn: "Axis 3: Sohar University’s Role in Addressing Environmental Challenges",
    summaryAr:
      "مشروع بحثي تطبيقي يدمج بين خبرة الجامعة الأكاديمية وحماس الطلبة لصياغة حلول بيئية قابلة للتنفيذ.",
    summaryEn:
      "An applied research project that merges academic expertise with student drive to craft actionable environmental solutions.",
    paragraphsAr: [
      "يُعد هذا النظام ثمرة من ثمار البحث العلمي بجامعة صحار، حيث يجمع بين التقنية والوعي البيئي في مشروعٍ تطبيقي يخدم المجتمع.",
      "تم تصميمه بإشراف أكاديمي وبمشاركة طلابية، ليكون نموذجًا لكيفية توظيف الذكاء الاصطناعي في خدمة الاستدامة.",
      "ومن خلاله، تُثبت الجامعة أن الفكر العلمي يمكن أن يتحول إلى أثرٍ واقعيٍّ يحمي البيئة ويُلهم الأجيال القادمة.",
    ],
    paragraphsEn: [
      "This system is a product of scientific research at Sohar University, combining technology and environmental awareness in a practical, community-serving project.",
      "It was designed under academic supervision and student participation, serving as a model of how AI can support sustainability.",
      "Through it, the university proves that scientific thought can become tangible impact that protects the environment and inspires future generations.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    keywords: ["بحث علمي", "جامعة صحار", "استدامة"],
  },
  {
    slug: "axis-4",
    order: 4,
    systemTitleAr: "نظام تنبؤ بيئي وتخطيط مستدام",
    systemTitleEn: "Predictive Sustainability Engine",
    titleAr: "المحور الرابع: النظام الذكي – الحل المتكامل",
    titleEn: "Axis 4: The Smart System – The Integrated Solution",
    summaryAr:
      "حل متكامل يمنع الخطر قبل وقوعه ويحوّل البيانات البيئية إلى سياسات واستراتيجيات جاهزة للتنفيذ.",
    summaryEn:
      "An end-to-end solution that prevents risk before it unfolds by turning environmental data into ready-to-act strategies.",
    paragraphsAr: [
      "يرتكز النظام الذكي على فكرة واحدة: أن الوقاية أفضل من العلاج.",
      "فهو لا ينتظر حدوث التلوث أو التدهور البيئي، بل يتنبأ به قبل وقوعه.",
      "من خلال تحليل البيانات البيئية والذكاء الاصطناعي، يمكن للنظام اقتراح سياسات واستراتيجيات واقعية للحد من الخطر.",
      "إنه جسر بين العلم والطبيعة، وبين الإنسان ومستقبله.",
    ],
    paragraphsEn: [
      "The smart system is built on one core principle: prevention is better than cure.",
      "It doesn’t wait for pollution or degradation to occur — it predicts them before they happen.",
      "Through environmental data analysis and AI, it can propose realistic policies and strategies to reduce risks.",
      "It is a bridge between science and nature, between humanity and its future.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    keywords: ["تنبؤ", "استباق المخاطر", "سياسات"],
  },
];

export const smartSystemPoints: SmartSystemPoint[] = [
  {
    point: "المراقبة الذكية",
    pointEn: "Smart Monitoring",
    idea: "استخدام أجهزة استشعار وذكاء اصطناعي لمتابعة الحرارة، الرطوبة، وجود الأنواع الحيوية.",
    ideaEn:
      "Sensors and AI nodes capture temperature, humidity, and species sightings across habitats.",
    goal: "رصد التغيرات البيئية بشكل لحظي.",
    goalEn: "Observe environmental shifts the moment they occur.",
    icon: "leaf",
  },
  {
    point: "التحليل التنبؤي",
    pointEn: "Predictive Analysis",
    idea: "تحليل البيانات المتراكمة للتنبؤ بالكوارث البيئية أو انقراض الأنواع.",
    ideaEn:
      "Analyze accumulated datasets to forecast environmental disasters or extinctions.",
    goal: "اتخاذ قرارات استباقية للحد من التدهور.",
    goalEn: "Enable proactive decisions that minimize degradation.",
    icon: "wave",
  },
  {
    point: "الحلول التفاعلية",
    pointEn: "Interactive Solutions",
    idea: "اقتراح استراتيجيات فورية مثل إعادة الزراعة أو حماية مناطق معينة.",
    ideaEn:
      "Recommend immediate strategies such as restorative planting or zoning protection.",
    goal: "تعزيز الاستجابة السريعة للأزمات.",
    goalEn: "Boost rapid, community-ready responses to crises.",
    icon: "spark",
  },
  {
    point: "التكامل الجامعي والمجتمعي",
    pointEn: "University & Community Integration",
    idea: "إشراك طلبة جامعة صحار والباحثين في جمع وتحليل البيانات.",
    ideaEn:
      "Engage Sohar University students and researchers in data collection and analysis.",
    goal: "تحويل المعرفة الأكاديمية إلى أثر بيئي فعلي.",
    goalEn: "Translate academic knowledge into measurable environmental impact.",
    icon: "network",
  },
];
