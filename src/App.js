import { Card } from "./components/Card";
import { Estilos } from "./components/EstilosGlobais";
import { Cabecalho } from "./components/Header";
import { ProvedorTema } from "./components/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
