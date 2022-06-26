(function(){
	'use strict'
	const hamburgerButton = document.querySelector('.hamburger-button');
	const mobileNav = document.querySelector('.main-nav.mobile');
	const links = document.querySelectorAll('.main-nav.mobile .nav-item a');
	const mobileMenu = [hamburgerButton, ...links];
	console.log(mobileMenu);

	function toggleNav(e) {
		mobileNav.classList.toggle('active');

		//Accessibility measure for screen readers / keyboards
		if (mobileNav.classList.contains('active')) {
			links.forEach(link => link.tabIndex = '0');
			mobileNav.ariaHidden = 'false';
			mobileMenu.forEach(item => item.addEventListener('keydown', mobileTabNavigation));
		} else {
			links.forEach(link => link.tabIndex = '-1');
			mobileNav.ariaHidden = 'true';
			mobileMenu.forEach(item => item.removeEventListener('keydown', mobileTabNavigation));
		}

		hamburgerButton.classList.toggle('active');
	}

	function mobileTabNavigation(e) {
		if(e.keyCode === 9 && e.target === mobileMenu[mobileMenu.length - 1]) {
			console.log(e.target);
			console.log(mobileMenu[0]);
			mobileMenu[0].focus();
		} else if((e.shiftKey === true && e.keyCode === 9) && e.target === mobileMenu[0]) {
			console.log(e.target);
			console.log(mobileMenu[mobileMenu.length - 1]);
			mobileMenu[mobileMenu.length - 1].focus();
		}
	} 

	hamburgerButton.addEventListener('click', toggleNav);
	links.forEach(link => link.addEventListener('click', toggleNav));
})();