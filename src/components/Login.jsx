import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className='fondo-login wrapper bg-dark d-flex align-items-center justify-content-center w-100' >
            <div className='login rounded'>
                <h2 className='mb-3'> Login Form</h2>
                <form onSubmit={() => navigate('/home')} className='needs-validation'>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor="email" className='form-label'>Email Address</label>
                        <input type="email" className='form-control' required/>
                        <div className='invalid-feedback'>Enter you Email</div>
                    </div>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" className='form-control' required/>
                        <div className='invalid-feedback'>Enter you Password</div>
                    </div>
                    <div className='form-group form-check mb-2'>
                        <input type="checkbox" className='form-check-input' />
                        <label htmlFor="check" className='form-check-label'>Remember me</label>
                    </div>
                    <div className='form-group form-check mb-2'>
                        <Alert variant='light'>
                            Aun no tienes cuenta? 
                            <Alert.Link onClick={ () => navigate('/registro')}> click aqui</Alert.Link>.
                        </Alert>
                    </div>
                    <button className='btn btn-success w-100 mt-2 ' type='submit' >SIGN IN</button>
                </form>
            </div>
        </div>
    )
}

export default Login