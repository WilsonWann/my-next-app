'use client'

import React, { FC } from 'react'
import { motion } from "framer-motion"
import MotionDivLayout from './MotionDivLayout.component';
import Image, { StaticImageData } from 'next/image';
import HeadingWithLabels from '../HeadingWithLabels/HeadingWithLabels.component';

type Props = {
  images: StaticImageData[],
  className?: string
}

const Photos: FC<Props> = ({ images, className = '' }) => {

  const showImages = images.slice(0, 4)

  return <div className={`w-full h-auto 
  flex flex-col justify-start items-end 
  xl:gap-16 md:gap-8 gap-16 
  xl:pl-64 md:pl-4 pl-0
  ${className}`}>

    <motion.div
      initial="hidden"
      animate="visible"
      className="w-auto 
      h-auto
      grid
      md:grid-cols-4-minmax grid-cols-2-minmax
      ">

      {
        showImages.map((image, index) => {
          const initialY = index % 2 === 0 ? 100 : -100
          let additionalClassName
          if (index === 0) {
            additionalClassName = `xl:mr-2 xl:mb-8
                                   md:mr-1 md:mb-4
                                   mr-1    mb-4`
          } else if (index === 1) {
            additionalClassName = `xl:mr-2 xl:ml-2 xl:mt-8
                                   md:mr-1 md:ml-1 md:mt-4 md:mb-0
                                   mr-0    ml-1    mt-4    mb-4 `
          } else if (index === 2) {
            additionalClassName = `xl:mr-2 xl:ml-2 xl:mb-8
                                   md:mr-1 md:ml-1 md:mb-4 md:mt-0
                                   mr-1                    -mt-4`
          } else if (index === 3) {
            additionalClassName = `xl:ml-2 xl:mt-8
                                   md:ml-1 md:mt-4
                                   ml-1    mt-0`
          }

          const motionDivLayoutProps = {
            initialY,
            additionalClassName
          }

          const imageProps = {
            src: image,
            placeholder: "blur" as const,
            blurDataURL: image.blurDataURL,
            alt: "",
            sizes: "100vw",
          }

          return (
            <MotionDivLayout key={index} {...motionDivLayoutProps}>
              <Image {...imageProps}
                className="object-cover object-center aspect-3/4 "
              />
            </MotionDivLayout>
          )
        })
      }
    </motion.div>
    <div className="flex justify-end items-center xl:gap-16 md:gap-8 gap-4 w-full">
      <HeadingWithLabels heading={'PHOTO'} bottomLabel={'view'} className="text-secondary" />
      <div className={`bg-secondary w-[1450px] h-1 rounded-md`}></div>
    </div>
  </div>;
}

export default Photos