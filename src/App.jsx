import Home from './Home.jsx';
import Models from './models.jsx';
import VideoGames from './videogames.jsx';
import Art from './art.jsx';
import MMD from './MMD.jsx';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
  <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/3d-models' element={<Models/>} />
        <Route path='/videogames' element={<VideoGames/>} />
        <Route path='/art' element={<Art/>} />
        <Route path='/mmd' element={<MMD/>} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </HashRouter>
  </>

  )
}

export default App
