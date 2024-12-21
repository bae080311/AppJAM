"use client";

import styles from "./styles";
import Dropdown from "../components/dropdown";
import Picker from "../components/picker";
import Button from "../components/button/button";
import axios from "axios";
import { url } from "../config";
import Dropdown2 from "../components/dropdown2";
import { useState } from "react";

export default function WritePage({ sort, meal, date }) {
  function send() {
    const [location, setLocation] = useState("");
    const [content, setContent] = useState("");
    axios
      .post(`${url}/schedules`, {
        mealTime: meal,
        location: location,
        menuName: sort,
        content: content,
        date: date,
      })
      .catch((e) => {
        console.log(e);
      });
    return (
      <styles.Container>
        <styles.InputContainer>
          <styles.label>메뉴명</styles.label>
          <styles.Input placeholder="메뉴명을 입력해주세요" />
        </styles.InputContainer>
        <styles.InputContainer>
          <styles.label>장소</styles.label>
          <styles.Input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="장소를 입력해주세요"
          />
        </styles.InputContainer>

        <Dropdown>음식 종류</Dropdown>
        <Dropdown2>식사</Dropdown2>
        <Picker label="날짜와 시간을 선택해주세요" />
        <styles.InputContainer style={{ marginTop: 30 }}>
          <styles.label>추가 사항</styles.label>
          <styles.TextArea
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="원하는 음식이나 원하는 조건들을 구체적으로 설명해주세요"
          />
        </styles.InputContainer>
        <Button onClick={send} label="생성하기" />
      </styles.Container>
    );
  }
}
