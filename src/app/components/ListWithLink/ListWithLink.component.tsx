import React, { FC } from 'react'
import { RouteDetail } from '@/types'
import NavLinkLayout from '../NavLinkLayout/NavLinkLayout.component'

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
    <NavLinkLayout index={index} linkClassName={linkClassName} listClassName={listClassName} {...props}>
      <span>{mainName}</span>
      {!hideAltName && <b>{altName}</b>}
    </NavLinkLayout>
  );
}

export default ListWithLink


