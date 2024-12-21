const { default: styled } = require("styled-components");

const Container = styled.footer`
  display: flex;
  gap: 4rem;
  align-items: center;
  position: fixed;
  bottom: 1rem;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export default { Container, Icon };
