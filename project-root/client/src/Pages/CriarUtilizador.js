import React from 'react';
import '../Styles/CriarUtilizador.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';
import '../Styles/gerirtarefas.css';

export const CriarUtilizador = () => {
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para processar o formulário
        const email = event.target.email.value;
        const password = event.target.password.value;
        const role = event.target.role.value;
        console.log({ email, password, role });
        // Navegar para outra página ou fazer algo com os dados
    };

    return (
        <>
            <div className="top-bar">
                <div className="top-bar-background">
                    <div className="top-bar-content">
                        <p className="top-bar-title">CRIAR JOGADOR</p>
                    </div>
                </div>
            </div>
            <div className="container flex-center bg-white relative">
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email" className="input-label">
                            E-mail
                        </label>
                        <input
                            className="input-field"
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" className="input-label">
                            Password
                        </label>
                        <input
                            className="input-field"
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="role" className="input-label">
                            Função
                        </label>
                        <select
                            className="input-field"
                            id="role"
                            name="role"
                            required
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Utilizador">Utilizador</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-button">
                        Criar
                    </button>
                </form>
            </div>
        </>
    );
}

export default CriarUtilizador;