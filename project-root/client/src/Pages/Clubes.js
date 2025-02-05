import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/Clubes.css';

const clubsData = [
  { name: 'Académico de Viseu', nextMatch: 'Académico de Viseu x FC Porto' },
  { name: 'Sporting CP', nextMatch: 'Sporting CP x SC Braga' },
  { name: 'FC Porto', nextMatch: 'Académico de Viseu x FC Porto' },
  { name: 'Sporting de Braga', nextMatch: 'Sporting CP x SC Braga' },
  { name: 'Vitória de Guimarães', nextMatch: 'Boavista FC x Vitória SC' },
  { name: 'Gil Vicente', nextMatch: 'Portimonense SC x Gil Vicente FC' },
  { name: 'FC Arouca', nextMatch: 'FC Vizela x FC Arouca' },
  { name: 'Boavista FC', nextMatch: 'Boavista FC x Vitória SC' },
  { name: 'FC Famalicão', nextMatch: 'FC Famalicão x Estoril Praia' },
];

const ClubesPage = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredClubs = clubsData.filter((club) =>
    club.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBack = () => {
    window.history.back();
  };

  const goToDivisions = (clubName) => {
    navigate(`/divisoes/${encodeURIComponent(clubName)}`);
  };

  return (
    <div className="clubs-container">
      <button className="btn btn-primary back-button" onClick={handleBack}>
        Voltar
      </button>
      <h1 className="clubs-title">Clubes</h1>
      <input
        type="text"
        placeholder="Pesquisar clubes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control search-bar"
      />
      <ul className="clubs-list list-group mt-3">
        {filteredClubs.length > 0 ? (
          filteredClubs.map((club, index) => (
            <li
              key={index}
              className="list-group-item club-item"
              onClick={() => goToDivisions(club.name)}
              style={{ cursor: 'pointer' }}
            >
              <span className="club-name">{club.name}</span>
              <span className="next-match"><strong>Próximo jogo:</strong></span>
              <span className="match-details">{club.nextMatch}</span>
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">
            Nenhum clube encontrado.
          </li>
        )}
      </ul>
    </div>
  );
};

export default ClubesPage;
