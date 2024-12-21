"use client";

import Image from "next/image";
import Post from "../components/post/post";
import styles from "./styles";
import arrow from "../svgs/rightArrow.svg";
import plus from "../svgs/plus.svg";
import Footer from "../components/footer/footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../config";

export default function MainPage() {
  // data를 빈 객체로 초기화하고 posts 배열 포함
  const [data, setData] = useState({ schedules: [] });
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/schedules?year=${2025}&month=${1}`,
          {
            headers: {
              authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzQ4ODc0MjYsInVzZXJJZCI6Mn0.03P9a9U-wWjbmx25-D8pAfCmvyRYhkjj4NoEvCDlmMk"}`,
            },
          }
        );
        setData(response.data); // 응답 데이터로 상태 설정
      } catch (err) {
        setError("데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchData();
  }, []); // 빈 의존성 배열로 컴포넌트 마운트 시 한 번만 호출

  const route = useRouter();

  if (loading) return <div>로딩 중...</div>; // 로딩 중일 때 메시지 출력

  if (error) return <div>{error}</div>; // 에러 발생 시 메시지 출력

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
        {/* data.schedules 배열을 대상으로 map 호출 */}
        {Array.isArray(data.schedules) &&
          data.schedules.map((v) => <Post key={v.id} post={v} />)}
      </styles.postContainer>
      <styles.TitleContainer>
        <styles.Title>그 이후 밥 약속 찾기</styles.Title>
        <Image src={arrow} alt="가기" />
      </styles.TitleContainer>
      <styles.button onClick={() => route.push("/write")}>
        밥 약속 추가하기
        <Image src={plus} alt="더하기" />
      </styles.button>
      <Footer />
    </styles.Container>
  );
}
