import React, { FC } from 'react'

type Props = {
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
  children?: React.ReactNode
  disabled?: boolean
}


const Button: FC<Props> = ({
  type = 'button',
  className = '',
  onClick = () => {},
  children = 'confirm',
  disabled = false
}) => {

  //* add disabled styles for each button type
  const buttonClassName = `hover:text-title hover:bg-stone-300 ${className}`

  if (type === 'button') {
    const buttonClassName = `hover:bg-stone-200`
    return (
      <button type="button" disabled={disabled} onClick={onClick}
        className={`ring-1 ring-slate-300 rounded-md px-4 py-2 text-lg disabled:bg-slate-300 disabled:cursor-not-allowed ${buttonClassName} ${className}`}>{children}</button>
    )
  }

  if (type === 'submit') {
    const submitClassName = `bg-title text-white hover:bg-title`
    return (
      <button type="submit" disabled={disabled} onClick={onClick}
        className={`ring-1 ring-transparent rounded-md px-4 py-2 text-lg disabled:bg-title-light disabled:cursor-not-allowed ${submitClassName} ${className}`}>{children}</button>
    )
  }

  if (type === 'reset') {
    const resetClassName = `hover:bg-stone-200`
    return (
      <button type="reset" disabled={disabled} onClick={onClick}
        className={`ring-1 ring-slate-300 rounded-md px-4 py-2 text-lg ${resetClassName} ${className}`}>{children}</button>
    )
  }


}

export default Button