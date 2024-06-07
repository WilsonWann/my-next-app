import type { StaticImageData } from 'next/image';
import React, { FC } from 'react'
import Carousel from '@/app/components/Carousel/Carousel.component';

type Props = { id: string, bannerList: StaticImageData[] }

const MainCarousel: FC<Props> = ({ id, bannerList }) => {
  return <div id={id} className="relative w-full">
    <Carousel bannerList={bannerList} />
  </div>;
}

export default MainCarousel