import { stepLabelClasses } from "@mui/material";

const { default: styled } = require("styled-components");

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

const Title = styled.h1`
  color: #8a6c52;
  font-size: 24px;
  font-weight: 800;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const button = styled.button`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const postContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Img = styled.image``;

export default { Container, button, Title, TitleContainer, postContainer, Img };
