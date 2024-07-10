import { OpenRouteMenu } from '@/types'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'

const HoverRoutesMenu: FC<OpenRouteMenu> = (props) => {

  const { isMenuOpen, openMenu, closeMenu, routes } = props

  const [className, setClassName] = useState('opacity-0 hidden');

  let timeout: NodeJS.Timeout | null = null

  useEffect(() => {
    if (isMenuOpen) {
      setClassName('opacity-100');
    } else {
      setClassName('opacity-0');
      timeout = setTimeout(() => {
        setClassName('opacity-0 hidden')
      }, 300);
    }
    return () => {
      timeout && clearTimeout(timeout)
    }
  }, [isMenuOpen, timeout]);

  return (
    <div className={`${className} top-16 z-50 absolute overflow-clip bg-primary-foreground rounded-sm flex flex-col justify-start whitespace-nowrap items-baseline divide-y-2 divide-secondary left-1/2 -translate-x-1/2 w-fit h-fit *:px-8 *:py-4 transition-opacity delay-300`}
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