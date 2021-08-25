module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      margin: {
        '17': '4.35rem',
        'small': '18rem',
      },
      textColor: {
        'primary': '#b1a6c4',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'hover': 'rgb(124, 153, 252)',
      },
      backgroundColor: theme => ({
        'primary': '#b1a6c4',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'hover': 'rgb(124, 153, 252)',
      }),
      
    },
    variants: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
       },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
