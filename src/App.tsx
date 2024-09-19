import React from 'react';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import "./App.css";
import { HashRouter, Link, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <h1> Deo Gracias Ong</h1>
        <li><Link to="/Kanbas">Kanbas</Link></li>
        <li><Link to="/Labs">Labs</Link></li>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>

  );
}
export default App;
