import React, { FC } from 'react'
import Image from 'next/image'
import FallbackImage from '../FallbackImage/FallbackImage.component'
import getRemoteBase64 from '@/helper/getRemoteBase64'
import { RemoteImageProps } from '@/types'

const CustomImage: FC<RemoteImageProps> = async ({ image, fill = false }) => {

  const response = await getRemoteBase64(image)

  if (!response.success || !response.data) return <FallbackImage fill={fill} />

  const { src, blurDataURL } = response.data

  const imageProps = {
    src,
    placeholder: "blur" as const,
    blurDataURL,
    alt: "",
    sizes: "100vw",
  }

  return (
    <Image {...imageProps} fill={fill} className="object-cover object-center" />
  )
}

export default CustomImage