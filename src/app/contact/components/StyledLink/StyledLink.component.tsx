import React, { FC } from 'react'

type Props = {
  className?: string
  href: string
  children: React.ReactNode
}

const StyledLink: FC<Props> = (props) => {
  return (
    <a href={props.href}
      className={`text-blue-500 hover:decoration-blue-500 hover:underline ${props.className ?? ''}`}
    >{props.children}</a>
  )
}

export default StyledLink