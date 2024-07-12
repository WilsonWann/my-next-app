import { type Metadata } from 'next'
import React from 'react'
import CardDemo from '../components/CardDemo/CardDemo.component'
import { photosImages } from "@/app/imageHandler"

const title = "影音分享 - Cases | 案例分享"

const ogImageObj = {
  alt: title,
  url: '/person-working-on-fashion-design-on-a-tablet.jpg',
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

const CasesPage = async () => {
  return (
    photosImages.map((image, index) => (
      <CardDemo key={index} image={image} />
    ))
  )
}

export default CasesPage