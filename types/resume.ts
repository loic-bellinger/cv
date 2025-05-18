export interface LinkBase {
  text?: string
  ariaLabel: string
  ariaDescribedBy: string
  href: string
}
export interface ContactEntry extends LinkBase {
  icon: string
}
export interface ExperienceEntry {
  company: string
  link: string
  badges: string[]
  title: string
  logo: string
  start: string
  end: string | null
  description: string
  highlights: string[]
}

export interface EducationEntry {
  school: string
  degree: string
  start: string
  end: string | null
}

export interface ProjectEntry {
  title: string
  techStack: string[]
  description: string
  logo: string
  link: LinkBase
}

export interface Resume {
  name: string
  initials: string
  location: LinkBase
  about: string
  summary: string
  avatarUrl: string
  contacts: ContactEntry[]
  education: EducationEntry[]
  experience: ExperienceEntry[]
  skills: string[]
  projects: ProjectEntry[]
}
