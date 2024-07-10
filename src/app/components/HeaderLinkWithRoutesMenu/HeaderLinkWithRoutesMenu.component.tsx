'use client'

import { LinkWithRoutesProps } from '@/types'
import React, { FC, useState } from 'react'
import NavLinkLayout from '../NavLinkLayout/NavLinkLayout.component'
import HoverRoutesMenu from '../HoverRoutesMenu/HoverRoutesMenu.component'

const HeaderLinkWithRoutesMenu: FC<LinkWithRoutesProps> = (props) => {

  const { linkClassName, routeDetail, routes } = props

  const { indexPage, mainName, altName, ...rest } = routeDetail

  const [hoverState, setHoverState] = useState<boolean>(false);

  const openMenu = () => setHoverState(true)
  const closeMenu = () => setHoverState(false)

  const routesMenuProps = {
    isMenuOpen: hoverState,
    openMenu: openMenu,
    closeMenu: closeMenu,
    routes: routes,
  }

  return (
    <li className={`h-10 relative ${props.listClassName}`}>
      <div className="h-full overflow-y-clip w-fit"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        <NavLinkLayout indexPage={indexPage} linkClassName={linkClassName} {...rest} >
          <span>{mainName}</span>
          <b>{altName}</b>
        </NavLinkLayout>
      </div>
      <HoverRoutesMenu {...routesMenuProps} />
    </li>
  )
}

export default HeaderLinkWithRoutesMenu