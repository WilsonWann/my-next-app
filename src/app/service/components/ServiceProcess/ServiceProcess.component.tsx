import React, { FC } from 'react'
import { josefin, noto } from '@/app/fonts'
import HeadingWithLabels from '@/app/components/HeadingWithLabels/HeadingWithLabels.component'
import TriangleIcon from '../Triangle-Icon/Triangle-Icon.component'


type Props = {
  className?: string
}

const ServiceProcess: FC<Props> = ({ className = '' }) => {
  return (
    <div className={className}>
      <HeadingWithLabels
        heading={'Process'}
        className="text-theme-dark"
      />
      <div className="w-full flex flex-col justify-center items-center animate-bounce text-title *:size-6">
        <TriangleIcon />
        <TriangleIcon className="-mt-2" />
      </div>
    </div>
  )
}

export default ServiceProcess