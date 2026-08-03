import { type ReactNode } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { theme } from '../theme'
import TiltCard from './TiltCard'
import { useTilt } from './useTilt'

// Reduz a intensidade do blur do glow em telas pequenas (performance)
const prefersReducedGlow =
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches

const BASE_BLUR = prefersReducedGlow ? 26 : 45
const HOVER_BLUR = prefersReducedGlow ? 34 : 60

interface ToolCardProps {
  name: string
  color: string
  delay: number
  children: ReactNode
}

function ToolCard({ name, color, delay, children }: ToolCardProps) {
  const { rawX, rawY } = useTilt()

  // paralaxe do logo — direção oposta ao tilt, levemente à frente do card
  const logoX = useSpring(useTransform(rawX, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 18 })
  const logoY = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 18 })

  const glowBg = `radial-gradient(ellipse 70% 60% at 50% 100%, ${color} 0%, transparent 70%)`

  return (
    <TiltCard
      glowColor={color}
      intensity={10}
      scaleOnHover={1.04}
      delay={delay}
      once={false}
      className="flex min-h-[300px] flex-col items-center justify-center px-8 py-12"
      style={{
        borderRadius: '24px',
        background: 'linear-gradient(145deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05))',
        borderColor: 'rgba(255,255,255,0.15)',
      }}
    >
      {/* brilho sutil da borda na cor do LED (~20%) */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[24px]"
        initial={{ opacity: 0.2 }}
        variants={{ hover: { opacity: 0.35 } }}
        style={{ border: `1px solid ${color}`, willChange: 'opacity' }}
      />

      {/* glow LED na base — vaza por baixo do card */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ type: 'spring', stiffness: 90, damping: 22, delay: delay + 0.2 }}
        variants={{ hover: { scale: 1.25, filter: `blur(${HOVER_BLUR}px)` } }}
        className="pointer-events-none absolute -bottom-16 left-1/2 -z-10 h-36 w-[85%]"
        style={{
          x: '-50%',
          filter: `blur(${BASE_BLUR}px)`,
          background: glowBg,
          boxShadow: `0 0 45px ${color}`,
          willChange: 'transform, opacity, filter',
        }}
      >
        {/* respiração da luz — pulsar suave entre 0.5 e 1 */}
        <motion.div
          className="h-full w-full"
          style={{ background: glowBg }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* logo em camada própria, levemente à frente do card */}
      <div style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}>
        <motion.div
          variants={{ hover: { scale: 1.06 } }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          style={{ x: logoX, y: logoY, willChange: 'transform' }}
          className="flex flex-col items-center"
        >
          {children}
          <span className="mt-6 text-xs font-medium uppercase tracking-[0.35em] text-[#1B2A4A]">
            {name}
          </span>
        </motion.div>
      </div>
    </TiltCard>
  )
}

function FigmaLogo() {
  return (
    <svg viewBox="0 0 38 57" className="h-24 w-auto sm:h-28" role="img" aria-label="Figma">
      <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#ff7262" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      <path fill="#a259ff" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
      <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#0acf83" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  )
}

function CanvaLogo() {
  return (
    <svg viewBox="0 0 80 30" className="h-20 w-auto sm:h-24" role="img" aria-label="Canva">
      <defs>
        <radialGradient id="canva-g-a" cx="0" cy="0" r="1" gradientTransform="matrix(.21 -.67353 .2545 .07935 .512 1.109)">
          <stop stopColor="#6420FF" />
          <stop offset="1" stopColor="#6420FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="canva-g-b" cx="0" cy="0" r="1" gradientTransform="matrix(.584 .16215 -.3771 1.3582 .024 .666)">
          <stop offset=".25" stopColor="#00C4CC" />
          <stop offset="1" stopColor="#00C4CC" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="canva-g-c" cx="0" cy="0" r="1" gradientTransform="matrix(.29425 -.739 .3555 .14155 .427 1)">
          <stop stopColor="#6420FF" />
          <stop offset="1" stopColor="#6420FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="canva-g-d" cx="0" cy="0" r="1" gradientTransform="matrix(.3915 -.59869 .4743 .31016 .028 1)">
          <stop stopColor="#6420FF" />
          <stop offset="1" stopColor="#6420FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="canva-g-e" cx="0" cy="0" r="1" gradientTransform="rotate(34.593 -.1 .2) scale(1.03255 2.80688)">
          <stop stopColor="#00C4CC" />
          <stop offset="1" stopColor="#00C4CC" stopOpacity="0" />
        </radialGradient>
        <pattern id="canva-p" width="1" height="1" patternContentUnits="objectBoundingBox">
          <path fill="#7D2AE7" d="M0 0h1v1H0z" />
          <path fill="url(#canva-g-a)" d="M0 0h1v1H0z" />
          <path fill="url(#canva-g-b)" d="M0 0h1v1H0z" />
          <path fill="url(#canva-g-c)" d="M0 0h1v1H0z" />
          <path fill="url(#canva-g-d)" d="M0 0h1v1H0z" />
          <path fill="url(#canva-g-e)" d="M0 0h1v1H0z" />
        </pattern>
      </defs>
      <path
        fill="url(#canva-p)"
        d="M79.444 18.096c-.136 0-.26.088-.324.272-.82 2.34-1.928 3.732-2.84 3.732-.524 0-.736-.584-.736-1.5 0-2.292 1.372-7.152 2.064-9.368.08-.268.132-.508.132-.712 0-.644-.352-.96-1.224-.96-.94 0-1.952.368-2.936 2.092-.34-1.52-1.368-2.184-2.804-2.184-1.66 0-3.264 1.068-4.584 2.8-1.32 1.732-2.872 2.3-4.04 2.02.84-2.056 1.152-3.592 1.152-4.732 0-1.788-.884-2.868-2.312-2.868-2.172 0-3.424 2.072-3.424 4.252 0 1.684.764 3.416 2.444 4.256-1.408 3.184-3.464 6.064-4.244 6.064-1.008 0-1.304-4.932-1.248-8.46.036-2.024.204-2.128.204-2.74 0-.352-.228-.592-1.144-.592-2.136 0-2.796 1.808-2.896 3.884a10.233 10.233 0 0 1-.368 2.332c-.892 3.184-2.732 5.6-3.932 5.6-.556 0-.708-.556-.708-1.284 0-2.292 1.284-5.156 1.284-7.6 0-1.796-.788-2.932-2.272-2.932-1.748 0-4.06 2.08-6.248 5.976.72-2.984 1.016-5.872-1.116-5.872A2.886 2.886 0 0 0 36 9.916a.752.752 0 0 0-.432.728c.204 3.176-2.56 11.312-5.18 11.312-.476 0-.708-.516-.708-1.348 0-2.296 1.368-7.144 2.056-9.364.088-.288.136-.536.136-.752 0-.608-.376-.92-1.228-.92-.936 0-1.952.356-2.932 2.08-.344-1.52-1.372-2.184-2.808-2.184-2.356 0-4.988 2.492-6.144 5.74-1.548 4.336-4.668 8.524-8.868 8.524-3.812 0-5.824-3.172-5.824-8.184C4.068 8.312 9.38 2.4 13.32 2.4c1.884 0 2.784 1.2 2.784 3.04 0 2.228-1.244 3.264-1.244 4.112 0 .26.216.516.644.516 1.712 0 3.728-2.012 3.728-4.756S17.004.56 13.064.56C6.552.56 0 7.112 0 15.508c0 6.68 3.296 10.708 8.996 10.708 3.888 0 7.284-3.024 9.116-6.552.208 2.924 1.536 4.452 3.56 4.452 1.8 0 3.256-1.072 4.368-2.956.428 1.972 1.564 2.936 3.04 2.936 1.692 0 3.108-1.072 4.456-3.064-.02 1.564.336 3.036 1.692 3.036.64 0 1.404-.148 1.54-.708 1.428-5.904 4.956-10.724 6.036-10.724.32 0 .408.308.408.672 0 1.604-1.132 4.892-1.132 6.992 0 2.268.964 3.768 2.956 3.768 2.208 0 4.452-2.704 5.948-6.656.468 3.692 1.48 6.672 3.064 6.672 1.944 0 5.396-4.092 7.488-8.424.82.104 2.052.076 3.236-.76-.504 1.276-.8 2.672-.8 4.068 0 4.02 1.92 5.148 3.572 5.148 1.796 0 3.252-1.072 4.368-2.956.368 1.7 1.308 2.932 3.036 2.932 2.704 0 5.052-2.764 5.052-5.032 0-.6-.256-.964-.556-.964zM23.32 21.888c-1.092 0-1.52-1.1-1.52-2.74 0-2.848 1.948-7.604 4.008-7.604.9 0 1.24 1.06 1.24 2.356 0 2.892-1.852 7.988-3.728 7.988zm37.404-8.5c-.652-.776-.888-1.832-.888-2.772 0-1.16.424-2.14.932-2.14s.664.5.664 1.196c0 1.164-.416 2.864-.708 3.716zm8.468 8.5c-1.092 0-1.52-1.264-1.52-2.74 0-2.748 1.948-7.604 4.024-7.604.9 0 1.22 1.052 1.22 2.356 0 2.892-1.82 7.988-3.724 7.988z"
      />
    </svg>
  )
}

export default function Tools() {
  return (
    <section id="tools" className="relative py-16 sm:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* brilho ambiente sutil no topo do palco */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-48 w-[70%] -translate-x-1/2"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(59,130,246,0.12), transparent 70%)',
            filter: 'blur(30px)',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center font-['Caveat'] text-3xl text-[#1B2A4A] sm:text-4xl"
          style={{ textShadow: '0 0 20px rgba(139,61,255,0.4)' }}
        >
          as ferramentas que eu uso
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          <ToolCard name="Figma" color={theme.accent.blue} delay={0.25}>
            <FigmaLogo />
          </ToolCard>
          <ToolCard name="Canva" color={theme.accent.purple} delay={0.4}>
            <CanvaLogo />
          </ToolCard>
        </div>
      </div>
    </section>
  )
}
