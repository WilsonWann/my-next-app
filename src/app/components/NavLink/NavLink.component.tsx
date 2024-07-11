import React, { FC } from 'react'
import Link from 'next/link'
import { LinkWithRoutesProps } from '@/types'
import isNonIndexType from '@/helper/isNonIndexType'

type NavLinkProps = Pick<LinkWithRoutesProps, 'linkClassName'> & {
  routeDetail: Partial<LinkWithRoutesProps['routeDetail']>
}

const NavLink: FC<NavLinkProps> = (props) => {

  const { linkClassName, routeDetail } = props

  const { altName, ...rest } = routeDetail

  const commonClasses = `uppercase 
                md:w-fit w-full
                flex 
                md:flex-col flex-row
                gap-0
                flex-nowrap whitespace-nowrap 
                items-center 
                cursor-pointer
                select-none
                ${linkClassName}`

  if (isNonIndexType(routeDetail)) {
    return (
      <Link href={routeDetail.route || '#'} aria-label={`${rest.mainName} ${altName}`} onClick={rest.onClick} className={commonClasses}>
        <span>{rest.mainName}</span>
        {altName && <b>{altName}</b>}
      </Link>
    )
  }

  return (
    <Link href={`/${routeDetail.mainName}`} aria-label={`${rest.mainName} ${altName}`} className={commonClasses}>
      <span>{rest.mainName}</span>
      {altName && <b>{altName}</b>}
    </Link>
  )
}

export default NavLink