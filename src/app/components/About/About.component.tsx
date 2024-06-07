import React, { FC, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import { useInView } from 'react-intersection-observer';

type Props = { id: string, images: StaticImageData[] }

const About: FC<Props> = ({ id, images }) => {
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

  const showImages = images.slice(0, 2)

  return (
    <div id={id} className="relative flex w-full h-screen flex-row items-start justify-start gap-32">
      <div className="relative h-screen basis-[1076px]">
        <div className="absolute h-full w-full">
          {showImages.map((image, index) => {
            const position = index === 0
              ? 'left-0 top-24 z-10 object-center'
              : 'left-16 z-20 object-top'
            const imageProps = {
              src: image,
              placeholder: "blur" as const,
              blurDataURL: image.blurDataURL,
              alt: "",
              sizes: "100vw",
              className: `absolute h-[671px] w-[1010px] object-cover ${position}`,
            }
            return <Image key={index} {...imageProps} />
          })}
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
  );
}

export default About