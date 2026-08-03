import { motion } from 'framer-motion'

const NOISE =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'

// Fundo global contínuo: palco escuro + aurora sutil azul/roxo + grão
export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* gradiente base diagonal sutil */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 15% 0%, rgba(59,130,246,0.09), transparent 60%), radial-gradient(1100px 750px at 90% 100%, rgba(139,61,255,0.09), transparent 60%)',
        }}
      />

      {/* mancha azul — deriva lenta */}
      <motion.div
        className="absolute -left-[10%] -top-1/4 h-[60vh] w-[55vw] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(59,130,246,0.16), transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
        animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* mancha roxa — deriva lenta na direção oposta */}
      <motion.div
        className="absolute right-[-10%] top-1/3 h-[55vh] w-[50vw] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(139,61,255,0.14), transparent 70%)',
          filter: 'blur(90px)',
          willChange: 'transform',
        }}
        animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* textura de grão sutil */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage: NOISE,
          backgroundSize: '180px 180px',
          opacity: 0.035,
        }}
      />
    </div>
  )
}
