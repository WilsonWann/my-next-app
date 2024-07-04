import React, { FC } from 'react'
import { motion } from 'framer-motion';
import useFramerMotion from '@/hook/useFramerMotion';

type Props = {
  initialY: number,
  children: React.ReactNode,
  className?: string
}

const MotionDivLayout: FC<Props> = ({ initialY, children, className = '' }) => {

  const motionProps = useFramerMotion({
    inViewState: { translateY: 0, opacity: 1 },
    outViewState: { translateY: initialY, opacity: 0 }
  })

  return (
    <motion.div {...motionProps} className={`rounded-md ${className}`}>
      {children}
    </motion.div>
  );
};

export default MotionDivLayout