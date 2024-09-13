const b = document.querySelectorAll('b');
for(let x = 0; x< b.length;x++){
	b[x].addEventListener('click',()=>{
       console.log('CLICK');
	})
}