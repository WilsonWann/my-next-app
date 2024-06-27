"use client";

import React, { useEffect } from "react";
import useMenu from "@/hook/useMenu";
import useScrollToTop from "@/hook/useScrollToTop"

type Props = {
  children: React.ReactNode;
};

const TemplatePage: React.FC<Props> = ({ children }) => {
  const { setIsMenuOpen } = useMenu()
  useScrollToTop()

  useEffect(() => {
    return () => {
      setIsMenuOpen(false)
    };
  }, []);

  return children;
};

export default TemplatePage;
