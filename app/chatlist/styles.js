import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  background: #fafafa;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
  color: #8a6c52;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
`;

export const ChatContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Name = styled.span`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
