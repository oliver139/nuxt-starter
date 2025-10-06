import type { Config } from 'tailwindcss'
import PrimeUI from 'tailwindcss-primeui'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    transitionDuration: {
      DEFAULT: '300ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'ease',
    },
    extend: {
      backgroundColor: {
        none: 'transparent',
      },
      colors: {
        primary: colors.indigo[500],
        black: colors.stone[800],
        'light-yellow': colors.yellow[100],
      },
      screens: {
        ssm: '576px',
        sssm: '480px',
      },
      transitionProperty: {
        font: 'color, font-size, font-weight, text-align',
        opacity: 'opacity, visibility',
        'hidden-rows': 'opacity, visibility, grid-template-rows',
      },
    },
  },
  plugins: [
    PrimeUI,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'grid-col-auto-fill': value => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(min(${value}, 100%), 1fr))`,
          }),
          'grid-col-auto-fit': value => ({
            gridTemplateColumns: `repeat(auto-fit, minmax(min(${value}, 100%), 1fr))`,
          }),
        },
        {
          values: theme('width', {}),
        },
      )
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          pxt: value => ({
            'padding-top': value,
            'padding-left': value,
            'padding-right': value,
          }),
          pxb: value => ({
            'padding-bottom': value,
            'padding-left': value,
            'padding-right': value,
          }),
          pyl: value => ({
            'padding-top': value,
            'padding-bottom': value,
            'padding-left': value,
          }),
          pyr: value => ({
            'padding-top': value,
            'padding-bottom': value,
            'padding-right': value,
          }),
        },
        {
          values: theme('padding', {}),
        },
      )
    }),
  ],
} satisfies Config
