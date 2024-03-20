import styled from "@emotion/styled";

const DivEstilizada = styled.div`
  padding: ${({theme}) => theme.espacamentos.l};
  background: ${({theme}) => theme.cores.secundarias.a};
  border: 1px solid;
  border-color: ${({theme}) => theme.cores.primarias.a};
  border-radius: ${({theme}) => theme.espacamentos.s};
`;

export const Card = ({ children }) => {
  return (<DivEstilizada>
    {children}
  </DivEstilizada>)
}