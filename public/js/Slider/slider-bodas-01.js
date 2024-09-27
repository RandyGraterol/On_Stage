let cont = 1;
		showS(cont);

		function msn(n){
			showS(cont += n);
		}

		function showS(n){
			let sli = document.getElementsByClassName("sliderBodas");

			if (n > sli.length) {
				cont = 1;
			}

			if (n < 1) {
				cont = sli.length;
			}

			for (let i = 0; i < sli.length; i++){
				sli[i].style.display = "none";
			}

			sli[cont - 1].style.display = "flex";
		}