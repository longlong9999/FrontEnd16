function elementSlide(n) {

				for(var i = 0; i < document.getElementsByClassName("div-slide").length; i++) {
					document.getElementsByClassName("div-slide")[i].style.display="none";
				}
				document.getElementsByClassName("div-slide")[n].style.display="block";
			}