import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import {Navigate, Routes, Route } from 'react-router-dom';
import TOC from "./TOC";
export default function Labs() {
    return (
        <div id="wd-labs">
            <h1>Deo Gracias Ong</h1>
            <h3>Online - Thursday 7pm-10pm EST</h3>
            <h1>Labs</h1>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1/>} />
                <Route path="Lab2" element={<Lab2/>} />
                <Route path="Lab3" element={<Lab3/>} />
            </Routes>
        </div>
    );
}