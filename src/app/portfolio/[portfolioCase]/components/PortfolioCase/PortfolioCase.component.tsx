import React, { FC } from 'react'
import { scheherazade } from '@/app/fonts'
import CustomImage from '@/app/components/CustomImage/CustomImage.component'
import { getPortfolioCaseByName } from '@/app/action/getPortfolioCaseByName'
import { notFound } from 'next/navigation'

type Props = {
  portfolioCase: string
}

const PortfolioCase: FC<Props> = async ({ portfolioCase }) => {

  const response = await getPortfolioCaseByName(portfolioCase)
  console.log('🚀 ~ const PortfolioCase:FC<Props> = ~ response:', response)
  if (!response.success) {
    console.error('🚀 ~ const PortfolioCase:FC<Props> = ~ response.success:', response.success)
    throw new Error(response.message)
  }
  if (!response.data) return notFound()
  const { title, tags, images } = response.data
  console.log('🚀 ~ const PortfolioCase:FC<Props> = ~ response.data:', response.data)

  return (
    <>
      <section className={`${scheherazade.className} flex flex-col justify-start items-start gap-2 text-secondary`}>
        <h2 className="text-xl ">{title}</h2>
        {tags.map((tag, index) => (
          <span key={index}>{`# ${tag}`}</span>
        ))}
      </section>
      {
        images.map((image, index) => (
          <div key={index} className="relative w-full h-[500px] overflow-clip">
            <CustomImage image={image} fill />
          </div>
        ))
      }
    </>
  )
}

export default PortfolioCase