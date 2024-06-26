import React, { FC } from 'react'
import { RouteDetail } from '../LinkNavigation/LinkNavigation.component'
import Link from 'next/link'

type ListWithLinkLayoutProps = {
  routeDetail: RouteDetail
  listClassName: string
  linkClassName: string
}

const ListWithLink: FC<ListWithLinkLayoutProps> = (props) => {

  const { routeDetail, listClassName, linkClassName } = props

  const { route, main_name, alt_name, onClick } = routeDetail

  return (
    <li className={`h-10 overflow-y-clip ${listClassName}`}>
      <Link href={route} onClick={onClick} className={`uppercase w-fit
                flex flex-col flex-nowrap whitespace-nowrap justify-center items-center translate-y-[2px] hover:-translate-y-[37px] transition-transform
                ${linkClassName}`}>
        <>
          <b>{main_name}</b>
          <b>{alt_name}</b>
        </>
      </Link>
    </li>
  );
}

export default ListWithLink