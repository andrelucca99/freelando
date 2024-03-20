import styled from "@emotion/styled"

const RodapeEstilizado = styled.footer`
  width: 100%;
  height: 172px;
  background: ${({theme}) => theme.cores.primarias.a};
  padding: ${props => props.theme.espacamentos.xl};
  color: ${props => props.theme.cores.branco};
`;

export const Rodape = () => {
  return (
    <RodapeEstilizado></RodapeEstilizado>
  )
}