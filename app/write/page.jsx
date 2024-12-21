"use client";

import styles from "./styles";
import Dropdown from "../components/dropdown";
import Picker from "../components/picker";
import Button from "../components/button/button";

export default function WritePage() {
  return (
    <styles.Container>
      <styles.InputContainer>
        <styles.label>메뉴명</styles.label>
        <styles.Input placeholder="메뉴명을 입력해주세요" />
      </styles.InputContainer>
      <styles.InputContainer>
        <styles.label>장소</styles.label>
        <styles.Input placeholder="장소를 입력해주세요" />
      </styles.InputContainer>

      <Dropdown>음식 종류</Dropdown>
      <Picker label="날짜와 시간을 선택해주세요" />
      <styles.InputContainer style={{ marginTop: 30 }}>
        <styles.label>추가 사항</styles.label>
        <styles.TextArea placeholder="원하는 음식이나 원하는 조건들을 구체적으로 설명해주세요" />
      </styles.InputContainer>
      <Button label="생성하기" />
    </styles.Container>
  );
}
