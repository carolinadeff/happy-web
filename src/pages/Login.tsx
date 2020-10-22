import React, { FormEvent, useState } from 'react';
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import LogoCity from '../components/LogoCity';
import checkIcon from '../images/check.svg'
import '../styles/pages/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrar, setLembrar] = useState(false);

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        console.log(email, senha, lembrar)
    }

    function handlecheckBox(){
        if(lembrar) {
            setLembrar(false)
        }else{
            setLembrar(true)
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
                                value={senha}
                                onChange={event => setSenha(event.target.value)}
                            />
                        </div>
                        <div className="lembrar">
                            <div>
                                <button
                                    type="button"
                                    className={lembrar ? 'ativo' : ''}
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