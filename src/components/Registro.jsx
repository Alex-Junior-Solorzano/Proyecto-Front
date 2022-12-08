import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const navigate = useNavigate();

    return (
        <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100' >
            <div className='login rounded'>
                <h2 className='mb-3'> Sign Up Form</h2>
                <form action="" className='needs-validation'>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor="email" className='form-label'>Email Address</label>
                        <input type="email" className='form-control' required />
                        <div className='invalid-feedback'>Enter you Email</div>
                    </div>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" className='form-control' required />
                        <div className='invalid-feedback'>Enter you Password</div>
                    </div>
                    <div className='form-group form-check mb-2'>
                        <Alert variant='light'>
                            Ya tienes una cuenta? 
                            <Alert.Link onClick={ () => navigate('/login')}> click aqui</Alert.Link>.
                        </Alert>
                    </div>
                    <button className='btn btn-success w-100 mt-2' type='submit' onClick={ () => navigate('/login')} >SIGN UP</button>
                </form>
            </div>
        </div>
    )
}

export default Registro