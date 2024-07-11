import { LinkWithRoutesProps } from '@/types'
import React, { FC } from 'react'
import NavLink from '../NavLink/NavLink.component'

const HeaderLinkRoute: FC<Omit<LinkWithRoutesProps, 'routes'>> = (props) => {

  return (
    <li className={`h-10 relative ${props.listClassName}`}>
      <div className="h-full overflow-y-clip">
        <NavLink {...props} />
      </div>
    </li>
  )
}

export default HeaderLinkRoute