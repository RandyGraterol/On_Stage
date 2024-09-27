let c = 1;
		ssnn(c);

		function moviendo(n){
			ssnn(c += n);
		}

		function ssnn(n){
			let imagen = document.getElementsByClassName("sliderPoolParty");

			if (n > imagen.length) {
				c = 1;
			}

			if (n < 1) {
				c = imagen.length;
			}

			for (let i = 0; i < imagen.length; i++){
				imagen[i].style.display = "none";
			}

			imagen[c - 1].style.display = "flex";
		}