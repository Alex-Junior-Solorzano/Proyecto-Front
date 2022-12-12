import React from 'react'
import { Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Loading = () => {
    return (
        <div className='divPadre'>
            <div className='divHijo'>
                <Spinner color='dark' />
            </div>
        </div>
    )
}

export default Loading