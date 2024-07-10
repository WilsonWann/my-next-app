import React, { FC } from 'react'
import { routes } from "@/app/const/RouteDetail";
import ListWithLink from '../ListWithLink/ListWithLink.component';
import { NavigationListProps } from '@/types';


const ListLinkWrapper: FC<Omit<NavigationListProps, 'routeDetail'>> = (props) => {
  return (
    routes.map((routeDetail, index) => (
      <ListWithLink
        key={index}
        routeDetail={routeDetail}
        {...props}
      />
    ))
  )
}

export default ListLinkWrapper