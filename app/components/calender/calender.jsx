import { useState } from "react";
import {
  StyledCalendarWrapper,
  StyledCalendar,
  StyledDate,
  StyledToday,
  StyledDot,
} from "./styles";
import moment from "moment";

const DogInfo = () => {
  const today = new Date();
  const [date, setDate] = useState(today); // 초기값 설정
  const [activeStartDate, setActiveStartDate] = useState(new Date()); // activeStartDate 초기값 설정

  // 출석한 날짜 목록
  const attendDay = Array.isArray(["2023-12-03", "2023-12-13"])
    ? ["2023-12-03", "2023-12-13"]
    : [];

  // 날짜 변경 핸들러
  const handleDateChange = (newDate) => {
    if (newDate && newDate instanceof Date) {
      setDate(newDate);
    }
  };

  // '오늘' 버튼 클릭 핸들러
  const handleTodayClick = () => {
    const today = new Date();
    setActiveStartDate(today);
    setDate(today);
  };

  return (
    <StyledCalendarWrapper>
      <StyledCalendar
        value={date}
        onChange={handleDateChange}
        formatDay={(locale, date) => moment(date).format("D")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        // 오늘 날짜로 돌아오는 기능을 위해 필요한 옵션 설정
        activeStartDate={activeStartDate === null ? undefined : activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        }
        // 오늘 날짜에 '오늘' 텍스트 삽입하고 출석한 날짜에 점 표시를 위한 설정
        tileContent={({ date, view }) => {
          let html = [];
          const dateString = moment(date).format("YYYY-MM-DD");

          // 오늘 날짜에 '오늘' 텍스트 삽입
          if (
            view === "month" &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
          ) {
          }

          // 출석한 날짜에 점 표시
          if (attendDay.includes(dateString)) {
            html.push(<StyledDot key={dateString} />);
          }

          return <>{html}</>;
        }}
      />
      {/* 오늘 버튼 */}
    </StyledCalendarWrapper>
  );
};

export default DogInfo;
