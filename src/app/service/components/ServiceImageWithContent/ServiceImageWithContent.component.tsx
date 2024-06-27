import React, { FC } from 'react'
import { noto } from '@/app/fonts'
import Image, { type StaticImageData } from 'next/image'
import { Separator } from '@/components/ui/separator'

type ServiceProps = {
  image: StaticImageData
  reverse?: boolean
  order: number
  title: string
  content: string
}
const ServiceImageWithContent: FC<ServiceProps> = ({ image, reverse = false, order, title, content }) => {

  const imageProps = {
    src: image,
    placeholder: "blur" as const,
    blurDataURL: image.blurDataURL,
    alt: "",
    sizes: "100vw",
  }

  const flexDirection = reverse ? "md:flex-row-reverse" : "md:flex-row"

  return (
    <div className={`flex ${flexDirection} flex-col-reverse justify-center items-center 
    md:w-full w-screen
    xl:h-[600px] md:h-[480px] h-[600px] overflow-clip 
    md:gap-8 gap-20
    `}>
      <div className="flex-grow md:flex-shrink-0 xl:basis-1/2 md:h-full h-auto md:basis-7/12 basis-1/2 w-full relative">
        <Image {...imageProps} fill className="object-cover object-center" />
      </div>
      <div className="flex-grow md:flex-shrink-0 xl:basis-1/2 md:basis-5/12  flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-start gap-6 w-fit">
          <h2 className="text-title font-bold text-3xl">{`0${order}. ${title}`}</h2>
          <pre className={`${noto.className} leading-8 text-base tracking-widest`}>{content}</pre>
          <Separator className="bg-title w-12 h-1" />
        </div>
      </div>
    </div>
  )
}

export default ServiceImageWithContent