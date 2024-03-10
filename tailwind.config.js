module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  // mode: 'jit',
  // purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Roboto Slab', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#2596be',
        secondary: '#c8d8e4',
        contrast: '#52ab98',
        gray: '#f2f2f2',
        light: '#2596be',
      },
    },
  },
  variants: {},
  plugins: [],
}
