import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteCard } from "../features/cards/cardSlice";
import { Link } from 'react-router-dom';

const MyCards = () => {
  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch()

  const handleDelete = (id) => {

    dispatch(deleteCard(id))
  }

  return (
    <div className=''>
    <div className=' container mt-5'>
      <header className='titulo'>
        <h1>N° Tarjetas {cards.length}</h1>
        <Link to='/create' className='button btn btn-secondary  mt-2'>Crear Tarjeta</Link>
      </header>
        <br />
      <div className='row form-Cards2'>
        {cards.map(card => (
          <div key={card.id} className='col md-4 card-character cardsWidth'>
            <div className='card'>
              <img src={card.image} className='imagen' alt="" />
              <div className='card-body'>
                <header className=''>
                  <h3 className='card-title'>{card.name}</h3>

                </header>
                <p className='form-label'>Localización:{' '}{card.location}</p>
                <p className='form-label'>{card.description}</p>
                <div className=''>
                  <Link to={`/edit/${card.id}`} className='button btn btn-primary w-100 mt-2'>Edit</Link>
                  <button className='button btn btn-danger w-100 mt-2' onClick={() => handleDelete(card.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default MyCards