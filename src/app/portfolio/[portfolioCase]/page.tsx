'use client'

import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

type Props = {
  params: {
    portfolioCase: string
  }
}

const PortfolioCasePage: FC<Props> = ({ params: { portfolioCase } }) => {
  const router = useRouter()



  return (
    <div>
      <div>{portfolioCase}</div>
      <Button type="button" onClick={() => router.back()}>回上一頁</Button >
    </div >
  )
}

export default PortfolioCasePage