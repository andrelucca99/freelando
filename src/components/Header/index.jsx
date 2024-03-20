import styled from "@emotion/styled"
import React from "react";

import Logo from "./logo.png"

const HeaderEstilizado = styled.header`
  width: 100%;
  padding: 24px;
  background: ${({theme}) => theme.cores.primarias.a};
  color: ${({theme}) => theme.cores.branco};
  padding: ${({theme}) => theme.espacamentos.m};

  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src={Logo} alt="Logo da Freelando" />
      <button>Login</button>
    </HeaderEstilizado>
  )
}