export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  tags: string[];
  role: string;
  summary: string;
  scope: string[];
  contribution: string[];
  deliveryInterface: string[];
  confidential?: boolean;
}

export interface Experience {
  id: string;
  period: string;
  organization: string;
  position: string;
  scope: string;
  contributions: string[];
}

export interface Capability {
  id: string;
  index: string;
  title: string;
  tagline: string;
  items: string[];
  value: string;
  filter: ('Commercial' | 'Engineering' | 'Execution' | 'Quality')[];
}

// Base-aware URL for the resume PDF in `public/`.
// With `base: '/portfolio/'` this resolves to `/portfolio/Vijayakumar_Aathipazham_Resume.pdf`
// in the static build, so downloads keep working on GitHub Pages project sites.
export const RESUME_URL = `${import.meta.env.BASE_URL}Vijayakumar_Aathipazham_Resume.pdf`;

export const PROFILE = {
  name: 'Vijayakumar Aathipazham',
  role: 'Project Engineer — Costing, Estimation & EPC Execution',
  location: 'Chennai, Tamil Nadu, India',
  email: 'vijayakumaraathipazham@gmail.com',
  linkedin: 'https://linkedin.com/in/vijayakumaraathipazham',
  linkedinLabel: 'linkedin.com/in/vijayakumaraathipazham',
  headline: 'Engineering scope into cost clarity and executable delivery.',
  positioning:
    'I turn complex industrial scope into cost clarity, coordinated engineering, and execution-ready project delivery.',
  intro:
    'Project Engineer with 10+ years across EPC, oil and gas, petrochemical, industrial automation, costing, estimation, PFD/P&ID documentation, supplier coordination, quality systems, and site execution.',
};

export const PROOF_MARKERS = [
  { value: '10+ years', label: 'Experience' },
  { value: 'FEED + EPC', label: 'Environments' },
  { value: 'Costing', label: 'BOQ · MTO · RFQ' },
  { value: 'PFD / P&ID', label: 'Documentation' },
];

export const HERO_METRICS = [
  { value: '10+ years', label: 'Engineering & project experience' },
  { value: 'EPC + FEED', label: 'Front-end to site execution' },
  { value: 'Costing + estimation', label: 'BOQ · MTO · techno-commercial' },
  { value: 'PFD / P&ID', label: 'Documentation ownership' },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'cost',
    index: '01',
    title: 'Cost Intelligence',
    tagline: 'Commercial control before commitment.',
    items: [
      'Cost estimation & budget forecasting',
      'BOQ (Bill of Quantities) & MTO (Material Take-Off)',
      'Fabrication, piping & structural cost analysis',
      'RFQ (Request for Quotation) management',
      'Supplier evaluation & techno-commercial bid comparison',
      'Variation-order cost assessment',
    ],
    value:
      'Where I add value: I structure ambiguous scope into traceable quantities, comparable supplier inputs, and budgeted assumptions — so commercial decisions hold up under review.',
    filter: ['Commercial'],
  },
  {
    id: 'docs',
    index: '02',
    title: 'Engineering Documentation',
    tagline: 'Scope made buildable, traceable, auditable.',
    items: [
      'PFD (Process Flow Diagram) & P&ID (Piping & Instrumentation Diagram) ownership',
      'Equipment datasheets & BOM (Bill of Materials)',
      'Cable schedules & I/O (Input/Output) lists',
      'QAP (Quality Assurance Plan) coordination',
      'Technical modification records — ECR (Engineering Change Request) / ECO (Engineering Change Order)',
      'Engineering deliverable coordination across disciplines',
    ],
    value:
      'Where I add value: I treat documentation as a coordinated engineering system — revisions, interfaces, and approvals stay aligned from FEED through site readiness.',
    filter: ['Engineering', 'Quality'],
  },
  {
    id: 'epc',
    index: '03',
    title: 'EPC Project Execution',
    tagline: 'From defined scope to site-ready delivery.',
    items: [
      'Assigned work-package ownership',
      'FEED (Front-End Engineering Design) to EPC coordination',
      'Client reviews, scope clarification & procurement inputs',
      'Site installation, testing & inspection support',
      'Schedule alignment & cross-functional coordination',
      'Maintenance & PTW (Permit to Work) coordination',
    ],
    value:
      'Where I add value: I connect Finance, Engineering, Design, E&I (Electrical & Instrumentation), suppliers, and site teams so execution decisions stay tied to scope, cost, and schedule.',
    filter: ['Execution', 'Engineering'],
  },
  {
    id: 'systems',
    index: '04',
    title: 'Industrial Systems',
    tagline: 'Fluent across the equipment that defines a plant.',
    items: [
      'Static equipment, storage tanks & pressure parts',
      'Pumps, compressors, heat exchangers & valves',
      'Piping systems & instrumentation',
      'Material handling, conveying & bagging systems',
      'Dosing, batching & packaging systems',
      'Automation interfaces & control-panel coordination',
    ],
    value:
      'Where I add value: I speak the language of oil & gas, petrochemical, chemical equipment, and material-handling plants — which keeps estimation, documentation, and execution grounded in physical reality.',
    filter: ['Engineering', 'Execution'],
  },
];

export const DELIVERY_STEPS = [
  {
    n: '01',
    title: 'Understand the scope',
    body: 'Review contract purchase orders, specifications, client requirements, and project objectives. Clarify boundaries before numbers are built.',
  },
  {
    n: '02',
    title: 'Structure the estimate',
    body: 'Build BOQs, MTOs, cost inputs, RFQs, supplier comparisons, and budget assumptions with traceable sources.',
  },
  {
    n: '03',
    title: 'Translate scope into engineering',
    body: 'Develop or coordinate PFDs, P&IDs, datasheets, BOMs, layouts, and instrumentation documentation.',
  },
  {
    n: '04',
    title: 'Coordinate execution',
    body: 'Resolve technical clarifications and align Finance, Engineering, Design, E&I, suppliers, and site teams.',
  },
  {
    n: '05',
    title: 'Control change and readiness',
    body: 'Assess variations, maintain traceability, support testing and inspection, and preserve audit-ready documentation.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'sprob',
    title: 'Raw Material Feeding — SPROB',
    client: 'ISRO',
    location: 'Sriharikota',
    tags: ['EPS', 'Project Engineering'],
    role: 'Project Engineer',
    summary:
      'Contributed to engineering, procurement support, and site coordination for a raw-material feeding system in a high-reliability space-launch support environment.',
    scope: [
      'Raw-material feeding scope review and work-package support',
      'Engineering documentation coordination and procurement inputs',
      'Supplier follow-up and site-interface coordination',
    ],
    contribution: [
      'Prepared and coordinated engineering inputs, BOQ/MTO elements, and procurement documentation for assigned packages',
      'Supported technical clarifications between engineering, suppliers, and site teams',
      'Helped maintain document traceability through reviews and revisions',
    ],
    deliveryInterface: [
      'Engineering ↔ Procurement ↔ Suppliers',
      'Site installation and inspection readiness',
      'Client review and approval cycles',
    ],
  },
  {
    id: 'mahakoshal',
    title: 'Additive Feeding & Bagging System',
    client: 'Mahakoshal Refractories',
    location: 'Katni',
    tags: ['Brownfield', 'EPC', 'Execution'],
    role: 'Project Engineer',
    summary:
      'Supported brownfield integration of an additive feeding and bagging system within an operating refractories plant.',
    scope: [
      'Brownfield scope definition around existing plant constraints',
      'Feeding, conveying, and bagging equipment coordination',
      'Installation and testing support',
    ],
    contribution: [
      'Coordinated engineering documents, equipment inputs, and site requirements for assigned scope',
      'Supported supplier evaluation and site supervision activities',
      'Helped resolve brownfield interface clarifications with the client and site team',
    ],
    deliveryInterface: [
      'Client operations ↔ Engineering ↔ Site',
      'Equipment suppliers and fabricators',
      'Installation, testing, and handover',
    ],
  },
  {
    id: 'rhi-ifgl',
    title: 'Raw Material Handling & Bagging Systems',
    client: 'RHI Magnesita · IFGL · Totale Global',
    location: 'Multiple sites',
    tags: ['Greenfield', 'EPC', 'Site Supervision'],
    role: 'Project Engineer',
    summary:
      'Contributed to greenfield material-handling and bagging scopes across refractory and industrial clients, including site supervision.',
    scope: [
      'Greenfield handling, storage, conveying, and bagging scopes',
      'Engineering documentation and procurement coordination',
      'Site supervision and installation oversight for assigned packages',
    ],
    contribution: [
      'Prepared estimation inputs, BOQs, and supplier documentation for assigned work packages',
      'Coordinated PFD/P&ID-driven deliverables, datasheets, and BOMs',
      'Supported site installation, inspection, and readiness checks',
    ],
    deliveryInterface: [
      'Design ↔ Procurement ↔ Site execution',
      'Multi-stakeholder client coordination',
      'Supplier supervision and progress alignment',
    ],
  },
  {
    id: 'extruder-packaging',
    title: 'Extruder Packaging Systems',
    client: 'BPCL Kochi · GAIL PP · Alujain PP · Rongxin PP',
    location: 'Petrochemical sites',
    tags: ['FEED', 'EPC', 'Petrochemical'],
    role: 'Project Engineer',
    summary:
      'Supported FEED-to-EPC delivery of extruder packaging systems in petrochemical contexts, connecting estimation, documentation, and execution.',
    scope: [
      'FEED inputs, scope structuring, and EPC work-package support',
      'Packaging, conveying, and handling system interfaces',
      'Coordination across engineering, suppliers, and site teams',
    ],
    contribution: [
      'Supported cost estimation, RFQs, and techno-commercial inputs for packaging scopes',
      'Coordinated engineering deliverables and supplier documentation',
      'Helped align schedule, scope clarifications, and execution readiness',
    ],
    deliveryInterface: [
      'FEED engineering ↔ EPC execution',
      'EPC contractor ↔ equipment vendors',
      'QA/QC, testing, and commissioning support',
    ],
  },
  {
    id: 'polyol',
    title: 'Polyol Dosing System',
    client: 'UNO Minda',
    location: 'Bawal',
    tags: ['EPC Proposal', 'Costing & Estimation'],
    role: 'Project Engineer — proposal costing',
    summary:
      'Owned EPC proposal costing and estimation for a polyol dosing system, structuring scope into a defensible commercial offer.',
    scope: [
      'Proposal scope review and quantity structuring',
      'BOQ/MTO build-up for dosing skids, piping, and instrumentation',
      'Supplier RFQs and cost comparison',
    ],
    contribution: [
      'Prepared BOQ, MTO, and fabrication cost analysis for the proposal',
      'Managed RFQs and evaluated supplier techno-commercial offers',
      'Documented budget assumptions and variation sensitivities',
    ],
    deliveryInterface: [
      'Sales / proposals ↔ Engineering ↔ Finance',
      'Equipment and fabrication vendors',
      'Client clarification cycles',
    ],
  },
  {
    id: 'shell',
    title: 'Engineering Support & Maintenance',
    client: 'Shell Petroleum',
    location: 'Chennai',
    tags: ['EPC Support', 'Maintenance'],
    role: 'Project Engineer — support & maintenance',
    summary:
      'Provided engineering support and maintenance coordination, keeping documentation, permits, and interfaces audit-ready.',
    scope: [
      'Ongoing engineering support and maintenance scopes',
      'Documentation updates and compliance alignment',
      'Coordination under PTW-controlled site conditions',
    ],
    contribution: [
      'Supported technical documentation, modification records, and maintenance inputs',
      'Coordinated with E&I, operations, and contractors on assigned tasks',
      'Helped preserve traceability across inspections and testing',
    ],
    deliveryInterface: [
      'Operations ↔ Maintenance ↔ Contractors',
      'HSE / PTW compliance interfaces',
      'Documentation and audit readiness',
    ],
  },
  {
    id: 'freelance',
    title: 'Freelance Costing & Estimation Support',
    client: 'Mefco Engineers · Autometric',
    location: 'Remote / Chennai',
    tags: ['BOQ', 'MTO', 'Techno-commercial'],
    role: 'Freelance Consultant',
    summary:
      'Delivered BOQ, MTO, piping, vessel, material-handling, static-equipment, structural estimation, and instrumentation documentation support.',
    scope: [
      'BOQ/MTO preparation across piping, vessels, structures, and handling systems',
      'Static-equipment and fabrication cost inputs',
      'Instrumentation documentation — cable schedules, I/O lists',
    ],
    contribution: [
      'Built traceable quantity take-offs and cost sheets from drawings and specs',
      'Prepared RFQ packages and supplier comparison inputs',
      'Supported standards-aligned (API / ASME / ISO / ASTM / ATEX) documentation assumptions',
    ],
    deliveryInterface: [
      'Client engineering ↔ Freelance estimator',
      'Drawing review → quantity → cost → bid',
      'Remote coordination and revision control',
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'mold-masters',
    period: 'Aug 2025 — Present',
    organization: 'Mold Masters DME India Pvt Ltd (Coperion–GEC)',
    position: 'Project Engineer',
    scope:
      'Project engineering ownership across industrial scopes — estimation inputs, documentation coordination, and execution interfaces.',
    contributions: [
      'Own assigned work packages across estimation, documentation, and execution coordination',
      'Coordinate engineering deliverables, suppliers, and review cycles',
      'Support cost control, scope clarification, and site readiness',
    ],
  },
  {
    id: 'kjt',
    period: 'Nov 2021 — Mar 2025',
    organization: 'KJT',
    position: 'Assistant Project Engineer',
    scope:
      'EPC project support spanning FEED inputs, costing, PFD/P&ID documentation, supplier coordination, and site supervision.',
    contributions: [
      'Prepared BOQs, MTOs, RFQs, and techno-commercial bid evaluations',
      'Coordinated PFDs, P&IDs, datasheets, BOMs, cable schedules, and I/O lists',
      'Supported installation, testing, inspection, and variation assessments',
    ],
  },
  {
    id: 'autosys',
    period: 'Nov 2018 — Jul 2021',
    organization: 'Autosys Engineering Pvt Ltd',
    position: 'Junior Engineer (QMS & Project)',
    scope:
      'Quality management systems blended with project coordination across automation and industrial scopes.',
    contributions: [
      'Authored 30+ CAPA (Corrective and Preventive Action) reports',
      'Contributed to a reported 12% production-line efficiency improvement',
      'Supported ISO 9001:2015 QMS documentation, audits, and project interfaces',
    ],
  },
  {
    id: 'sri-balaji',
    period: 'Jun 2017 — Aug 2018',
    organization: 'Sri Balaji Castings Pvt Ltd',
    position: 'Quality Assurance Engineer',
    scope:
      'Casting quality assurance, welding oversight, and defect-reduction initiatives.',
    contributions: [
      'Contributed to an 18% welding defect-rate reduction within six months',
      'Executed inspection, testing, and QAP-aligned documentation',
      'Coordinated corrective actions with production and suppliers',
    ],
  },
  {
    id: 'tvs',
    period: 'Apr 2016 — Jun 2017',
    organization: 'TVS Sundaram Fasteners Pvt Ltd',
    position: 'Trainee Engineer, Quality Assurance',
    scope:
      'Foundations in inspection, measurement, and quality systems within precision manufacturing.',
    contributions: [
      'Performed incoming, in-process, and final inspection activities',
      'Maintained quality records and supported audit readiness',
      'Built discipline in measurement, traceability, and documentation',
    ],
  },
];

export const EVIDENCE = [
  {
    value: '10+ years',
    numeric: 10,
    suffix: '+ years',
    label: 'Engineering & project experience',
    context: 'Across QA, QMS, project engineering, and EPC execution since 2016.',
  },
  {
    value: '30+',
    numeric: 30,
    suffix: '+',
    label: 'CAPA reports authored',
    context: 'Corrective and Preventive Action reports at Autosys Engineering.',
  },
  {
    value: '12%',
    numeric: 12,
    suffix: '%',
    label: 'Production-line efficiency improvement',
    context: 'Reported at Autosys Engineering; team-delivered outcome.',
  },
  {
    value: '18%',
    numeric: 18,
    suffix: '%',
    label: 'Welding defect-rate reduction',
    context: 'Within six months at Sri Balaji Castings; team-delivered outcome.',
  },
  {
    value: 'ISO 9001:2015',
    numeric: null,
    suffix: '',
    label: 'Internal-auditor certification',
    context: 'Quality management systems auditing qualification.',
  },
];

export const TOOL_GROUPS = [
  {
    group: 'Engineering & design',
    blurb: 'Used to own and coordinate PFD/P&ID-driven deliverables and layouts.',
    items: ['COMOS cDB / iDB', 'AutoCAD', 'SolidWorks'],
  },
  {
    group: 'Project & planning',
    blurb: 'Used to structure estimates, schedules, and budget assumptions.',
    items: ['MS Project', 'Primavera P6 (basic)', 'MS Excel', 'Word', 'PowerPoint'],
  },
  {
    group: 'Enterprise & programming',
    blurb: 'Used for project records, procurement data, and automation interfaces.',
    items: ['SAP', 'ATG Programming'],
  },
  {
    group: 'Standards & compliance',
    blurb: 'Applied as design and documentation assumptions — never as claimed authorship.',
    items: ['API', 'ASME', 'ISO', 'ASTM', 'ATEX', 'ISO 9001:2015'],
  },
  {
    group: 'Equipment fluency',
    blurb: 'Hands-on scope language across tanks, rotating equipment, and handling systems.',
    items: [
      'Tanks',
      'Valves',
      'Pumps',
      'Compressors',
      'Heat exchangers',
      'Static equipment',
      'Material handling',
      'Instrumentation',
    ],
  },
];

export const GLOSSARY: [string, string][] = [
  ['EPC', 'Engineering, Procurement, and Construction'],
  ['FEED', 'Front-End Engineering Design'],
  ['BOQ', 'Bill of Quantities'],
  ['MTO', 'Material Take-Off'],
  ['PFD', 'Process Flow Diagram'],
  ['P&ID', 'Piping and Instrumentation Diagram'],
  ['RFQ', 'Request for Quotation'],
  ['QAP', 'Quality Assurance Plan'],
  ['CAPA', 'Corrective and Preventive Action'],
  ['ECR / ECO', 'Engineering Change Request / Engineering Change Order'],
  ['PTW', 'Permit to Work'],
  ['E&I', 'Electrical & Instrumentation'],
  ['ATEX', 'EU explosive-atmosphere equipment directive'],
];

export const NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'journey', label: 'Project Journey' },
  { id: 'projects', label: 'Selected Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];
