'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import type { PortfolioType } from '@/app/imageHandler'

type Props = {
  portfolioImages: PortfolioType[],
  className?: string
}

const Portfolio: FC<Props> = ({ portfolioImages, className = '' }) => {

  return (
    <div className={`grid 
      md:grid-cols-3-rows-2 grid-cols-2-rows-3
      w-screen h-fit justify-items-stretch items-stretch ${className}`}>
      {portfolioImages.map((portfolioImage, index) => {

        const { image } = portfolioImage
        const imageProps = {
          src: image,
          placeholder: "blur" as const,
          blurDataURL: image.blurDataURL,
          alt: "",
          sizes: "100vw",
        }

        const { title, description } = portfolioImage.children
        return (
          <div key={index} className={`group relative flex justify-center items-center *:transition-all *:duration-500 overflow-clip`}>
            <Image {...imageProps} className="absolute 
              w-full h-auto 
              object-cover object-center" />
            <div className={`absolute inset-0 bg-black/0 z-hidden group-hover:bg-black/60 group-hover:z-10`} ></div>
            <div className="flex justify-center items-center space-x-4 *:pl-4 divide-x-2 text-2xl text-subtitle opacity-0
              z-hidden
            group-hover:opacity-100 group-hover:z-20">
              <div className="!pl-0">{title}</div>
              <div>{description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Portfolio