"use client";

import React from "react";
import useScrollToTop from "@/hook/useScrollToTop"
import useCloseMenu from "@/hook/useCloseMenu";

type Props = {
  children: React.ReactNode;
};

const TemplatePage: React.FC<Props> = ({ children }) => {

  useScrollToTop()
  useCloseMenu()

  return children;
};

export default TemplatePage;
