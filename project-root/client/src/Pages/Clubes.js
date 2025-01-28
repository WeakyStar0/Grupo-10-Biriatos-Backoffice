// ClubsPage.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/Clubes.css';

export const Clubes = () => {
    return (
        <div className="home-container">




        </div>
    );
};

const clubsData = [
  { name: 'Académico de Viseu', nextMatch: 'Académico de Viseu x FC Porto' },
  { name: 'Sporting CP', nextMatch: 'Sporting CP x SC Braga' },
  { name: 'FC Porto', nextMatch: 'Académico de Viseu x FC Porto' },
  { name: 'Sporting de Braga', nextMatch: 'Sporting CP x SC Braga' },
  { name: 'Vitória de Guimarães', nextMatch: 'Boavista FC x Vitória SC' },
  { name: 'Gil Vicente', nextMatch: 'Portimonense SC x Gil Vicente FC' },
  { name: 'FC Arouca', nextMatch: 'FC Vizela x FC Arouca' },
  { name: 'Boavista FC', nextMatch: 'Boavista FC x Vitória SC' },
  { name: 'FC Famalicão', nextMatch: 'FC Famalicão x Estoril Praia' }
];

const ClubsPage = () => {
  const [search, setSearch] = ('');

  const filteredClubs = clubsData.filter(club =>
    club.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="clubs-container">
      <button className="back-button" onClick={handleBack}>Voltar</button>
      <h1 className="clubs-title">Clubes</h1>
      <input
        type="text"
        placeholder="pesquisar clubes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <ul className="clubs-list">
        {filteredClubs.map((club, index) => (
          <li key={index} className="club-item">
            <span>{club.name}</span>
            <strong>Próximo jogo:</strong> {club.nextMatch}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubsPage;
