import styled from "styled-components";

// 컨테이너 스타일
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #f8f7f5;
`;

// 헤더
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #b88d65;
`;

// 메시지 리스트
export const MessageList = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

export const MessageItem = styled.div`
  display: flex;
  flex-direction: ${({ isSent }) => (isSent ? "row-reverse" : "row")};
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px;
`;

export const MessageBubble = styled.div`
  background-color: ${({ isSent }) => (isSent ? "#f9c18c" : "#ffffff")};
  color: ${({ isSent }) => (isSent ? "#000000" : "#000000")};
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 70%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 입력창
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  margin-right: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #f9c18c;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
