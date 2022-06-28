(function(){
	'use strict'
	const hamburgerButton = document.querySelector('.hamburger-button');
	const mobileNav = document.querySelector('.main-nav.mobile');
	const links = document.querySelectorAll('.main-nav.mobile .nav-item a');
	const mobileMenu = [hamburgerButton, ...links];

	function toggleNav(e) {
		mobileNav.classList.toggle('active');
		hamburgerButton.classList.toggle('active');

		//Accessibility measure for screen readers / keyboards
		if (mobileNav.classList.contains('active')) {
			links.forEach(link => link.tabIndex = '0');
			mobileNav.ariaHidden = 'false';
			mobileNav.ariaExpanded = 'true';
			mobileMenu.forEach(item => item.addEventListener('keydown', mobileTabNavigation));
		} else {
			links.forEach(link => link.tabIndex = '-1');
			mobileNav.ariaHidden = 'true';
			mobileNav.ariaExpanded = 'false';
			mobileMenu.forEach(item => item.removeEventListener('keydown', mobileTabNavigation));
		}
	}

	function mobileTabNavigation(e) {
		let first = 0;
		let last = mobileMenu.length - 1;
		let shiftDown = e.shiftKey;

		if((!shiftDown && e.keyCode === 9) && e.target === mobileMenu[last]) {
			e.preventDefault();
			mobileMenu[first].focus();
		} else if((shiftDown && e.keyCode === 9) && e.target === mobileMenu[first]) {
			e.preventDefault();
			mobileMenu[last].focus();
		}
	} 

	hamburgerButton.addEventListener('click', toggleNav);
	links.forEach(link => link.addEventListener('click', toggleNav));
})();