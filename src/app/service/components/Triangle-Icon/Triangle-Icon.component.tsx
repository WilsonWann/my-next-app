import React, { FC } from 'react'
import { RxTriangleDown } from "react-icons/rx";

type Props = {
  className?: string
}

const TriangleIcon: FC<Props> = (props) => <RxTriangleDown {...props} />

export default TriangleIcon