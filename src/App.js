import { Card } from "./components/Card";
import { Estilos } from "./components/EstilosGlobais";
import { Cabecalho } from "./components/Header";
import { ProvedorTema } from "./components/ProvedorTema";
import { Tipografia } from "./components/Tipografia";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Card>
        <Tipografia variante="h1" componente="h1">Freelando</Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
      </Card>
    </ProvedorTema>
  );
}

export default App;
