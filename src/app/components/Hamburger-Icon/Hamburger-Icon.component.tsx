import { FC } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {
  onClick?: () => void
}

const HamburgerMenuIcon: FC<Props> = ({ onClick }) => <RxHamburgerMenu height={24} width={24} onClick={onClick} />

export default HamburgerMenuIcon
