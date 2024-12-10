import React from 'react';
import '../Styles/Home.css';
import cachecol from '../img/cachecol.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Home = () => {
    return (
        <div className="home-container">

            <div className=''><h className='home-tit'>Viriatos Scouting</h></div>


            <img className="cachecol-home1" src={cachecol} alt="cachecol" />
            <img className="cachecol-home2" src={cachecol} alt="cachecol" />

        </div>
    );
};