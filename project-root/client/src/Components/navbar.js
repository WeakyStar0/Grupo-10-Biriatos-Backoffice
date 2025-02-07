import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/navbarStyle.css';
import logo from '../img/LOGO Academico_Viseu_FC.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = location.state || { role: 'Outro' }; // Pega o role do estado da localização

  const hiddenRoutes = ["/termoscondicoes", "/"]; // Rotas onde a navbar não deve aparecer

  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="btn-navbar-logo" onClick={() => navigate('/panel')} style={{ background: 'none', border: 'none' }}>
          <img className="navbar-logo" src={logo} alt="navbar-logo" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto btn-navbar1">
            <li className="nav-item">
              <a className="nav-link" href="divisoes" onClick={() => navigate('/divisoes')}>Divisões</a>
            </li>
            {role === 'Administrador' && (
              <li className="nav-item">
                <a className="nav-link" href="consultar-equipas" onClick={() => navigate('/consultar-equipas')}>Equipas</a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="consultar-relatorio" onClick={() => navigate('/consultar-relatorio')}>Relatórios</a>
            </li>
            {role === 'Administrador' && (
              <li className="nav-item">
                <a className="nav-link" href="tarefas" onClick={() => navigate('/tarefas')}>Tarefas</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;