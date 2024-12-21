"use client";

import Calendar from "react-calendar";
import * as styles from "./styles"; // 스타일을 객체로 가져오기
import DogInfo from "../components/calender/calender";

export default function Schedule() {
  return (
    <styles.Container>
      <styles.Title>오늘의 일정</styles.Title>
      <styles.ScheduleWrapper>
        <styles.ScheduleText>아쉽지만 오늘의 일정은 없어요</styles.ScheduleText>
      </styles.ScheduleWrapper>
      <DogInfo />
    </styles.Container>
  );
}
