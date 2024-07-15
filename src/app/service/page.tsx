import { type Metadata } from 'next'
import React from 'react'
import { serviceBannerImage, serviceContentImages } from '../imageHandler'
import ServiceBanner from './components/ServiceBanner/ServiceBanner.component'
import ServiceProcess from './components/ServiceProcess/ServiceProcess.component'
import ServiceContent from './components/ServiceContent/ServiceContent.component'

const title = "服務內容 – 定制設計 | 製作生產 | 維護保養 | 趨勢分析"

const ogImageObj = {
  alt: title,
  url: '/portfolio/watch/makeup-and-jewelry.jpg',
  width: 1200,
  height: 630
}

export const metadata: Metadata = {
  title: title,
  openGraph: {
    type: "website",
    title: title,
    description: "珠寶設計與生產首選陌聲行銷！陌聲提供專業珠寶設計、珠寶生產、珠寶保養、珠寶課程等服務，致力於傾聽客戶需求、展現精湛工藝和卓越品質。",
    siteName: "Musense Jewelry Design",
    images: [ogImageObj],
  },
  twitter: {
    images: [ogImageObj]
  },
};

const ServicePage = () => {

  return (
    <div className={`flex flex-col items-center justify-between`}>
      <ServiceBanner serviceBannerImage={serviceBannerImage} className="mb-24" />
      <ServiceProcess className="mb-24" />
      <ServiceContent serviceContentImages={serviceContentImages} />
    </div >
  )
}

export default ServicePage