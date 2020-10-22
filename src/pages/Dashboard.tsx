import React, { useState } from "react";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { useHistory, Link } from "react-router-dom";
import { Map, Marker, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from "../utils/mapicon";
import CadastradosSelected from '../images/cadastrados-selected.svg';
import Cadastrados from '../images/cadastrados.svg';
import PendentesSelected from '../images/pendentes-selected.svg';
import Pendentes from '../images/pendentes.svg';
import Voltar from '../images/voltar.svg';
import iconeEdita from '../images/icone-edicao-orfa.svg';
import iconeDeleta from '../images/icone-delecao-orfa.svg';

import "../styles/pages/dashboard.css";

function Dashboard() {
  const { goBack } = useHistory();
  const [modo, setModo] = useState('cadastrados')

  return (
    <div id="page-dashboard">
      <aside className="dashboard-sidebar">
        <img src={mapMarkerImg} alt="Happy" />
        <div className="botoes-centrais">
          <button
            type='button'
            onClick={() => setModo('cadastrados')}
          >
            <img src={ modo === 'cadastrados' ? CadastradosSelected : Cadastrados } alt="visualizar Cadastrados"/>
          </button>
          <button
            type='button'
            onClick={() => setModo('pendentes')}
          >
            <img src={ modo === 'pendentes' ? PendentesSelected : Pendentes } alt="Visualizar Pendentes"/>
          </button>
        </div>
        <button type="button" onClick={goBack}>
          <img src={Voltar} alt="voltar"/>
        </button>
      </aside>

      <article>

        <header>
          <h1>Orfanatos Cadastrados</h1>
          <div>
            <p>2 Orfanatos</p>
            <Link to="/orphanages/create" className="create-orphanage-dasboard">
              <FiPlus size={32} color="#FFF" />
            </Link>
          </div>
        </header>

        <div className="ajuste-overflow">
          <main className="cadastrados">
          
            <div className="orphanage-item">
              <Map 
                center={[-27.2092052,-49.6401092]} 
                style={{ width: '100%', height: 280 }}
                zoom={15}
                minZoom={15}
                maxZoom={15}
                dragging={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={mapIcon} position={[-27.2092052,-49.6401092]} />
              </Map>
              <footer>
                <p>OrfanatoEsperança</p>
                { modo === 'cadastrados' ? (
                  <div className="botoes-edita-deleta">
                    <button type="button">
                      <img src={iconeEdita} alt="Edição"/>
                    </button>
                    <button type="button">
                      <img src={iconeDeleta} alt="Deleção"/>
                    </button>
                  </div>
                ) : (
                  <div className="botoes-edita-deleta">
                    <button type="button">
                      <FiArrowRight size={24} color="#12AFCB" />
                    </button>
                  </div>
                )}
              </footer>
            </div>

          </main>
        </div>
       
      </article>
    </div>
  );
}

export default Dashboard;
