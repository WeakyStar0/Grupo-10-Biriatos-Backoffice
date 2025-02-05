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
import { TasksPage } from './Pages/Tasks.js';
import Sobre from './Pages/Sobre.js';
import { Panel } from './Pages/Panel.js';
import CriarJogador from './Pages/CriarJogador.js';
import Clubes from './Pages/Clubes.js';
import { CriarEquipas } from './Pages/CriarEquipas.js';
import { GerirEquipas } from './Pages/GerirEquipas.js';
import { GerirTarefas } from './Pages/gerirtarefas.js';
import { AtribuirTarefa } from './Pages/atribuirtarefa.js';
import TarefaCriar from './Pages/TarefaCriar.js';
import { ConsultarRelatorio } from './Pages/ConsultarRelatorio.js';
import { ConsultarEquipas } from './Pages/consultarequipas.js';
import Divisoes from './Pages/divisoes.js';
import CriarUtilizador from './Pages/CriarUtilizador.js';
import Listajogadores from './Pages/listajogadores.js';
import PerfildeJogador from './Pages/perfildejogador.js';



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
        path: 'tasks',
        element: <TasksPage />,
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
        path: 'CriarEquipas',
        element: <CriarEquipas />,
      },
      {
        path: 'consultarequipas',
        element: <ConsultarEquipas />,
      },
      {
        path: 'tarefas',
        element: <GerirTarefas />,
      },
      {
        path: 'atribuirtarefa',
        element: <AtribuirTarefa />,
      },
      {
        path: 'task-create',
        element: <TarefaCriar />,
      },
      {
        path: 'consultar-relatorio',
        element: <ConsultarRelatorio />,
      },
      {
        path: 'consultar-equipas',
        element: <ConsultarEquipas />,
      },
      {
        path: 'divisoes',
        element: <Divisoes />
      },
      {
        path: 'criarutilizador',
        element: <CriarUtilizador />
      },
      {
        path: "lista-jogadores",
        element: <Listajogadores />
      },
      {
        path: 'perfildejogador',
        element: <PerfildeJogador />
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
