export default defineI18nConfig(() => {
  return {
    datetimeFormats: {
      en: {
        short: {
          year: 'numeric'
        },
        medium: {
          year: 'numeric',
          month: 'long'
        },
        long: {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
        }
      },
      fr: {
        short: {
          year: 'numeric'
        },
        medium: {
          year: 'numeric',
          month: 'long'
        },
        long: {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
        }
      }
    }
  }
})
