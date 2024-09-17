let slideIdex = 1;
		showSlideNN(slideIdex);

		function moveSlid(n){
			showSlideNN(slideIdex += n);
		}

		function showSlideNN(n){
			let slid3s = document.getElementsByClassName("slid33");

			if (n > slid3s.length) {
				slideIdex = 1;
			}

			if (n < 1) {
				slideIdex = slid3s.length;
			}

			for (let i = 0; i < slid3s.length; i++) {
				slid3s[i].style.display = "none";
			}

			slid3s[slideIdex - 1].style.display = "block";
		}