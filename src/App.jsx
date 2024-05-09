import { RouterProvider } from "react-router-dom";
import { Estilos } from "./components/EstilosGlobais/index";
import { ProvedorTema } from "./components/ProvedorTema/index";
import { router } from "./router";

function App () {
  return (
    <ProvedorTema>
      <Estilos />
      <RouterProvider router={router} />
    </ProvedorTema>
  )
}

export default App;
