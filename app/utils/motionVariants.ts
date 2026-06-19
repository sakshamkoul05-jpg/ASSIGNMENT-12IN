// app/utils/motionVariants.ts
export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

export const spring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 20,
};

export const hover = {
  scale: 1.02,
  rotateX: 2,
  rotateY: 2,
  transition: spring,
};

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ...spring, duration: 0.4 } },
};
