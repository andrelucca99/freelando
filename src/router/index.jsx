import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../pages/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../pages/cadastro/LayoutBaseCadastro";
import LayoutBase from "../pages/LayoutBase";
import Interesses from "../pages/cadastro/Interesses";
import DadosPessoais from "../pages/cadastro/DadosPessoais";
import Concluido from "../pages/cadastro/Concluido";
import PaginaInicial from "../pages/PaginaInicial";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutBase />,
    ErrorBoundary: NotFound,
    children: [
      {
        path: '',
        element: <PaginaInicial />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'cadastro',
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: '',
            element: <SelecaoCliente />,
          },
          {
            path: 'interesses',
            element: <Interesses />
          },
          {
            path: 'dados-pessoais',
            element: <DadosPessoais />
          },
          {
            path: 'concluido',
            element: <Concluido />
          },
        ]
      },
      {
        path: 'area-logada',
        children: [
          {
            path: 'perfil',
            element: <Perfil />
          }
        ]
      }
    ],
  },
]);