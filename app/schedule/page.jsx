"use client";

import * as styles from "./styles"; // 스타일을 객체로 가져오기
import { useState } from "react";
import {
  StyledCalendarWrapper,
  StyledCalendar,
  StyledDot,
} from "../components/calender/styles";
import moment from "moment";

export default function Schedule() {
  const today = new Date();
  const [date, setDate] = useState(today); // 초기값 설정

  // 출석한 날짜 목록 (2025-01-05만 포함)
  const targetDate = "2025-01-05";

  return (
    <styles.Container>
      <styles.Title>오늘의 일정</styles.Title>
      <styles.ScheduleWrapper>
        <styles.ScheduleText>
          {moment(date).format("YYYY-MM-DD") === targetDate
            ? "오늘은 1시 00분에 치킨을 먹어야 합니다"
            : "아쉽지만 오늘의 일정은 없어요"}
        </styles.ScheduleText>
      </styles.ScheduleWrapper>

      <StyledCalendarWrapper>
        <StyledCalendar
          value={date}
          onChange={(newDate) => setDate(newDate)} // 날짜 변경 시 상태 업데이트
          formatDay={(locale, date) => moment(date).format("D")}
          calendarType="gregory"
          showNeighboringMonth={false}
          next2Label={null}
          prev2Label={null}
          tileContent={({ date, view }) => {
            const dateString = moment(date).format("YYYY-MM-DD");
            // 출석한 날짜에 점 표시
            return view === "month" && dateString === targetDate ? (
              <StyledDot />
            ) : null;
          }}
        />
      </StyledCalendarWrapper>
    </styles.Container>
  );
}
