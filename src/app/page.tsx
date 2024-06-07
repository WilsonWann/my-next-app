'use client'
import { useEffect } from "react";
import slicedOranges from "@/assets/sliced-oranges.jpg";
import orange from "@/assets/small-orange-pumpkin-with-green-leaves-behind.jpg";
import orangePile from "@/assets/fresh-oranges-pile.jpg";
import orangeInGrass from "@/assets/orange-in-grass.jpg";
import anOrangeBasket from "@/assets/an-orange-basket.jpg";
import grass from "@/assets/photo-in-macro-of-wet-green-grass.jpg";
import paintingFrame from "@/assets/wet-orange-and-white-paint-filling-frame.jpg";
import Carousel from "./components/Carousel/Carousel.component";
import Image from "next/image";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const bannerList = [slicedOranges, orange, orangePile];

export default function Home() {

  // const { scrollYProgress } = useScroll();
  // const x = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // 每次進入視口時都觸發
    threshold: 0.1, // 只有10%可見時就觸發
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: 100, opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="direct-mb-32 flex flex-col items-center justify-between">
      {/* //* carousel */}
      <div id="banner" className="relative w-full">
        <Carousel bannerList={bannerList} />
      </div>
      {/* //* left: image */}
      {/* //* right: text: to left fade-in */}
      <div id="about" className="relative flex w-full flex-row items-start justify-start gap-32">
        <div className="relative h-screen basis-[1066px]">
          <div className="absolute h-full w-full">
            <Image
              src={paintingFrame}
              placeholder={"blur"}
              blurDataURL={paintingFrame.blurDataURL}
              alt={""}
              sizes="100vw"
              className="absolute left-0 top-14 z-10 h-[617px] w-[1010px] object-cover object-center"
            />
            <Image
              src={anOrangeBasket}
              placeholder={"blur"}
              blurDataURL={anOrangeBasket.blurDataURL}
              alt={""}
              sizes="100vw"
              className="absolute left-14 z-20 h-[617px] w-[1010px] object-cover object-top"
            />
          </div>
        </div>
        <div className="pt-48">
          <motion.div
            ref={ref}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <section className="item-start flex flex-col gap-8">
              <div className="flex flex-row items-baseline gap-4">
                <h2 className="text-5xl font-light">ABOUT</h2>
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
              <div data-attr="＊" className="before:content-[attr(data-attr)]">
                musense
              </div>
            </section>
          </motion.div>
        </div>
      </div>
      {/* //* left: text: to right fade-in */}
      {/* //* right: text */}
      <div>
        <div></div>
        <div></div>
      </div>
      {/* //* one: image: to up fade-in */}
      {/* //* two: image: to down fade-in */}
      {/* //* three: image: to up fade-in */}
      {/* //* four: image: to down fade-in  */}
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* //* image: opacity fade-in */}
      <div className="">
        <div></div>
        <div></div>
      </div>
    </div >
  );
}
