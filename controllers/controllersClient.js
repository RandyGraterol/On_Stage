const {conciertos,estructura,iluminacion,pantallaLed,pool,sonido,tarima,techo,boda,clases01} = require('../utils/memoria.js');

const index = (req,res)=>{
res.render('index',{conciertos,estructura,iluminacion,pantallaLed,pool,sonido,tarima,techo,boda,clases01});
}

const sonidoO = (req,res)=>{
res.render('sonido',{sonido});
}


module.exports={
	index,
	sonidoO
};
