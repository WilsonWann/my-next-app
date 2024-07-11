'use client'

import { LinkWithRoutesProps } from '@/types'
import React, { FC, useState } from 'react'
import NavLink from '../NavLink/NavLink.component'
import HoverRoutesMenu from '../HoverRoutesMenu/HoverRoutesMenu.component'

const HeaderLinkWithRoutesMenu: FC<LinkWithRoutesProps> = (props) => {

  const { routes, ...rest } = props

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
        <NavLink {...rest} />
      </div>
      <HoverRoutesMenu {...routesMenuProps} />
    </li>
  )
}

export default HeaderLinkWithRoutesMenu