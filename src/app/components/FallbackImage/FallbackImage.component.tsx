import React, { FC } from 'react'
import { fallbackImage } from '@/app/imageHandler'
import { CustomImageProps } from '../CustomImage/CustomImage.component'
import Image from 'next/image'

const FallbackImage: FC<Pick<CustomImageProps, 'fill'>> = (props) => {
  const fallbackProps = {
    src: fallbackImage,
    placeholder: "blur" as const,
    blurDataURL: fallbackImage.blurDataURL,
    alt: "image not found",
    sizes: "100vw",
  }
  return <Image {...fallbackProps} fill={props.fill} className="object-cover object-center" />
}

export default FallbackImage