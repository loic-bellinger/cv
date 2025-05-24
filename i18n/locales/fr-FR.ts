import type { Resume } from '~/types/resume'

export default defineI18nLocale(async () => {
  return {
    name: 'Alex Johnson',
    initials: 'AJ',
    location: {
      text: 'Berlin, Allemagne, CEST',
      ariaLabel: 'Voir la carte de Berlin, Allemagne',
      ariaDescribedBy: 'Ouvre Google Maps dans un nouvel onglet',
      href: 'https://www.google.com/maps/place/Berlin'
    },
    about:
            'Développeur Full Stack orienté détail, passionné par la création d’applications web évolutives et d’expériences utilisateur intuitives.',
    summary:
            'Développeur Full Stack | 8+ ans d’expérience dans la conception et la mise en œuvre de frontends React haute performance et de backends Node.js robustes. Compétent en méthodologies agiles, déploiement cloud et travail collaboratif en équipe.',
    avatarUrl: '/avatar.png',
    contacts: [
      {
        ariaLabel: 'Envoyer un email à Alex Johnson',
        ariaDescribedBy: 'Ouvre le client mail par défaut avec un nouveau message pour Alex Johnson',
        href: 'mailto:alex.johnson@example.com',
        icon: 'i-lucide-mail'
      },
      {
        ariaLabel: 'Appeler Alex Johnson',
        ariaDescribedBy: 'Initie un appel téléphonique sur les appareils compatibles',
        href: 'tel:+4915123456789',
        icon: 'i-lucide-phone'
      },
      {
        ariaLabel: 'Visiter le profil GitHub d’Alex Johnson',
        ariaDescribedBy: 'Ouvre GitHub dans un nouvel onglet',
        href: 'https://github.com/alexjohnson',
        icon: 'i-lucide-github'
      },
      {
        ariaLabel: 'Visiter le profil LinkedIn d’Alex Johnson',
        ariaDescribedBy: 'Ouvre LinkedIn dans un nouvel onglet',
        href: 'https://www.linkedin.com/in/alex-johnson-dev/',
        icon: 'i-lucide-linkedin'
      }
    ],
    work: [
      {
        company: 'InnovateX',
        link: 'https://innovatex.example.com',
        badges: ['Sur site', 'React', 'TypeScript', 'Node.js', 'AWS'],
        title: 'Ingénieur Frontend Principal',
        logo: 'InnovateXLogo',
        start: '2022',
        end: null,
        description:
                    'Direction de l’équipe frontend pour concevoir un tableau de bord d’analyse de nouvelle génération destiné aux clients entreprise.',
        highlights: [
          'Architecture d’une bibliothèque de composants avec Storybook et Tailwind CSS',
          'Optimisation des performances de visualisation, réduisant les temps de chargement de 40 %',
          'Encadrement de développeurs juniors et revues de code hebdomadaires'
        ]
      },
      {
        company: 'Acme Corp',
        link: 'https://acmecorp.example.com',
        badges: ['Télétravail', 'Vue.js', 'JavaScript', 'Docker'],
        title: 'Ingénieur Logiciel',
        logo: 'AcmeLogo',
        start: '2018',
        end: '2022',
        description:
                    'Développement d’applications client et d’outils internes pour optimiser les opérations.',
        highlights: [
          'Mise en place d’un système de suivi des commandes en temps réel avec WebSockets',
          'Containerisation des services avec Docker et Kubernetes pour un déploiement scalable',
          'Collaboration avec les designers UX pour améliorer l’accessibilité de l’interface'
        ]
      }
    ],
    education: [
      {
        school: 'Université Technique de Berlin',
        degree: 'Master en Informatique',
        start: '2014',
        end: '2016'
      },
      {
        school: 'Université de Leipzig',
        degree: 'Licence en Technologies de l’Information',
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
        description:
                    'Plateforme personnalisable de visualisation de données pour les équipes de business intelligence.',
        logo: 'DataVizLogo',
        link: { ariaLabel: '', ariaDescribedBy: '', href: 'https://datavizpro.example.com' }
      },
      {
        title: 'ChatFlow',
        techStack: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB'],
        description:
                    'Application de chat en temps réel avec canaux, messagerie directe et partage de médias.',
        logo: 'ChatFlowLogo',
        link: { ariaLabel: '', ariaDescribedBy: '', href: 'https://chatflow.example.com' }
      },
      {
        title: 'Resume Builder',
        techStack: ['Vue.js', 'Vite', 'Tailwind CSS', 'Firebase'],
        description:
                    'Outil open-source pour concevoir et exporter des CV modernes au format PDF ou Markdown.',
        logo: 'ResumeBuilderLogo',
        link: {
          href: 'https://github.com/alexjohnson/resume-builder',
          ariaLabel: '',
          ariaDescribedBy: ''
        }
      }
    ],
    ui: {
      colorMode: {
        light: 'Thème clair',
        dark: 'Thème sombre',
        system: 'Paramètres système',
        loading: 'Chargement du thème'
      }
    }
  } as Resume
})
