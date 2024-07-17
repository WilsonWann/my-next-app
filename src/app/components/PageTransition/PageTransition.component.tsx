'use client'

import React, { FC } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation'
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const FrozenRouter: FC<Props> = (props) => {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}


const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const easeInOut = {
  type: "easeInOut",
  duration: 1,
}

const PageTransition: FC<Props> = (props) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false} >
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={easeInOut}
      >
        <FrozenRouter>
          {props.children}
        </FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition