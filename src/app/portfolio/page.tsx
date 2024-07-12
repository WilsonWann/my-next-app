import { type Metadata } from 'next'
import React from 'react'
import { scheherazade } from '@/app/fonts'
import { portfolioImages } from '@/app/imageHandler'
import PortfolioLinkWithImage from './components/PortfolioLinkWithImage/PortfolioLinkWithImage.component'
import GridLayout from './components/GridLayout/GridLayout.component'

const title = "作品集 – rings | necklace | jewelry | bracelet | earrings | watch"

const ogImageObj = {
  alt: title,
  url: '/portfolio/jewelers-work-desk.jpg',
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

const PortfolioPage = () => {

  return (
    <div className={`${scheherazade.className} flex flex-col items-center`}>
      <GridLayout className={"md:mb-56 mb-28"}>
        {
          portfolioImages.map((portfolioImage, index) =>
            <PortfolioLinkWithImage key={index} portfolioImage={portfolioImage} />
          )
        }
      </GridLayout>
    </div >
  )
}

export default PortfolioPage