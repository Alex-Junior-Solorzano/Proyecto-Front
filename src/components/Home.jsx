import React, { useEffect, useState } from 'react';
import Characters from './Characters.jsx';
import Paginacion from './Paginacion.jsx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [busqueda, setBusqueda] = useState("")

  const inicialUrl = "https://rickandmortyapi.com/api/character/";

  const fetchCharacters = async (url) => {


    await Axios({
      url: url,
    })
      .then((response) => {
        setTimeout(() => {
          setCharacters(response.data.results);
          setInfo(response.data.info);
        }, 100);
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    setBusqueda(event.target.value)

  }

  let resultt = []
  if (!busqueda) {
    resultt = characters
  } else {
    resultt = characters.filter((dato) =>
      dato.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
    );
  }

  const onPrevius = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(inicialUrl)
  }, [])

  return (
    <div>
      <div className="container mt-5" >
        <Form className="form-search d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 input-search"
            aria-label="Search"
            onChange={handleInputChange}
            
          />
          <Button className='button-search' color='secondary'>Search</Button>
        </Form>
        <h1 className='titulo'>Lista de personajes</h1>
        
        <Characters characters={resultt} />
        <Paginacion prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext} />
      </div>
    </div>
  )
}

export default Home