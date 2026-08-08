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
    slug: 'kit-social-viva',
    title: 'Kit Social — Viva',
    subtitle: 'Kit de posts e capas para redes sociais',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    year: '2025',
    tags: ['Social Media', 'Identidade Visual', 'Canva'],
    description:
      'Kit completo de posts, capas e stories criado no Canva para a marca Viva. Cada peça seguiu a mesma paleta e tipografia, garantindo consistência visual no feed e nos materiais de divulgação.',
    baseRotation: -2,
  },
  {
    slug: 'apresentacao-aurora',
    title: 'Apresentação — Aurora',
    subtitle: 'Slides corporativos que contam uma história',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    year: '2024',
    tags: ['Apresentação', 'Layout', 'Canva'],
    description:
      'Apresentação comercial montada inteiramente no Canva, com grids limpos, hierarquia clara e um ritmo visual que guia a leitura do início ao fim — perfeita para reuniões e propostas.',
    baseRotation: 2,
  },
  {
    slug: 'identidade-estudio',
    title: 'Identidade — Estúdio Mosaico',
    subtitle: 'Marca e materiais criados no Canva',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    year: '2024',
    tags: ['Branding', 'Criação no Canva', 'Materiais'],
    description:
      'Identidade visual do Estúdio Mosaico: paleta, tipografia e materiais de marca — cartão, assinatura e posts — tudo produzido e unificado no Canva, do primeiro rascunho ao arquivo final.',
    baseRotation: -1,
  },
]
