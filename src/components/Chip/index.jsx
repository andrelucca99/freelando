/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const StyledSpan = styled.span`
  border-radius: 16px;
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background: ${({theme}) => theme.cores.neutras.c};
  border-color: ${({theme}) => theme.cores.neutras.a};
  padding: ${({theme}) => theme.espacamentos.xs} ${({theme}) => theme.espacamentos.s};
  margin: ${({theme}) => theme.espacamentos.xs};
  &:hover {
    color: ${({theme}) => theme.cores.primarias.b};
    border-color: ${({theme}) => theme.cores.primarias.b};
    background: ${({theme}) => theme.cores.secundarias.b};
  }
`;

const Chip = ({children}) => {
  return (
    <StyledSpan>
      {children}
    </StyledSpan>
  )
}

export default Chip;
