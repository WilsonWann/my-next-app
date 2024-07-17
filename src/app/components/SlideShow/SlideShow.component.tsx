'use client'

import React, { FC } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { BlurImageType, SuccessResponseType } from "@/types";
import { MoveLeft, MoveRight } from "lucide-react";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

type SlideShowProps = {
  images: BlurImageType[]
}

const SlideShow: FC<SlideShowProps> = (props) => {
  const { images } = props
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const blurImageData = images[imageIndex]

  return (
    <div className="relative h-[480px] w-full overflow-clip">
      <AnimatePresence initial={false} custom={direction} >
        <motion.img
          className="object-cover object-center"
          key={page}
          src={blurImageData.src}
          height={blurImageData.height}
          width={blurImageData.width}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="left-8 absolute top-1/2 -translate-y-1/2 cursor-pointer text-white size-8 rounded-full bg-secondary flex justify-center items-center" onClick={() => paginate(1)}>
        <MoveLeft size={16} />
      </div>
      <div className="right-8 absolute top-1/2 -translate-y-1/2 cursor-pointer text-white size-8 rounded-full bg-secondary flex justify-center items-center" onClick={() => paginate(-1)}>
        <MoveRight size={16} />
      </div>
    </div>
  );
};

export default SlideShow