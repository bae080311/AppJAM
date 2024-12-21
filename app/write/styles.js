const { default: styled } = require("styled-components");

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  margin-top: 1.5rem;
`;

const Input = styled.input`
  border-radius: 0.3rem;
  border: 1px solid #a1a1a1;
  padding: 0.8rem;
  width: 280px;
`;

const label = styled.label`
  font-size: 0.8rem;
  color: #6e6e6e;
`;

const TextArea = styled.textarea`
  border-radius: 0.3rem;
  padding: 0.6rem;
  width: 280px;
  height: 150px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default { Input, Container, label, TextArea, InputContainer };
