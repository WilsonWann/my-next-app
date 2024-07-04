import React, { FC } from 'react'
import Link from 'next/link'
import { noto } from '@/app/fonts'

type Props = {
  icon: React.ReactNode,
  href: string,
  text: string
}

const OuterLink: FC<Props> = (props) => {

  const { icon, href, text } = props
  return (
    <Link href={href} target="_blank" rel="noreferrer" className="w-fit h-fit">
      <div className={`${noto.className} flex justify-start items-start gap-4 group xl:text-2xl md:text-xl text-lg text-secondary font-semibold`}>
        <span className="pt-1 md:group-hover:animate-bounce ">{icon}</span>
        <span>{text}</span>
      </div>
    </Link>
  )
}

export default OuterLink