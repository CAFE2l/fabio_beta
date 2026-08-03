import { useRef, type CSSProperties, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { theme } from '../theme'
import { TiltContext } from './useTilt'

// Detecta dispositivos com mouse real (pointer: fine) — desativa tilt em touch
const hasFinePointer =
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

const DEFAULT_SPRING = { stiffness: 150, damping: 15 }

interface TiltCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** Cor do glow de sombra dinâmica (azul ou roxo do tema). */
  glowColor?: string
  /** Inclinação máxima em graus. */
  intensity?: number
  /** Rotação estática de assinatura (ex: -2deg). */
  rotate?: number
  scaleOnHover?: number
  /** Atraso da animação de entrada ao entrar na viewport. */
  delay?: number
  /** Reanimar toda vez que entra/sai da viewport. */
  once?: boolean
  /** Fonte de dados brutos do mouse (exposição via useTilt). */
  spring?: { stiffness: number; damping: number }
}

export default function TiltCard({
  children,
  className = '',
  style,
  glowColor = theme.accent.blue,
  intensity = 10,
  rotate = 0,
  scaleOnHover = 1.03,
  delay = 0,
  once = true,
  spring = DEFAULT_SPRING,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0) // -0.5 … 0.5
  const rawY = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(rawY, [-0.5, 0.5], [intensity, -intensity]),
    spring
  )
  const rotateY = useSpring(
    useTransform(rawX, [-0.5, 0.5], [-intensity, intensity]),
    spring
  )

  // sombra dinâmica + glow na cor do accent, seguindo a inclinação
  const shadowX = useTransform(rawX, [-0.5, 0.5], [16, -16])
  const shadowY = useTransform(rawY, [-0.5, 0.5], [-16, 16])
  const boxShadow = useTransform(
    [shadowX, shadowY],
    ([sx, sy]: number[]) =>
      `${sx}px ${sy}px 45px rgba(0,0,0,0.55), 0 0 30px ${glowColor}4D`
  )

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!hasFinePointer) return
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    rawX.set((e.clientX - left) / width - 0.5)
    rawY.set((e.clientY - top) / height - 0.5)
  }

  function onMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    // perspective no pai — necessário para o efeito 3D funcionar
    <div style={{ perspective: '1200px' }}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 120, damping: 20, delay },
        }}
        viewport={{ once, amount: 0.3 }}
        whileHover="hover"
        variants={{ hover: { scale: scaleOnHover } }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        style={{
          rotate,
          rotateX: hasFinePointer ? rotateX : 0,
          rotateY: hasFinePointer ? rotateY : 0,
          boxShadow: hasFinePointer
            ? boxShadow
            : `0 0 30px ${glowColor}33`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          background: theme.bg.surface,
          backdropFilter: `blur(${theme.glass.blur})`,
          WebkitBackdropFilter: `blur(${theme.glass.blur})`,
          border: `1px solid rgba(255,255,255,0.18)`,
          borderRadius: '1.6rem',
          ...style,
        }}
        className={`relative ${className}`}
      >
        <TiltContext.Provider value={{ rawX, rawY }}>
          {children}
        </TiltContext.Provider>
      </motion.div>
    </div>
  )
}
