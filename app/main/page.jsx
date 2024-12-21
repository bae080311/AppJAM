"use client";

import Image from "next/image";
import Post from "../components/post/post";
import styles from "./styles";
import arrow from "../svgs/rightArrow.svg";
import plus from "../svgs/plus.svg";

export default function MainPage() {
  return (
    <styles.Container>
      <styles.Title>오늘의 메뉴 추천</styles.Title>
      <styles.postContainer>
        <styles.Img />
      </styles.postContainer>
      <styles.TitleContainer>
        <styles.Title>오늘 밥 약속 찾기</styles.Title>
        <Image src={arrow} alt="가기" />
      </styles.TitleContainer>
      <styles.postContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </styles.postContainer>
      <styles.TitleContainer>
        <styles.Title>그 이후 밥 약속 찾기</styles.Title>
        <Image src={arrow} alt="가기" />
      </styles.TitleContainer>
      <styles.button>
        밥 약속 추가하기
        <Image src={plus} alt="더하기" />
      </styles.button>
    </styles.Container>
  );
}
