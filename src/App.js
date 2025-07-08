import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Encrypt from './fontend/Encrypt,js';
import Navbar from './fontend/Navbar';
import Decrypt from "./fontend/Decrypt";
import About from "./fontend/About";

function App() {
    return (
        <BrowserRouter basename="/cryptoForge">
            <Navbar />
            <Routes>
                <Route path="/" element={<Encrypt />} />
                <Route path="/decrypt" element={<Decrypt />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
