import { useState, useEffect } from "react";
import axios from 'axios';
import PedidoItem from '../components/pedidos/PedidoItem';

const PedidosPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const cargarPedidos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/pedidos');
            setPedidos(response.data);
            setLoading(false);
        };

        cargarPedidos();
    }, []);
    return (
        <section className="wider">
            <h2>Órdenes</h2>
            {
                loading ? (
                <p>Cargando...</p>
            ) : (
                pedidos.map(item => <PedidoItem key={item.id}
                    order={item.orden} repartidor={item.repartidor} body={item.cuerpo} hour={item.horario} />)
                )
            }
        </section>
    )
};

export default PedidosPage;