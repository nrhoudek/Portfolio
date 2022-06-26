(function(){
	'use strict'
	const hamburgerButton = document.querySelector('.hamburger-button');
	const mobileNav = document.querySelector('.main-nav.mobile');
	const links = document.querySelectorAll('.main-nav.mobile .nav-item a');

	function toggleNav() {
		mobileNav.classList.toggle('active');
		hamburgerButton.classList.toggle('active')
	}

	hamburgerButton.addEventListener('click', toggleNav);
	links.forEach(link => link.addEventListener('click', toggleNav));
})();