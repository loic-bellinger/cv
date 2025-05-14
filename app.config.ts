export default defineAppConfig({
  ui: {
    avatar: {
      slots: {
        root: 'inline-flex items-center justify-center shrink-0 select-none overflow-hidden rounded-[10px] align-middle bg-elevated'
      },
      variants: {
        size: {
          responsive: {
            root: 'size-16 text-lg sm:size-20 sm:text-xl md:size-24 md:text-2xl lg:size-28 lg:text-3xl xl:size-32 xl:text-5xl 2xl:size-36  2xl:text-7xl'
          }
        }
      }
    }
  }
})
