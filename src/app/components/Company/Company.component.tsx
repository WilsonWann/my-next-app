import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const Company = () => {

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

  return <div className="!mb-0 w-full h-screen flex justify-center items-center">
    <div className="flex flex-row justify-center items-end gap-4">
      <motion.div
        ref={ref}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        <h2 className="text-7xl font-thin">陌聲行銷</h2>
      </motion.div>
      <h2 className="text-5xl font-light">﹡</h2>
      <div className="flex flex-col justify-start items-baseline">
        <div className="text-xl font-bold">數字行銷，智能決策，創意無限</div>
        <div className="text-lg font-normal">數據驅動，智能行銷，創意無限，助力品牌實現精準決策與卓越成效。</div>
      </div>
    </div>
  </div>;
}

export default Company