import { createContext, useContext } from 'react'
import type { MotionValue } from 'framer-motion'

export interface TiltContextValue {
  rawX: MotionValue<number>
  rawY: MotionValue<number>
}

export const TiltContext = createContext<TiltContextValue | null>(null)

/** Hook para camadas de paralaxe internas de um <TiltCard>. */
export function useTilt(): TiltContextValue {
  const ctx = useContext(TiltContext)
  if (!ctx) throw new Error('useTilt deve ser usado dentro de <TiltCard>')
  return ctx
}
