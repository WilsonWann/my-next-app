import React from 'react'
import { scheherazade } from '@/app/fonts'

import { portfolioImages } from '@/app/imageHandler'
import PortfolioLinkWithImage from './components/PortfolioLinkWithImage/PortfolioLinkWithImage.component'
import GridLayout from './components/GridLayout/GridLayout.component'

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