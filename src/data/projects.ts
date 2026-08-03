export interface Project {
  slug: string
  title: string
  subtitle: string
  image: string
  year: string
  tags: string[]
  description: string
  baseRotation: number
}

export const projects: Project[] = [
  {
    slug: 'northwind-identity',
    title: 'Northwind Identity',
    subtitle: 'Branding editorial + campanha de lançamento',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    year: '2024',
    tags: ['Branding', 'Editorial', 'Impressão'],
    description:
      'Um sistema de identidade completo construído em torno da tensão entre o minimalismo nórdico e o calor editorial. Cada ponto de contato — dos cartões de visita aos pôsteres da campanha — foi pensado para parecer montado à mão e depois fotografado.',
    baseRotation: -2,
  },
  {
    slug: 'pocket-notes',
    title: 'Pocket Notes',
    subtitle: 'Sistema de UI para um app de diário tátil',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    year: '2023',
    tags: ['UI/UX', 'Produto', 'Motion'],
    description:
      'Um app de diário que parece um caderno de verdade. O sistema de UI usa texturas de papel, transições com cara de tinta e uma escala tipográfica enraizada no design editorial impresso. Cada interação foi prototipada no Framer antes da entrega.',
    baseRotation: 2,
  },
  {
    slug: 'studio-drift',
    title: 'Studio Drift',
    subtitle: 'Série de pôsteres e cues de motion',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    year: '2023',
    tags: ['Ilustração', 'Motion', 'Direção de Arte'],
    description:
      'Uma série de 12 pôsteres explorando a ideia de deriva — objetos, luz e tipos suspensos no meio do movimento. Cada pôster foi acompanhado por um loop curto de motion, pensado para viver em painéis digitais e redes sociais.',
    baseRotation: -1,
  },
]
