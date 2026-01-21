import type { LocaleCode } from "@i18n/locales";

const en = {
  "nav.home": "Home",
  "nav.projects": "Projects",
  "section.about": "About",
  "section.xp": "Work Experience",
  "section.education": "Education",
  "page.projects.title": "Projects",
  "skip_to_main": "Skip to main content",
  "date.present": "Present",
};

export type UIKeys = keyof typeof en;

export const ui: Record<LocaleCode, Record<UIKeys, string>> = {
  en,
  fr: {
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "section.about": "À propos",
    "section.xp": "Expérience",
    "section.education": "Formation",
    "page.projects.title": "Projets",
    "skip_to_main": "Aller au contenu principal",
    "date.present": "Aujourd'hui",
  },
};
