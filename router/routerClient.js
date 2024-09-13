const express = require('express');

const router = express.Router();

const {index,galeria} = require('../controllers/controllersClient.js'); 

router.get('/',index);
router.get('/galeria',galeria);

module.exports=router;