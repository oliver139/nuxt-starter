import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const theme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
    },
    colorScheme: {
      light: {
        surface: {
          50: '{slate.100}',
          100: '{slate.200}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
        text: {
          color: '{surface.800}',
          hoverColor: '{surface.950}',
          mutedColor: '{surface.500}',
          hoverMutedColor: '{surface.600}',
        },
        formField: {
          placeholderColor: '{surface.500}',
        },
        navigation: {
          item: {
            focusBackground: '{gray.200}',
          },
        },
        content: {
          border: {
            color: '{surface.300}',
          },
        },
      },
      focusRing: {
        width: '2px',
      },
    },
  },
})

export default {
  theme: {
    preset: theme,
    options: {
      darkModeSelector: false,
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
    },
  },
}
