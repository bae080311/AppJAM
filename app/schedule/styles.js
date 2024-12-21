"use client";

const { default: styled } = require("styled-components");

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  color: #1d1d1d;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 20px;
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const ScheduleText = styled.span`
  color: rgba(98, 98, 98, 0.64);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
