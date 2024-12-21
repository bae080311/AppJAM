const { default: styled } = require("styled-components");

const Container = styled.div`
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const category = styled.div`
  color: #757575;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.24px;
`;

const date = styled.span`
  color: #111;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const menu = styled.h3`
  font-size: 18px;
  ont-weight: 600;
`;

const meal = styled.span`
  color: #8b8b8b;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const titleContainer = styled.div`
  display: flex;
`;
export default { Container, meal, category, titleContainer, date, menu };
