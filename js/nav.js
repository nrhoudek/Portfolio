(function(){
	'use strict'
	const hamburgerButton = document.querySelector('.hamburger-button');
	const mobileNav = document.querySelector('.main-nav.mobile')

	function toggleNav() {
		mobileNav.classList.toggle('active');
		hamburgerButton.classList.toggle('active')
	}

	hamburgerButton.addEventListener('click', toggleNav);


})();