import React, { useState } from 'react';
import '../Styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

const HoverCard = () => {
  return (
    <div className="home-card">
      <div className="home-first-content">
        <span>App Viriatos Scouting</span>
      </div>
      <a href="https://weakystar0.github.io/Grupo-10-Biriatos-Webpage/index.html" target="_blank" rel="noopener noreferrer" className="custom-link">
        <div className="home-second-content">
          <span>Clique<br />aqui</span>
        </div>
      </a>
    </div>
  );
};

export const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const { role } = data.user;
        navigate('/panel', { state: { role, fullName: data.user.fullName } });
      } else {
        alert(data.error || 'Erro ao fazer login');
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor');
    }
  };

  return (
    <div className="auth-container">
      <div className="bg-elements">
        <div className="bg-layer dark"></div>
        <div className="bg-layer light"></div>
        <div className="bg-layer dark-inner"></div>
      </div>
      <div className="auth-header">
        <img src="/LOGO Academico_Viseu_FC_black.svg" alt="Logo" className="brand-logo" />
        <h1 className="brand-title">Viriatos Scouting</h1>
      </div>
      <div className="auth-content">
        <h2 className="auth-title">LOGIN</h2>
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="auth-group">
            <label>EMAIL</label>
            <input type="text" className="auth-input" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="auth-group">
            <label>PASSWORD</label>
            <input type="password" className="auth-input" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <p className="terms-link" onClick={() => navigate('/termoscondicoes')}>Termos e Condições</p>
          <button type="submit" className="auth-button">LOGIN</button>
        </form>
      </div>
      <HoverCard />
    </div>
  );
};