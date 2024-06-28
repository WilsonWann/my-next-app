'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

type Props = {}

const GoBackButton = (props: Props) => {
  const router = useRouter()

  const goBack = () => router.back()

  return (
    <Button onClick={goBack} type="button" variant="outline" className="self-center">回上一頁</Button>

  )
}

export default GoBackButton