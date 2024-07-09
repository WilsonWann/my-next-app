import React, { FC } from 'react'
import Link from 'next/link'
import { RouteDetail } from '@/types'

type ListWithLinkLayoutProps = {
  routeDetail: RouteDetail
  listClassName?: string
  linkClassName?: string
  hideAltName?: boolean
}

const ListWithLink: FC<ListWithLinkLayoutProps> = ({
  routeDetail,
  listClassName = '',
  linkClassName = '',
  hideAltName = false,
}) => {
  const { index, mainName, altName, ...props } = routeDetail

  return (
    <li className={`h-10 overflow-y-clip ${listClassName}`}>
      <NavLinkLayout index={index} linkClassName={linkClassName} {...props}>
        <span>{mainName}</span>
        {!hideAltName && <b>{altName}</b>}
      </NavLinkLayout>
    </li>
  );
}

export default ListWithLink

type NavLinkLayoutProps = {
  index: boolean | undefined
  linkClassName?: string
  route?: string
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

  if (props.index) {
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
