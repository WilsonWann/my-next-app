import { type Metadata } from 'next'
import React from 'react'
import CardDemo from '../components/CardDemo/CardDemo.component'
import { portfolioImages } from "@/app/imageHandler"

const title = "影音分享 - Articles | 相關文章"

const ogImageObj = {
  alt: title,
  url: '/wedding-rings-with-wedding-vows.jpg',
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

const ArticlesPage = async () => {

  return (
    portfolioImages.map((portfolioImage, index) => (
      <CardDemo key={index} image={portfolioImage.image} />
    ))
  )
}

export default ArticlesPage

