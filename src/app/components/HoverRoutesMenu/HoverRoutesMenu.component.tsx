import { RouteDetail } from '@/types'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
  isMenuOpen: boolean
  openMenu: () => void
  closeMenu: () => void
  routes: RouteDetail[]
}

const HoverRoutesMenu: FC<Props> = (props) => {

  const { isMenuOpen, openMenu, closeMenu, routes } = props

  const className = isMenuOpen ? 'opacity-100' : 'opacity-0'

  return (
    <div className={`${className} absolute overflow-clip bg-primary-foreground rounded-sm flex flex-col justify-start whitespace-nowrap items-baseline divide-y-2 divide-secondary left-1/2 -translate-x-1/2 top-16 w-fit h-fit z-50 *:px-8 *:py-4 transition-opacity delay-300`}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      {routes.map((routeDetail, index) => (
        !routeDetail.indexPage && (
          <Link
            key={index}
            href={routeDetail.route}
            className={"hover:text-primary-foreground hover:bg-secondary"}
          >{routeDetail.altName}</Link>
        )
      ))}
    </div>
  )
}

export default HoverRoutesMenu