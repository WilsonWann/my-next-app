'use client'
import { useEffect } from "react";
import slicedOranges from "@/assets/sliced-oranges.jpg";
import orange from "@/assets/small-orange-pumpkin-with-green-leaves-behind.jpg";
import orangePile from "@/assets/fresh-oranges-pile.jpg";
import anOrangeBasket from "@/assets/an-orange-basket.jpg";
import paintingFrame from "@/assets/wet-orange-and-white-paint-filling-frame.jpg";
import glassOfOrangeJuice from "@/assets/a-full-glass-of-fresh-orange-juice.jpg";
import soManyOranges from "@/assets/so-many-oranges.jpg";
import pumpkinStems from "@/assets/pumpkin-stem-close-up.jpg";
import freshSqueezedOrangeJuice from "@/assets/fresh-squeezed-orange-juice.jpg";
import smallPumpkins from "@/assets/small-pumpkins.jpg";

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

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden");
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    } else {
      controls4.start("hidden");
    }
  }, [controls4, inView4]);


  const controlsLargeBanner = useAnimation();
  const [refLargeBanner, largeBannerInView] = useInView({
    triggerOnce: false, // 每次進入視口時都觸發
    threshold: 0.1, // 只有10%可見時就觸發
  });

  useEffect(() => {
    if (largeBannerInView) {
      controlsLargeBanner.start({ opacity: 1 });
    } else {
      controlsLargeBanner.start({ opacity: 0 });
    }
  }, [controlsLargeBanner, largeBannerInView]);
  return (
    <div className="direct-mb-32 flex flex-col items-center justify-between">
      <div id="banner" className="relative w-full">
        <Carousel bannerList={bannerList} />
      </div>
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
                <h2 className="text-5xl font-thin">ABOUT</h2>
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
      <div className="!mb-0 w-full h-screen flex justify-center items-center">
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
      <div className="w-full h-screen flex flex-col justify-start items-end gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full h-[680px] flex justify-end items-start gap-4"
        >
          <motion.div
            ref={ref1}
            animate={controls1}
            className="w-[407px] h-[610px]  rounded-md overflow-clip"
            variants={{
              hidden: { translateY: 150, opacity: 0 },
              visible: { translateY: 0, opacity: 1 },
            }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={glassOfOrangeJuice}
              placeholder={"blur"}
              blurDataURL={glassOfOrangeJuice.blurDataURL}
              alt={""}
              sizes="100vw"
              className=" object-cover object-center h-full"
            />
          </motion.div>
          <motion.div
            ref={ref2}
            animate={controls2}
            className="self-end w-[407px] h-[610px] rounded-md overflow-clip"
            variants={{
              hidden: { translateY: -150, opacity: 0 },
              visible: { translateY: 0, opacity: 1 },
            }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={soManyOranges}
              placeholder={"blur"}
              blurDataURL={soManyOranges.blurDataURL}
              alt={""}
              sizes="100vw"
              className=" object-cover object-center h-full"
            />
          </motion.div>
          <motion.div
            ref={ref3}
            animate={controls3}
            className="w-[407px] h-[610px] rounded-md overflow-clip"
            variants={{
              hidden: { translateY: 150, opacity: 0 },
              visible: { translateY: 0, opacity: 1 },
            }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={pumpkinStems}
              placeholder={"blur"}
              blurDataURL={pumpkinStems.blurDataURL}
              alt={""}
              sizes="100vw"
              className=" object-cover object-center h-full"
            />
          </motion.div>
          <motion.div
            ref={ref4}
            animate={controls4}
            className="self-end w-[407px] h-[610px] rounded-md overflow-clip"
            variants={{
              hidden: { translateY: -150, opacity: 0 },
              visible: { translateY: 0, opacity: 1 },
            }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={freshSqueezedOrangeJuice}
              placeholder={"blur"}
              blurDataURL={freshSqueezedOrangeJuice.blurDataURL}
              alt={""}
              sizes="100vw"
              className=" object-cover object-center h-full"
            />
          </motion.div>
        </motion.div>
        <div className="flex justify-end items-center gap-16 w w-full">
          <div className="flex flex-col justify-between items-end gap-4">
            <h2 className="text-5xl font-thin">PHOTO</h2>
            <span data-attr="﹡" className="text-lg before:content-[attr(data-attr)]">view</span>
          </div>
          <div className={`bg-orange-500 w-[1450px] h-1 rounded-md`}></div>
        </div>
      </div>
      {/* //* image: opacity fade-in */}
      <div className="!mb-0 w-full h-[571px] overflow-clip">
        <motion.div
          ref={refLargeBanner}
          animate={controlsLargeBanner}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={smallPumpkins}
            placeholder={"blur"}
            blurDataURL={smallPumpkins.blurDataURL}
            alt={""}
            sizes="100vw"
            className=" object-cover object-center w-full"
          />
        </motion.div>
      </div>
    </div >
  );
}
