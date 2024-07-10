'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import AsideInputWithSearch from './components/AsideInputWithSearch/AsideWithSearch.component'

type Props = {
  children: React.ReactNode
}

const VideoLayout = (props: Props) => {
  const pathname = usePathname()

  return (
    <div className="max-w-6xl mx-auto pt-16 flex flex-row justify-center items-start gap-8">
      <AsideInputWithSearch pathname={pathname} />
      {props.children}
    </div>
  )
}

export default VideoLayout