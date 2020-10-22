
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/delete.css'

function Delete() {
    return (
        <div id="page-delete">
            <div className="content-wrapper">
                <div>
                    <h1>Excluir</h1>
                    <p>Você tem certeza que quer
                    excluir Orf. Esperança?</p>
                    <Link to="/app">Excluir</Link>
                </div>
            </div>
        </div>
    )
}

export default Delete;