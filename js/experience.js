(function(){
	'use strict'

	const tabs = document.querySelectorAll('.tab');
	const experienceSections = document.querySelectorAll('.experience');

	function showExperience() {
		resetSections();

		let tabSelected = this.dataset.tabName;
		this.classList.add('active');

		//Show experience section for the related tab clicked.
		let showSection = document.querySelector(`[data-experience=${tabSelected}]`);
		showSection.classList.add('show');
		showSection.ariaHidden = 'false';
	}

	function resetSections() {
		//Remove class active from each tab every time a new tab is selected. A Reset.
		tabs.forEach(tab => tab.classList.contains('active') && tab.classList.remove('active'))

		//Remove class show from each section every time a new tab is selected. A Reset.
		experienceSections.forEach(section => section.classList.contains('show') && section.classList.remove('show'));

		//Set aria-hidden to true for each section each tab every time a new tab is selected. A Reset.
		experienceSections.forEach(section => section.ariaHidden = 'true');
	}

	tabs.forEach(tab => tab.addEventListener('click', showExperience));
})();