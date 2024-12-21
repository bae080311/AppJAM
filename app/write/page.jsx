"use client";

import styles from "./styles";
import Dropdown from "../components/dropdown";
import Picker from "../components/picker";
import Button from "../components/button/button";
import axios from "axios";
import { url } from "../config";
import Dropdown2 from "../components/dropdown2";
import { useState, useEffect } from "react";

export default function WritePage() {
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");
  const [meal, setMeal] = useState("");
  const [sort, setSort] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // 클라이언트 전용 로직은 useEffect 내부에서 처리
    console.log("클라이언트에서만 실행되는 코드입니다.");
  }, []);

  const send = () => {
    axios
      .post(`${url}/schedules`, {
        mealTime: meal,
        location,
        menuName: sort,
        content,
        date,
      })
      .then(() => {
        console.log("데이터 전송 성공");
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

      {/* Dropdown 컴포넌트와 상태 연결 */}
      <Dropdown setSort={setSort}>음식 종류</Dropdown>

      {/* Dropdown2 컴포넌트와 상태 연결 */}
      <Dropdown2 setMeal={setMeal}>식사</Dropdown2>

      {/* Picker 컴포넌트와 상태 연결 */}
      <Picker setDate={setDate} label="날짜와 시간을 선택해주세요" />

      <styles.InputContainer style={{ marginTop: 30 }}>
        <styles.label>추가 사항</styles.label>
        <styles.TextArea
          placeholder="원하는 음식이나 원하는 조건들을 구체적으로 설명해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </styles.InputContainer>

      {/* 버튼 클릭 시 send 함수 실행 */}
      <Button onClick={send} label="생성하기" />
    </styles.Container>
  );
}
