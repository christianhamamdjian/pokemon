import './App.css';
import Home from './pages/Home';
import SinglePokemon from './pages/SinglePokemon';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon/:id' element={<SinglePokemon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
