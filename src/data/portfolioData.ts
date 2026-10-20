export interface TimelineEvent {
  id: string;
  category: "roots" | "vnit" | "deloitte";
  chapter: string;
  badge: string;
  title: string;
  description: string;
  dotColor: string;
  highlights?: { label: string; text: string; color: string }[];
  image?: string;
  imageCaption?: string;
  imageBadge?: string;
}

export interface MarketNode {
  key: string;
  code: string;
  tabLabel: string;
  tabSub: string;
  badge: string;
  title: string;
  description: string;
  metrics: { label: string; val: string }[];
  recognition: string;
}

export interface ArtifactItem {
  id: string;
  category: "awards" | "certs" | "journey" | "architecture";
  title: string;
  subtitle: string;
  image: string;
  badge: string;
}

export const PROFILE_DATA = {
  name: "Tanmay Ramrao Kadlag",
  shortName: "TANMAY KADLAG",
  role: "Machine Learning & Big Data Engineer",
  team: "Deloitte Technology & Transformation — iQ Innovation Team",
  location: "Pune, Maharashtra, India",
  email: "tanmayrkadlag@gmail.com",
  phone: "+91 9373791216",
  github: "https://github.com/takadlag",
  linkedin: "https://www.linkedin.com/in/tanmay-kadlag25",
  webHub: "https://linkedin-resume-hub.lovable.app/",
  heroMetrics: [
    { value: "500M+", label: "Records / Month", color: "text-cyan-400" },
    { value: "2TB+", label: "Delta Pipelines", color: "text-emerald-400" },
    { value: "30%", label: "Accuracy & Cycle Gain", color: "text-amber-400" },
    { value: "5", label: "APAC Markets Scaled", color: "text-white" },
    { value: "97%", label: "JNV Batch Topper", color: "text-purple-400" },
    { value: "6x", label: "2025 Honors & Awards", color: "text-rose-400" },
  ],
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "jnv",
    category: "roots",
    chapter: "CHAPTER 01 • CLASSES VI–X • JNV TAKLI DHOKESHWAR",
    badge: "97% Batch Topper • Taekwondo Silver",
    title: "The Crucible of Self-Reliance: From Sangamner to Navodaya",
    description:
      "Inspired in 4th/5th grade by my cousin sister at JNV Ahmednagar, I prepared relentlessly at Dere English Medium School (Sangamner) to earn one of 40 seats at Jawahar Navodaya Vidyalaya (JNV) Takli Dhokeshwar. Hostel life forged discipline through morning physical training, stage speaking at assemblies, evening sports (basketball, volleyball, kabaddi, kho-kho, judo), and resource gratitude during local water shortages.",
    dotColor: "bg-amber-400",
    image: "/images/journey/jnv-collage.png",
    imageCaption:
      "Formative Navodaya years at JNV Takli Dhokeshwar — 97% 10th Board Batch Topper, National Taekwondo Silver Medal, fine arts & campus discipline.",
    imageBadge: "JNV Batch Topper (97%)",
    highlights: [
      {
        label: "ACADEMIC PEAK",
        text: "Ranked consistently in the Top 3; competed in NSO, IMO, MTSE & NTSE; emerged as 10th Board Batch Topper with 97%.",
        color: "text-amber-300",
      },
      {
        label: "MARTIAL GRIT",
        text: "Represented JNV at the National Taekwondo Meet in 7th & 8th grades, winning the Silver Medal in 7th grade.",
        color: "text-cyan-300",
      },
      {
        label: "ART, GUITAR & YOGA",
        text: "Mastered landscape sketching, performed guitar at regional meets, and began Yoga in 8th grade inspired by Swami Vivekananda.",
        color: "text-emerald-300",
      },
    ],
  },
  {
    id: "jenesys",
    category: "roots",
    chapter: "CHAPTER 02 • NOVEMBER 2014 • TOKYO & JAPAN",
    badge: "International Youth Envoy",
    title: "A Journey Beyond Borders: Representing India in Japan (JENESYS 2.0)",
    description:
      "Selected in 9th grade to represent India in the JENESYS 2.0 (Japan-East Asia Network of Exchange for Students and Youths) program organized by the Japan International Cooperation Center (JICE). A transformative week in Japan exploring technological innovation, heritage temples, and warm host-family hospitality broadened my global perspective.",
    dotColor: "bg-rose-400",
    image: "/images/journey/jenesys-japan.png",
    imageCaption:
      "Representing India as a Youth Envoy in Tokyo & across Japan through JENESYS 2.0 (JICE 2014) — cultural diplomacy and advanced technology immersion.",
    imageBadge: "Japan Envoy (2014)",
  },
  {
    id: "vnit",
    category: "vnit",
    chapter: "CHAPTER 03 • 2018–2022 • VNIT NAGPUR",
    badge: "B.Tech EEE • Inter-NIT Yogi • E-Cell Leader",
    title: "Engineering Rigor, Leadership & Mindful Mastery at VNIT Nagpur",
    description:
      "Secured admission via JEE Main into the rigorous Electrical & Electronics Engineering (EEE) department at Visvesvaraya National Institute of Technology (VNIT), Nagpur (Enrollment No. BT18EE084), balancing engineering coursework with campus leadership and competitive yoga.",
    dotColor: "bg-purple-400",
    image: "/images/journey/vnit-convocation.png",
    imageCaption:
      "VNIT Nagpur B.Tech EEE Convocation & Campus Leadership across E-Cell, Consortium '19 CEO Competition, and Inter-NIT yoga.",
    imageBadge: "VNIT '22 Convocation",
    highlights: [
      {
        label: "E-CELL & CONSORTIUM '19",
        text: "Won 2nd Place in the CEO Competition; served as Event Manager for E-Cell VNIT & Consortium 2019 flagship events.",
        color: "text-purple-300",
      },
      {
        label: "INTER-NIT SILCHAR & GOLD",
        text: "Represented VNIT at the 2019 All India Inter-NIT Yoga Tournament (NIT Silchar) among 31 NITs; won Gold Medal at VNIT's Institute Gathering (IG).",
        color: "text-amber-300",
      },
      {
        label: "RESILIENCE & PLACEMENT",
        text: "Led campus yoga workshops during the COVID-19 lockdown, secured campus placement at Deloitte, and graduated on Sept 15, 2022.",
        color: "text-emerald-300",
      },
    ],
  },
  {
    id: "deloitte-mumbai",
    category: "deloitte",
    chapter: "CHAPTER 04 • JUL 2022 – MAY 2024 • DELOITTE MUMBAI",
    badge: "Analyst — Cloud, ML & Data Engineering",
    title: "Architecting Scale: Spark Pipelines & Automated Observability",
    description:
      "Preprocessed and feature-engineered massive FMCG datasets using PySpark and Scala to boost churn and sales recommendation accuracy by up to 30%. Automated Excel reporting in Scala (-30% manual effort), optimized Power BI backend queries (+25% refresh speed), streamlined Apache Spark ETL workflows (+40% data readiness), and built traffic-light model health monitoring systems.",
    dotColor: "bg-emerald-400",
    image: "/images/awards/move-the-dot-nov2025.png",
    imageCaption:
      "Production ETL optimization and automated observability engineering recognized with Deloitte 'Move the Dot' leadership honors.",
    imageBadge: "Move the Dot — Team",
  },
  {
    id: "deloitte-pune",
    category: "deloitte",
    chapter: "CHAPTER 05 • MAY 2024 – PRESENT (2026) • DELOITTE PUNE",
    badge: "ML & Big Data Engineer • iQ Innovation Team",
    title: "Industrializing AI Across Asia-Pacific & The iQ Nerve Centre",
    description:
      "Leading national-scale predictive pipeline industrialization on Azure Data Factory, Databricks Workflows, and Delta Lake. Processing 500M+ records/month across 2TB+ pipelines, cutting deployment cycles by 30%, lifting new clustering/ensemble model performance by 10%, increasing pipeline efficiency by 20%, reducing FMCG forecast errors by 15%, and spearheading multi-country ML rollouts across PH, ID, VN, and BD.",
    dotColor: "bg-cyan-400 shadow-[0_0_15px_#00f2fe]",
    image: "/images/awards/unilever-uniops-cert.jpeg",
    imageCaption:
      "Unilever UniOps Global Leadership Recognition awarded by Shilpa Murthy for outstanding commitment to the multi-country iQ Project.",
    imageBadge: "UniOps Client Honor",
  },
];

export const APAC_MARKETS: MarketNode[] = [
  {
    key: "ph",
    code: "NODE 01 // MAY 2025",
    tabLabel: "Philippines (PH) — Nexus Neural Net",
    tabSub: "text-cyan-300",
    badge: "PHILIPPINES (PH) MARKET // INDUSTRIALIZED MAY 2025",
    title: "Legacy Rule Engine → Nexus Neural Network Model",
    description:
      "Collaborated within the iQ Innovation Team to upgrade legacy recommendation logic to a Neural Network-based Nexus Model and coordinated with the BAU team for full production industrialization in May 2025.",
    metrics: [
      { label: "Hit Rate Improvement", val: "+10%" },
      { label: "Line & Value Coverage", val: "100% Retained" },
      { label: "Architecture", val: "Neural Network (Nexus)" },
    ],
    recognition:
      "Earned Unilever UniOps Client Recognition & Deloitte 'Move the Dot - Team' Award.",
  },
  {
    key: "id",
    code: "NODE 02 // 2025",
    tabLabel: "Indonesia (ID) — Hybrid Lasso SOQ",
    tabSub: "text-emerald-300",
    badge: "INDONESIA (ID) MARKET // SOQ OPTIMIZATION",
    title: "Hybrid Statistical + Business Rules + Lasso Regression SOQ",
    description:
      "Scaled Suggested Order Quantity (SOQ) calculation for Indonesia from rule-based logic to a hybrid approach integrating statistical modeling, business constraints, and a Lasso Regression model.",
    metrics: [
      { label: "Model Paradigm", val: "Lasso Regression + Hybrid" },
      { label: "MLOps Integration", val: "Continuous Optimization" },
      { label: "Applied Learning", val: "Stanford ML Specialization" },
    ],
    recognition:
      "Recognized by client leadership for successful onboarding of ID onto the new SOQ logic.",
  },
  {
    key: "vn",
    code: "NODE 03 // 2025",
    tabLabel: "Vietnam (VN) — Time-Series SOQ",
    tabSub: "text-amber-300",
    badge: "VIETNAM (VN) MARKET // TIME-SERIES FORECASTING",
    title: "Exponential Smoothing Time-Series SOQ Engine",
    description:
      "Enhanced SOQ calculation for Vietnam by transitioning from simple rule-based logic to a hybrid framework combining statistical modeling, business rules, and Time-Series Forecasting (Exponential Smoothing).",
    metrics: [
      { label: "Forecasting Core", val: "Exponential Smoothing" },
      { label: "Architecture", val: "Statistical + Business Rules" },
      { label: "Deployment Status", val: "Full-Scale Live Ops" },
    ],
    recognition:
      "Part of the multi-country pilot recognized with the June 2025 'Move the Dot - Team' Award.",
  },
  {
    key: "bd",
    code: "NODE 04 // TRACK LEAD",
    tabLabel: "Bangladesh (BD) — SOQ & MLOps",
    tabSub: "text-purple-300",
    badge: "BANGLADESH (BD) MARKET // TRACK LEAD",
    title: "Leading End-to-End BD SOQ Track & MLOps Onboarding",
    description:
      "Actively leading the Bangladesh SOQ Optimization Track across internal Data Engineering and Data Science teams, applying cross-market learnings from Vietnam and Indonesia while onboarding BD Nexus to the MLOps Dashboard.",
    metrics: [
      { label: "Role", val: "Track Lead (DE + DS)" },
      { label: "Observability", val: "BD Nexus MLOps Onboarded" },
      { label: "Pipeline Scale", val: "ADF + Databricks Workflows" },
    ],
    recognition:
      "Driving cross-functional execution across Data Engineers, Data Scientists, and client teams.",
  },
  {
    key: "nerve",
    code: "NODE 05 // FLAGSHIP TRACK",
    tabLabel: "Global iQ Nerve Centre Platform",
    tabSub: "text-rose-300",
    badge: "HIGH-PRIORITY CLIENT INITIATIVE // 2026",
    title: "iQ Nerve Centre — Unified MLOps & Executive Command",
    description:
      "Streamlining and transforming the legacy MLOps dashboard into a unified one-stop solution for business insights, stakeholder self-service, and real-time model performance monitoring.",
    metrics: [
      { label: "Deployment Cycle Cut", val: "30% Faster on ADF" },
      { label: "Forecast Error Reduction", val: "-15% via ML" },
      { label: "Data Volume", val: "500M+ Rows / 2TB+ Delta" },
    ],
    recognition:
      "Collaborating across Client, Data Scientists, Front-End Team, and Data Engineers.",
  },
];

export const MEDALLION_LAYERS = {
  bronze: {
    title: "01. BRONZE",
    subtitle: "Raw S3 Delta",
    detail:
      "BRONZE LAYER (Raw Delta): Ingests raw post-merger CSVs from AWS S3 Landing Zone. Preserves historical archive, as-is data, and appends metadata audit columns for full lineage.",
  },
  silver: {
    title: "02. SILVER",
    subtitle: "CDC & Validated",
    detail:
      "SILVER LAYER (Cleaned & Validated Delta): Executes PySpark filtering, deduplication, schema enforcement, type casting, and Change Data Capture (CDC) upserts via Delta Lake MERGE INTO.",
  },
  gold: {
    title: "03. GOLD",
    subtitle: "Star Schema & Genie",
    detail:
      "GOLD LAYER (Star Schema & AI BI): Models high-performance Fact (Sales) and Dimension (Customer, Product) tables powering Databricks SQL dashboards (119.93B revenue, 39.03M quantity) & Databricks Genie natural-language queries.",
  },
};

export interface FlagshipProject {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  role: string;
  architectureStages: { name: string; desc: string; tech: string }[];
  dataFlow: string;
  technologies: string[];
  decisions: string[];
  results: { label: string; value: string; desc: string }[];
  primaryImage: string;
  secondaryImage?: string;
  imageCaption: string;
}

export const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: "medallion-lakehouse",
    tag: "DATA LAKEHOUSE & CDC PIPELINES",
    title: "Post-Merger FMCG Medallion Lakehouse",
    subtitle: "Enterprise Delta Lake on Databricks with CDC Ingestion & AI BI",
    summary:
      "Architected an end-to-end ACID-compliant Medallion Lakehouse on Databricks to consolidate post-merger disparate sales records across cloud storage, enabling sub-second dimensional queries and natural-language executive exploration via Databricks Genie.",
    problem:
      "Following a major post-merger consolidation simulation, sales, inventory, and customer records were isolated across uncoordinated AWS S3 CSV buckets. Downstream business users faced heavy reporting delays, lack of idempotency during updates, and inconsistent historical backfills.",
    role: "Lead Data Engineer • Architected the 3-tier Medallion architecture, PySpark Delta Lake transformations, Change Data Capture (CDC) upsert logic, and star schema modeling.",
    architectureStages: [
      {
        name: "Bronze (Landing Zone)",
        desc: "Ingests raw post-merger CSV files from AWS S3. Maintains strict historical append-only archives with file origin and timestamp audit metadata.",
        tech: "AWS S3 • PySpark • Auto Loader",
      },
      {
        name: "Silver (Curated & Validated)",
        desc: "Executes data cleansing, type casting, duplicate elimination, and Change Data Capture (CDC) upserts using Delta Lake MERGE INTO statements.",
        tech: "Delta Lake • PySpark • CDC Logic",
      },
      {
        name: "Gold (Dimensional Modeling)",
        desc: "Builds high-performance Star Schema with Fact (Sales) and Dimensions (Customer, Product, Store). Powers Databricks SQL dashboards & Genie natural-language BI.",
        tech: "Databricks SQL • Genie AI • Star Schema",
      },
    ],
    dataFlow:
      "Raw CSVs in Amazon S3 Landing Zone → PySpark Ingestion to Bronze Delta → Automated Schema Enforcement & CDC Upserts into Silver Delta → Aggregation & Star Schema Modeling in Gold Delta → Databricks SQL & Genie Query Serving.",
    technologies: [
      "Databricks",
      "Delta Lake",
      "Apache Spark",
      "PySpark",
      "AWS S3",
      "CDC (MERGE INTO)",
      "Databricks Genie",
      "Star Schema",
    ],
    decisions: [
      "Enforced schema validation at the Bronze-to-Silver boundary to catch schema drift from merged entities before corrupting analytics.",
      "Optimized Silver-to-Gold upsert performance by applying partition pruning and Z-Ordering on primary customer and product keys.",
      "Introduced Databricks Genie to allow non-technical commercial directors to query 119B+ revenue data in natural language without writing SQL.",
    ],
    results: [
      {
        label: "Unified Revenue Analyzed",
        value: "119.93B",
        desc: "Total revenue unified across merged entities in Databricks SQL.",
      },
      {
        label: "Product Units Tracked",
        value: "39.03M",
        desc: "Granular sales volume cataloged across multi-category product lines.",
      },
      {
        label: "ACID Idempotency",
        value: "100%",
        desc: "Zero duplicate records across historical backfills & daily incremental updates.",
      },
    ],
    primaryImage: "/images/projects/databricks-medallion.jpeg",
    secondaryImage: "/images/projects/databricks-sales-dashboard.png",
    imageCaption:
      "Production Databricks Medallion Architecture Blueprint & Live Sales Dashboard Tracking 119.93B Revenue.",
  },
  {
    id: "apac-nerve-centre",
    tag: "MULTI-MARKET ML INDUSTRIALIZATION",
    title: "APAC iQ Nerve Centre & Model Industrialization",
    subtitle: "Scaling ML Forecasting & Recommendation Engines Across 5 Asian Markets",
    summary:
      "Engineered and industrialized production predictive pipelines on Azure Data Factory and Databricks Workflows across 5 Asia-Pacific markets (PH, VN, ID, BD, TH), powering autonomous FMCG replenishment for global enterprise operations.",
    problem:
      "Enterprise FMCG distributors across Asia-Pacific relied on outdated, fragmented heuristic ordering rules that caused high stock-out rates and uneven supply chain lead times. The business required localized, algorithmic ordering models deployed without operational downtime.",
    role: "ML & Big Data Engineer • Deloitte iQ Innovation Team; Track Lead for Bangladesh SOQ & MLOps; coordinated with business analysts and client leadership across global time zones.",
    architectureStages: [
      {
        name: "Pipeline Ingestion & Preprocessing",
        desc: "Automated ADF pipelines extracting 500M+ monthly distributor records with automated validation and transformation.",
        tech: "Azure Data Factory • ADLS Gen2 • PySpark",
      },
      {
        name: "Market-Specific ML Modeling",
        desc: "Parallelized Databricks workflows training Nexus Neural Networks (PH), Exponential Smoothing (VN), and Lasso Regression (ID).",
        tech: "Databricks Workflows • PyTorch / Scikit-Learn",
      },
      {
        name: "Command & Control Dashboard",
        desc: "Unified executive telemetry monitoring model hit rates, forecast error reduction, and pipeline SLA execution.",
        tech: "MLOps Platform • Power BI • Looker",
      },
    ],
    dataFlow:
      "Distributor ERPs & POS Ingestion → Azure Data Factory Scheduled Triggers → Delta Lake Transformations → Market Model Inference Jobs → Suggested Order Feeds Dispatched to Field Distributors.",
    technologies: [
      "Azure Data Factory (ADF)",
      "Databricks Workflows",
      "PySpark",
      "Delta Lake",
      "Neural Networks (Nexus)",
      "Exponential Smoothing",
      "Lasso Regression",
      "MLOps Telemetry",
    ],
    decisions: [
      "Engineered flexible pipeline templates that accommodate market-specific algorithmic variations while sharing centralized data governance.",
      "Implemented strict data freshness validation gates to prevent model inference from triggering if upstream distributor syncs were incomplete.",
      "Partnered directly with BAU client operations to achieve zero-downtime cutovers from legacy rule engines to neural reordering.",
    ],
    results: [
      {
        label: "Deployment Cycle Time",
        value: "30% Faster",
        desc: "Accelerated pipeline execution and model deployment cycles on ADF.",
      },
      {
        label: "Hit Rate Improvement",
        value: "+10%",
        desc: "Achieved in the Philippines market upon industrializing the Nexus model.",
      },
      {
        label: "Monthly Ingestion Scale",
        value: "500M+ Rows",
        desc: "Processed across 2TB+ Delta lakehouse pipelines with zero data loss.",
      },
    ],
    primaryImage: "/images/awards/unilever-award-ceremony.jpeg",
    secondaryImage: "/images/awards/move-the-dot-jun2025.png",
    imageCaption:
      "Unilever UniOps Global Leadership Recognition & Deloitte 'Move the Dot - Team' Honor for Multi-Country Execution.",
  },
  {
    id: "soq-optimization",
    tag: "ALGORITHMIC FORECASTING & OBSERVABILITY",
    title: "SOQ Optimization & Automated Model Observability",
    subtitle: "Hybrid Statistical/ML Reordering with Telemetry & Drift Detection",
    summary:
      "Designed hybrid Suggested Order Quantity (SOQ) reordering engines blending statistical models, regularized regression, and business guardrails, integrated with automated model health telemetry for real-time drift monitoring.",
    problem:
      "Distributor orders swung wildly between over-stocking and stock-outs due to volatile promotion cycles and lack of visibility into model accuracy degradation over time.",
    role: "Algorithm & Pipeline Engineer • Developed feature engineering pipelines, Lasso regression and Exponential Smoothing modules, and traffic-light model health monitoring.",
    architectureStages: [
      {
        name: "Feature Extraction & Lag Engineering",
        desc: "Generated rolling window averages, seasonal demand spikes, and promotion elasticity features from historical distributor orders.",
        tech: "PySpark • Window Functions • Feature Store",
      },
      {
        name: "Hybrid Optimization Core",
        desc: "Combined statistical baseline smoothing with regularized Lasso regression and client-defined inventory minimums.",
        tech: "Lasso Regression • Exponential Smoothing",
      },
      {
        name: "Automated Observability",
        desc: "Continuously tracks Mean Absolute Percentage Error (MAPE), distribution drift, and latency anomalies with automated alerting.",
        tech: "MLOps Platform • Alerting Hooks • Databricks",
      },
    ],
    dataFlow:
      "Historical Orders & Stock Data → Feature Engineering Engine → Hybrid SOQ Computation → Business Guardrail Verification → Distributor ERP Output & Real-Time Observability Logging.",
    technologies: [
      "PySpark",
      "Lasso Regression",
      "Exponential Smoothing",
      "Statistical Modeling",
      "Databricks Workflows",
      "MLOps Telemetry",
      "Delta Lake",
    ],
    decisions: [
      "Applied Lasso Regression to prevent multi-collinearity among closely related seasonal promotional flags.",
      "Embedded hard non-negative and warehouse-capacity guardrails to ensure algorithmic recommendations remain physically executable.",
      "Built automated data-drift tripwires that alert engineering whenever distributor ordering variance exceeds statistical thresholds.",
    ],
    results: [
      {
        label: "Forecast Error Reduction",
        value: "15%",
        desc: "Lower forecast error achieved compared to legacy heuristic reordering.",
      },
      {
        label: "Markets Optimized",
        value: "4 Countries",
        desc: "Successfully deployed across Indonesia, Vietnam, Philippines & Bangladesh.",
      },
      {
        label: "Operational Observability",
        value: "24/7 Live",
        desc: "Continuous model health monitoring with traffic-light diagnostic alerts.",
      },
    ],
    primaryImage: "/images/awards/stanford-ml-specialization.png",
    secondaryImage: "/images/projects/gcp-looker-dashboard.png",
    imageCaption:
      "Stanford DeepLearning.AI Foundations Applied to Production SOQ Optimization & Model Observability.",
  },
];

export const TECH_STACK = [
  {
    category: "Programming & Distributed Processing",
    color: "text-cyan-400",
    skills: [
      "Python (5★ HackerRank)",
      "PySpark",
      "Apache Spark",
      "Scala",
      "SQL (3★ HackerRank)",
      "Spark SQL",
      "C++ / C",
    ],
  },
  {
    category: "Data Platforms & Lakehouse Architecture",
    color: "text-emerald-400",
    skills: [
      "Databricks Lakehouse",
      "Delta Lake (ACID & CDC)",
      "Medallion (Bronze/Silver/Gold)",
      "AWS S3 Landing Zone",
      "Azure Data Lake Storage (ADLS Gen2)",
      "Apache Parquet",
    ],
  },
  {
    category: "Cloud & Orchestration",
    color: "text-blue-400",
    skills: [
      "Azure Data Factory (ADF)",
      "Databricks Workflows",
      "Google Cloud Platform (GCP)",
      "Google BigQuery",
      "Cloud Functions",
      "Git & CI/CD Pipelines",
    ],
  },
  {
    category: "Machine Learning & MLOps",
    color: "text-amber-400",
    skills: [
      "Nexus Neural Networks",
      "Lasso Regression",
      "Exponential Smoothing Time-Series",
      "Clustering & Ensembles",
      "MLOps Telemetry & Monitoring",
      "Automated Retraining Pipelines",
    ],
  },
  {
    category: "Data Modeling, Analytics & BI",
    color: "text-purple-400",
    skills: [
      "Star & Snowflake Dimensional Schemas",
      "CDC Upserts (MERGE INTO)",
      "Power BI & DAX Optimization",
      "Looker Studio Live",
      "Databricks Genie (Natural-Language BI)",
      "Automated Observability Dashboards",
    ],
  },
];

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image?: string;
  badge?: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Machine Learning Specialization (3 Courses)",
    issuer:
      "Stanford University & DeepLearning.AI (Andrew Ng) — Supervised, Unsupervised & Advanced Learning Algorithms",
    date: "Aug 2025",
    image: "/images/awards/stanford-ml-specialization.png",
    badge: "Stanford DeepLearning.AI",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft Corporation • Credential ID: FBDAFE2BFAE264F3",
    date: "Sep 2025",
    credentialId: "FBDAFE2BFAE264F3",
    image: "/images/awards/azure-ai-900.png",
    badge: "Microsoft Certified",
  },
  {
    title: "Databricks Accredited Databricks Fundamentals",
    issuer: "Databricks Academy — Lakehouse, Delta Lake & Apache Spark Foundations",
    date: "Jul 2025",
    image: "/images/awards/databricks-fundamentals.png",
    badge: "Databricks Accredited",
  },
  {
    title: "HackerRank 5-Star Python & LeetCode Rewind",
    issuer: "HackerRank (5★ Python, 3★ SQL, 2★ C++) & LeetCode 70.6% Acceptance",
    date: "2025",
    image: "/images/awards/hackerrank-leetcode-2025.png",
    badge: "Competitive Algorithms",
  },
  {
    title: "IBM Data Science Suite & LinkedIn AI Foundations",
    issuer:
      "Python for Data Science, AI & Dev • Data Science Methodology • Tools for Data Science",
    date: "2024",
    badge: "IBM Professional",
  },
];

export const ARTIFACT_GALLERY: ArtifactItem[] = [
{
    id: "unilever-cert",
    category: "awards",
    title: "Unilever UniOps Certificate of Achievement",
    subtitle: "Awarded by Shilpa Murthy (Global Technology Director) for outstanding commitment to the iQ Project.",
    image: "/images/awards/unilever-uniops-cert.jpeg", // check if your file is .jpeg or .jpg
    badge: "Client Recognition",
  },
  {
    id: "unilever-photo",
    category: "awards",
    title: "Receiving Client Recognition in Person",
    subtitle: "Honored for Nexus Model industrialization (Philippines) and hybrid SOQ onboarding (Indonesia).",
    image: "/images/awards/unilever-award-ceremony.jpeg", // check if your file is .jpeg or .jpg
    badge: "Leadership Moment",
  },
  {
    id: "mtd-jun",
    category: "awards",
    title: "Deloitte 'Move the Dot - Team' Award (June 2025)",
    subtitle: "Recognized for Change & Innovation, Collaboration, Client Centricity, and Commitment to People across VN, TH, ID, and PH.",
    image: "/images/awards/move-the-dot-jun2025.png",
    badge: "Jun 23, 2025",
  },
  {
    id: "mtd-nov",
    category: "awards",
    title: "Deloitte 'Move the Dot - Team' Award (November 2025)",
    subtitle: "Second consecutive Dot of Fame recognition for flawless execution on Team iQ.",
    image: "/images/awards/move-the-dot-nov2025.png",
    badge: "Nov 8, 2025",
  },
  {
    id: "stanford-ml",
    category: "certs",
    title: "Stanford & DeepLearning.AI — Machine Learning Specialization",
    subtitle: "Completed Supervised ML (May 2025), Advanced Learning Algorithms (Jul 2025), and Unsupervised/RL (Aug 2025) under Andrew Ng.",
    image: "/images/awards/stanford-ml-specialization.png",
    badge: "Aug 3, 2025",
  },
  {
    id: "azure-ai900",
    category: "certs",
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    subtitle: "Credential ID: FBDAFE2BFAE264F3 • Certification No: 16B84D-Y7E628.",
    image: "/images/awards/azure-ai-900.png",
    badge: "Sep 7, 2025",
  },
  {
    id: "databricks-cert",
    category: "certs",
    title: "Databricks Accredited Databricks Fundamentals",
    subtitle: "Issued by Databricks Academy verifying Lakehouse, Spark, and Delta Lake mastery.",
    image: "/images/awards/databricks-fundamentals.png",
    badge: "Jul 21, 2025",
  },
  {
    id: "coding-profiles",
    category: "certs",
    title: "HackerRank Badges & LeetCode 2025 Rewind",
    subtitle: "5-Star Python, 3-Star SQL, 2-Star C++ on HackerRank & 70.6% Acceptance Rate across 51 submissions on LeetCode.",
    image: "/images/awards/hackerrank-leetcode-2025.png",
    badge: "Competitive Coding",
  },
  {
    id: "medallion-diagram",
    category: "architecture",
    title: "Databricks Medallion Architecture Pipeline",
    subtitle: "AWS S3 Landing Zone → Bronze (Raw) → Silver (Cleaned & CDC MERGE INTO) → Gold (Star Schema) → Databricks SQL & Genie.",
    image: "/images/projects/databricks-medallion.jpeg",
    badge: "Architecture Blueprint",
  },
  {
    id: "databricks-dash",
    category: "architecture",
    title: "Databricks SQL Sales Insights Dashboard",
    subtitle: "Tracking 119.93B Total Revenue and 39.03M Total Quantity with category heatmaps and top product rankings.",
    image: "/images/projects/databricks-sales-dashboard.png",
    badge: "119.93B Revenue",
  },
  {
    id: "gcp-dash",
    category: "architecture",
    title: "GCP & Looker Studio Placement Analytics Canvas",
    subtitle: "Analyzing 5,000 students (86.06% placed, ₹16.15L avg salary) surfacing the 94% → 73% Backlog Cliff Effect.",
    image: "/images/projects/gcp-looker-dashboard.png",
    badge: "5,000+ Records",
  },
  {
    id: "jnv-collage",
    category: "journey",
    title: "Navodaya: The Years That Shaped Me (Classes VI–X)",
    subtitle: "JNV Takli Dhokeshwar — 97% Batch Topper, National Taekwondo Silver Medalist, Guitar & Landscape Sketching.",
    image: "/images/journey/jnv-collage.png", // changed from .jpg to .png
    badge: "JNV Topper (97%)",
  },
  {
    id: "jenesys-collage",
    category: "journey",
    title: "JENESYS 2.0 Youth Exchange — Representing India in Japan",
    subtitle: "Selected in 9th grade (Nov 2014) by JICE for cross-cultural and technological immersion across Japan.",
    image: "/images/journey/jenesys-japan.png", // changed from .jpg to .png
    badge: "Japan Envoy (2014)",
  },
  {
    id: "vnit-collage",
    category: "journey",
    title: "VNIT Nagpur B.Tech EEE & 20th Convocation (Sept 15, 2022)",
    subtitle: "Campus life across Axis, Aarohi, Consortium '19, E-Cell CEO Runner-Up, and convocation ceremony.",
    image: "/images/journey/vnit-convocation.png", // changed from .jpg to .png
    badge: "VNIT '22",
  },
  {
    id: "yoga-collage",
    category: "journey",
    title: "All India Inter-NIT Yoga Tournament (NIT Silchar) & IG Gold",
    subtitle: "Representing VNIT Nagpur among 31 NITs (Oct 2019), advanced Chakrasana progression, and campus mindfulness workshops.",
    image: "/images/journey/yoga-silchar-stage.png", // changed from .jpg to .png
    badge: "Inter-NIT & IG Gold",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Awarded to Tanmay Kadlag as a symbol of your outstanding commitment and invaluable contribution towards iQ Project.",
    name: "Shilpa Murthy",
    role: "Global Technology Director",
    org: "Unilever UniOps",
    color: "border-amber-500/40",
  },
  {
    quote:
      "Incredible achievement with the iQ recommendation engine... launching pilot phase in Vietnam, Thailand, Indonesia, and the Philippines to full-scale live operations.",
    name: "Rohan Dawar & Pramod Jain",
    role: "Project Leadership",
    org: "Deloitte",
    color: "border-emerald-500/40",
  },
  {
    quote:
      "Unwavering mentorship, collaboration, and technical guidance that elevated our entire team's delivery and growth.",
    name: "Sudhanva Gudi, Swati Kumari & Sumedh Kannalwar",
    role: "Peer Recognition — Walk the Dot",
    org: "Deloitte",
    color: "border-cyan-500/40",
  },
];