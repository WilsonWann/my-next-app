import React, { FC } from 'react'
import Image from 'next/image'
import getBase64 from '@/helper/getLocalBase64'

type Props = {
  image: string
  fill?: boolean
}

const CustomImage: FC<Props> = async ({ image, fill = false }) => {

  const {
    blurDataURL,
    imageUrl: src,
  } = await getBase64(image)

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