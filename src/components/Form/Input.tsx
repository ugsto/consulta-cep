import React from "react";
import styled from "styled-components";

export interface InputEvent extends React.ChangeEvent<HTMLInputElement> {
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

export interface InputContainerProps {
  label: string;
  name: string;
  value: string;
  InputComponent: (props: InputProps) => JSX.Element;
  onChange?: (event: InputEvent) => void;
  validator?: (value: string) => boolean;
  required?: boolean;
  placeholder?: string;
}

export interface InputProps {
  name: string;
  id: string;
  value: string;
  onChange: (event: InputEvent) => void;
  validator?: (value: string) => boolean;
  required: boolean;
  placeholder: string;
}

const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column-reverse;
  height: 40px;

  & label {
    position: relative;
    display: inline-block;
    top: 0;
    left: 10px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.primary};
    transition: 0.5s;
    cursor: text;
    height: 40px;
    line-height: 40px;
  }

  & input {
    position: absolute;
    background-color: ${(props) => props.theme.colors.primary};
    width: 100%;
    height: 3px;
    bottom: 0;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 2px;
    transition: 0.5s;
    font-size: 20px;
    font-weight: bold;
    padding: 0 10px;
  }

  & input:focus,
  & input:valid {
    height: 100%;
  }

  & input:focus + label,
  & input:valid + label {
    top: -40px;
    left: 0;
  }
`;

export function Input({
  label,
  name,
  value: string,
  InputComponent,
  onChange = () => { },
  validator = () => true,
  required = false,
  placeholder = ""
}: InputContainerProps) {
  return (
    <InputContainer>
      <InputComponent
        name={name}
        id={name}
        value={string}
        onChange={onChange}
        validator={validator}
        required={required}
        placeholder={placeholder}
      />
      <label htmlFor={name}>{label}</label>
    </InputContainer>
  );
}
