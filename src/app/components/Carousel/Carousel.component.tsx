"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { FC } from "react";
import Image, { type StaticImageData } from "next/image";
import useCarousel from "@/hook/useCarousel";

type CarouselProps = {
  bannerList: StaticImageData[];
};

const Carousel: FC<CarouselProps> = ({ bannerList }) => {

  const { settings, animations } = useCarousel(bannerList);

  return (
    <Slider
      {...settings}
      className="relative h-auto max-h-screen w-full overflow-clip aspect-video"
    >
      {bannerList.map((banner, index) => {

        const imageProps = {
          src: banner,
          placeholder: "blur" as const,
          blurDataURL: banner.blurDataURL,
          alt: "",
          sizes: "100vw",
        }

        return (
          <Image
            {...imageProps}
            key={index}
            className={`${animations[index]} select-none object-cover object-center `}
          />
        );
      })}
    </Slider>
  );
};

export default Carousel;
