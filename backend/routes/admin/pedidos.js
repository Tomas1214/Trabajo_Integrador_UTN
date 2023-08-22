var express = require('express');
var router = express.Router();
var pedidosModel = require('../../models/pedidosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function(req, res, next) {

  var pedidos = await pedidosModel.getPedidos();

  pedidos = pedidos.map(pedido => {
    if (pedido.img_id) {
      const repartidor = cloudinary.image(pedido.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...pedido,
        repartidor
      }
    } else {
      return {
        ...pedido,
        repartidor: ''
      }
    }
  });

  res.render('admin/pedidos', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    pedidos
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
try {
  var img_id = '';
  if (req.files && Object.keys(req.files).length > 0) {
    repartidor = req.files.repartidor;
    img_id = (await uploader(repartidor.tempFilePath)).public_id;
  }

  console.log(req.body);
  if (req.body.orden != "" && req.body.cuerpo != "" && req.body.horario != "") {
    await pedidosModel.insertPedido({
      ...req.body,
      img_id
    });
    res.redirect('/admin/pedidos')
  } else {
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'Todos los campos son requeridos'
    })
  }
} catch (error) {
  console.log(error)
  res.render('admin/agregar', {
    layout: 'admin/layout',
    error: true,
    message: 'No se cargó el pedido'
  })
}
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let pedido = await pedidosModel.getPedidoById(id);
  if (pedido.img_id) {
    await (destroy(pedido.img_id));
  }

  await pedidosModel.deletePedidoById(id);
  res.redirect('/admin/pedidos')
});

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var pedido = await pedidosModel.getPedidoById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    pedido
  });
});

router.post('/modificar', async (req, res, next) => {
  try {

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        repartidor = req.files.repartidor;
        img_id = (await uploader(repartidor.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      orden: req.body.orden,
      cuerpo: req.body.cuerpo,
      horario: req.body.horario,
      img_id
    }
    console.log(req.body);

    await pedidosModel.modificarPedidoById(obj, req.body.id);
    res.redirect('/admin/pedidos');

  } catch (error) {
    console.log(error);
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la pedido'
    })
  }
})

module.exports = router;