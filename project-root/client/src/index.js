import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home.js';

import Test from './Pages/test.js';

import { ReportPage } from './Pages/ReportPage.js';
import Sobre from './Pages/Sobre.js';
import { Panel } from './Pages/Panel.js';
import CriarJogador from './Pages/CriarJogador.js';
import Clubes from './Pages/Clubes.js';
import { CriarEquipas } from './Pages/CriarEquipas.js';
import { GerirTarefas } from './Pages/gerirtarefas.js';
import TarefaCriar from './Pages/TarefaCriar.js';
import { ConsultarRelatorio } from './Pages/ConsultarRelatorio.js';
import { ConsultarEquipas } from './Pages/consultarequipas.js';
import Divisoes from './Pages/divisoes.js';
import CriarUtilizador from './Pages/CriarUtilizador.js';
import Listajogadores from './Pages/listajogadores.js';
import PerfildeJogador from './Pages/perfildejogador.js';
import  TermosCondicoes from './Pages/TermosCondicoes.js';
import  AppSite from './Pages/AppSite.js'
import { EquipaDetalhes } from './Pages/EquipaDetalhes.js';



const api = axios.create({
  baseURL: 'http://localhost:3001',
});
export default api;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'test',
        element: <Test />,
      },
      {
        path: 'about',
        element: <Sobre />,
      },
      {
        path: 'create-report',
        element: <ReportPage />
      },
      {
        path: 'panel',
        element: <Panel />,
      },
      {
        path: 'criarjogador',
        element: <CriarJogador />,
      },
      {
        path: 'clubes',
        element: <Clubes />,
      },
      {
        path: 'divisoes',
        element: <Divisoes />
      },
      {
        path: "lista-jogadores",
        element: <Listajogadores />
      },
      {
        path: 'perfildejogador',
        element: <PerfildeJogador />
      },
      {
        path: 'CriarEquipas',
        element: <CriarEquipas />,
      },
      {
        path: 'consultar-equipas',
        element: <ConsultarEquipas />,
      },
      {
        path: 'consultar-relatorio',
        element: <ConsultarRelatorio />,
      },
      {
        path: 'tarefas',
        element: <GerirTarefas />,
      },
      {
        path: 'task-create',
        element: <TarefaCriar />,
      },
      {
        path: 'criarutilizador',
        element: <CriarUtilizador />
      },
      {
        path: 'report-page/:reportId',
        element: <ReportPage />
      },  
      {
        path: 'termoscondicoes',
        element: <TermosCondicoes />
      },
      {
        path: 'AppSite',
        element: <AppSite />
      },
      {
        path:'equipa/:teamId',
        element: <EquipaDetalhes />
      }
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
