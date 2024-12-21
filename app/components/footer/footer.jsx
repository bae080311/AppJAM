"use client";

import Image from "next/image";
import home from "../../svgs/home.svg";
import Calender from "../../svgs/calender.svg";
import Chat from "../../svgs/chating.svg";
import Profile from "../../svgs/profile.svg";
import styles from "./styles";
import { useRouter } from "next/navigation";

export default function Footer() {
  const route = useRouter();
  return (
    <styles.Container>
      <styles.Icon onClick={() => route.push("/main")}>
        <Image src={home} alt="홈" width={24} height={24} />
        <span>홈</span>
      </styles.Icon>
      <styles.Icon onClick={() => route.push("/schedule")}>
        <Image src={Calender} alt="일정" width={24} height={24} />
        <span>일정</span>
      </styles.Icon>
      <styles.Icon onClick={() => route.push("/chat")}>
        <Image src={Chat} alt="채팅" width={24} height={24} />
        <span>채팅</span>
      </styles.Icon>
      <styles.Icon onClick={() => route.push("/profile")}>
        <Image src={Profile} alt="프로필" width={24} height={24} />
        <span>프로필</span>
      </styles.Icon>
    </styles.Container>
  );
}
