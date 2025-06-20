
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" as const } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeInOut" as const } }
};

export const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // Slightly faster stagger
      delayChildren: 0.1,
    }
  }
};

export const listItemVariants = {
  hidden: { y: 15, opacity: 0 }, // Slightly less y offset
  visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

export const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.25, delay: 0.15 } },
};

export const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2, ease: "easeIn" as const } },
};

export const sidebarVariants = {
  hidden: { x: "-100%", opacity: 0.8 },
  visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 20, duration: 0.4 } },
  exit: { x: "-100%", opacity: 0, transition: { duration: 0.25 } }
};

export const headerVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const, delay: 0.1 } } // Added slight delay
};

export const simpleFadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

export const titleVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
};

export const contentSectionVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const, delay: 0.1 } } // Optional delay
};
