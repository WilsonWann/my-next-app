import React, { FC } from 'react'
import Image from 'next/image'
import FallbackImage from '../FallbackImage/FallbackImage.component'
import { BlurImageType } from '@/types'

export type CustomImageProps = {
  image: BlurImageType
  fill?: boolean
}

const LocalImage: FC<CustomImageProps> = async ({ image, fill = false }) => {

  const imageProps = {
    src: image.src,
    placeholder: "blur" as const,
    blurDataURL: image.blurDataURL,
    alt: "",
    sizes: "100vw",
  }

  return (
    <Image {...imageProps} fill={fill} className="object-cover object-center" />
  )
}

export default LocalImage