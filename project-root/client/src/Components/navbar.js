import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/navbarStyle.css';
import logo from '../img/LOGO Academico_Viseu_FC.svg';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="btn-navbar-logo" onClick={() => navigate('/panel')} style={{ background: 'none', border: 'none'}}>
                    <img className="navbar-logo" src={logo} alt="navbar-logo" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto btn-navbar1">
                        <li className="nav-item">
                            <a className="nav-link" href="clubes"onClick={() => navigate('/clubes')} >Clubes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="consultar-equipas"onClick={() => navigate('/consultar-equipas')}>Equipas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="consultar-relatorio"onClick={() => navigate('/consultar-relatorio')}>Relatórios</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="tarefas"onClick={() => navigate('/tarefas')}>Tarefas</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;