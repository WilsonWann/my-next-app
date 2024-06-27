import React, { FC } from 'react'
import { RouteDetail } from '../LinkNavigation/LinkNavigation.component'
import Link from 'next/link'

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


  const { route, main_name, alt_name, onClick } = routeDetail

  return (
    <li className={`h-10 overflow-y-clip ${listClassName}`}>
      <Link href={route} onClick={onClick} className={`uppercase 
                md:w-fit w-full
                flex 
                md:flex-col flex-row
                gap-0
                flex-nowrap whitespace-nowrap 
                items-center 
                ${linkClassName}`}>
        <span>{main_name}</span>
        {!hideAltName && <b>{alt_name}</b>}
      </Link>
    </li>
  );
}

export default ListWithLink