import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Detail" element={<Detail />}>
        <Route path=":id" element={<PokemonDetail />} />
      </Route>
    </Routes>
  );
}
export default App;