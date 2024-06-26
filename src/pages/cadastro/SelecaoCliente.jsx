import { Col, Row } from "react-grid-system";
import { Link as RouterLink } from "react-router-dom"

import freela from './assets/freela.png';
import cliente from './assets/cliente.png';
import { Link } from "../../components/Link";
import HeaderTitle from "../../components/HeaderTitle";
import { Tipografia } from "../../components/Tipografia";
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario";

const SelecaoCliente = () => {
  const { setPerfil } = useCadastroUsuarioContext();

  return (
    <div style={{ textAlign: 'center' }}>
      <HeaderTitle
        title="Crie seu cadastro"
        subTitle="Como podemos te ajudar?"
      />

      <Row>
        <Col md={6} sm={12}>
          <RouterLink to="interesses" onClick={() => setPerfil('cliente')}>
            <img src={cliente} alt="Foto de uma pessoa cliente" />
            <Tipografia variante="body" componente="body">Sou cliente e preciso de um freela!</Tipografia>
          </RouterLink>
        </Col>
        <Col md={6} sm={12}>
          <img src={freela} alt="Foto de uma pessoa freelancer" />
          <Tipografia variante="body" componente="body">Sou um freela e preciso de clientes!</Tipografia>
        </Col>
      </Row>
      <div>
        <Tipografia variante="body2" componente="body2">Já tem conta?</Tipografia>
        <p>
          <Link variante="secundaria">Faça login!</Link>
        </p>
      </div>
    </div>
  )
}

export default SelecaoCliente;