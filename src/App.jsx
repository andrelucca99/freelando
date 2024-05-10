import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { Estilos } from "./components/EstilosGlobais/index";
import { ProvedorTema } from "./components/ProvedorTema/index";
import { SessaoUsuarioProvider } from "./contexto/SessaoUsuario";

function App () {
  return (
    <ProvedorTema>
      <Estilos />
      <SessaoUsuarioProvider>
        <RouterProvider router={router} />
      </SessaoUsuarioProvider>
    </ProvedorTema>
  )
}

export default App;
