import React, { FC } from 'react'
import { scheherazade } from '@/app/fonts'
import { getPortfolioCaseByName } from '@/app/action/getPortfolioCaseByName'
import { notFound } from 'next/navigation'
import getLocalBase64 from '@/helper/getLocalBase64'
import LocalImage from '@/app/components/LocalImage/LocalImage.component'

type Props = {
  portfolioCase: string
}

const PortfolioCase: FC<Props> = async ({ portfolioCase }) => {

  const response = await getPortfolioCaseByName(portfolioCase)

  if (!response.success) throw new Error(response.message)
  if (!response.data) return notFound()

  const { title, tags, imageFolder } = response.data
  console.log('🚀 ~ const PortfolioCase:FC<Props> = ~ response.data:', response.data)

  const imagesResponse = await getLocalBase64(imageFolder)
  console.log('🚀 ~ const PortfolioCase:FC<Props> = ~ imagesResponse:', imagesResponse)
  // const images = imagesResponse.data
  if (imagesResponse.success === false) return


  return (
    <>
      <section className={`${scheherazade.className} flex flex-col justify-start items-start gap-2 text-secondary`}>
        <h2 className="text-xl ">{title}</h2>
        {tags.map((tag, index) => (
          <span key={index}>{`# ${tag}`}</span>
        ))}
      </section>
      {
        imagesResponse.data.map((image, index) => (
          <div key={index} className="relative w-full h-[500px] overflow-clip">
            <LocalImage image={image} fill />
            {/* <CustomImage image={image} fill /> */}
          </div>
        ))
      }
    </>
  )
}

export default PortfolioCase