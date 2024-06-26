"use client";

import React, { useEffect } from "react";
import useMenu from "@/hook/useMenu";

type Props = {
  children: React.ReactNode;
};

const TemplatePage: React.FC<Props> = ({ children }) => {
  const { setIsMenuOpen } = useMenu()

  useEffect(() => {
    return () => {
      setIsMenuOpen(false)
    };
  }, []);

  return children;
};

export default TemplatePage;
