'use client'

import React, { FC } from 'react'
import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import useFramerMotion from '@/hook/useFramerMotion';

type Props = {
  id: string,
  images: StaticImageData[],
  className?: string
}

const About: FC<Props> = ({ id, images, className = '' }) => {

  const motionProps = useFramerMotion({
    inViewState: { translateX: 0, opacity: 1 },
    outViewState: { translateX: 100, opacity: 0 }
  })

  const showImages = images.slice(0, 2).reverse()

  const mainImage = showImages.at(0)
  const subImage = showImages.at(1)

  if (!mainImage || !subImage) return null

  const mainImageProps = {
    src: mainImage,
    placeholder: "blur" as const,
    blurDataURL: mainImage.blurDataURL,
    alt: "",
    sizes: "100vw",
  }
  const subImageProps = {
    src: subImage,
    placeholder: "blur" as const,
    blurDataURL: subImage.blurDataURL,
    alt: "",
    sizes: "100vw",
  }

  return (
    <div id={id} className={`relative flex w-full 
    xl:h-screen h-fit
    md:flex-row flex-col-reverse 
    md:items-center items-center 
    md:justify-center justify-end
    md:gap-32 gap-12 ${className}`}>
      <aside className="relative w-fit h-fit">
        <Image  {...mainImageProps} className="relative md:ml-12 ml-0 z-10 object-top md:h-auto md:w-[1010px] aspect-video object-cover" />
        <Image  {...subImageProps} className="absolute md:left-0 -left-12 top-12 z-0 object-center md:h-auto md:w-[1010px] aspect-video object-cover" />
      </aside>
      <div className="md:pt-48 pt-0">
        <motion.div {...motionProps}>
          <section className="text-secondary item-start flex flex-col gap-8">
            <div className="flex flex-row items-baseline gap-4">
              <h2 className="text-5xl font-thin ">ABOUT</h2>
              <h2 className="text-xl font-bold">關於我們</h2>
            </div>
            <div>
              <div className="text-xl font-bold">陌-尋找未知客戶的初心</div>
              <div className="text-xl font-bold">聲-聽取用戶真實情感的用心</div>
            </div>
            <div>
              <pre>
                賦能您的品牌，
                <br />
                每次行銷活動都讓創意變為市場成功，
                <br />
                我們的策略助力您的願景實現無限成長。
              </pre>
            </div>
            <div data-attr="﹡" className="text-lg before:content-[attr(data-attr)]">
              musense
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}


export default About