import { Routes, Route, HashRouter } from 'react-router-dom'

import Login from "./components/Login";
import Registro from "./components/Registro";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ReservaPage from './pages/ReservaPage';
import './styles/styles.css'

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Routes >
          <Route path='/' element = {<Login />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/registro' element = {<Registro />} />
          <Route path='/home' element = {<HomePage />} />
          <Route path='/about' element = {<AboutPage />} />
          <Route path='/contact' element = {<ContactPage />} />
          <Route path='/reserva' element = {<ReservaPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
