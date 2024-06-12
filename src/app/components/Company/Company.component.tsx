import { motion, useAnimation } from 'framer-motion';
import React, { FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {
  className?: string
}

const Company: FC<Props> = ({ className = '' }) => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // 每次進入視口時都觸發
    threshold: 0.1, // 只有10%可見時就觸發
  });
  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: -100, opacity: 0 });
    }
  }, [controls, inView]);

  return <div className={`
  w-full 
  xl:h-screen h-fit
  flex justify-center items-center ${className}`}>
    <div className="
    flex 
    md:flex-row flex-col
    justify-center 
    md:items-end items-center
    gap-4">
      <motion.div
        ref={ref}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        <h2 className="text-7xl font-thin text-nowrap text-title">陌聲行銷</h2>
      </motion.div>
      <h2 className="text-5xl font-light text-title">﹡</h2>
      <div className="flex flex-col justify-start items-baseline">
        <div className="text-xl font-bold">數字行銷，智能決策，創意無限</div>
        <div className="text-lg font-normal">數據驅動，智能行銷，創意無限，助力品牌實現精準決策與卓越成效。</div>
      </div>
    </div>
  </div>;
}

export default Company