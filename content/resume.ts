import type { Resume } from '~/types/resume'

export const resume: Resume = {
  name: 'Alex Johnson',
  initials: 'AJ',
  location: { text: 'Berlin, Germany, CEST', ariaLabel: 'View map of Berlin, Germany', ariaDescribedBy: 'Opens Google Maps in a new tab', href: 'https://www.google.com/maps/place/Berlin' },
  about:
    'Detail-oriented Full Stack Developer passionate about building scalable web applications and intuitive user experiences.',
  summary:
    'Full Stack Developer with 8+ years of experience in designing and implementing high-performance React frontends and robust Node.js backends. Skilled in agile methodologies, cloud deployment, and team collaboration.',
  avatarUrl: '/avatar.png',
  contacts: [
    { ariaLabel: 'Send an email to Alex Johnson', ariaDescribedBy: 'Opens default mail client with a new message addressed to Alex Johnson', href: 'mailto:alex.johnson@example.com', icon: 'i-lucide-mail' },
    { ariaLabel: 'Call Alex Johnson by phone', ariaDescribedBy: 'Initiates a phone call on supported devices', href: 'tel:+4915123456789', icon: 'i-lucide-phone' },
    { ariaLabel: 'Visit Alex Johnson’s GitHub profile', ariaDescribedBy: 'Opens GitHub in a new tab', href: 'https://github.com/alexjohnson', icon: 'i-lucide-github' },
    {
      ariaLabel: 'Visit Alex Johnson’s LinkedIn profile', ariaDescribedBy: 'Opens LinkedIn in a new tab',
      href: 'https://www.linkedin.com/in/alex-johnson-dev/',
      icon: 'i-lucide-linkedin'
    }
  ],
  work: [
    {
      company: 'InnovateX',
      link: 'https://innovatex.example.com',
      badges: ['On Site', 'React', 'TypeScript', 'Node.js', 'AWS'],
      title: 'Lead Frontend Engineer',
      logo: 'InnovateXLogo',
      start: '2022',
      end: null,
      description:
        'Leading the frontend team to build a next-generation analytics dashboard for enterprise clients.',
      highlights: [
        'Architected component library with Storybook and Tailwind CSS',
        'Optimized content visualization performance, reducing load times by 40%',
        'Mentored junior developers and conducted weekly code reviews'
      ]
    },
    {
      company: 'Acme Corp',
      link: 'https://acmecorp.example.com',
      badges: ['Remote', 'Vue.js', 'JavaScript', 'Docker'],
      title: 'Software Engineer',
      logo: 'AcmeLogo',
      start: '2018',
      end: '2022',
      description:
        'Developed customer-facing applications and internal tools to streamline operations.',
      highlights: [
        'Built a real-time order tracking system using WebSockets',
        'Containerized services with Docker and Kubernetes for scalable deployments',
        'Collaborated with UX designers to enhance UI accessibility'
      ]
    }
  ],
  education: [
    {
      school: 'Technical University of Berlin',
      degree: 'Master\'s Degree in Computer Science',
      start: '2014',
      end: '2016'
    },
    {
      school: 'University of Leipzig',
      degree: 'Bachelor\'s Degree in Information Technology',
      start: '2010',
      end: '2014'
    }
  ],
  skills: [
    'JavaScript/TypeScript',
    'React',
    'Vue.js',
    'Node.js',
    'GraphQL',
    'REST APIs',
    'Docker & Kubernetes',
    'AWS & Azure',
    'Agile/Scrum',
    'Tailwind CSS'
  ],
  projects: [
    {
      title: 'DataViz Pro',
      techStack: ['TypeScript', 'React', 'D3.js', 'Next.js'],
      description: 'A customizable content visualization platform for business intelligence teams.',
      logo: 'DataVizLogo',
      link: { ariaLabel: '', ariaDescribedBy: '', href: 'https://datavizpro.example.com' }
    },
    {
      title: 'ChatFlow',
      techStack: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB'],
      description:
        'Real-time chat application with support for channels, direct messaging, and media sharing.',
      logo: 'ChatFlowLogo',
      link: { ariaLabel: '', ariaDescribedBy: '', href: 'https://chatflow.example.com' }
    },
    {
      title: 'Resume Builder',
      techStack: ['Vue.js', 'Vite', 'Tailwind CSS', 'Firebase'],
      description:
        'Open-source tool for designing and exporting modern resumes as PDF or Markdown.',
      logo: 'ResumeBuilderLogo',
      link: {
        href: 'https://github.com/alexjohnson/resume-builder',
        ariaLabel: '',
        ariaDescribedBy: ''
      }
    }
  ]
}
