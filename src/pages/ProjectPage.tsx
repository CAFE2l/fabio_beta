import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { theme } from '../theme'
import { projects } from '../data/projects'

const pageVariants = {
  initial: { opacity: 0, rotateY: -12, scale: 0.96, originX: 0 },
  animate: { opacity: 1, rotateY: 0, scale: 1, originX: 0 },
  exit: { opacity: 0, rotateY: 8, scale: 0.97, originX: 1 },
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <p className="font-['Comic_Sans_MS','Comic_Sans',cursive] text-2xl text-[var(--text-primary)]">Projeto não encontrado.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8" style={{ perspective: '1200px' }}>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: 'spring', stiffness: 140, damping: 20 }}
        className="mx-auto max-w-4xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* back link */}
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 font-['Comic_Sans_MS','Comic_Sans',cursive] text-xl text-[var(--text-primary)] hover:underline underline-offset-4"
          style={{ textShadow: '0 0 14px rgba(59,130,246,0.5)' }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          voltar
        </Link>

        {/* hero card */}
        <motion.div
          layoutId={`card-${project.slug}`}
          className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,194,209,0.18)_0%,rgba(143,227,136,0.14)_100%)] backdrop-blur-xl"
          style={{
            rotate: project.baseRotation * 0.3,
            boxShadow: '0 0 45px rgba(59,130,246,0.18), 0 25px 60px -12px rgba(0,0,0,0.6)',
          }}
        >
          {/* imagem */}
          <motion.div layoutId={`img-${project.slug}`} className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-72 w-full object-cover grayscale sm:h-96"
            />
          </motion.div>

          {/* conteúdo */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <motion.p
                  layoutId={`subtitle-${project.slug}`}
                  className="font-['Comic_Sans_MS','Comic_Sans',cursive] text-xl text-[var(--accent-purple-light)]"
                >
                  {project.subtitle}
                </motion.p>
                <motion.h1
                  layoutId={`title-${project.slug}`}
                  className="mt-1 font-['Archivo_Black'] text-4xl uppercase leading-tight tracking-wide text-[var(--text-primary)] sm:text-5xl"
                >
                  {project.title}
                </motion.h1>
              </div>
              <span className="font-['Comic_Sans_MS','Comic_Sans',cursive] text-2xl text-[var(--text-secondary)]">{project.year}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* descrição — entra depois do card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-6 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,194,209,0.16)_0%,rgba(143,227,136,0.14)_100%)] p-6 backdrop-blur-xl sm:p-8"
          style={{ rotate: -0.5, boxShadow: '0 0 35px rgba(139,61,255,0.15)' }}
        >
          {/* doodle decorativo */}
          <svg viewBox="0 0 60 60" className="mb-4 h-10 w-10 opacity-40" aria-hidden="true">
            <path d="M10 30 Q30 8 50 30 Q30 52 10 30Z" stroke={theme.accent.purple} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M20 30 Q30 18 40 30 Q30 42 20 30Z" stroke={theme.accent.blue} strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          <p className="text-lg leading-8 text-[var(--text-primary)] sm:text-xl">{project.description}</p>
        </motion.div>

        {/* navegação entre projetos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-wrap justify-between gap-4"
        >
          {projects.map((p, i) =>
            p.slug !== project.slug ? (
              <Link
                key={p.slug}
                to={`/projeto/${p.slug}`}
                className="rounded-[1rem] border border-white/10 bg-white/5 px-5 py-3 font-['Comic_Sans_MS','Comic_Sans',cursive] text-lg text-[var(--text-primary)] backdrop-blur-xl transition-shadow hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                style={{
                  boxShadow: `0 0 18px ${i % 2 === 0 ? 'rgba(59,130,246,0.15)' : 'rgba(139,61,255,0.15)'}`,
                }}
              >
                {p.title} →
              </Link>
            ) : null
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
