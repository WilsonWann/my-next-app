import React, { FC } from 'react'
import Link from 'next/link'

type NavLinkLayoutProps = {
  index: boolean | undefined
  listClassName?: string
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

  const linkSpanSwitcher = (props: NavLinkLayoutProps) =>
    props.index ? (
      <span onClick={props.onClick} className={commonClasses}>
        {props.children}
      </span>
    ) : (
      <Link href={props.route || '#'} onClick={props.onClick} className={commonClasses}>
        {props.children}
      </Link>
    )

  return (
    <li className={`h-10 overflow-y-clip ${props.listClassName}`}>
      {linkSpanSwitcher(props)}
    </li>
  )
}

export default NavLinkLayout