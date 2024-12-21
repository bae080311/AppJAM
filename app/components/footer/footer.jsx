"use client";

import Image from "next/image";
import home from "../../svgs/home.svg";
import Calender from "../../svgs/calender.svg";
import Chat from "../../svgs/chating.svg";
import Profile from "../../svgs/profile.svg";
import styles from "./styles";

export default function Footer() {
  return (
    <styles.Container>
      <styles.Icon>
        <Image src={home} alt="홈" width={24} height={24} />
        <span>홈</span>
      </styles.Icon>
      <styles.Icon>
        <Image src={Calender} alt="일정" width={24} height={24} />
        <span>일정</span>
      </styles.Icon>
      <styles.Icon>
        <Image src={Chat} alt="채팅" width={24} height={24} />
        <span>채팅</span>
      </styles.Icon>
      <styles.Icon>
        <Image src={Profile} alt="프로필" width={24} height={24} />
        <span>프로필</span>
      </styles.Icon>
    </styles.Container>
  );
}
