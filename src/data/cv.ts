import type { Profile, Stat, Certification, WorkExperience, Project, SkillGroup, AboutParagraph, NavItem } from '../types/cv.types';

export const PROFILE: Profile = {
  name: 'Guido Soncini',
  role: 'Data Engineer / Data Architect',
  specialty: 'Microsoft Ecosystem Specialist',
  location: 'Reggio Emilia, Italy',
  email: 'guido.s1998@gmail.com',
  phone: '+39 338 450 0255',
  linkedin: 'https://www.linkedin.com/in/guidosoncini-062679147',
  photo: `${import.meta.env.BASE_URL}profile_face.jpg`,
  tagline: 'Building data pipelines that make sense — from Reggio Emilia, Italy',
  intro:
    'I specialise in Azure cloud data architecture, big data pipelines and Power BI. I turn messy data problems into clean, scalable systems — and I believe good data engineering is invisible to the people who depend on it.',
  status: 'Available for new projects',
};

export const NAV: NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact', external: false },
];

export const ABOUT: AboutParagraph[] = [
  {
    body:
      "I'm a **Data Engineer and Data Architect** with a passion for building robust data systems on _Microsoft Azure_. Based near **Reggio Emilia**, I've spent 4+ years architecting pipelines that power decisions for enterprises across Italy.",
  },
  {
    body:
      'My stack lives in the Azure ecosystem — Synapse Analytics, Data Factory, Microsoft Fabric — but my curiosity doesn\'t stop there. I recently earned my _Microsoft Certified: Fabric Data Engineer Associate_ certification.',
  },
  {
    body:
      'Outside of data, I volunteer as a Scout chief, which has quietly made me a better engineer: patience, improvisation, and an obsession with leaving things better than I found them.',
  },
];

export const STATS: Stat[] = [
  { value: '4', plus: true, label: 'Years in data' },
  { value: '10', plus: true, label: 'Enterprise clients' },
  { value: '2', label: 'Companies' },
  { value: '1', mark: '×', label: 'MS Certification' },
];

export const CERTS: Certification[] = [
  {
    title: 'Microsoft Certified: Fabric Data Engineer Associate',
    meta: 'Microsoft · DP-203 · Active',
    year: '2025',
  },
  {
    title: 'Foundations of Project Management',
    meta: 'Google · Coursera · Completed',
    year: '2023',
  },
];

export const EXPERIENCE: WorkExperience[] = [
  {
    company: 'Agic Cloud',
    period: 'Jan 2022 — Present',
    location: 'Full Remote · Rome, Italy',
    role: 'Data Engineer',
    summary:
      'Azure data consultant serving enterprise clients across Italian and European markets. Architecting end-to-end data ecosystems — from raw ingestion to analytics-ready models — for clients in automotive, manufacturing and the public sector.',
    bullets: [
      'Designed and delivered **Synapse + Data Factory pipelines** for Major Automotive OEM — a large-scale ELT architecture handling multi-source operational and commercial data.',
      'Built **Azure SQL and Synapse databases** plus reporting layers for Industrial Manufacturing Client.',
      'Ongoing data infrastructure and reporting for **Infrastructure Services Client**, including Power BI training delivered to client teams.',
      'Earned **Microsoft Certified: Fabric Data Engineer Associate** certification during this role.',
    ],
    stack: ['Azure Synapse', 'Data Factory', 'Microsoft Fabric', 'Python', 'SQL', 'Power BI', 'Databricks', 'PostgreSQL'],
  },
  {
    company: 'Vetrya S.p.A.',
    period: 'Oct 2020 — Jan 2022',
    location: 'Orvieto, Umbria · Italy',
    role: 'Business Data Analyst → Big Data Developer',
    summary:
      "Joined as a part-time BI analyst during university; grew into a full-time Big Data Developer role as the company pivoted to Azure cloud consulting. Transitioned with the business unit when it was acquired by Agic Cloud in 2022.",
    bullets: [
      '**For National Railway Operator**: built Python data pipelines and Analysis Services models; created Power BI reports consumed by operations teams.',
      '**Leading Law Firm**: architected an Azure Synapse database and Data Factory pipelines from scratch.',
      'Delivered a **Power BI fundamentals course** (DAX, Power Query) to enterprise clients including Infrastructure Services Client.',
    ],
    stack: ['Python', 'Azure Synapse', 'Data Factory', 'Power BI', 'DAX', 'Power Query', 'Analysis Services'],
  },
  {
    company: 'Speroni S.p.A.',
    period: 'Jul 2016',
    location: 'Castelnovo di Sotto, RE',
    role: 'Technical IT Assistant',
    summary:
      'Internship providing IT support and system maintenance. First professional exposure to enterprise technology environments.',
    bullets: [],
    stack: ['IT Support', 'Hardware', 'Systems'],
  },
];

export const PROJECTS: Project[] = [
  {
    n: '01',
    flag: 'Featured',
    title: 'Major Automotive OEM',
    blurb:
      "Large-scale ELT data platform built on Azure Synapse Analytics and Data Factory. Consolidated multi-source commercial and operational data into a unified warehouse, enabling cross-departmental analytics and executive-level Power BI reporting across the client's Italian operations.",
    tags: ['Azure Synapse', 'Data Factory', 'ELT', 'Power BI', 'Enterprise'],
    kind: 'ELT Platform',
    sector: 'Automotive',
  },
  {
    n: '02',
    title: 'National Railway Operator',
    blurb:
      'End-to-end data pipeline for a major national infrastructure operator. Python-driven ingestion, Azure Analysis Services models, and Power BI dashboards surfacing real-time station operations metrics.',
    tags: ['Python', 'Analysis Services', 'Power BI'],
    kind: 'Data Pipeline',
    sector: 'Railway',
  },
  {
    n: '03',
    title: 'Leading Law Firm',
    blurb:
      'Greenfield Azure Synapse data warehouse and Data Factory pipeline suite for a leading Italian professional services firm. Structured unstructured operational and compliance data into queryable models for compliance and business reporting.',
    tags: ['Azure Synapse', 'Data Factory', 'SQL'],
    kind: 'Data Warehouse',
    sector: 'Legal',
  },
];

export const SKILLS: SkillGroup[] = [
  {
    group: 'Cloud & Data Platform',
    items: ['Microsoft Fabric', 'Azure Synapse', 'Azure Data Factory', 'Azure SQL', 'Databricks', 'PostgreSQL', 'Azure DevOps'],
  },
  {
    group: 'Languages & Pipelines',
    items: ['Python', 'SQL', 'ETL / ELT', 'DAX', 'Power Query (M)', 'Java', 'C#', 'JavaScript', 'API Integration'],
  },
  {
    group: 'Analytics & Soft Skills',
    items: ['Power BI', 'Analysis Services', 'Data Modelling', 'BI Reporting', 'Team Training', 'Team Building', 'Project Management'],
  },
];
