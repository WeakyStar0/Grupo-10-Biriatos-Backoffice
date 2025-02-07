import React from "react"; 
import "../Styles/NovoJogador.css"; 
import playerimg from '../img/vector-GK.svg'; 

const NovoJogador = () => { 
    return ( 
        <div className="novo-jogador-body"> 
            <div className="novo-jogador-container"> 
                <button className="novo-jogador-back-button">Voltar</button> 
                <div className="novo-jogador-main-frame"> 
                    <div className="novo-jogador-left-frame"> 
                        <img className="novo-jogador-silhouette" src={playerimg} alt="Silhueta do jogador" /> 
                    </div> 
                    <div className="novo-jogador-divider"> 
                        <div className="novo-jogador-divider-outer"> 
                            <div className="novo-jogador-divider-border"> 
                                <div className="novo-jogador-divider-main"></div> 
                            </div> 
                        </div> 
                    </div> 
                    <div className="novo-jogador-right-frame"> 
                        <div className="novo-jogador-info"> 
                            <div className="novo-jogador-country"> 
                                <img 
                                    className="novo-jogador-flag" 
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" 
                                    alt="Bandeira de Portugal" 
                                /> 
                                <span>Portugal</span> 
                            </div> 
                            <div className="novo-jogador-gender">M ♂</div> 
                            <hr /> 
                            <div className="novo-jogador-professional">Equipa Profissional</div> 
                            <hr /> 
                            <div className="novo-jogador-age">26 anos (15/10/2006)</div> 
                            <hr /> 
                            <div className="novo-jogador-position">Guarda-redes</div> 
                            <hr /> 
                            <div className="novo-jogador-club">Académico Viseu</div> 
                            <hr /> 
                            <div className="novo-jogador-agent"> 
                                <div className="novo-jogador-agent-title">Agente</div> 
                                <div className="novo-jogador-agent-inputs"> 
                                    <input className="novo-jogador-agent-input" type="text" placeholder="Contacto" /> 
                                    <input className="novo-jogador-agent-input" type="text" placeholder="Nome" /> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
                <button className="novo-jogador-voltar-button">Voltar</button>
                {/* Footer */} 
                <div className="novo-jogador-footer"> 
                    <span className="player-name">Jogador 1</span> 
                    <div className="novo-jogador-actions">
                        <span className="novo-jogador-submitted">Submetido a 5/11/2024 por User 41398</span> 
                        <div className="novo-jogador-buttons"> 
                            <button className="novo-jogador-accept-button">Aceitar</button> 
                            <button className="novo-jogador-reject-button">Recusar</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    ); 
}; 

export default NovoJogador;
