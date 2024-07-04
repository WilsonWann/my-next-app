import { useEffect, useState } from 'react'

import { AnimationDefinition, Transition, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  inViewState: AnimationDefinition,
  outViewState: AnimationDefinition,
  timingFunction?: string
}

const useFramerMotion = ({ inViewState, outViewState, timingFunction }: Props) => {
  const animate = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [transition, setTransition] = useState<Transition>({ duration: 0.8, ease: "easeOut" });

  useEffect(() => {
    if (inView) {
      animate.start(inViewState);
    } else {
      animate.start(outViewState);
    }
  }, [animate, inView, inViewState, outViewState]);

  useEffect(() => {
    if (!timingFunction) return

    setTransition(({ ...transition, ease: timingFunction }))
  }, [timingFunction])

  return {
    ref,
    animate,
    transition
  }
}

export default useFramerMotion