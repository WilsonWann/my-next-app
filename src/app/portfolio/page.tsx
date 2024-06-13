import React from 'react'
import { scheherazade } from '@/app/fonts'

import { portfolioImages } from '@/app/imageHandler'
import Portfolio from './components/Portfolio/Portfolio.component'

const PortfolioPage = () => {

  return (
    <div className={`${scheherazade.className} flex flex-col items-center`}>
      <Portfolio portfolioImages={portfolioImages} className={"md:mb-56 mb-28"} />
    </div >
  )
}

export default PortfolioPage