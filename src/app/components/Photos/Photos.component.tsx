import React, { FC } from 'react'
import { motion } from "framer-motion"
import MotionDivLayout from './MotionDivLayout.component';
import Image, { StaticImageData } from 'next/image';

type Props = {
  images: StaticImageData[],
}

const Photos: FC<Props> = ({ images }) => {

  const showImages = images.slice(0, 4)

  return <div className="w-full h-screen flex flex-col justify-start items-end gap-16">
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-[680px] flex justify-end items-start gap-4"
    >
      {
        showImages.map((image, index) => {
          const initialY = index % 2 === 0 ? 100 : -100
          const additionalClassName = index % 2 === 0 ? '' : 'self-end'

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
            className: " object-cover object-center h-full",
          }

          return (
            <MotionDivLayout {...motionDivLayoutProps}>
              <Image {...imageProps} />
            </MotionDivLayout>
          )
        })
      }
    </motion.div>
    <div className="flex justify-end items-center gap-16 w w-full">
      <div className="flex flex-col justify-between items-end gap-4">
        <h2 className="text-5xl font-thin">PHOTO</h2>
        <span data-attr="﹡" className="text-lg before:content-[attr(data-attr)]">view</span>
      </div>
      <div className={`bg-orange-500 w-[1450px] h-1 rounded-md`}></div>
    </div>
  </div>;
}

export default Photos