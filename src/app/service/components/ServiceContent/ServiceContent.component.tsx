import React, { FC } from 'react'
import { noto } from '@/app/fonts'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

type ServiceContentImage = {
  image: StaticImageData
  title: string
  content: string
}

type Props = {
  serviceContentImages: ServiceContentImage[]
  className?: string
}

const ServiceContent: FC<Props> = ({ serviceContentImages, className = '' }) => {
  return (
    <div className={`${noto.className} ${className} w-full h-fit flex flex-col justify-start items-center space-y-4 px-12`}>
      {
        serviceContentImages.map((serviceContentImage, index) => {
          const { image, title, content } = serviceContentImage

          return (
            <ServiceImageWithContent
              key={index}
              image={image}
              reverse={index % 2 === 1}
              order={index + 1}
              title={title}
              content={content}
            />
          )
        })
      }
    </div>
  )
}

export default ServiceContent

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

  const flexDirection = reverse ? "flex-row-reverse" : "flex-row"

  return (
    <div className={`flex ${flexDirection} justify-center items-center w-full h-fit overflow-clip gap-8`}>
      <div className="flex-grow flex-shrink-0 basis-1/2">
        <Image {...imageProps} className="bg-cover bg-center" />
      </div>
      <div className="flex-grow flex-shrink-0 basis-1/2 flex flex-col items-center">
        <div className="flex flex-col justify-center items-start gap-6 w-fit">
          <h2 className="text-title font-bold text-3xl">{`0${order}. ${title}`}</h2>
          <pre className={`${noto.className} leading-8 text-base tracking-widest`}>{content}</pre>
          <Separator className="bg-title w-12 h-1" />
        </div>
      </div>
    </div>
  )
}

// type FlexLayoutProps = {
//   children: React.ReactNode
// }
// const FlexLayout: FC<FlexLayoutProps> = ({ children }) => {

//   const paddingX = reverse ? "pl-16 pr-4" : "pl-4 pr-12"
//   return (
//     <div className="flex-grow flex-shrink-0 basis-1/2">
//       {children}
//     </div>
//   )
// }
