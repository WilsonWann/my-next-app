import React, { FC } from 'react'
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
        className="text-secondary"
      />
      <div className="w-full flex flex-col justify-center items-center animate-bounce text-secondary *:size-6">
        <TriangleIcon />
      </div>
    </div>
  )
}

export default ServiceProcess