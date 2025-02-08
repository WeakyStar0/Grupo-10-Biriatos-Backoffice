import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/Clubes.css';

const ClubesPage = () => {
  const [search, setSearch] = useState('');
  const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();
  const { escalao } = useParams();

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch(`http://localhost:3000/teams/escalao/${escalao}`);
        const data = await response.json();
        setClubs(data);
      } catch (error) {
        console.error('Erro ao buscar clubes:', error);
      }
    };

    fetchClubs();
  }, [escalao]);

  const filteredClubs = clubs.filter((club) =>
    club.teamName.toLowerCase().includes(search.toLowerCase())
  );

  const handleBack = () => {
    window.history.back();
  };

  const goToDivisions = (clubName) => {
    navigate(`/divisoes/${encodeURIComponent(clubName)}`);
  };

  return (
    <div className="clubs-container">
      <h1 className="clubs-title">Clubes - {escalao}</h1>
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
              onClick={() => goToDivisions(club.teamName)}
              style={{ cursor: 'pointer' }}
            >
              <span className="club-name">{club.teamName}</span>
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