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
    <div className="max-w-6xl mx-auto pt-16 flex xl:flex-row flex-col justify-between gap-10 md:items-start items-center">
      <AsideInputWithSearch pathname={pathname} className={`basis-60 shrink-0`} />
      <div className="flex justify-start md:flex-row flex-col md:items-start items-center gap-10 flex-wrap">
        {props.children}
      </div>
    </div>
  )
}

export default VideoLayout