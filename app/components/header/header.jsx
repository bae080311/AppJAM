"use client";

import styles from "./styles";
import Text from "../../svgs/text.svg";
import Image from "next/image";

export function Header() {
  return (
    <styles.Container>
      <Image style={{ zIndex: 1000 }} src={Text} alt="text" />
    </styles.Container>
  );
}
