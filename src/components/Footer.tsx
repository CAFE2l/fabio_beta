import { motion } from 'framer-motion'
import TiltCard from './TiltCard'
import whatsappIcon from '../assets/imgs/Whatsapp.png'
import linkedinIcon from '../assets/imgs/LinkedIn.png'
import gmailIcon from '../assets/imgs/Gmail.png'

// ─── SUBSTITUIR_AQUI ────────────────────────────────────────────────────────
const WA_LINK = 'https://wa.me/5541XXXXXXXXX'       // SUBSTITUIR_AQUI: número WhatsApp
const LI_LINK = 'https://linkedin.com/in/SEU-USUARIO' // SUBSTITUIR_AQUI: perfil LinkedIn
const MAIL_LINK = 'mailto:seuemail@gmail.com'         // SUBSTITUIR_AQUI: endereço de e-mail
// ────────────────────────────────────────────────────────────────────────────

const contacts = [
  {
    label: 'WhatsApp',
    icon: whatsappIcon,
    href: WA_LINK,
    glow: '#25D366',
    external: true,
  },
  {
    label: 'LinkedIn',
    icon: linkedinIcon,
    href: LI_LINK,
    glow: '#0A66C2',
    external: true,
  },
  {
    label: 'Email',
    icon: gmailIcon,
    href: MAIL_LINK,
    glow: '#EA4335',
    external: false,
  },
]

export default function Footer() {
  return (
    <footer className="mt-6 px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* CTA superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p
            className="font-['Caveat'] text-4xl sm:text-5xl text-[#1B2A4A]"
            style={{ textShadow: '0 0 24px rgba(59,130,246,0.45)' }}
          >
            vamos conversar?
          </p>
          <p className="mt-2 text-[#2a3b59] text-lg">
            Disponível para novos projetos, colaborações e trabalho freelance.
          </p>
        </motion.div>

        {/* Cards de contato */}
        <div className="grid gap-4 sm:grid-cols-3">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
            >
              {/* glow LED pulsante na base — mesma lógica da seção Ferramentas */}
              <div className="relative">
                <motion.div
                  animate={{ opacity: [0.35, 0.55, 0.35] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                  className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 h-8 w-3/4 rounded-full"
                  style={{
                    background: `radial-gradient(ellipse at center, ${c.glow}55 0%, transparent 70%)`,
                    filter: 'blur(10px)',
                  }}
                />

                <a
                  href={c.href}
                  {...(c.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="block"
                  aria-label={c.label}
                >
                  <TiltCard
                    glowColor={c.glow}
                    intensity={8}
                    scaleOnHover={1.04}
                    delay={i * 0.12}
                    className="p-6 flex flex-col items-center gap-4 text-center"
                    style={{ borderColor: `${c.glow}30` }}
                  >
                    <img
                      src={c.icon}
                      alt={c.label}
                      className="h-14 w-14 object-contain drop-shadow-lg"
                    />
                    <span className="font-['Caveat'] text-2xl text-[#1B2A4A]">
                      {c.label}
                    </span>
                  </TiltCard>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divisor */}
        <div
          className="mt-10 mb-6 h-px w-full"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        />

        {/* Linha de copyright */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-center">
          {/* doodle pequeno */}
          <svg
            viewBox="0 0 60 60"
            className="h-6 w-6 opacity-40"
            style={{ color: '#3B82F6' }}
            aria-hidden="true"
          >
            <circle cx="30" cy="30" r="18" stroke="currentColor" strokeWidth="3" fill="none" />
            <path d="M30 12v36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M12 30h36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <p className="text-sm text-[#2a3b59] opacity-80">
            © 2026 Fabio R. Silva — feito com café, curly hair e muita perspectiva 3D
          </p>
        </div>
      </div>
    </footer>
  )
}
