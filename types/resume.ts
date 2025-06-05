export interface BaseLink {
  text?: string
  ariaLabel: string
  ariaDescribedBy: string
  href: string
}

export interface Contact extends BaseLink {
  icon: string
}

export interface Work {
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

export interface Education {
  school: string
  degree: string
  start: string
  end: string | null
}

export interface Project {
  title: string
  techStack: string[]
  description: string
  logo: string
  link: BaseLink
}

export interface Resume {
  name: string
  initials: string
  location: BaseLink
  about: string
  summary: string
  avatarUrl: string
  contacts: Contact[]
  education: Education[]
  work: Work[]
  skills: string[]
  projects: Project[]
  ui: {
    colorMode: {
      light: string
      dark: string
      system: string
      loading: string
    }
    dates: {
      today: string
    }
  }
  seo: {
    title: string
    avatarAlt: string
  }
}
