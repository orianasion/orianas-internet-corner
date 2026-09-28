import Home from './Home.jsx';
import Models from './models.jsx';
import Videogames from './videogames.jsx';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
  <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/3d-models' element={<Models/>} />
        <Route path='/videogames' element={<Videogames/>} />
        <Route path='/art' element={<Models/>} />
        <Route path='/mmd' element={<Models/>} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </HashRouter>
  </>

  )
}

export default App
