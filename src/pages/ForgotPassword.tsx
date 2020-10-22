import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import LogoCity from '../components/LogoCity';
import '../styles/pages/forgot-password.css';

function ForgotPassword() {
    const history = useHistory()
    const [email, setEmail] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        history.push('/redefine')
        console.log(email)
    }


    return (
        <div id="page-forgot">
            <LogoCity/>
            <aside className="area-form">
                <Link className="link-voltar" to="/">
                    <FiArrowLeft size={24} color="#15C3D6" />
                </Link>
                <form onSubmit={e => handleSubmit(e)}>
                    <legend>Esqueci a senha</legend>
                    <p>Sua redefinição de senha será enviada
                        para o e-mail cadastrado.</p>
                        <fieldset>
                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                id="email" 
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        </fieldset>
                        <button className="confirm-button" type="submit">
                            Enviar
                        </button>
                </form>
            </aside>
        </div>
        
    )
}

export default ForgotPassword;