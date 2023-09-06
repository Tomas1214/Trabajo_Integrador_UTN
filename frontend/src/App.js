import { Browser, Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';


import Header from './components/layout/Header'; 
import Nav from './components/layout/Nav'; 
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import PromocionesPage from './pages/PromocionesPage';
import NosotrosPage from './pages/NosotrosPage';
import PedidosPage from './pages/PedidosPage';
import ContactoPage from './pages/ContactoPage';




function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="promociones" element={<PromocionesPage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="pedidos" element={<PedidosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;