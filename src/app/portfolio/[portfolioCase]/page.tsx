import React, { FC, Suspense } from 'react'
import Loading from './loading'
import PortfolioCase from './components/PortfolioCase/PortfolioCase.component'

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