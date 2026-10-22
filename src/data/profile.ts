// Facts here come from the verified fact sheet (resume_cv/linkedin/linkedin_review/FACTS.md).
// Rules: no MASc end date, no phone number, no award amount for the mobility award.

export const profile = {
  name: 'Joaquin Ramirez-Medina',
  headshot: '/images/joaquin-rio.png',
  shortName: 'Joaquin Ramirez-Medina',
  location: 'Toronto, Ontario',
  email: 'jram18@yorku.ca',
  links: {
    linkedin: 'https://www.linkedin.com/in/joaquin-ramirez-profile-',
    github: 'https://github.com/jjoaqu7',
  },
  headline: 'MASc researcher in Mechanical Engineering at York University',
  lab: 'Surface Engineering and Instrumentation Lab (SEiL), Lassonde School of Engineering',
  supervisor: 'Prof. Alidad Amirfazli',
};

export const education = [
  {
    degree: 'MASc, Mechanical Engineering',
    school: 'York University',
    dates: 'Sep 2024 to present',
    detail: [
      'Surface Engineering and Instrumentation Lab (SEiL), supervised by Prof. Alidad Amirfazli',
      'Thesis on electrowetting-enhanced dropwise condensation and LLM-agent tools for research',
      'Coursework GPA 8.7 / 9.0',
    ],
  },
  {
    degree: 'BEng, Mechanical Engineering',
    school: 'York University',
    dates: 'Sep 2020 to Jun 2024',
    detail: ["First Class Standing, Dean's Honour Roll"],
  },
  {
    degree: 'BSc, Biology',
    school: 'York University',
    dates: 'Sep 2013 to Apr 2018',
    detail: [],
  },
];

export const positions = [
  {
    title: 'Graduate researcher and teaching assistant',
    org: 'SEiL, York University',
    dates: 'Sep 2024 to present',
    detail: [
      'Electrowetting control of dropwise condensation, from electrode design and cleanroom fabrication to drive electronics and wind-tunnel experiments',
      'ARIA, a multi-LLM system for literature review and research planning',
    ],
  },
  {
    title: 'Research intern',
    org: "Institut de Physique de Nice (INPHYNI), Université Côte d'Azur, France",
    dates: 'Nov 2025 to Dec 2025',
    detail: [
      'Python and OpenCV method for contact angles of vibrating droplets from high-speed imaging',
      'Invited seminar on the electrowetting condensation work',
    ],
  },
  {
    title: 'Undergraduate research associate (NSERC USRA)',
    org: 'SEiL, York University',
    dates: 'May 2023 to Aug 2024',
    detail: ['Led the preliminary version of ARIA', 'Co-developed Prof Notes AI, an LLM-agent course Q&A tool'],
  },
  {
    title: 'Undergraduate research associate',
    org: 'ACuTE microfluidics lab, York University',
    dates: 'Jul 2021 to May 2023',
    detail: [
      'Acoustofluidic rotation of Drosophila embryos in a microfluidic device',
      'Microfluidic cardiac assays and MATLAB analysis for SARS-CoV-2 ORF3a studies in Drosophila larvae',
      'Acoustofluidic focusing of microparticles in a glass capillary',
    ],
  },
];

export const teaching = {
  role: 'Teaching assistant, Lassonde School of Engineering',
  dates: 'Sep 2024 to Apr 2026',
  courses: [
    { code: 'MECH 2112', title: 'Mechanical Engineering, Professionalism and Society', term: 'Winter 2026' },
    { code: 'MECH 4402', title: 'Simulation Tools for Design and Analysis', term: 'Fall 2025' },
    { code: 'MECH 4203', title: 'Energy Conversion and Storage', term: 'Winter 2025' },
    { code: 'MECH 4510', title: 'Advanced Mechanical Technologies', term: 'Winter 2025' },
    { code: 'MECH 4403', title: 'Artificial Intelligence and Generative Design for Mechanical Systems', term: 'Fall 2024' },
    { code: 'MECH 4502', title: 'Vibrations', term: 'Fall 2024' },
  ],
};

export const mentoring = [
  'LURA student in Mechanical Engineering, numerical methods (May to Aug 2025)',
  'Mechanical Engineering intern from ENSTA (France), image processing for droplet motion and coalescence tracking',
  'Software Engineering student (2024 to 2025), work published as a peer-reviewed CEEA paper',
];

export const awards = [
  { name: 'Academic Excellence Fund', issuer: 'Faculty of Graduate Studies, York University', date: 'Aug 2026' },
  { name: 'Mechanical Engineering Excellence Award for Graduate Research', issuer: 'Department of Mechanical Engineering, York University', date: 'Jul 2026' },
  { name: 'York International Mobility Award', issuer: 'York International, York University', date: '2026' },
  { name: 'NSERC Undergraduate Student Research Award (USRA)', issuer: 'NSERC', date: 'May 2023 and May 2024' },
  { name: 'Lassonde Undergraduate Research Award (LURA)', issuer: 'Lassonde School of Engineering', date: 'May 2022 and Oct 2022' },
  { name: 'First Class Standing, BEng', issuer: 'York University', date: '2024' },
  { name: "Dean's Honour Roll", issuer: 'Lassonde School of Engineering', date: '2020 to 2024' },
];

export const skills = [
  { group: 'Microfabrication', items: 'Photolithography, e-beam evaporation, lift-off, PECVD, mask aligner, spin coating' },
  { group: 'Experiments', items: 'High-speed imaging, closed-loop humidity and temperature control, wind-tunnel testing' },
  { group: 'Electronics', items: 'PCB design (KiCad), microcontrollers, solid-state relay switching, soldering' },
  { group: 'Software', items: 'Python, OpenCV, MATLAB, SQL, LlamaIndex, Docker, Google Cloud, Firebase' },
  { group: 'CAD and analysis', items: 'SolidWorks, AutoCAD, ImageJ, Tracker' },
  { group: 'Languages', items: 'English, Spanish' },
];
