import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/footerStyle.css';

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    {/* Logo */}
                    <div className="col-md-4 d-flex align-items-center">
                        {/* Substitua pelo seu SVG logo */}
                        <img src="/path/to/logo.svg" alt="Logo" style={{ width: '50px' }} />
                    </div>

                    {/* Sobre nós */}
                    <div className="col-md-4">
                        <h5>Sobre nós</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-text text-white">Sobre Viriatos Scouting</a></li>
                            <li><a href="#" className="footer-text text-white">Termos e Condições</a></li>
                        </ul>
                    </div>

                    {/* Contactos */}
                    <div className="col-md-4">
                        <h5>Contactos</h5>
                        <ul className="list-unstyled">
                            <li>Telefone: <a href="tel:232423268" className="footer-text text-white">232 423 268</a></li>
                            <li>Email: <a href="mailto:clube@academicodeviseu.pt" className="footer-text text-white">clube@academicodeviseu.pt</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="col-md-4">
                        <h5>Social</h5>
                        <div className="d-flex">
                            <a href="#" className="text-white me-3">
                                <img src="/path/to/facebook.svg" alt="Facebook" style={{ width: '24px' }} />
                            </a>
                            <a href="#" className="text-white">
                                <img src="/path/to/instagram.svg" alt="Instagram" style={{ width: '24px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
