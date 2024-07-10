import React, { FC } from 'react'
import { routes } from "@/app/const/RouteDetail";
import { NavigationListProps } from '@/types';
import HeaderListWithLink from '../HeaderListWithLink/HeaderListWithLink.component';

const HeaderListLinkWrapper: FC<Omit<NavigationListProps, 'routeDetail'>> = (props) => {

  return (
    routes.map((routeDetail, index) => (
      <HeaderListWithLink
        key={index}
        routeDetail={routeDetail}
        {...props}
      />
    ))
  )
}

export default HeaderListLinkWrapper