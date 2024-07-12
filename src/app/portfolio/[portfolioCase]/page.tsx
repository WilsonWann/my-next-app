import { type Metadata } from 'next'
import React, { FC, Suspense } from 'react'
import Loading from './loading'
import PortfolioCase from './components/PortfolioCase/PortfolioCase.component'
import { PORTFOLIO_CASES } from '@/lib/constants'

const defaultTitle = "作品集 – rings | necklace | jewelry | bracelet | earrings | watch"
const defaultDescription = `珠寶設計與生產首選陌聲行銷！陌聲提供專業珠寶設計、珠寶生產、珠寶保養、珠寶課程等服務，致力於傾聽客戶需求、展現精湛工藝和卓越品質。`

const defaultOgImageObj = {
  alt: defaultTitle,
  url: '/portfolio/jewelers-work-desk.jpg',
  width: 1200,
  height: 630
}

export async function generateMetadata({ params: { portfolioCase } }: PortfolioCaseParamsProps): Promise<Metadata> {


  const portfolioCaseItem = PORTFOLIO_CASES.find(item => item.name === portfolioCase)

  if (!portfolioCaseItem) {

    return {
      title: defaultTitle,
      openGraph: {
        type: "website",
        title: defaultTitle,
        description: defaultDescription,
        siteName: "Musense Jewelry Design",
        images: [defaultOgImageObj],
      },
      twitter: {
        images: [defaultOgImageObj]
      },
    }
  }
  const { title, description, imageUrl } = portfolioCaseItem

  const ogImageObj = {
    alt: title,
    url: imageUrl,
    width: 1200,
    height: 630
  }

  return {
    title,
    openGraph: {
      type: "website",
      title,
      description,
      siteName: "Musense Jewelry Design",
      images: [ogImageObj],
    },
    twitter: {
      images: [ogImageObj]
    },
  }
}

export const maxDuration = 60

export type PortfolioCaseParamsProps = {
  params: {
    portfolioCase: string
  }
}

const PortfolioCasePage: FC<PortfolioCaseParamsProps> = ({ params: { portfolioCase } }) => {

  return (
    <Suspense fallback={<Loading />}>
      <PortfolioCase portfolioCase={portfolioCase} />
    </Suspense>
  )
}

export default PortfolioCasePage