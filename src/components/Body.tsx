import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6,
  & p,
  & span,
  & a,
  & button,
  & input,
  & textarea,
  & input::placeholder,
  & textarea::placeholder,
  & input,
  & textarea,
  & label {
    font-family: "Poppins", sans-serif;
  }
`;
