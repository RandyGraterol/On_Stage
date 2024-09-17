let zlideIdex = 1;
		showSlideNn(zlideIdex);

		function moveSli(n){
			showSlideNn(zlideIdex += n);
		}

		function showSlideNn(n){
			let sli3s = document.getElementsByClassName("slid333");

			if (n > sli3s.length) {
				zlideIdex = 1;
			}

			if (n < 1) {
				zlideIdex = sli3s.length;
			}

			for (let i = 0; i < sli3s.length; i++) {
				sli3s[i].style.display = "none";
			}

			sli3s[zlideIdex - 1].style.display = "block";
		}