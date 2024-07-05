import React, { FC } from 'react'
import { fallbackImage } from '@/app/imageHandler'
import Image from 'next/image'
import { RemoteImageProps } from '@/types'

const FallbackImage: FC<Pick<RemoteImageProps, 'fill'>> = (props) => {
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