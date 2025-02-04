import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/gerirtarefas.css';

export const ConsultarEquipas = () => {
    const Equipas = [
        { id: 1, name: 'Relatório 1', Escalão: 'Sub', Submissor: 'Carlos Cunha' , Data: 2025},
        
        
        
    ];
    const navigate = useNavigate();
    
    const openEquipa = (id) => {
        navigate(`/consultar-equipa`);  
    };
    return (
        <div className="home-container">
            <div className="header">
                <div className="inner-rectangle">
                    <div className="core-rectangle">
                        <p className="core-text">EQUIPAS</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="task-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Escalão</th>
                                <th>Submissor</th>
                                <th>Data</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {Equipas.map((Equipas) => (
                                <tr
                                    key={Equipas.id}
                                    onClick={() => openEquipa(Equipas.id)} 
                                    style={{ cursor: 'pointer' }} 
                                >
                                    <td>{Equipas.name}</td>
                                    <td>{Equipas.Escalão}</td>
                                    <td>{Equipas.Submissor}</td>
                                    <td>{Equipas.Data}</td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
