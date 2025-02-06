import React from "react";
import "../Styles/perfildejogador.css";
import playerimg from '../img/vector-GK.svg';

const PerfilDeJogador = () => {
  return (
    <div className="player-page-body">
      <div className="player-page-container">
        <button className="player-back-button">Voltar</button>

        <div className="player-main-frame">
          <div className="player-left-frame">
            <img className="player-silhouette" src={playerimg} alt="Silhueta do jogador" />
          </div>

          <div className="player-divider">
            <div className="player-divider-outer">
              <div className="player-divider-border">
                <div className="player-divider-main"></div>
              </div>
            </div>
          </div>

          <div className="player-right-frame">
            <div className="player-info">
              <div className="player-country">
                <img
                  className="player-flag"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
                  alt="Bandeira de Portugal"
                />
                <span>Portugal</span>
              </div>
              <div className="player-gender">M ♂</div>
              <hr />
              <div className="player-professional">Equipa Profissional</div>
              <hr />
              <div className="player-age">26 anos (15/10/2006)</div>
              <hr />
              <div className="player-position">Guarda-redes</div>
              <hr />
              <div className="player-club">Académico Viseu</div>
              <hr />

              <div className="player-agent">
                <div className="agent-title">Agente</div>
                <div className="agent-inputs">
                  <input className="agent-input" type="text" placeholder="Contacto" />
                  <input className="agent-input" type="text" placeholder="Nome" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="player-footer">
          <span className="player-name">Jogador 1</span>
          <button className="player-manage-button">Gerir Jogador</button>
        </div>
      </div>
    </div>
  );
};

export default PerfilDeJogador;
