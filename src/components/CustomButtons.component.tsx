import React, { FC } from 'react'
import { Button } from "@/components/ui/button"

type Props = {
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
  children?: React.ReactNode
  disabled?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null
}

const CustomButtons: FC<Props> = (props) => {

  if (props.type === 'button') {

    return (
      <Button
        onClick={props.onClick}
        type="button"
        variant={props.variant}
        className={props.className}>
        清除
      </Button>
    )
  }
  <Button type="submit" className="bg-title hover:bg-title-light text-subtitle">送出</Button>
  return (
    <div>CustomButtons</div>
  )
}

export default CustomButtons