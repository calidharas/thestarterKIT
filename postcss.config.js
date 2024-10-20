export default {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
  },
};
