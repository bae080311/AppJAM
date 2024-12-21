"use client";

import styles from "./styles";
import Dropdown from "../components/dropdown";
import Picker from "../components/picker";
import Button from "../components/button/button";
import axios from "axios";
import { url } from "../config";
import Dropdown2 from "../components/dropdown2";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WritePage() {
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");
  const [meal, setMeal] = useState("");
  const [sort, setSort] = useState("");
  const [date, setDate] = useState("");

  const route = useRouter();

  useEffect(() => {
    console.log("클라이언트에서만 실행되는 코드입니다.");
  }, []);

  const send = () => {
    axios
      .post(
        `${url}/schedules`,
        {
          mealTime: meal,
          location: location,
          menuName: sort,
          content: content,
          date: "2025-01-04",
        },
        {
          headers: {
            authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzQ4ODc0MjYsInVzZXJJZCI6Mn0.03P9a9U-wWjbmx25-D8pAfCmvyRYhkjj4NoEvCDlmMk"}`,
          },
        }
      )
      .then(() => {
        console.log("데이터 전송 성공");
        route.push("/main");
      })
      .catch((e) => {
        console.error("데이터 전송 실패:", e);
      });
  };

  return (
    <styles.Container>
      <styles.InputContainer>
        <styles.label>메뉴명</styles.label>
        <styles.Input
          placeholder="메뉴명을 입력해주세요"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        />
      </styles.InputContainer>
      <styles.InputContainer>
        <styles.label>장소</styles.label>
        <styles.Input
          placeholder="장소를 입력해주세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </styles.InputContainer>

      <Dropdown setSort={setSort}>음식 종류</Dropdown>

      <Dropdown2 setMeal={setMeal}>식사</Dropdown2>

      <Picker setDate={setDate} label="날짜와 시간을 선택해주세요" />

      <styles.InputContainer style={{ marginTop: 30 }}>
        <styles.label>추가 사항</styles.label>
        <styles.TextArea
          placeholder="원하는 음식이나 원하는 조건들을 구체적으로 설명해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </styles.InputContainer>

      <Button onClick={send} label="생성하기" />
    </styles.Container>
  );
}
