import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/Clubes.css';

const clubsData = [
  { name: 'Académico de Viseu' },
  { name: 'Sporting CP' },
  { name: 'FC Porto' },
  { name: 'Sporting de Braga' },
  { name: 'Vitória de Guimarães' },
  { name: 'Gil Vicente' },
  { name: 'FC Arouca' },
  { name: 'Boavista FC' },
  { name: 'FC Famalicão' },
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
