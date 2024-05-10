/* eslint-disable react/prop-types */
import http from "../http";
import { createContext, useContext } from "react";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";

const SessaoUsuarioContext = createContext({
  // eslint-disable-next-line no-unused-vars
  login: (email, senha) => null,
  logout: () => null,
  perfil: {},
});

export const useSessaoUsuarioContext = () => {
  return useContext(SessaoUsuarioContext);
}

export const SessaoUsuarioProvider = ({children}) => {
  const login = (email, senha) => {
    http.post('auth/login', {
      email,
      senha
    })
      .then(resposta => {
        ArmazenadorToken.definirTokens(
          resposta.data.access_token,
          resposta.data.refresh_token,
        )
      })
      .catch(erro => console.error(erro))
  }

  const value = {login}
  return (<SessaoUsuarioContext.Provider value={value}>
    {children}
  </SessaoUsuarioContext.Provider>)
}