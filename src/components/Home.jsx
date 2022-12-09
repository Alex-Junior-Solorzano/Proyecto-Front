import React, {useEffect, useState} from 'react'
import Characters from './Characters.jsx'
import Paginacion from './Paginacion.jsx';
import axios from 'axios'
const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const inicialUrl ="https://rickandmortyapi.com/api/character/";

  const fetchCharacters = async (url) => {
    

      await axios({
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
      <div className = "container mt-5" >
        <Paginacion prev={info.prev} next = {info.next} onPrevius={onPrevius} onNext={onNext}/>
        <Characters characters = {characters} />
        <Paginacion prev={info.prev} next = {info.next} onPrevius={onPrevius} onNext={onNext}/>
      </div>
    </div>
  )
}

export default Home