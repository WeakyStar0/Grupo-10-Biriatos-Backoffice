import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/footerStyle.css';
import logo from '../img/LOGO Academico_Viseu_FC.svg';
import logoBlack from '../img/LOGO Academico_Viseu_FC_black.svg';
import facebookLogo from '../img/facebook-logo.svg';
import instagramLogo from '../img/instagram-logo.svg';

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
            <img src={logoBlack} alt="Background" className="footer-background-image" />

                <div className="d-flex justify-content-between align-items-top" style={{ paddingTop: '10px' , width: '80%' }} >
                    {/* Logo */}
                    <div className="d-flex align-items-center">
                        <img src={logo} alt="Logo" style={{ width: '150px' }} />
                    </div>

                    {/* Sobre nós */}
                    <div>
                        <h5 className='fs-5'>Sobre nós</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#" className="footer-text text-white fs-6 footer-anim">Sobre Viriatos Scouting</a></li>
                            <li><a href="#" className="footer-text text-white fs-6 footer-anim">Termos e Condições</a></li>
                        </ul>
                    </div>

                    {/* Contactos */}
                    <div>
                        <h5 className='fs-5'>Contactos</h5>
                        <ul className="list-unstyled mb-0">
                            <li>Telefone: <a href="tel:232423268" className="footer-text text-white fs-6 footer-anim">232 423 268</a></li>
                            <li>Email: <a href="mailto:clube@academicodeviseu.pt" className="footer-text text-white fs-6 footer-anim">clube@academicodeviseu.pt</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h5 className='fs-5'>Redes Sociais</h5>
                        <div className="d-flex">
                            <a href="https://www.facebook.com/AcademicodeViseu" target="_blank" rel="noopener noreferrer" className="text-white me-3 footer-anim" >
                                <img src={facebookLogo} alt="Facebook" style={{ width: '24px' }} />
                            </a>
                            <a href="https://www.instagram.com/academicodeviseufc/" target="_blank" rel="noopener noreferrer" className="text-white footer-anim">
                                <img src={instagramLogo} alt="Instagram" style={{ width: '24px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
