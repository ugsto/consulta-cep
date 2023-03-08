import { theme } from "@/styles/theme";
import axios, { AxiosResponse } from "axios";
import React from "react";
import styled from "styled-components";
import { Button } from "./Form/Button";
import { Form } from "./Form/Form";
import { Input, InputEvent } from "./Form/Input";
import { Row } from "./Form/Row";
import { TextInput } from "./Form/TextInput";
import { Loading } from "./Loading";

const MainContainer = styled.main`
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 20px;
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

interface CepApiResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface CepApiError {
  erro: boolean;
}

export function Main() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [neighborhood, setNeighborhood] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isCepValid, setIsCepValid] = React.useState(false);

  async function cepHandler(event: InputEvent) {
    const newValue = event.target.value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d)/, "$1-$2");

    setCep(newValue);

    if (/^\d{5}-\d{3}$/.test(newValue)) {
      setLoading(true);

      try {
        const response: AxiosResponse<CepApiResponse | CepApiError> =
          await axios.get(`https://viacep.com.br/ws/${newValue}/json/`);

        if ((response.data as CepApiError).erro) {
          setIsCepValid(false);
        }

        [
          [setAddress, (response.data as CepApiResponse).logradouro],
          [setNeighborhood, (response.data as CepApiResponse).bairro],
          [setCity, (response.data as CepApiResponse).localidade],
          [setState, (response.data as CepApiResponse).uf]
        ].forEach(([setFunction, value]) => {
          (setFunction as React.Dispatch<React.SetStateAction<string>>)(
            value as string
          );
        });
      } catch (error) {
        setIsCepValid(false);
      }

      setLoading(false);
    }
  }

  function cepValidator(value: string) {
    return isCepValid && /^\d{5}-\d{3}$/.test(value);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setAddress("");
    setNumber("");
    setNeighborhood("");
    setCity("");
    setState("");
    setCep("");
  }

  return (
    <MainContainer>
      <Loading loading={loading}>
        <Title>Cadastro de Alunos</Title>
        <Form>
          <Row>
            <Input
              label="Nome"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              InputComponent={TextInput}
              required={true}
            />
            <Input
              label="Email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              InputComponent={TextInput}
              required={true}
            />
          </Row>
          <Row>
            <Input
              label="CEP"
              name="cep"
              value={cep}
              onChange={cepHandler}
              validator={cepValidator}
              InputComponent={TextInput}
              required={true}
            />
            <Input
              label="Endereço"
              name="endereco"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              InputComponent={TextInput}
              required={true}
            />
            <Input
              label="Número"
              name="numero"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
              InputComponent={TextInput}
              required={true}
            />
          </Row>
          <Row>
            <Input
              label="Bairro"
              name="bairro"
              value={neighborhood}
              onChange={(event) => setNeighborhood(event.target.value)}
              InputComponent={TextInput}
              required={true}
            />
            <Input
              label="Cidade"
              name="cidade"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              InputComponent={TextInput}
              required={true}
            />
            <Input
              label="Estado"
              name="estado"
              value={state}
              onChange={(event) => setState(event.target.value)}
              InputComponent={TextInput}
              required={true}
            />
          </Row>
          <Row>
            <Button color={theme.colors.primary}>Salvar</Button>
            <Button color={theme.colors.secondary} onClick={clearForm}>
              Limpar
            </Button>
          </Row>
        </Form>
      </Loading>
    </MainContainer>
  );
}
