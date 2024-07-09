import { RouteDetail } from '@/types'
import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
  routes: RouteDetail[]
}

const Menu: FC<Props> = (props) => {
  return <div className="overflow-clip flex flex-col justify-start items-center w-full bg-primary-foreground rounded-md divide-y-2 divide-secondary *:py-4 *:w-full *:text-center ">
    {props.routes.map((routeDetail, index) => (
      !routeDetail.indexPage && (
        <Link
          key={index}
          href={routeDetail.route}
          className={"hover:text-primary-foreground hover:bg-secondary"}
        >{routeDetail.altName}</Link>
      )
    ))}
  </div>
}

export default Menu