'use client'

import React, { FC } from 'react'
import { motion } from 'framer-motion';
import useFramerMotion from '@/hook/useFramerMotion';

type Props = {
  className?: string
}

const Company: FC<Props> = ({ className = '' }) => {

  const motionProps = useFramerMotion({
    inViewState: { translateX: 0, opacity: 1 },
    outViewState: { translateX: -100, opacity: 0 }
  })

  return (
    <div className={`w-full xl:h-screen h-fit flex justify-center items-center ${className} text-secondary`}>
      <div className="flex md:flex-row flex-col justify-center md:items-end items-center gap-4">
        <motion.div {...motionProps}>
          <h2 className="text-7xl font-thin text-nowrap ">陌聲行銷</h2>
        </motion.div>
        <h2 className="text-5xl font-light">﹡</h2>
        <div className="flex flex-col justify-start items-baseline">
          <div className="text-xl font-bold">數字行銷，智能決策，創意無限</div>
          <div className="text-lg font-normal">數據驅動，智能行銷，創意無限，助力品牌實現精準決策與卓越成效。</div>
        </div>
      </div>
    </div>
  );
}

export default Company