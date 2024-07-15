import React, { useEffect, useState } from 'react'

import getRandomNumber from "@/helper/getRandomNumber.helper";
import { twAnimate } from "@/app/const/TwAnimate";
import { StaticImageData } from 'next/image';

const useCarousel = (bannerList: StaticImageData[]) => {

  const randomAnimate = () => twAnimate[getRandomNumber(0, twAnimate.length - 1)];

  const [activeIndex, setActiveIndex] = useState(0);

  const [animations, setAnimations] = useState<string[]>([]);
  const handleBeforeChange = (current: number, next: number) => {
    setActiveIndex(next);
    setAnimations((prevAnimations) => {
      const newAnimations = [...prevAnimations];
      newAnimations[next] = twAnimate[getRandomNumber(0, twAnimate.length - 1)];
      return newAnimations;
    });
  };

  const handleAppendDots = (dots: JSX.Element[]) => {
    return (
      <div>
        <ul className="item-center !*:mx-0 absolute bottom-8 !flex w-full justify-center gap-4 bg-transparent">
          {dots}
        </ul>
      </div>
    );
  };

  const handleCustomPaging = (i: number) => {
    let backgroundColor = i === activeIndex ? "bg-primary" : "bg-primary-foreground";
    return (
      <div
        className={`h-2 w-2 cursor-pointer select-none rounded-full ${backgroundColor} hover:bg-primary`}
      />
    );
  };

  useEffect(() => {
    const initialAnimations = bannerList.map(() => randomAnimate());
    setAnimations(initialAnimations);
  }, [bannerList]);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
    appendDots: handleAppendDots,
    customPaging: handleCustomPaging,
  }

  return { settings, animations }
}

export default useCarousel