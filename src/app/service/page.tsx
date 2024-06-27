import React from 'react'
import { serviceBannerImage, serviceContentImages } from '../imageHandler'
import ServiceBanner from './components/ServiceBanner/ServiceBanner.component'
import ServiceProcess from './components/ServiceProcess/ServiceProcess.component'
import ServiceContent from './components/ServiceContent/ServiceContent.component'

const ServicePage = () => {

  return (
    <div className={`flex flex-col items-center justify-between`}>
      <ServiceBanner serviceBannerImage={serviceBannerImage} className="mb-24" />
      <ServiceProcess className="mb-24" />
      <ServiceContent serviceContentImages={serviceContentImages} className="md:mb-24 mb-12" />
    </div >
  )
}

export default ServicePage