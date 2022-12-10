import React from 'react'
import NavBar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Home from '../components/Home.jsx'
import RickMorthyList from '../components/RickMorthy-list.jsx'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Home />
      {/*<RickMorthyList/>*/}
      <Footer />
    </>
  )
}

export default HomePage