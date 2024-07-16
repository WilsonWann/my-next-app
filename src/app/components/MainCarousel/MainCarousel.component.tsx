import type { StaticImageData } from 'next/image';
import React, { FC } from 'react'
import Carousel from '@/app/components/Carousel/Carousel.component';

type Props = {
  id: string,
  bannerList: StaticImageData[],
  className?: string
}

const MainCarousel: FC<Props> = ({ id, bannerList, className = '' }) => {
  return (
    <div id={id} className={`relative w-svw ${className}`}>
      <Carousel bannerList={bannerList} />
    </div>
  );
}

export default MainCarousel