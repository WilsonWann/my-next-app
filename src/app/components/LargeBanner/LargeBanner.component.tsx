'use client'

import useFramerMotion from '@/hook/useFramerMotion';
import { motion, useAnimation } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {
  image: StaticImageData
  aspectRatio?: string
  className?: string
  imageClassName?: string
}

const LargeBanner: FC<Props> = ({
  image,
  aspectRatio = 'aspect-main-banner',
  className = '',
  imageClassName = 'w-screen'
}) => {

  const motionProps = useFramerMotion({
    inViewState: { opacity: 1 },
    outViewState: { opacity: 0 }
  })

  const imageProps = {
    src: image,
    placeholder: "blur" as const,
    blurDataURL: image.blurDataURL,
    alt: "",
    sizes: "100vw",
  }

  return (
    <div className={`w-screen overflow-clip ${aspectRatio} ${className}`}>
      <motion.div {...motionProps} className="h-full w-full">
        <Image {...imageProps} className={`object-cover object-center ${aspectRatio} ${imageClassName}`} />
      </motion.div>
    </div>
  );
}

export default LargeBanner