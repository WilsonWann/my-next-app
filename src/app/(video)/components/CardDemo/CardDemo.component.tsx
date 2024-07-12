'use client'

import React, { FC, useEffect, useState } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image, { type StaticImageData } from 'next/image'
import { fallbackImage } from "@/app/imageHandler"
import { scheherazade } from '@/app/fonts'

type Props = {
  image?: StaticImageData
}

const CardDemo: FC<Props> = (props) => {

  const { image } = props

  const [hoverState, setHoverState] = useState(false);

  const isOverCard = () => setHoverState(true);
  const isLeaveCard = () => setHoverState(false);

  const [aspect, setAspect] = useState<number>(3 / 4);
  useEffect(() => {
    const handleSetAspectRatio = () => {
      if (window.innerWidth > 768) {
        setAspect(3 / 4)
      } else {
        setAspect(16 / 9)
      }
    }

    window.addEventListener("resize", handleSetAspectRatio)

    handleSetAspectRatio()
    return () => {
      window.removeEventListener("resize", handleSetAspectRatio)
    }
  }, [props]);

  return (
    <Card className={cn("md:w-[250px] w-full overflow-clip cursor-pointer group outline-none md:text-sm text-base",
      scheherazade.className,
      { "outline-2 outline-offset-2 outline-secondary": hoverState },
    )}
      onMouseEnter={isOverCard}
      onMouseLeave={isLeaveCard}
    >
      <CardHeader className={cn("p-2 group-hover:transition-all duration-300 brightness-100",
        { "brightness-110": hoverState })}>
        <AspectRatio ratio={aspect}>
          {image ? <Image
            src={image.src}
            placeholder={"blur"}
            blurDataURL={image.blurDataURL}
            alt=""
            fill
            className="rounded-md object-cover"
          /> : <Image
            src={fallbackImage.src}
            placeholder={"blur"}
            blurDataURL={fallbackImage.blurDataURL}
            alt=""
            fill
            className="rounded-md object-cover"
          />}
        </AspectRatio>
      </CardHeader>
      <CardContent className={cn("p-2 flex flex-col justify-start items-baseline gap-2 group-hover:transition-all duration-300 brightness-100",
        { "brightness-110": hoverState }
      )}>
        <p>
          了解客戶的需求與喜好，解說設計流程及細節，設計費、付款方式說明
        </p>
        <p>
          發佈日期: 2022/01/01
        </p>
      </CardContent>
      <CardFooter className="p-2 flex justify-end">
        <p className={cn("group-hover:transition-opacity opacity-0 duration-300 ",
          { 'opacity-100': hoverState })}>
          Read More
        </p>
      </CardFooter>

    </Card >
  )
}

export default CardDemo