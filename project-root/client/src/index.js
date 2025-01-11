import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home.js';
import { ReportPage } from './Pages/ReportPage.js';
import { TasksPage } from './Pages/Tasks.js';
import Sobre from './Pages/Sobre.js';
import { Panel } from './Pages/Panel.js';
import { CriarEquipas } from './Pages/CriarEquipas.js';
import { GerirEquipas } from './Pages/GerirEquipas.js';
import { GerirTarefas } from './Pages/gerirtarefas.js';
import { AtribuirTarefa } from './Pages/atribuirtarefa.js';

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
        path: 'about',
        element: <Sobre />,
      },
      {
        path: 'report',
        element: <ReportPage />,
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
        path: 'CriarEquipas',
        element: <CriarEquipas />,
      },
      {
        path: 'GerirEquipas',
        element: <GerirEquipas />,
      },
      {
        path: 'tarefas',
        element: <GerirTarefas />,
      },
     {
        path: 'atribuirtarefa',
        element: <AtribuirTarefa />,
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
