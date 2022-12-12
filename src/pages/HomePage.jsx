import React, { useState, useEffect } from 'react'
import NavBar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Home from '../components/Home.jsx'
import RickMorthyList from '../components/RickMorthy-list.jsx'
import Loading from '../components/Loading.jsx'

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  const cambiarEstado = () => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },3000);
  }
useEffect(() => {
  cambiarEstado()

}, [])

  return (
    <>
      <NavBar />
      
      {/*<RickMorthyList/>*/}
      {loading ? <Loading /> : <Home /> }
      
      <Footer />
    </>
  )
}

export default HomePage