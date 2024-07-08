import React, { FC, Suspense } from 'react'
import Loading from './loading'
import PortfolioCase from './components/PortfolioCase/PortfolioCase.component'

export const maxDuration = 300

type Props = {
  params: {
    portfolioCase: string
  }
}

const PortfolioCasePage: FC<Props> = ({ params: { portfolioCase } }) => {

  return (
    <Suspense fallback={<Loading />}>
      <PortfolioCase portfolioCase={portfolioCase} />
    </Suspense>
  )
}

export default PortfolioCasePage