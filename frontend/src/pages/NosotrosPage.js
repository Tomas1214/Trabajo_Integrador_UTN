import React from "react";
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <section className="wider">
            <h2>¡Conócenos!</h2>
            <div className="personas">
                <div className="persona">
                    <div className="fotos foto01">
                        <div className="presentacion">
                            <h4>Lucas García, emprendedor</h4>
                            <p>Creador y administrador del emprendimiento familiar, es una persona determinada y calculadora respecto de sus ambiciones, pero muy extrovertida y amistosa con quienes le rodean.</p>
                        </div>
                    </div>
                </div>
                <div className="persona">
                    <div className="fotos foto02">
                        <div className="presentacion">
                            <h4>Malena García, cocinera</h4>
                            <p>Aprendiendo desde pequeña, siempre le fascinó dominar y dar a conocer las recetas familiares así como servir a los demás con su mejor talento.</p>
                        </div>
                    </div>
                </div>
                <div className="persona">
                    <div className="fotos foto03">
                        <div className="presentacion">
                            <h4>Matías García, mesero</h4>
                            <p>Memorioso, equilibrado, atento y conversador. Estas cuatro palabras son las que mejor describen a nuestro sociable mozo.</p>
                        </div>
                    </div>
                </div>
                <div className="persona">
                    <div className="fotos foto04">
                        <div className="presentacion">
                            <h4>Rodrigo Gimenez, desarrollador</h4>
                            <p>Íntimo amigo de Matías, Rodrigo ha hecho despegar el emprendimiento gracias a sus conocimientos del internet y las redes sociales.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>Nuestra misión</h2>
                <p>Por generaciones, nuestra familia se pasó de mano en mano deliciosas recetas de pastelería que guardamos como una tradición. Hoy, queremos que seas parte de nuestra familia.</p>
            </div>
        </section>
    );
}

export default NosotrosPage;