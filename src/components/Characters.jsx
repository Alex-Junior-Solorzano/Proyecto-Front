import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Characters = ({ characters = [] }) => {

    const navigate = useNavigate();

    return (
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className='col md-4 card-character'>
                    <div className='card ' >
                        <img src={item.image} alt="" />
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <hr />
                            <Button className='button btn btn-success w-100 mt-2' color='prymary' onClick={()=>navigate('/detalle')}>Ver mas</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Characters