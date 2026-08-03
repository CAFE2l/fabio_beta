import { Link } from 'react-router-dom'
import { motion, useSpring, useTransform } from 'framer-motion'
import { theme } from '../theme'
import TiltCard from './TiltCard'
import { useTilt } from './useTilt'
import type { Project } from '../data/projects'

interface Props {
  project: Project
  index: number
}

// alterna a dupla cromática entre os cards da grade
function glowFor(index: number) {
  return index % 2 === 0 ? theme.accent.blue : theme.accent.purple
}

function ProjectCardLayers({ project }: { project: Project }) {
  const { rawX, rawY } = useTilt()

  // paralaxe da imagem — camada mais profunda
  const imgX = useSpring(useTransform(rawX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 })
  const imgY = useSpring(useTransform(rawY, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 })

  // doodle — camada ainda mais sutil
  const doodleX = useSpring(useTransform(rawX, [-0.5, 0.5], [-5, 5]), { stiffness: 80, damping: 24 })
  const doodleY = useSpring(useTransform(rawY, [-0.5, 0.5], [-5, 5]), { stiffness: 80, damping: 24 })

  return (
    <>
      {/* doodle decorativo — camada 3 */}
      <motion.div
        style={{ x: doodleX, y: doodleY, translateZ: 20 }}
        className="pointer-events-none absolute right-3 top-3 z-10"
      >
        <svg viewBox="0 0 40 40" className="h-7 w-7 opacity-60" aria-hidden="true">
          <path d="M8 20 Q20 6 32 20 Q20 34 8 20Z" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="20" cy="20" r="3" fill="#3B82F6" opacity="0.5" />
        </svg>
      </motion.div>

      {/* imagem — camada 2 (paralaxe) */}
      <div className="overflow-hidden rounded-[1rem]">
        <motion.img
          src={project.image}
          alt={project.title}
          style={{ x: imgX, y: imgY, scale: 1.08 }}
          className="h-48 w-full object-cover grayscale"
        />
      </div>

      {/* texto — camada 1 */}
      <div style={{ transform: 'translateZ(30px)' }} className="relative px-2 pb-2 pt-4">
        <div className="pointer-events-none absolute inset-0 rounded-[0.85rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_42%)]" />
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-['Archivo_Black'] text-xl uppercase tracking-wide text-[#1B2A4A]">
              {project.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-[#2a3b59]">{project.subtitle}</p>
          </div>
          <span className="shrink-0 font-['Caveat'] text-lg text-[#1B2A4A] opacity-80">{project.year}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(0,194,209,0.16)_0%,rgba(143,227,136,0.12)_100%)] px-3 py-1 text-xs uppercase tracking-widest text-[#2a3b59]"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/projeto/${project.slug}`}
          className="mt-4 flex items-center gap-1 font-['Caveat'] text-lg text-[#1B2A4A] underline-offset-4 hover:underline"
        >
          ver projeto
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </>
  )
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <TiltCard
      glowColor={glowFor(index)}
      rotate={project.baseRotation}
      scaleOnHover={1.04}
      delay={index * 0.08}
      className="cursor-pointer overflow-hidden p-3"
      style={{ borderRadius: '1.3rem' }}
    >
      <ProjectCardLayers project={project} />
    </TiltCard>
  )
}
