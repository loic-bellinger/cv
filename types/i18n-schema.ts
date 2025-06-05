import type { Resume } from '~/types/resume'

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends Resume {}
}
