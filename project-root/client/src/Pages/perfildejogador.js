import React from "react";
import "../Styles/perfildejogador.css";

const perfildejogador = () => {
  const handleBackClick = () => {
    alert("Voltando à página anterior...");
  };

  const handleManageClick = () => {
    alert("Gerindo jogador...");
  };

  return (
    <div className="player-page-body">
      <div className="player-page-container">
        <button className="player-back-button" onClick={handleBackClick}>
          Voltar
        </button>
        <div className="player-main-frame">
          <div className="player-left-frame">
            <img
              className="player-silhouette"
              src="https://via.placeholder.com/150"
              alt="Silhueta do jogador"
            />
          </div>
          <div className="player-right-frame">
            <div className="player-info">
              <div className="player-country">
                <img
                  className="player-flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Portugal.svg"
                  alt="Bandeira de Portugal"
                />
                Portugal
              </div>
              <div className="player-gender">M ♂</div>
              <div className="player-professional">Equipa Profissional</div>
              <div className="player-age">26 anos (15/10/2006)</div>
              <div className="player-position">Guarda-redes</div>
              <div className="player-club">Académico Viseu</div>
              <div className="player-agent">
                <label>Agente:</label>
                <input
                  className="player-agent-contact"
                  type="text"
                  placeholder="Contacto"
                />
                <input
                  className="player-agent-name"
                  type="text"
                  placeholder="Nome"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="player-footer">
          <span className="player-name">Jogador 1</span>
          <button className="player-manage-button" onClick={handleManageClick}>
            Gerir Jogador
          </button>
        </div>
      </div>
    </div>
  );
};

export default perfildejogador;
