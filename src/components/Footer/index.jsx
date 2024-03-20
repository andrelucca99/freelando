import styled from "@emotion/styled"

export const Rodape = styled.footer`
  background: ${({theme}) => theme.cores.primarias.a};
  padding: ${props => props.theme.espacamentos.xl};
  color: ${props => props.theme.cores.branco};
`;
