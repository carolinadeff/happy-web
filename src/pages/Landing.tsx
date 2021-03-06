import React from "react";
import { Link } from 'react-router-dom'
import '../styles/pages/landing.css'

import { FiArrowRight } from 'react-icons/fi'

import logoImg from '../images/logo.svg' 
// eslint-disable-next-line
function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">

        <div className="logo-location">
          <img src={logoImg} alt="Happy" />
          <div className="location">
            <strong>Porto Alegre</strong>
            <span>Rio Grande do Sul</span>
          </div>
        </div>
        
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Link to="/login" className="enter-login">
          Acesso restrito
        </Link>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;