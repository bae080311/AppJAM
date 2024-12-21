import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #a6a6a6;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  ${(props) =>
    props.error &&
    css`
      color: red;
    `}
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;
