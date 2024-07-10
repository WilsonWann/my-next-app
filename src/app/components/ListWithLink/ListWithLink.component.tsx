import React, { FC } from 'react'
import { NavigationListProps } from '@/types'
import LinkRoute from '../LinkRoute/LinkRoute.component'

const ListWithLink: FC<NavigationListProps> = (props) => {
  return <LinkRoute {...props} />
}

export default ListWithLink