import React, { FC } from 'react'
import Image from 'next/image'
import getBase64 from '@/helper/getLocalBase64'
import FallbackImage from '../FallbackImage/FallbackImage.component'

export type CustomImageProps = {
  image: string
  fill?: boolean
}

const CustomImage: FC<CustomImageProps> = async ({ image, fill = false }) => {

  const response = await getBase64(image)

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