import React from 'react';

const PedidoItem = (props) => {
    const { order, repartidor, body, hour } = props;

    return (
        <div className="pedidos">
            <h1>{order}</h1>
            <img src={repartidor} />
            <div dangerouslySetInnerHTML={{__html: body}} />
            <div dangerouslySetInnerHTML={{__html: hour}} />
            <hr />
        </div>
    )
}

export default PedidoItem;