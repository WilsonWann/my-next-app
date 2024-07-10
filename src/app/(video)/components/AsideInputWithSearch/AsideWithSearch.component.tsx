'use client'

import InputWithSearch from '@/components/InputWithSearch'
import React, { FC } from 'react'
import { RouteDetail } from '@/types'
import { routes } from '@/app/const/RouteDetail'
import firstCharUpperCase from '@/helper/firstCharUpperCase'
import Menu from '../Menu/Menu.component'

type Props = {
  pathname: string
}

const AsideInputWithSearch: FC<Props> = (props) => {

  const inputRef = React.useRef<HTMLInputElement>(null)

  const onSearchClick = () => {
    if (inputRef.current) {
      const input = inputRef.current
      console.log('🚀 ~ onSearchClick ~ input.value:', input.value)
    }
  }

  const videoRoute = routes.find(route => route.mainName === 'video')

  if (!videoRoute) return null
  if (!videoRoute.routes) return null
  const routeDetail = videoRoute.routes.find(route => !route.indexPage && route.route === props.pathname) as RouteDetail

  const title = `${firstCharUpperCase(routeDetail.mainName)} ${routeDetail.altName}`

  return (
    <aside className="flex flex-col justify-start items-baseline gap-6">
      <h2 className="text-2xl text-center w-full -mb-2">{title}</h2>
      <InputWithSearch ref={inputRef} onSearchClick={onSearchClick} />
      <Menu routes={videoRoute.routes} pathname={props.pathname} />
    </aside>
  )
}


export default AsideInputWithSearch
