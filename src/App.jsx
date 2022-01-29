import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
