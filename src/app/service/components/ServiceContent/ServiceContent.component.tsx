import React, { FC } from 'react'
import { noto } from '@/app/fonts'
import type { StaticImageData } from 'next/image'
import ServiceImageWithContent from '../ServiceImageWithContent/ServiceImageWithContent.component'

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
    <div className={`${noto.className} ${className} w-full h-fit flex flex-col justify-start items-center 
    md:gap-4 gap-20
    xl:px-12 px-0`}>
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