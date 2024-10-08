import React from 'react';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import "./App.css";
import { HashRouter, Link, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <h1>Deo Gracias Ong</h1>
        <h3>Online - Thursday 7pm-10pm EST</h3>
        <li><Link to="/Labs">Landing Page</Link></li><br/>
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
