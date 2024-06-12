import { motion, useAnimation, Variants } from 'framer-motion';
import React, { FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {
  initialY: number,
  children: React.ReactNode,
  additionalClassName?: string
}

const MotionDivLayout: FC<Props> = ({ initialY, children, additionalClassName = '' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { translateY: initialY, opacity: 0 },
    visible: { translateY: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.8 }}
      className={` rounded-md ${additionalClassName}`}
    >
      {children}
    </motion.div>
  );
};

export default MotionDivLayout