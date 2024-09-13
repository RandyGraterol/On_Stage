const b = document.querySelectorAll('b');
for(let x = 0; x< b.length;x++){
	b[x].addEventListener('click',()=>{
		let info = b[x].dataset.info;
        window.location.href=`/galeria?description=${info}`;
	})
}