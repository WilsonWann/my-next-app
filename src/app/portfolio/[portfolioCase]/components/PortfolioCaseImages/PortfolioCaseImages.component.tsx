import React, { Suspense } from 'react'
import LocalImage from '@/app/components/LocalImage/LocalImage.component'
import { getS3Image } from '@/app/action/getS3Object'
import FallbackImage from '@/app/components/FallbackImage/FallbackImage.component'

type Props = {
  imageFolder: string,
  images: string[]
}

const PortfolioCaseImages = async (props: Props) => {

  const { imageFolder, images } = props

  const allImagesWithBlurDataUrl = await Promise.all(images.map(async image => await getS3Image(`${imageFolder}/${image}`)))

  return (
    allImagesWithBlurDataUrl.map((image, index) => (
      <div key={index} className="relative w-full h-[500px] overflow-clip">
        {image.success ? <LocalImage image={image.data} fill /> : <FallbackImage />}
      </div>
    ))
  )
}

export default PortfolioCaseImages