import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../pages/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../pages/cadastro/LayoutBaseCadastro";
import LayoutBase from "../pages/LayoutBase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        path: 'cadastro',
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: '',
            element: <SelecaoCliente />,
          },
          {
            path: 'cliente',
            element: <h1>Interesesses</h1>
          },
          {
            path: 'dados-pessoais',
            element: <h1>Dados pessoais</h1>
          },
          {
            path: 'concluido',
            element: <h1>Concluido</h1>
          },
        ]
      }
    ],
  },
]);