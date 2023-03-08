import styled from "styled-components";

export const Button = styled.button`
  justify-self: center;
  width: 200px;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.color};
  font-size: 20px;
  font-weight: bold;
  border-radius: 2px;
`;
