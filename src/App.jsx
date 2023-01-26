import { HashRouter, Route, Routes } from "react-router-dom";
import Pokemon from "./components/Pokemon";
import PokemonDetail from "./components/PokemonDetail";
import InputName from "./components/InputName";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./index.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<InputName />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokemon/>} />
            <Route path="/pokedex/:id" element={<PokemonDetail/>} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
