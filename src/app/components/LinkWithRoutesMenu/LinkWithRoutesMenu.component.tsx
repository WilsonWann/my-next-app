import { LinkWithRoutesProps } from '@/types'
import React, { FC, useState } from 'react'
import NavLinkLayout from '../NavLinkLayout/NavLinkLayout.component'
import HoverRoutesMenu from '../HoverRoutesMenu/HoverRoutesMenu.component'

const LinkWithRoutesMenu: FC<LinkWithRoutesProps> = (props) => {

  const { linkClassName, routeDetail, routes, header } = props

  const { indexPage, mainName, altName, ...rest } = routeDetail

  const [hoverState, setHoverState] = useState<boolean>(false);

  const openMenu = () => setHoverState(true)
  const closeMenu = () => setHoverState(false)

  return (
    <>
      <div className="h-full overflow-y-clip"
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        <NavLinkLayout indexPage={indexPage} linkClassName={linkClassName} {...rest} >
          <span>{mainName}</span>
          {header && <b>{altName}</b>}
        </NavLinkLayout>
      </div>
      {header ? (
        <HoverRoutesMenu
          isMenuOpen={hoverState}
          openMenu={openMenu}
          closeMenu={closeMenu}
          routes={routes} />)
        : null}
    </>
  )
}

export default LinkWithRoutesMenu