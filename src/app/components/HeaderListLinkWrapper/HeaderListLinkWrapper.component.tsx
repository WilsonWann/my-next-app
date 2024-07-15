import React, { FC } from 'react'
import { HeaderListLinkWrapperProps } from '@/types';
import useHeaderList from '@/hook/useHeaderList';

const HeaderListLinkWrapper: FC<HeaderListLinkWrapperProps> = (props) => {

  const { headerList } = useHeaderList(props)

  return (
    <>
      {props.menuButton}
      {headerList}
    </>
  )
}

export default HeaderListLinkWrapper