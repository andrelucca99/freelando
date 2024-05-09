/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { Row } from "react-grid-system";
import { Tipografia } from "../../components/Tipografia";

const ContanierEstilizado = styled.div`
    text-align: center;
    padding-top: ${({ theme }) => theme.espacamentos.s};
`;

const Bloco = ({ title, children }) => {
  return (
    <ContanierEstilizado>
      <Tipografia componente="h2" variante="h2">{title}</Tipografia>
      <Row>{children}</Row>
    </ContanierEstilizado>
  )
}

export default Bloco;
