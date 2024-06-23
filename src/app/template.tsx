"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "@/lib/redux-hooks";
import { setIsMenuOpen } from "@/store/menu/menu.slice";

type Props = {
  children: React.ReactNode;
};

const TemplatePage: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(setIsMenuOpen(false));
    };
  }, []);

  return children;
};

export default TemplatePage;
