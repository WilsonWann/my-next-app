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
      <LargeBanner image={serviceBannerImage} aspectRatio={'aspect-service-banner'} className="blur-sm" />
      <section className={`absolute inset-0 flex justify-center items-center gap-32`}>
        <div className=" text-subtitle flex flex-col justify-between items-end">
          <h2 className=" 
        xl:text-6xl md:text-5xl text-4xl
        font-thin">SERVICE</h2>
          <span data-attr="﹡" className={`${josefin.className}
        xl:text-xl md:text-lg text-md font-light
        before:content-[attr(data-attr)]`}>item</span>
        </div>
        <div >
          <ul className={` xl:text-2xl md:text-xl text-lg font-bold divide-subtitle text-stroke w-auto
            flex justify-between items-stretch divide-x-2 space-x-16 text-subtitle text-center *:pl-16`}>
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