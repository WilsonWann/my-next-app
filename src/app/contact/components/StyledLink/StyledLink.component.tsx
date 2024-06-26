import React, { FC } from 'react'

type Props = {
  className?: string
  href?: string | null
  children: React.ReactNode
}

const StyledLink: FC<Props> = (props) => {
  if (!props.href) return null

  return (
    <a href={props.href} target="_blank" rel="noreferrer"
      className={`text-blue-500 hover:decoration-blue-500 hover:underline ${props.className ?? ''}`}
    >{props.children}</a>
  )
}

export default StyledLink