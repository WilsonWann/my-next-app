import React, { FC } from 'react'
import Link from 'next/link'
import { RouteDetail } from '@/types'

type NavLinkLayoutProps = {
  indexPage: boolean | undefined
  linkClassName?: string
  route?: string
  routes?: RouteDetail[]
  onClick?: () => void
  children: React.ReactNode
}

const NavLinkLayout: FC<NavLinkLayoutProps> = (props) => {

  const commonClasses = `uppercase 
                md:w-fit w-full
                flex 
                md:flex-col flex-row
                gap-0
                flex-nowrap whitespace-nowrap 
                items-center 
                cursor-pointer
                select-none
                ${props.linkClassName}`

  if (props.indexPage) {
    return (
      <span onClick={props.onClick} className={commonClasses}>
        {props.children}
      </span>
    )
  }

  return (
    <Link href={props.route || '#'} onClick={props.onClick} className={commonClasses}>
      {props.children}
    </Link>
  )
}

export default NavLinkLayout