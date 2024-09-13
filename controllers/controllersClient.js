const {conciertos,estructura,iluminacion,pantallaLed,pool,sonido,tarima,techo,boda} = require('../utils/memoria.js');

const index = (req,res)=>{
res.render('index');
}

const galeria = (req,res)=>{

const inf = req.query.description;
if(inf === "conciertos"){
res.render({data:conciertos,dato:'/conciertos/'});
}else if(inf === "estructura"){
res.render({data:estructura,dato:'/estructura/'});
}else if(inf === "iluminacion"){
res.render({data:iluminacion,dato:'/iluminacion/'});
}else if(inf === "pantalla"){
res.render({data:pantallaLed,dato:'/pantallas led/'});
}else if(inf === "pool"){
res.render({data:pool,dato:'/pool party/'});
}else if(inf === "sonido"){
res.render({data:sonido,dato:'/sonido/'});
}else if(inf === "tarima"){
res.render({data:tarima,dato:'/tarima/'});
}else if(inf === "techo"){
res.render({data:techo ,dato:'/techo/'});
}else{
res.render({data:boda,dato:'/iluminacion/bodas/'});	
}

}


module.exports={
	index,
	galeria
};