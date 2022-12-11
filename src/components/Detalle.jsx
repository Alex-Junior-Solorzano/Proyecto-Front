import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Detalle = () => {
  const [personaje, setPersonaje] = useState({
    id: "",
    nombre: "",
    descripcion: "",
    imagen: "carga",
    tipo: "",
    evolucion: "",
    peso: "",
    altura: "",
  });
  const navigate = useNavigate()
  const params = useParams();

  const loadCharacter = async (id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await res.json();
    setPersonaje({
      id: data.id,
      nombre: data.name,
      status: data.status,
      image: data.image,
      species: data.species,
      origin: data.origin.name,
      location: data.location.name,
    })
  }

  useEffect(() => {
    if (params.id) {
      loadCharacter(params.id)
    }
  }, [params.id])

  return (
    <div>
      
    <div className='divPadre container mt-5 d-flex'>
      <div className='divHijo'>

        <div className=''>
        <h1 className='titulo'>Detalles del personaje</h1>
          <div className='card' >
            <img src={personaje.image} alt="" />
            <div className=' card-body'>
              <h5 className='card-title'>{personaje.nombre}</h5>
              <hr />
              <p>Especie: {personaje.species}</p>
              <p>Localizacion: {personaje.location}</p>
              <p>Estatus: {personaje.status}</p>
              <p>Origen: {personaje.origin}</p>
              <hr />
              <Button className='button btn btn-success w-100 mt-2' color='prymary' onClick={() => navigate('/favorites')}>Añadir a  Favoritos</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Detalle