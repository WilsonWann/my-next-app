import { FC } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {
  onClick?: () => void
  className?: string
}

const HamburgerMenuIcon: FC<Props> = (props) => <RxHamburgerMenu {...props} />

export default HamburgerMenuIcon
