import { defineVulmixConfig } from './.vulmix/utils/defineVulmixConfig'

// See: https://vulmix.dev/guide/structure/vulmix.config.ts
export default defineVulmixConfig({
  dirs: {
    dist: {
      root: 'vulmix-gh-pages',
    },
  },
})
