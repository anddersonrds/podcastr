export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    inter: 'inter, sans-serif',
    lexend: 'lexend, sans-serif',
    light: 400,
    normal: 500,
    bold: 600,
    sizes: {
      xxsmall: '0.5rem',
      xsmall: '1rem',
      small: '1.25rem',
      medium: '1.5rem',
      large: '1.75rem',
      xlarge: '2.0rem',
      xxlarge: '2.5rem',
      huge: '5.2rem'
    }
  },
  colors: {
    white: '#FFF',
    gray50: '#F7F8FA',
    gray100: '#E6E8EB',
    gray200: '#AFB2B1',
    gray500: '#808080',
    gray800: '#494D4B',
    green500: '#04D361',
    purple300: '#9F75FF',
    purple400: '#9164FA',
    purple500: '#8257E5',
    purple800: '#6F48C9'
  },
  spacings: {
    xxsmall: '0.25rem',
    xsmall: '1rem',
    small: '1.5rem',
    medium: '2rem',
    large: '2.5rem',
    xlarge: '3rem',
    xxlarge: '4rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
