let contador = 1;
		slideN(contador);

		function mSlideN(n){
			slideN(contador += n);
		}

		function slideN(n){
			let slideItem = document.getElementsByClassName("sliderIluminacion");

			if (n > slideItem.length){
				contador = 1;
			}

			if (n < 1){
				contador = slideItem.length;
			}

			for (let i = 0; i < slideItem.length; i++){
				slideItem[i].style.display = "none";
			}

			slideItem[contador - 1].style.display = "flex";
		}