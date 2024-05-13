/* eslint-disable react/prop-types */
import http from "../http";
import { createContext, useContext, useState } from "react";
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
  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(!!ArmazenadorToken.accessToken);
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
        setUsuarioEstaLogado(true);
      })
      .catch(erro => console.error(erro))
  }

  const logout = () => {
    ArmazenadorToken.efetuarLogout();
    setUsuarioEstaLogado(false);
  }

  const value = {
    login,
    logout,
    usuarioEstaLogado,
  }
  return (<SessaoUsuarioContext.Provider value={value}>
    {children}
  </SessaoUsuarioContext.Provider>)
}