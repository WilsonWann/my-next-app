'use client'
import { useEffect } from "react";
import slicedOranges from "@/assets/sliced-oranges.jpg";
import orange from "@/assets/small-orange-pumpkin-with-green-leaves-behind.jpg";
import orangePile from "@/assets/fresh-oranges-pile.jpg";
import anOrangeBasket from "@/assets/an-orange-basket.jpg";
import paintingFrame from "@/assets/wet-orange-and-white-paint-filling-frame.jpg";
import Carousel from "./components/Carousel/Carousel.component";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const bannerList = [slicedOranges, orange, orangePile];

export default function Home() {

  const controlsAbout = useAnimation();
  const [refAbout, aboutInView] = useInView({
    triggerOnce: false, // 每次進入視口時都觸發
    threshold: 0.1, // 只有10%可見時就觸發
  });

  useEffect(() => {
    if (aboutInView) {
      controlsAbout.start({ x: 0, opacity: 1 });
    } else {
      controlsAbout.start({ x: 100, opacity: 0 });
    }
  }, [controlsAbout, aboutInView]);

  const controlsCompany = useAnimation();
  const [refCompany, companyInView] = useInView({
    triggerOnce: false, // 每次進入視口時都觸發
    threshold: 0.1, // 只有10%可見時就觸發
  });

  useEffect(() => {
    if (companyInView) {
      controlsCompany.start({ x: 0, opacity: 1 });
    } else {
      controlsCompany.start({ x: -100, opacity: 0 });
    }
  }, [controlsCompany, companyInView]);



  return (
    <div className="direct-mb-32 flex flex-col items-center justify-between">
      {/* //* carousel */}
      <div id="banner" className="relative w-full">
        <Carousel bannerList={bannerList} />
      </div>
      {/* //* left: image */}
      {/* //* right: text: to left fade-in */}
      <div id="about" className="relative flex w-full h-screen flex-row items-start justify-start gap-32">
        <div className="relative h-screen basis-[1076px]">
          <div className="absolute h-full w-full">
            <Image
              src={paintingFrame}
              placeholder={"blur"}
              blurDataURL={paintingFrame.blurDataURL}
              alt={""}
              sizes="100vw"
              className="absolute left-0 top-24 z-10 h-[671px] w-[1010px] object-cover object-center"
            />
            <Image
              src={anOrangeBasket}
              placeholder={"blur"}
              blurDataURL={anOrangeBasket.blurDataURL}
              alt={""}
              sizes="100vw"
              className="absolute left-16 z-20 h-[671px] w-[1010px] object-cover object-top"
            />
          </div>
        </div>
        <div className="pt-48">
          <motion.div
            ref={refAbout}
            animate={controlsAbout}
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
              <div data-attr="﹡" className="text-lg before:content-[attr(data-attr)]">
                musense
              </div>
            </section>
          </motion.div>
        </div>
      </div>
      {/* //* left: text: to right fade-in */}
      {/* //* right: text */}
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-row justify-center items-end gap-4">
          <motion.div
            ref={refCompany}
            animate={controlsCompany}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h2 className="text-7xl font-thin">陌聲行銷</h2>
          </motion.div>
          <h2 className="text-5xl font-light">﹡</h2>

          <div className="flex flex-col justify-start items-baseline">
            <div className="text-xl font-bold">數字行銷，智能決策，創意無限</div>
            <div className="text-lg font-normal">數據驅動，智能行銷，創意無限，助力品牌實現精準決策與卓越成效。</div>
          </div>
        </div>
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
