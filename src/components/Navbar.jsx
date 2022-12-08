
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
} from 'mdb-react-ui-kit';
const NavBar = () => {
    const navigate = useNavigate();
    const [showNavText, setShowNavText] = useState(false);
    return (
        <MDBNavbar expand='lg'  bgColor='secondary'>
            <MDBContainer fluid>
                <MDBNavbarBrand onClick={() => navigate('/home')}>Proyecto Front-End</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarText'
                    aria-controls='navbarText'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavText(!showNavText)}
                >
                    
                    <MDBIcon fas icon="bars" />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavText}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={() => navigate('/home')}>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={() => navigate('/reserva')}>
                                Reservation
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={() => navigate('/about')}>About</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={() => navigate('/contact')}>Contact</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                        <Button color='primary'>Search</Button>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default NavBar