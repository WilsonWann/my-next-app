import React, { Suspense } from 'react'
import LocalImage from '@/app/components/LocalImage/LocalImage.component'
import { getS3Image } from '@/app/action/getS3Object'
import FallbackImage from '@/app/components/FallbackImage/FallbackImage.component'
import SlideShow from '@/app/components/SlideShow/SlideShow.component'

type Props = {
  imageFolder: string,
  images: string[]
}

const PortfolioCaseImages = async (props: Props) => {

  const { imageFolder, images } = props

  const allImagesWithBlurDataUrl = await Promise.all(images.map(async image => await getS3Image(`${imageFolder}/${image}`)))

  return (
    <div className="flex flex-col items-stretch gap-6">
      {allImagesWithBlurDataUrl.map((image, index) => (
        <div key={index} className="relative w-full md:h-[500px] h-[420px] overflow-clip">
          {image.success ? <LocalImage image={image.data} fill /> : <FallbackImage />}
        </div>
      ))}
    </div>
  )
}

export default PortfolioCaseImages