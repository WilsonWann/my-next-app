"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { FC, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import getRandomNumber from "@/helper/getRandomNumber.helper";

type CarouselProps = {
  bannerList: StaticImageData[];
};

const twAnimate = [
  "animate-toUp",
  "animate-toRightUp",
  "animate-toRight",
  "animate-toRightDown",
  "animate-toDown",
  "animate-toLeftDown",
  "animate-toLeft",
  "animate-toLeftUp",
  "animate-scaleUp",
  "animate-scaleDown",
] as const;

const Carousel: FC<CarouselProps> = ({ bannerList }) => {
  const randomAnimate = () =>
    twAnimate[getRandomNumber(0, twAnimate.length - 1)];

  const [activeIndex, setActiveIndex] = useState(0);
  const [uniqueKeys, setUniqueKeys] = useState<number[]>(
    bannerList.map(() => Math.random()),
  );

  const [animations, setAnimations] = useState<string[]>([]);
  const handleBeforeChange = (current: number, next: number) => {
    setActiveIndex(next);
    setAnimations((prevAnimations) => {
      const newAnimations = [...prevAnimations];
      newAnimations[next] = twAnimate[getRandomNumber(0, twAnimate.length - 1)];
      return newAnimations;
    });

    setUniqueKeys((prevKeys) => {
      const newKeys = [...prevKeys];
      newKeys[next] = Math.random();
      return newKeys;
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
    let backgroundColor = i === activeIndex ? "bg-orange-500" : "bg-orange-200";
    return (
      <div
        className={`h-2 w-2 cursor-pointer select-none rounded-full ${backgroundColor} hover:bg-orange-500`}
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

  return (
    <Slider
      {...settings}
      className="relative h-auto max-h-screen w-full overflow-clip aspect-video"
    >
      {bannerList.map((banner, index: number) => {
        return (
          <Image
            key={uniqueKeys[index]}
            src={banner}
            placeholder={"blur"}
            blurDataURL={banner.blurDataURL}
            alt={""}
            sizes="100vw"
            className={`${animations[index]} select-none object-cover object-center `}
          />
        );
      })}
    </Slider>
  );
};

export default Carousel;
