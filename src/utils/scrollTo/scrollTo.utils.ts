'use client'
import { animate } from 'framer-motion';

const scrollTo = (targetY: number, paddingTop: number = 64) => {
  const startY = window.scrollY;
  const targetPosition = targetY - paddingTop;
  const distance = targetPosition - startY;

  animate(startY, targetPosition, {
    type: 'spring',
    stiffness: 200,
    damping: 30,
    restSpeed: 1,
    onUpdate: (latest) => window.scrollTo(0, latest),
  });
};

const handleScrollTo = (id: string, paddingTop?: number) => {
  const section = document.getElementById(id);
  if (section) {
    const offsetTop = section.offsetTop;
    scrollTo(offsetTop, paddingTop);
  }
}

export { scrollTo, handleScrollTo }