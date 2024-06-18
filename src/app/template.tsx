'use client'

import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { setIsMenuOpen } from "@/store/menu/menu.slice";

type Props = {
  children: React.ReactNode
}

const TemplatePage: React.FC<Props> = ({ children }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setIsMenuOpen(false))
    }
  }, []);

  return (
    children
  )
}

export default TemplatePage