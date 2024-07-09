'use client'

import React, { FC } from 'react'
import { motion } from 'framer-motion';
import HeadingWithLabels from '@/app/components/HeadingWithLabels/HeadingWithLabels.component'
import useFramerMotion from '@/hook/useFramerMotion'
import OuterLink from '../OuterLink/OuterLink.component'
import { contactDetailArray } from '@/app/const/ContactDetailArray';

type Props = {
  className?: string
}

const Contact: FC<Props> = ({ className = '' }) => {

  const contactMotionProps = useFramerMotion({
    inViewState: { translateX: 0, opacity: 1 },
    outViewState: { translateX: -100, opacity: 0 }
  })

  const contactDetailMotionProps = useFramerMotion({
    inViewState: { translateY: 0, opacity: 1 },
    outViewState: { translateY: -100, opacity: 0 }
  })

  return (
    <div className={`flex sm:flex-row flex-col justify-center items-center md:gap-24 sm:gap-12 gap-6 ${className}`}>
      <motion.div {...contactMotionProps}>
        <HeadingWithLabels
          heading={'CONTACT'}
          upperLabel={'聯絡我們'}
          bottomLabel={'musense'}
          className="text-black"
          headingClassName={'text-secondary'}
        />
      </motion.div>
      <motion.div {...contactDetailMotionProps}>
        <div className={`grid md:grid-2x2 grid-1x4 md:grid-rows-2 grid-rows-4 place-items-start xl:gap-x-24 md:gap-x-2 gap-x-2 md:gap-y-4 gap-y-2 md:px-0 px-8`}>
          {contactDetailArray.map((contactDetail, index) =>
            <OuterLink key={index} {...contactDetail} />
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Contact