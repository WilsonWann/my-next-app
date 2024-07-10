import { LinkWithRoutesProps } from '@/types'
import React, { FC } from 'react'
import NavLinkLayout from '../NavLinkLayout/NavLinkLayout.component'

const HeaderLinkRoute: FC<Omit<LinkWithRoutesProps, 'routes'>> = (props) => {

  const { linkClassName, routeDetail } = props
  const { indexPage, mainName, altName, ...rest } = routeDetail

  return (
    <li className={`h-10 relative ${props.listClassName}`}>
      <div className="h-full overflow-y-clip">
        <NavLinkLayout indexPage={indexPage} linkClassName={linkClassName} {...rest}>
          <span>{mainName}</span>
          <b>{altName}</b>
        </NavLinkLayout>
      </div>
    </li>
  )
}

export default HeaderLinkRoute