import React from 'react'
import { playfair } from '@/app/fonts'
import { serviceBannerImage, serviceContentImages } from '../imageHandler'
import ServiceBanner from './components/ServiceBanner/ServiceBanner.component'
import ServiceContent from './components/ServiceContent/ServiceContent.component'

const ServicePage = () => {

  return (
    <div className={`${playfair.className} flex flex-col items-center justify-between`}>
      <ServiceBanner serviceBannerImage={serviceBannerImage} className="mb-24" />
      <ServiceContent serviceContentImages={serviceContentImages} className="mb-24" />
    </div >
  )
}

export default ServicePage