export interface ContactEntry {
  label: string
  href: string
  icon: string
}

export interface WorkEntry {
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
  link: { label: string, href: string }
}

export interface Resume {
  name: string
  initials: string
  location: { label: string, href: string }
  about: string
  summary: string
  avatarUrl: string
  contacts: ContactEntry[]
  education: EducationEntry[]
  work: WorkEntry[]
  skills: string[]
  projects: ProjectEntry[]
}
