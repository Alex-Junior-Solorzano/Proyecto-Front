import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCard, editCard } from "../features/cards/cardSlice";
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const CardForm = () => {

    const cards = useSelector(state => state.cards)
    const [card, setCards] = useState({
        name: '',
        location: '',
        description: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const handleChange = (e) => {
        setCards({
            ...card,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (params.id) {
            dispatch(editCard(card))
        } else {
            dispatch(addCard({
                ...card,
                id: uuid(),
            }))
        }
        navigate('/cards')
    }

    useEffect(() => {
        if (params.id) {
            setCards(cards.find(card => card.id === params.id))
        }
    }, [params.id, cards])

    return (
        <div className='divPadre'>
            <div className='divHijo2'>
                <form onSubmit={handleSubmit} className='login rounded'>
                    <div className='form-group  mb-2'>
                        <label htmlFor='title' className='form-label'>Nombre:</label>
                        <input
                            type='text'
                            placeholder='Name'
                            name='name'
                            onChange={handleChange}
                            value={card.name}
                            className='form-control'
                            required
                        />
                    </div>
                    <div className='form-group  mb-2'>
                        <label htmlFor='title' className='form-label'>URL Imagen:</label>
                        <input
                            type='text'
                            placeholder='Imagen'
                            name='image'
                            onChange={handleChange}
                            value={card.image}
                            className='form-control'
                            required
                        />
                    </div>
                    <div className='form-group  mb-2'>
                        <label htmlFor='description' className='form-label'>Localización:</label>
                        <input
                            type='text'
                            placeholder='Location'
                            name='location'
                            onChange={handleChange}
                            value={card.location}
                            className='form-control'
                            required
                        />
                    </div>
                    <div className='form-group  mb-2'>
                        <label htmlFor='description' className='form-label'>Description:</label>
                        <textarea
                            name='description'
                            placeholder='Description'
                            onChange={handleChange}
                            value={card.description}
                            className='form-control'
                            required
                        ></textarea>
                    </div>
                    <button className='btn btn-success w-100 mt-2'>Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default CardForm