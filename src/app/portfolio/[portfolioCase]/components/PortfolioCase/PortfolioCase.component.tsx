import React, { FC } from 'react'
import { scheherazade } from '@/app/fonts'
import { getPortfolioCaseByName } from '@/app/action/getPortfolioCaseByName'
import { notFound } from 'next/navigation'
import PortfolioCaseImages from '../PortfolioCaseImages/PortfolioCaseImages.component'

type Props = {
  portfolioCase: string
}

const PortfolioCase: FC<Props> = async ({ portfolioCase }) => {

  const response = await getPortfolioCaseByName(portfolioCase)

  if (!response.success) throw new Error(response.message)
  if (!response.data) return notFound()

  const { title, tags, imageFolder, images } = response.data

  return (
    <div className="w-full flex flex-col items-stretch gap-4">
      <section className={`${scheherazade.className} flex flex-col justify-start items-start gap-2 text-secondary`}>
        <h2 className="text-xl ">{title}</h2>
        {tags.map((tag, index) => (
          <span key={index}>{`# ${tag}`}</span>
        ))}
      </section>
      <PortfolioCaseImages imageFolder={imageFolder} images={images} />
    </div>
  )
}

export default PortfolioCase