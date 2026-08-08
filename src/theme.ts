// Design tokens centralizados — paleta alegre, inspirada em ilustrações cartoon.
export const theme = {
  bg: {
    primary: '#FFF8EA',
    primaryAlt: '#FFF2D8',
    surface: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5DF 100%)',
    surfaceStrong: 'linear-gradient(135deg, #FFFDF7 0%, #FFEBC5 100%)',
  },
  accent: {
    blue: '#1697A6',
    blueDeep: '#117783',
    purple: '#7B5BB7',
    purpleLight: '#9B78D2',
  },
  text: {
    primary: '#27344A',
    secondary: '#5F6E7F',
    muted: '#7D8997',
  },
  glass: {
    border: 'rgba(39,52,74,0.14)',
    borderStrong: 'rgba(39,52,74,0.2)',
    blur: '0px',
  },
} as const

export type Theme = typeof theme
