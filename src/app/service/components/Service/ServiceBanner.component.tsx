import React, { FC } from 'react'
import { josefin } from '@/app/fonts'
import LargeBanner from '@/app/components/LargeBanner/LargeBanner.component'
import { StaticImageData } from 'next/image'

type Props = {
  serviceBannerImage: StaticImageData
  className?: string
}

const ServiceBanner: FC<Props> = ({ serviceBannerImage, className = '' }) => {
  return (
    <div className={`relative w-fit h-fit ${className}`}>
      <LargeBanner image={serviceBannerImage}
        aspectRatio={''}
        className="blur-sm xl:h-[490px] md:h-[438px] h-[652px]"
        imageClassName={'h-full'}
      />
      <section className={`absolute inset-0 
        flex 
        xl:flex-row flex-col
        xl:gap-32 gap-12
        justify-center 
        items-center `}>
        <div className=" text-subtitle flex flex-col justify-between items-end">
          <h2 className=" 
        xl:text-6xl text-5xl
        font-thin">SERVICE</h2>
          <span data-attr="﹡" className={`${josefin.className}
        xl:text-xl text-lg font-light
        before:content-[attr(data-attr)]`}>item</span>
        </div>
        <div >
          <ul className={` xl:text-2xl text-xl font-bold divide-subtitle text-stroke w-auto
            flex 
            md:flex-row flex-col
            justify-between 
            items-stretch 
            md:divide-x-2 
            xl:space-x-16 md:space-x-8 
            md:space-y-0 space-y-6
            xl:*:pl-16 md:*:pl-8
            text-subtitle text-center 
            `}>
            <li className="!pl-0">定制設計</li>
            <li>製作生產</li>
            <li>維護保養</li>
            <li>趨勢分析</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ServiceBanner