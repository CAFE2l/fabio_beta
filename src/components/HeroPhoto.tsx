import { motion, useSpring, useTransform } from 'framer-motion'
import { theme } from '../theme'
import TiltCard from './TiltCard'
import { useTilt } from './useTilt'

// Detecta dispositivos com mouse real (pointer: fine) — desativa highlight/paralaxe em touch
const hasFinePointer =
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

function HeroPhotoLayers() {
  const { rawX, rawY } = useTilt()

  // paralaxe da foto dentro da moldura — direção oposta ao tilt
  const imgX = useSpring(useTransform(rawX, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 18 })
  const imgY = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 18 })

  // highlight de luz: gradiente radial que segue o mouse
  const hlX = useTransform(rawX, [-0.5, 0.5], [20, 80]) // % horizontal
  const hlY = useTransform(rawY, [-0.5, 0.5], [20, 80]) // % vertical
  const highlight = useTransform(
    [hlX, hlY],
    ([x, y]: number[]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.10) 0%, transparent 65%)`
  )

  return (
    <>
      {/* highlight de luz — camada sobre a foto */}
      {hasFinePointer && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[1.5rem]"
          style={{ background: highlight }}
        />
      )}

      {/* foto com paralaxe interna */}
      <div className="overflow-hidden rounded-[1.2rem]">
        <motion.img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
          alt="Retrato do designer em preto e branco"
          style={hasFinePointer ? { x: imgX, y: imgY, scale: 1.06 } : {}}
          className="h-[460px] w-full object-cover grayscale"
        />
      </div>
    </>
  )
}

export default function HeroPhoto() {
  return (
    <TiltCard
      glowColor={theme.accent.blue}
      rotate={-2}
      scaleOnHover={1.02}
      delay={0.15}
      className="overflow-hidden p-3"
      style={{ borderRadius: '1.5rem' }}
    >
      <HeroPhotoLayers />
    </TiltCard>
  )
}
