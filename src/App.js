import './App.css';
import Home from './pages/Home';
import SinglePokemon from './pages/SinglePokemon';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:id' element={<SinglePokemon />} />
      </Routes>
    </div>
  );
}

export default App;
