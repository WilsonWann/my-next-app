import React, { FC } from 'react'
import { RouteDetail } from '@/types'
import LinkWithRoutesMenu from '../LinkWithRoutesMenu/LinkWithRoutesMenu.component'
import LinkRoute from '../LinkRoute/LinkRoute.component'

type Props = {
  routeDetail: RouteDetail
  listClassName?: string
  linkClassName?: string
  header?: boolean
}

const ListWithLink: FC<Props> = ({
  routeDetail,
  listClassName = '',
  linkClassName = '',
  header = false,
}) => {

  return (
    <li className={`h-10 relative ${listClassName}`}>
      {
        routeDetail.routes ? (
          <LinkWithRoutesMenu
            linkClassName={linkClassName}
            routeDetail={routeDetail}
            routes={routeDetail.routes}
            header={header}
          />
        ) : (
          <LinkRoute
            linkClassName={linkClassName}
            routeDetail={routeDetail}
            header={header}
          />
        )
      }
    </li>
  );
}

export default ListWithLink