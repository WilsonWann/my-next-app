import GoBackButton from '@/components/GoBackButton.component'
import React, { FC } from 'react'

type Props = {
  children: React.ReactNode
}

const PortfolioCaseLayout: FC<Props> = async (props) => {
  return (
    <div className="max-w-3xl mx-auto pt-16 flex flex-col justify-start items-start gap-8">
      {props.children}
      <GoBackButton />
    </div>

  )
}

export default PortfolioCaseLayout