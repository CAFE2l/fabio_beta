import acaiPost from '../../Trabalhos/Post Instagram Açaí.png'
import barbershopPost from '../../Trabalhos/Treino Barbeariaa.png'
import cafeteriaPost from '../../Trabalhos/Treino Cafeteriaa.png'
import fabaoDesign from '../../Trabalhos/FABAO DESIGN.png'
import hamburgueriaPost from '../../Trabalhos/Treino Hamburgueriaa.png'
import logoDesign from '../../Trabalhos/Logo_.png'
import glassesPost from '../../Trabalhos/Post Instagram Óculos_.png'
import samptechDesign from '../../Trabalhos/samptech.png'

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
    slug: 'fabao-design',
    title: 'Fabão Design',
    subtitle: 'Identidade visual para presença digital',
    image: fabaoDesign,
    year: '2025',
    tags: ['Identidade Visual', 'Branding', 'Canva'],
    description:
      'Proposta de identidade visual para a Fabão Design, construída para apresentar a marca de forma direta e memorável. A composição combina tipografia, cores e elementos gráficos em uma peça pensada para fortalecer a presença digital.',
    baseRotation: -2,
  },
  {
    slug: 'samptech',
    title: 'SampTech',
    subtitle: 'Peça visual para marca de tecnologia',
    image: samptechDesign,
    year: '2025',
    tags: ['Design Gráfico', 'Tecnologia', 'Canva'],
    description:
      'Arte criada para a SampTech com uma linguagem visual voltada ao universo da tecnologia. O projeto explora uma apresentação limpa e impactante para comunicar a marca de maneira profissional em seus canais digitais.',
    baseRotation: 2,
  },
  {
    slug: 'logo',
    title: 'Estudo de Logo',
    subtitle: 'Criação de marca e assinatura visual',
    image: logoDesign,
    year: '2025',
    tags: ['Logo', 'Identidade Visual', 'Tipografia'],
    description:
      'Estudo de logotipo desenvolvido para transformar uma ideia em uma assinatura visual reconhecível. O foco esteve no equilíbrio entre forma, legibilidade e personalidade, permitindo que a marca funcione em diferentes aplicações.',
    baseRotation: -1,
  },
  {
    slug: 'post-acai',
    title: 'Post para Açaí',
    subtitle: 'Conteúdo promocional para Instagram',
    image: acaiPost,
    year: '2025',
    tags: ['Social Media', 'Instagram', 'Canva'],
    description:
      'Post para Instagram criado para destacar o produto e despertar o apetite já no primeiro olhar. As cores vibrantes, a imagem do açaí e a hierarquia das informações ajudam a transformar a oferta em uma comunicação rápida e atrativa.',
    baseRotation: 1,
  },
  {
    slug: 'post-oculos',
    title: 'Post para Óculos',
    subtitle: 'Campanha visual para redes sociais',
    image: glassesPost,
    year: '2025',
    tags: ['Social Media', 'Campanha', 'Canva'],
    description:
      'Peça de social media para divulgação de óculos, desenvolvida com foco no produto e na leitura imediata no feed. A composição valoriza o item anunciado enquanto organiza a mensagem comercial de forma clara.',
    baseRotation: -2,
  },
  {
    slug: 'barbearia',
    title: 'Barbearia',
    subtitle: 'Post promocional para barbearia',
    image: barbershopPost,
    year: '2025',
    tags: ['Social Media', 'Publicidade', 'Canva'],
    description:
      'Arte promocional para barbearia pensada para chamar atenção em formatos verticais de redes sociais. A direção visual reforça o estilo do segmento e destaca os serviços de maneira objetiva e moderna.',
    baseRotation: 2,
  },
  {
    slug: 'cafeteria',
    title: 'Cafeteria',
    subtitle: 'Conteúdo visual para cafeteria',
    image: cafeteriaPost,
    year: '2025',
    tags: ['Social Media', 'Gastronomia', 'Canva'],
    description:
      'Post criado para uma cafeteria, com atmosfera acolhedora e foco na experiência do produto. A arte usa imagem, cor e tipografia para comunicar o convite ao consumo de forma leve e alinhada ao público das redes sociais.',
    baseRotation: -1,
  },
  {
    slug: 'hamburgueria',
    title: 'Hamburgueria',
    subtitle: 'Peça de divulgação gastronômica',
    image: hamburgueriaPost,
    year: '2025',
    tags: ['Social Media', 'Gastronomia', 'Canva'],
    description:
      'Material de divulgação para hamburgueria desenvolvido em formato vertical. A peça valoriza o lanche, cria contraste para a oferta e organiza os elementos para uma leitura eficiente em stories e publicações.',
    baseRotation: 1,
  },
]
