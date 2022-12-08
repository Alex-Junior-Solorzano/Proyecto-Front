import { Routes, Route, HashRouter } from 'react-router-dom'

import Login from "./components/Login";
import Registro from "./components/Registro";
import HomePage from './pages/HomePage';
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
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
