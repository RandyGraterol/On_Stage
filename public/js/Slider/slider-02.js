let slideIndex = 1;
		showSliden(slideIndex);

		function moveSliden(n){
			showSliden(slideIndex += n);
		}

		function showSliden(n){
			let slides = document.getElementsByClassName("slid3");

			if (n > slides.length) {
				slideIndex = 1;
			}

			if (n < 1) {
				slideIndex = slides.length;
			}

			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}

			slides[slideIndex - 1].style.display = "block";
		}