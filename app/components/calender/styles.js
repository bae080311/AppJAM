import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 20px;
  background-color: ${(props) => props.theme.bgColor || "#f4f4f4"};
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledDate = styled.div`
  position: absolute;
  right: 10%;
  top: 5%;
  background-color: ${(props) => props.theme.primary_3 || "#4A90E2"};
  color: ${(props) => props.theme.yellow_2 || "#f5c545"};
  width: 15%;
  min-width: fit-content;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primary_2 || "#3C7DB3"};
  }
`;

export const StyledToday = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.gray_2 || "#9b9b9b"};
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledDot = styled.div`
  background-color: ${(props) => props.theme.primary_2 || "#3C7DB3"};
  border-radius: 50%;
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
`;

// 요일 밑줄, 글꼴 크기 및 배경 설정
export const StyledWeekdays = styled.div`
  .react-calendar__month-view__weekdays abbr {
    text-decoration: underline;
    font-weight: 700;
    font-size: 1.2rem;
    color: ${(props) => props.theme.gray_4 || "#4d4d4d"};
  }
`;

export const StyledTile = styled.div`
  .react-calendar__tile {
    position: relative;
    font-weight: 600;
    font-size: 1rem;
    padding: 8px;
    transition: all 0.3s ease;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.primary_2 || "#3C7DB3"};
      color: white;
    }

    &.react-calendar__tile--now {
      background-color: ${(props) => props.theme.primary_1 || "#F2994A"};
      abbr {
        color: white;
      }
    }

    &.react-calendar__tile--hasActive {
      background-color: ${(props) => props.theme.yellow_2 || "#f5c545"};
      abbr {
        color: ${(props) => props.theme.primary_2 || "#3C7DB3"};
      }
    }
  }
`;
