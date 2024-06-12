import { motion, useAnimation } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {
  image: StaticImageData
  className?: string
}

const LargeBanner: FC<Props> = ({ image, className = '' }) => {
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

  const imageProps = {
    src: image,
    placeholder: "blur" as const,
    blurDataURL: image.blurDataURL,
    alt: "",
    sizes: "100vw",
    className: " object-cover object-center w-full",
  }

  return <div className={`w-screen aspect-large-banner overflow-clip ${className}`}>
    <motion.div
      ref={refLargeBanner}
      animate={controlsLargeBanner}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image {...imageProps} className={`object-cover object-center w-full`} />
    </motion.div>
  </div>;
}

export default LargeBanner