import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #111;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.098px;
  text-transform: capitalize;
`;

export const DetailContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Detail = styled.span`
  color: #757575;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.049px;
  text-transform: capitalize;
`;

export const Content = styled.p`
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: -0.066px;
  text-transform: capitalize;
`;

export const Button = styled.button`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
