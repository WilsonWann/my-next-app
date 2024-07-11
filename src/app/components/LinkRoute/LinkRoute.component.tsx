import { LinkWithRoutesProps } from '@/types'
import React, { FC } from 'react'
import NavLink from '../NavLink/NavLink.component'


const LinkRoute: FC<Omit<LinkWithRoutesProps, 'routes'>> = (props) => {

  const { linkClassName } = props
  const { altName, ...rest } = props.routeDetail

  return (
    <div className="h-full overflow-y-clip">
      <NavLink routeDetail={rest} linkClassName={linkClassName} />
    </div>
  )
}

export default LinkRoute