import React from 'react';
import '../Styles/Home.css';
import cachecol from '../img/cachecol.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate(); // Hook para navegação

    return (
        <div className="home-container">
            <div>
                <h1 className="home-tit">Biriatos Scouting</h1>
            </div>
            <img className="cachecol-home1" src={cachecol} alt="cachecol" />
            <img className="cachecol-home2" src={cachecol} alt="cachecol" />
            <button
                className="btn btn-primary mt-4"
                onClick={() => navigate('/panel')}
            >
                FDS
            </button>
            <button
                className="btn btn-primary mt-4"
                onClick={() => navigate('/CriarEquipas')}
            >
                CriarEquipas
            </button>
            <button
                className="btn btn-primary mt-4"
                onClick={() => navigate('/tarefas')}
            >
                TAREFAS
            </button>
        </div>
    );
};
