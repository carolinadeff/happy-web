
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/success.css'

function Success() {
    return (
        <div id="page-success">
            <div className="content-wrapper">
                <div>
                    <h1>Ebaaa!</h1>
                    <p>O cadastro deu certo e foi enviado
                    ao administrador para ser aprovado.
                    Agora é só esperar :)</p>
                    <Link to="/app">Voltar para o mapa</Link>
                </div>
            </div>
        </div>
    )
}

export default Success;