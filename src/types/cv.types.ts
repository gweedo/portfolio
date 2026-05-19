import 'react';

export interface Profile {
  name: string;
  role: string;
  specialty: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  photo: string;
  tagline: string;
  intro: string;
  status: string;
}

export interface Stat {
  value: string;
  plus?: boolean;
  mark?: string;
  label: string;
}

export interface Certification {
  title: string;
  meta: string;
  year: string;
}

export interface WorkExperience {
  company: string;
  period: string;
  location: string;
  role: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export interface Project {
  n: string;
  flag?: string;
  title: string;
  blurb: string;
  tags: string[];
  kind: string;
  sector: 'Automotive' | 'Railway' | 'Legal';
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface AboutParagraph {
  body: string;
}

export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
