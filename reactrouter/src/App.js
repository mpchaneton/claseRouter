import './App.css';
import { Route, Routes } from "react-router-dom";
import Contacto from './componentes/Contacto';
import Inicio from './componentes/Inicio';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="contacto" element={<Contacto />}/>
      </Routes>


    </div>
  );
}

export default App;
