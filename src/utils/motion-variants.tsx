import type { Variants } from 'motion/react'

export const motionListVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22 },
  },
}

export const yMotionItemVariants: Variants = {
  hidden: { opacity: 0, y: -320 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  },
}

export const xMotionItemVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.84 },
  },
}