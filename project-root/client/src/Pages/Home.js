import React from 'react';
import '../Styles/Home.css';
import cachecol from '../img/cachecol.svg';

export const Home = () => {
    return (
        <div className="home-container">
            <h1>Viriatos Scouting</h1>


            <img className="cachecol-home1" src={cachecol} alt="cachecol"/>

        </div>
    );
};
