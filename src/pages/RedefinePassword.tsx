import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LogoCity from '../components/LogoCity';
import '../styles/pages/redefine-password.css';
import eyeOff from '../images/eye-off.svg';
import eye from '../images/eye.svg';


function RedefinePassword() {
    const history = useHistory()
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [visible, setVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        history.push('/login')
        console.log(novaSenha, confirmaSenha)
    }

    function handleToggleVisible(v: Boolean, s: Function){
        if(v) { s(false) } else { s(true) }
    }


    return (
        <div id="page-redefine">
            <LogoCity/>
            <aside className="area-form">
                <form onSubmit={e => handleSubmit(e)}>
                    <legend>Redefinição de senha</legend>
                    <p>Escolha uma nova senha para você acessar o dashboard do Happy.</p>
                        <fieldset>
                        <div className="input-block">
                            <div className="label-eye">
                                <label htmlFor="senha">Nova Senha</label>
                                <button 
                                    className="senha-visivel"
                                    type="button"
                                    onClick={(event: any) => handleToggleVisible(visible, setVisible)}
                                >
                                    <img src={visible ? eye : eyeOff } alt="Visibilidade senha"/>
                                </button>
                            </div>
                            <input 
                                type={ visible ? "password" : "text" }
                                value={novaSenha}
                                onChange={event => setNovaSenha(event.target.value)}
                            />
                        </div>
                        <div className="input-block">
                        <div className="label-eye">
                            <label htmlFor="confirma-senha">Repetir Senha</label>    
                                <button 
                                    className="senha-visivel"
                                    type="button"
                                    onClick={(event: any) => handleToggleVisible(confirmVisible, setConfirmVisible)}
                                >
                                    <img src={confirmVisible ? eye : eyeOff } alt="Visibilidade senha"/>
                                </button>
                            </div>
                            <input 
                                type={ confirmVisible ? "password" : "text" }
                                value={confirmaSenha}
                                onChange={event => setConfirmaSenha(event.target.value)}
                            />
                        </div>
                        </fieldset>
                        <button className="confirm-button" type="submit">
                            Redefinir
                        </button>
                </form>
            </aside>
        </div>
        
    )
}

export default RedefinePassword;