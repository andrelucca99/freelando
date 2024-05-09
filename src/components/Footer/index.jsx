import styled from "@emotion/styled"

export const Rodape = styled.footer`
  background: ${({theme}) => theme.cores.primarias.a};
  padding: ${({theme}) => theme.espacamentos.xl};
  margin-top: ${({theme}) => theme.espacamentos.xl};
  color: ${({theme}) => theme.cores.branco};
`;
