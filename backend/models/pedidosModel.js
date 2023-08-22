var pool = require('./bd');

async function getPedidos() {
    var query = 'select * from pedidos';
    var rows = await pool.query(query);
    return rows;
}

async function insertPedido (obj) {
    try {
        var query = "insert into pedidos set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch {
        console.log(error);
        throw error;
    }
}

async function deletePedidoById(id) {
    var query = 'delete from pedidos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getPedidoById(id) {
    var query = 'select * from pedidos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarPedidoById(obj, id) {
    try {
        var query = 'update pedidos set ? where id = ?';
        var rows = await pool.query(query, [obj,id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getPedidos, insertPedido, deletePedidoById, getPedidoById, modificarPedidoById }