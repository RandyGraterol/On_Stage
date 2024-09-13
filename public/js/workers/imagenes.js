const vector = ['sonido-01.png','sonido-02.jpeg','sonido-03.jpeg','sonido-04.jpeg','sonido-05.png','sonido-06.png','sonido-07.png','sonido-08.png'];

self.onmessage=function(event){
if(event.data == true){
 self.postMessage(vector)
}
}