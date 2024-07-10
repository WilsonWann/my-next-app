import { LinkWithRoutesProps } from '@/types'
import React, { FC } from 'react'
import NavLinkLayout from '../NavLinkLayout/NavLinkLayout.component'


const LinkRoute: FC<Omit<LinkWithRoutesProps, 'routes'>> = (props) => {

  const { linkClassName, routeDetail } = props
  const { indexPage, mainName, altName, ...rest } = routeDetail

  return (
    <div className="h-full overflow-y-clip">
      <NavLinkLayout indexPage={indexPage} linkClassName={linkClassName} {...rest}>
        <span>{mainName}</span>
      </NavLinkLayout>
    </div>
  )
}

export default LinkRoute