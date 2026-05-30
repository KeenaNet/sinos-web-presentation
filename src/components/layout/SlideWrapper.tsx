import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

const slideVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`w-full max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-12 flex flex-col justify-center h-full overflow-y-auto ${className}`}
    >
      {children}
    </motion.div>
  );
};
