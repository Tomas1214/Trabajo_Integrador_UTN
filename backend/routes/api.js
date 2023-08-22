var express = require('express');
var router = express.Router();
var pedidosModel = require('./../models/pedidosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/pedidos', async function(req, res, next) {
    let pedidos = await pedidosModel.getPedidos();

    pedidos = pedidos.map(pedidos => {
        if (pedidos.img_id) {
            const repartidor = cloudinary.url(pedidos.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...pedidos,
                repartidor
            }
        } else {
            return {
                ...pedidos,
                repartidor: ''
            }
        }
    });

    res.json(pedidos);
});

router.post('/contacto', async (req, res) => {
    const email = {
        to: 'tomasgarcea@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere más información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
    }

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transport.sendMail(email)

      res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
      });
});

module.exports = router;