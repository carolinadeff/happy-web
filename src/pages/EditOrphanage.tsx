import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus } from "react-icons/fi";

import '../styles/pages/create-orphanage.css';
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapicon";
import api from "../services/api";
import { useHistory, useParams } from "react-router-dom";

interface OrphanageParams {
  id: string; 
}

interface Image {
  id: number;
  url: string;
}

export default function EditOrphanage() {
  const history = useHistory()

  const params = useParams<OrphanageParams>()

  const [position, setPosition] = useState({latitude: 0, longitude: 0 })
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([])
  const [oldImages, setOldImages] = useState<string[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])


  useEffect( () => {

    api.get(`orphanages/${params.id}`)
      .then(response => response.data)
      .then(orphanage => {
        setPosition({ latitude: orphanage.latitude, longitude: orphanage.longitude });
        setName(orphanage.name);
        setAbout(orphanage.about);
        setInstructions(orphanage.instructions);
        setOpeningHours(orphanage.opening_hours);
        setOpenOnWeekends(orphanage.open_on_weekend);
        setOldImages(orphanage.images);
        const urlImages = orphanage.images.map((image: { url: string; }) => image.url)
        setPreviewImages(urlImages);  
      })

  }, [params.id])


  function handleMapClick(event: LeafletMouseEvent){
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    })
  }

  function handleSelectedImages(event: ChangeEvent<HTMLInputElement>) {
    if(event.target.files) {
      const selectedImages = Array.from(event.target.files)
      setImages(selectedImages);
      const selectedImagesPreview = selectedImages.map(image => {
        return URL.createObjectURL(image)
      })
      const allImages = previewImages.concat(selectedImagesPreview)
      setPreviewImages(allImages)
    }
    const oldKeptImages = oldImages.filter(image => previewImages.includes(JSON.parse(image).url))
    setOldImages(oldKeptImages)
  }

  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    data.append('old_images', String(oldImages));
    images.forEach(image => {
      data.append('images', image)
    })

    await api.put(`/auth/orphanages/${params.id}`, data)

    history.push('/success');

  }

  return (
    <div id="page-create-orphanage">
      <Sidebar/>
      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[position.latitude, position.longitude]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 
                && <Marker interactive={false} icon={mapIcon} position={[position.latitude,position.longitude]} />
              }
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input 
                id="name" 
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea
                id="name" 
                maxLength={300} 
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">

                {previewImages.map(image => {
                  return (
                    <img key={image} src={image} alt={name} />
                  )
                })}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input multiple onChange={handleSelectedImages} type="file" id="image[]" />

            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea 
                id="instructions" 
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de Funcionamento</label>
              <input 
                id="opening_hours" 
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button 
                  type="button" 
                  className={ open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button 
                  type="button"
                  className={ !open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
