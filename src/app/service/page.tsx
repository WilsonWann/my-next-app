'use client'
import React from 'react'
import { playfair, josefin } from '../fonts'
import LargeBanner from '../components/LargeBanner/LargeBanner.component'
import { serviceBannerImage } from '../imageHandler'

type Props = {}

const ServicePage = (props: Props) => {

  const offset = 36
  const divide = offset / 2

  return (
    <div className={`${playfair.className} flex flex-col items-center justify-between`}>
      <div className="relative w-fit h-fit ">
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
    </div >
  )
}

export default ServicePage