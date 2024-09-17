let slideIndeX = 1;
		showSlideN(slideIndeX);

		function moveSlideN(n){
			showSlideN(slideIndeX += n);
		}

		function showSlideN(n){
			let slideS = document.getElementsByClassName("slide");

			if (n > slideS.length) {
				slideIndeX = 1;
			}

			if (n < 1) {
				slideIndeX = slideS.length;
			}

			for (let i = 0; i < slideS.length; i++) {
				slideS[i].style.display = "none";
			}

			slideS[slideIndeX - 1].style.display = "block";
		}