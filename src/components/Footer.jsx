import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left footerCont'>
      <div className=' footer1 text-center text-dark p-3' >
        &copy; {new Date().getFullYear()}
        <a className=' a1 text-dark' href='https://krugercorp.com'>
          {' '}Kruger Corp.{' '}
        </a>
        Transforming Enterprises, Boosting Lives.
      </div>
    </MDBFooter>
  );
}

export default Footer