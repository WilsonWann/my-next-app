'use client'

import React, { forwardRef } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type Props = {
  onSearchClick: () => void
}

const InputWithSearch = forwardRef<HTMLInputElement, Props>(
  (props, ref) => {

    const { onSearchClick } = props

    return (
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input ref={ref} type="search" placeholder="search" className="pr-10" />
        <Search className="!-ml-8 cursor-pointer" onClick={onSearchClick} />
      </div>
    )
  }
)

InputWithSearch.displayName = "InputWithSearch"

export default InputWithSearch