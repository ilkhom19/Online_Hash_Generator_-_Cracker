module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      lilita: ['Lilita One', 'cursive'],
    },
    fontSize: {
      sm: '0.75rem',
      base: '0.875rem',
      lg: '1rem',
      xl: '1.25rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '4rem',
      xxl: '6rem',
    },
    borderRadius: {
      none: '0',
      DEFAULT: '8px',
      md: '15px',
      lg: '25px',
      full: '9999px',
    },
    boxShadow: {
      DEFAULT: 'box-shadow: 0px 8px 24px rgba(146, 136, 224, 0.3);',
    },
    colors: {
      red: '#FF6768',
      green: '#00FFF5',
      milky: '#FCDAB7',
      gray: '#6B778D',
      'bluishgreen-dark': '#1E5F74',
      'dark-blue': '#263859',
      dark: '#17223B',
      transparent: 'transparent',
      current: 'currentColor',
      black: 'black',
      white: 'white',
      blurred: 'var(--color-blurred-background)',
    },
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      width: {
        110: '110px',
        fit: 'fit-content',
      },
      height: {
        70: '70px',
        fit: 'fit-content',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
      translate: ['group-hover'],
      display: ['group-hover'],
      visibility: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
