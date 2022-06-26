(function() {
	//Create and put in Dynamic CopyRight Date
	const date = new Date();
	const year = date.getFullYear();
	const dateCont =  document.querySelector('.date');
	dateCont.innerHTML = `&#169; ${year} Nicholas Houdek`

	// Back to Top Button
	const backToTopButton = document.querySelector('.back-to-top');

	function scrollToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0
	}

	function toggleToTopButton() {
		if (window.scrollY > 20) {
			backToTopButton.classList.add('show');
		} else {
			backToTopButton.classList.remove('show');
		}
	}

	backToTopButton.addEventListener('click', scrollToTop);
	window.addEventListener('scroll', toggleToTopButton)
})();