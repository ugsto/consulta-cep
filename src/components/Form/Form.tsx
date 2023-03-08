import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
`;

export function Form({ children }: React.PropsWithChildren<{}>) {
  return <FormContainer>{children}</FormContainer>;
}
