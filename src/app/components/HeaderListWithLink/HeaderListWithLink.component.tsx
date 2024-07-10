import React, { FC } from 'react'
import { NavigationListProps } from '@/types'
import HeaderLinkRoute from '../HeaderLinkRoute/HeaderLinkRoute.component'
import HeaderLinkWithRoutesMenu from '../HeaderLinkWithRoutesMenu/HeaderLinkWithRoutesMenu.component'

const HeaderListWithLink: FC<NavigationListProps> = (props) => {

  return (
    props.routeDetail.routes ? (
      <HeaderLinkWithRoutesMenu routes={props.routeDetail.routes} {...props} />
    ) : (
      <HeaderLinkRoute {...props} />
    )
  );
}

export default HeaderListWithLink