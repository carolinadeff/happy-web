import * as React from 'react';
import LogoMaior from '../images/LogoMaior.svg';
import '../styles/components/LogoCity.css'

function LogoCity() {
    return (
        <div id="logo-maior">
            <div className="content-wrapper">
                <img src={LogoMaior} alt="logo"/>
                <div>
                    <strong>PortoAlegre</strong>
                    <p>Rio Grande do Sul</p>
                </div>
            </div>
        </div>
        
    )
}

export default LogoCity;