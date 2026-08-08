import { type ReactNode } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { projects } from './data/projects'
import { theme } from './theme'
import ProjectCard from './components/ProjectCard'
import ProjectPage from './pages/ProjectPage'
import Tools from './components/Tools'
import HeroPhoto from './components/HeroPhoto'
import TiltCard from './components/TiltCard'
import AuroraBackground from './components/AuroraBackground'
import Footer from './components/Footer'

const skills = [
  { subject: 'Criação no Canva', value: 92, fullMark: 100 },
  { subject: 'Identidade Visual', value: 86, fullMark: 100 },
  { subject: 'Social Media', value: 90, fullMark: 100 },
  { subject: 'Apresentações', value: 82, fullMark: 100 },
  { subject: 'Tipografia', value: 80, fullMark: 100 },
  { subject: 'Figma', value: 55, fullMark: 100 },
]

const tools = ['Canva', 'Figma']

function SectionLabel({ children, color }: { children: string; color: string }) {
  return (
    <p
      className="font-['Comic_Sans_MS','Comic_Sans',cursive] text-2xl"
      style={{ color, textShadow: `0 0 18px ${color}66` }}
    >
      {children}
    </p>
  )
}

function DoodleChip({
  children,
  color,
  rotate = 0,
  className = '',
}: {
  children: ReactNode
  color: string
  rotate?: number
  className?: string
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-full border bg-white/5 backdrop-blur-md ${className}`}
      style={{
        color,
        rotate: `${rotate}deg`,
        borderColor: `${color}40`,
        boxShadow: `0 0 20px ${color}33`,
      }}
    >
      {children}
    </div>
  )
}

function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <main className="mx-auto flex max-w-7xl flex-col gap-6">
        <nav className="flex flex-wrap items-center justify-between gap-3 rounded-[1.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,194,209,0.20)_0%,rgba(143,227,136,0.16)_100%)] px-4 py-3 shadow-[0_0_30px_rgba(0,194,209,0.12)] backdrop-blur-xl">
          <span className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple-light)] bg-clip-text font-['Comic_Sans_MS','Comic_Sans',cursive] text-2xl text-transparent">
            fabio / portfolio
          </span>
          <div className="flex flex-wrap gap-3 text-sm uppercase tracking-[0.2em] text-[var(--text-primary)]">
            <a href="#hero" className="transition hover:text-[var(--text-primary)]">Início</a>
            <a href="#about" className="transition hover:text-[var(--text-primary)]">Sobre</a>
            <a href="#skills" className="transition hover:text-[var(--text-primary)]">Habilidades</a>
            <a href="#portfolio" className="transition hover:text-[var(--text-primary)]">Projetos</a>
          </div>
        </nav>

        <section id="hero" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,194,209,0.18)_0%,rgba(143,227,136,0.16)_100%)] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_45%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className="font-['Comic_Sans_MS','Comic_Sans',cursive] text-2xl text-[var(--text-primary)]"
                    style={{ textShadow: '0 0 18px rgba(59,130,246,0.6)' }}
                  >
                    psst…
                  </p>
                  <h1 className="font-['Archivo_Black'] text-5xl uppercase leading-[0.85] text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
                    Fábio
                    <br />
                    H. Borges Filho
                  </h1>
                </div>
                <DoodleChip color={theme.accent.blue} rotate={-8} className="p-4">
                  <svg viewBox="0 0 80 80" className="h-14 w-14" aria-hidden="true">
                    <path d="M24 18c11-6 22 3 22 16 0 10-8 16-16 19-8 3-15 9-15 17" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <circle cx="56" cy="28" r="11" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M50 28h12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </DoodleChip>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,194,209,0.16)_0%,rgba(143,227,136,0.14)_100%)] p-6 shadow-[0_0_30px_rgba(0,194,209,0.14)] backdrop-blur-xl"
              >
                <div className="mb-4 flex items-center gap-2">
                  <svg viewBox="0 0 60 60" className="h-8 w-8 text-[var(--text-primary)]" aria-hidden="true">
                    <path d="M14 18c8-8 18-8 26 2 5 6 5 15-2 22-5 5-12 6-18 3" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M32 18l8-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <path d="M36 24l10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <span className="font-['Comic_Sans_MS','Comic_Sans',cursive] text-2xl text-[var(--text-primary)]">designer • criação visual no Canva • aprendendo Figma</span>
                </div>
                <p className="max-w-xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
                  Crio artes e materiais visuais completos no Canva — posts, identidades, apresentações e peças que comunicam de verdade — e estou começando a explorar o Figma para dar os próximos passos.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mx-auto w-full max-w-md"
            >
              <DoodleChip color={theme.accent.blue} rotate={-8} className="absolute left-3 top-3 h-12 w-12 p-2">
                <svg viewBox="0 0 60 60" className="h-10 w-10" aria-hidden="true">
                  <path d="M11 22l15-8 10 14 13-8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M22 27l8 6 12-4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </DoodleChip>
              <DoodleChip color={theme.accent.purple} rotate={8} className="absolute right-3 top-2 h-12 w-12 p-2">
                <svg viewBox="0 0 60 60" className="h-10 w-10" aria-hidden="true">
                  <path d="M18 14h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M18 28h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M18 42h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </DoodleChip>
              <DoodleChip color={theme.accent.blue} rotate={-4} className="absolute bottom-3 right-4 h-14 w-14 p-3">
                <svg viewBox="0 0 60 60" className="h-10 w-10" aria-hidden="true">
                  <circle cx="30" cy="30" r="18" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M30 12v36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M12 30h36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </DoodleChip>
              <HeroPhoto />
            </motion.div>
          </div>
        </section>

        <section id="about" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <TiltCard glowColor={theme.accent.blue} className="p-6">
            <SectionLabel color={theme.accent.blue}>sobre</SectionLabel>
            <h2 className="mt-2 font-['Archivo_Black'] text-3xl uppercase tracking-wide text-[var(--text-primary)]">
              Tudo começa no Canva — e logo, no Figma.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
              Sou o Fábio: trabalho diariamente com criação visual no Canva, fazendo desde posts para redes sociais até identidades completas. Estou iniciando no Figma para evoluir para interfaces e protótipos.
            </p>
          </TiltCard>

          <TiltCard glowColor={theme.accent.purple} className="p-6">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 60 60" className="h-8 w-8 text-[var(--text-primary)]" aria-hidden="true">
                <path d="M16 16c10-10 28-8 34 10 6 17-6 30-18 30-8 0-16-6-16-15" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M31 16l8-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <SectionLabel color={theme.accent.purple}>ferramentas</SectionLabel>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-[1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,194,209,0.14)_0%,rgba(143,227,136,0.12)_100%)] px-4 py-3 backdrop-blur-md"
                  style={{
                    rotate: `${(index % 2 === 0 ? 1 : -1) * 2}deg`,
                    boxShadow: `0 0 16px ${theme.accent.blue}22`,
                  }}
                >
                  <span className="text-[var(--text-primary)]">{tool}</span>
                </motion.div>
              ))}
            </div>
          </TiltCard>
        </section>

        <section id="skills" className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <TiltCard glowColor={theme.accent.blue} className="p-6">
            <SectionLabel color={theme.accent.blue}>habilidades</SectionLabel>
            <h2 className="mt-2 font-['Archivo_Black'] text-3xl uppercase tracking-wide text-[var(--text-primary)]">
              Um radar de pontos fortes.
            </h2>
            <div className="mt-6 h-[360px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skills}>
                  <PolarGrid stroke="rgba(148,163,184,0.25)" strokeDasharray="3 3" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: '#94A3B8', fontSize: 12, fontFamily: 'Inter, sans-serif' }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                  <Radar
                    name="Habilidades"
                    dataKey="value"
                    stroke={theme.accent.blue}
                    fill={theme.accent.blue}
                    fillOpacity={0.35}
                    strokeWidth={3}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(11,17,32,0.9)',
                      border: '1px solid rgba(59,130,246,0.4)',
                      borderRadius: '1rem',
                      boxShadow: '0 0 30px rgba(59,130,246,0.2)',
                      color: '#F1F5F9',
                      backdropFilter: 'blur(20px)',
                    }}
                    formatter={(value) => [`${value}/100`, 'Pontuação']}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </TiltCard>

          <div className="flex flex-col gap-4">
            <TiltCard glowColor={theme.accent.purple} className="p-6">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 60 60" className="h-8 w-8 text-[var(--text-primary)]" aria-hidden="true">
                  <path d="M14 26l16-12 16 12v20H14z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M22 36h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <SectionLabel color={theme.accent.purple}>notas</SectionLabel>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {['Ritmo e harmonia visual', 'Cores e tipografia', 'Artes prontas para cada rede', 'Atenção ao detalhe'].map((note) => (
                  <div
                    key={note}
                    className="rounded-[0.9rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,194,209,0.14)_0%,rgba(143,227,136,0.12)_100%)] px-4 py-3 text-[var(--text-secondary)] backdrop-blur-md"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </TiltCard>

            <TiltCard
              glowColor={theme.accent.purple}
              className="p-6"
              style={{
                background: 'linear-gradient(150deg, rgba(139,61,255,0.14), rgba(255,255,255,0.04))',
                borderColor: 'rgba(168,85,247,0.35)',
              }}
            >
              <SectionLabel color={theme.accent.purpleLight}>recado</SectionLabel>
              <p className="mt-3 text-lg leading-8 text-[var(--text-primary)]">
                Cada arte é pensada para comunicar de verdade — do post ao material de marca — sempre com capricho no detalhe.
              </p>
            </TiltCard>
          </div>
        </section>

        <Tools />

        <section id="contact" />

        <section id="portfolio" className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,194,209,0.16)_0%,rgba(143,227,136,0.14)_100%)] p-6 shadow-[0_0_40px_rgba(0,194,209,0.10)] backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 60 60" className="h-8 w-8 text-[var(--text-primary)]" aria-hidden="true">
              <path d="M17 15h26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M20 24h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M21 33h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M24 42h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <SectionLabel color={theme.accent.purpleLight}>meus trabalhos</SectionLabel>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen">
      <AuroraBackground />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto/:slug" element={<ProjectPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
