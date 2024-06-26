/* eslint-disable react/prop-types */
import styled from "@emotion/styled"

const BotaoPrimarioEstilizado = styled.button`
  background: ${({theme}) => theme.cores.primarias.b};
  color: ${({theme}) => theme.cores.branco};
  border-radius: ${({theme}) => theme.espacamentos.s};
  padding: ${({theme}) => theme.espacamentos.xs} ${({theme}) => theme.espacamentos.s};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border: none;
  &:hover {
    background: ${({theme}) => theme.cores.dark.b};
  }
  &:focus {
    outline-color: ${({theme}) => theme.cores.dark.b};
  }
`;

const BotaoSecundarioEstilizado = styled.button`
    background: transparent;
    color: ${props => props.theme.cores.primarias.b};
    border: 2px solid ${props => props.theme.cores.primarias.b};
    border-radius: ${props => props.theme.espacamentos.s};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    &:hover {
        border-color: ${props => props.theme.cores.dark.b};
        color: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.cores.focus};
    }
`;

export const Botao = ({ children, variante = 'primaria' }) => {
  if (variante === 'primaria') {
    return <BotaoPrimarioEstilizado>{children}</BotaoPrimarioEstilizado>
  }
  
  return <BotaoSecundarioEstilizado>{children}</BotaoSecundarioEstilizado>
}