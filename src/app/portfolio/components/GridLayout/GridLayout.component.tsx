import React, { FC } from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

const GridLayout: FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`grid 
      md:grid-cols-3-rows-2 grid-cols-2-rows-3
      w-screen h-fit justify-items-stretch items-stretch ${className}`}>
      {children}
    </div>
  )
}

export default GridLayout