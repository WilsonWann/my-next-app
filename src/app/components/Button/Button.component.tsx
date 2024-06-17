import React, { FC } from 'react'

type Props = {
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
  children?: React.ReactNode
}


const Button: FC<Props> = ({
  type = 'button',
  className = '',
  onClick = () => {},
  children = 'confirm',
}) => {

  const buttonClassName = `hover:text-title hover:bg-stone-300 ${className}`

  if (type === 'button') {
    const buttonClassName = `hover:bg-stone-200`
    return (
      <button type="button" onClick={onClick} className={`ring-1 ring-slate-300 rounded-md px-4 py-2 text-lg ${buttonClassName} ${className}`}>{children}</button>
    )
  }

  if (type === 'submit') {
    const submitClassName = `bg-title text-white hover:bg-title`
    return (
      <button type="submit" onClick={onClick} className={`ring-1 ring-transparent rounded-md px-4 py-2 text-lg ${submitClassName} ${className}`}>{children}</button>
    )
  }

  if (type === 'reset') {
    const resetClassName = `hover:bg-stone-200`
    return (
      <button type="reset" onClick={onClick} className={`ring-1 ring-slate-300 rounded-md px-4 py-2 text-lg ${resetClassName} ${className}`}>{children}</button>
    )
  }


}

export default Button