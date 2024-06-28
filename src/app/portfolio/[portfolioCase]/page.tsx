import React, { FC } from 'react'
import { scheherazade } from '@/app/fonts'
import { getPortfolioCaseByName } from '@/app/action/getPortfolioCaseByName'
import GoBackButton from '@/components/GoBackButton.component'
import CustomImage from '@/app/components/CustomImage/CustomImage.component'

type Props = {
  params: {
    portfolioCase: string
  }
}

const PortfolioCasePage: FC<Props> = async ({ params: { portfolioCase } }) => {

  const portfolio = await getPortfolioCaseByName(portfolioCase)

  if (!portfolio.success) return null
  if (!portfolio.data) return null

  const { title, tags, images } = portfolio.data

  return (
    <div className="max-w-3xl mx-auto pt-16 flex flex-col justify-start items-start gap-8">
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
      <GoBackButton />
    </div >
  )
}

export default PortfolioCasePage