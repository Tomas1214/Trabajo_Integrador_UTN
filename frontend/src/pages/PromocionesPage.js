import React from "react";
import '../styles/components/pages/PromocionesPage.css'

const PromocionesPage = (props) => {
    return (
        <section className="promos wider">
            <h2>Nuestras mejores recomendaciones, ¡A precio único!</h2>
            <div className="imagenes">
                <div>
                    <h3>Café con torta</h3>
                    <div className="imagen promo01"></div>
                </div>
                <div>
                    <h3>Té con alfajores</h3>
                    <div className="imagen promo02"></div>
                </div>
                <div>
                    <h3>Naranja con croissants</h3>
                    <div className="imagen promo03"></div>
                </div>
            </div>
        </section>
    );
}

export default PromocionesPage;