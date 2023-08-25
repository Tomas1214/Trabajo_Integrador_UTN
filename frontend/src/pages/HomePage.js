import React from "react";
import { Link } from 'react-router-dom';
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main>
            <section>
                <h1>Menú</h1>
                <p>¡Mira nuestro variado menú de opciones para todos los gustos!</p>
                <div className="home-menu">
                    <Link to="/menu" className="ver">Ver</Link>
                </div>
            </section>
            <section>
                <h1>Promociones</h1>
                <p>Ofertas exclusivas para que tengas la <b>mejor experiencia</b> al <b>mejor precio</b></p>
                <div className="home-promociones">
                <Link to="/promociones" className="ver">Ver</Link>
                </div>
            </section>
            <section className="flex">
                <div className="sub-container">
                    <h2>Nosotros</h2>
                    <p>Animate a conocernos, nuestra misión y nuestra historia.</p>
                    <Link to="/nosotros" className="saber-mas">Saber más</Link>
                </div>
                <div className="sub-container">
                    <h2>Contacto</h2>
                    <p>Descubrí cómo podemos ayudarnos</p>
                    <Link to="/contacto" className="saber-mas">Saber más</Link>
                </div>
                <div className="sub-container">
                    <h2>Pedidos online</h2>
                    <p>¡Hacé tu pedido desde tu casa!</p>
                    <Link to="/pedidos" className="saber-mas">Saber más</Link>
                </div>
            </section>
        </main>
    );
}

export default HomePage;