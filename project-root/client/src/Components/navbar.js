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
                <button className="btn-navbar-logo" onClick={() => navigate('/panel')} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img src={logo} alt="Logo" style={{ width: '4%' }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto btn-navbar1">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;