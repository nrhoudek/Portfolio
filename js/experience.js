(function(){
	'use strict'

	const tabs = document.querySelectorAll('.tab');
	const experienceSections = document.querySelectorAll('.experience');

	function showExperience() {;
		//Remove class active from each tab every time a new tab is selected. A Reset.
		tabs.forEach(tab => tab.classList.contains('active') && tab.classList.remove('active'))

		//Remove class show from each tab every time a new tab is selected. A Reset.
		experienceSections.forEach(section => section.classList.contains('show') && section.classList.remove('show'));

		let tabSelected = this.dataset.tabName;
		this.classList.add('active');

		//Show experience section for the related tab clicked.
		let showSection = document.querySelector(`[data-experience=${tabSelected}]`);
		showSection.classList.add('show');
	}

	tabs.forEach(tab => tab.addEventListener('click', showExperience));
})();