import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "react-grid-system";

import { Botao } from "../../components/Button";
import HeaderTitle from "../../components/HeaderTitle";
import GrupoRadio from "../../components/RadioButton/GrupoRadio";
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario";

const opcoes = [
  {
      valor: 1,
      label: 'TI e Programação',
  },
  {
      valor: 2,
      label: 'Design e Multimídia',
  },
  {
      valor: 3,
      label: 'Revisão',
  },
  {
      valor: 4,
      label: 'Tradução',
  },
  {
      valor: 5,
      label: 'Transcrição',
  },
  {
      valor: 6,
      label: 'Marketing',
  },
]

const Interesses = () => {
  const { usuario, setInteresse, possoSelecionarInteresse } = useCadastroUsuarioContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!possoSelecionarInteresse()) {
      navigate('/cadastro');
    }
  }, [navigate, possoSelecionarInteresse]);

  return (
    <div style={{ textAlign: 'center' }}>
      <HeaderTitle
        title="Crie seu cadastro"
        subTitle="Qual a área de interesse?"
      />

      <GrupoRadio opcoes={opcoes} valor={usuario.interesse} onChange={setInteresse} />

      <Row>
        <Col lg={6} md={6} sm={6}>
          <Link to="/cadastro">
            <Botao variante="secundaria">Anterior</Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: 'right' }}>
            <Link to="/cadastro/dados-pessoais">
              <Botao>Próxima</Botao>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Interesses;