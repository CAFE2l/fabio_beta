// Design tokens centralizados — tema futurista glass (azul elétrico + roxo)
export const theme = {
  bg: {
    primary: '#0B1120',
    primaryAlt: '#0F172A',
    surface: 'linear-gradient(135deg, rgba(0,194,209,0.22) 0%, rgba(143,227,136,0.18) 100%)',
    surfaceStrong: 'linear-gradient(135deg, rgba(0,194,209,0.30) 0%, rgba(143,227,136,0.24) 100%)',
  },
  accent: {
    blue: '#3B82F6',
    blueDeep: '#2563EB',
    purple: '#8B3DFF',
    purpleLight: '#A855F7',
  },
  text: {
    primary: '#F1F5F9',
    secondary: '#94A3B8',
    muted: '#64748B',
  },
  glass: {
    border: 'rgba(255,255,255,0.12)',
    borderStrong: 'rgba(255,255,255,0.18)',
    blur: '20px',
  },
} as const

export type Theme = typeof theme
