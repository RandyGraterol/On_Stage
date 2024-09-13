const {conciertos,estructura,iluminacion,pantallaLed,pool,sonido,tarima,techo,boda} = require('../utils/memoria.js');

const index = (req,res)=>{
res.render('index');
}

const sonidoO = (req,res)=>{
res.render('sonido',{sonido});
}


module.exports={
	index,
	sonidoO
};