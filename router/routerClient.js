const express = require('express');

const router = express.Router();

const {index,sonidoO} = require('../controllers/controllersClient.js'); 

router.get('/',index);
router.get('/sonido',sonidoO);

module.exports=router;
