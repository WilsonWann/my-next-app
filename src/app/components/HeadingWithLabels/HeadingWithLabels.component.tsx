import React, { FC } from 'react'
import { playfair, josefin, noto } from '@/app/fonts'

type Props = {
  heading: string
  bottomLabel?: string
  upperLabel?: string
  className?: string
  headingClassName?: string
  upperLabelClassName?: string
  bottomLabelClassName?: string
}

const HeadingWithLabels: FC<Props> = ({
  heading,
  bottomLabel = 'item',
  upperLabel,
  className = '',
  headingClassName = '',
  upperLabelClassName = '',
  bottomLabelClassName = ''
}) => {
  return (
    <div className={`${className} flex flex-col justify-between items-end`}>
      {upperLabel && (
        <h2 className={`${upperLabelClassName} text-xl font-bold self-start`}>
          {upperLabel}
        </h2>
      )}
      <h2 className={`${headingClassName} ${playfair.className} xl:text-6xl text-5xl font-thin`}>
        {heading}
      </h2>
      <span data-attr="﹡" className={`${bottomLabelClassName} ${josefin.className} xl:text-xl text-lg font-light before:content-[attr(data-attr)]`}>
        {bottomLabel}
      </span>
    </div>
  )
}

export default HeadingWithLabels