import eslintConfig from '@oliver139/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  eslintConfig(
    {
      vue: true,
      typescript: true,
    },
    ...tailwind.configs['flat/recommended'],
  ).append(
    {
      name: 'tailwindcss:overrides',
      rules: {
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ),
)
