'use client'
import React from 'react'
import { playfair } from '@/app/fonts'
import { serviceBannerImage } from '../imageHandler'
import ServiceBanner from './components/Service/ServiceBanner.component'

const ServicePage = () => {

  return (
    <div className={`${playfair.className} flex flex-col items-center justify-between`}>
      <ServiceBanner serviceBannerImage={serviceBannerImage} className="mb-24" />
    </div >
  )
}

export default ServicePage