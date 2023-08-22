import React from "react";
import '../styles/components/pages/MenuPage.css'

const MenuPage = (props) => {
    return (
        <section className="wider">
            <h2>Para pasar un momento agradable</h2>
            <div className="menu">
                <div>
                    <h3>Bebidas</h3>
                    <div className="imagenes">
                        <div>
                            <div className="imagen bebida01"></div>
                            <p>Cafés</p>
                        </div>
                        <div>
                            <div className="imagen bebida02"></div>
                            <p>Tés</p>
                        </div>
                        <div>
                            <div className="imagen bebida03"></div>
                            <p>Milkshakes</p>
                        </div>
                        <div>
                            <div className="imagen bebida04"></div>
                            <p>Jugo de naranja</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Comidas</h3>
                    <div className="imagenes">
                        <div>
                            <div className="imagen comida01"></div>
                            <p>Facturas</p>
                        </div>
                        <div>
                            <div className="imagen comida02"></div>
                            <p>Snacks</p>
                        </div>
                        <div>
                            <div className="imagen comida03"></div>
                            <p>Sandwiches</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MenuPage;