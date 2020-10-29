
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../services/api';
import '../styles/pages/delete.css'

interface OrphanageParams {
    id: string; 
}

function Delete() {

    const { id } = useParams<OrphanageParams>()
    const history = useHistory()
    

    async function handleDelete(){
        const response = await api.delete(`/auth/orphanages/${id}`);
        console.log(response)
        history.push('/dashboard');
    }

    return (
        <div id="page-delete">
            <div className="content-wrapper">
                <div>
                    <h1>Excluir</h1>
                    <p>Você tem certeza que deseja 
                    excluir o registro?</p>
                    <button type="button" onClick={() => handleDelete()}>Excluir</button>
                </div>
            </div>
        </div>
    )
}

export default Delete;