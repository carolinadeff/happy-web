import React, { FormEvent, useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { AuthContext } from '../contexts/AuthContext';

import LogoCity from '../components/LogoCity';
import checkIcon from '../images/check.svg'
import '../styles/pages/login.css';

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const { handleLogin } = useContext(AuthContext);

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        await handleLogin(email, password)
        history.push('/dashboard')
    }

    function handlecheckBox(){
        if(remember) {
            setRemember(false)
        }else{
            setRemember(true)
        }
    }


    return (
        <div id="page-login">
            <LogoCity/>
            <aside className="area-login">
                <Link className="link-voltar" to="/">
                    <FiArrowLeft size={24} color="#15C3D6" />
                </Link>
                <form onSubmit={e => handleSubmit(e)} className="login-form">
                    <legend>Fazer login</legend>
                        <fieldset>
                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                id="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="senha">Senha</label>
                            <input 
                                id="senha"
                                type="password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="lembrar">
                            <div>
                                <button
                                    type="button"
                                    className={remember ? 'ativo' : ''}
                                    onClick={() => handlecheckBox()}
                                >
                                    <img src={checkIcon} alt="check"/>
                                </button>
                                <label htmlFor="lembrar">Lembrar-me</label>                                
                            </div>
                            
                            <Link to='/forgot'>Esqueci minha senha</Link>
                        </div>
                        </fieldset>
                        <button className="confirm-button" type="submit">
                            Entrar
                        </button>
                </form>
            </aside>
        </div>
        
    )
}

export default Login;