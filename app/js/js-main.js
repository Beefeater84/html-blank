/* Mobile menu */


if(document.documentElement.clientWidth <= 992){
	(function(){
		var menuContainer = document.querySelector('.menu-container');
		menuContainer.classList.add('is-mobile'); // show mobile menu
		var overlay = document.querySelector('.stm-overlay');
		// tools

		var hamButton = document.querySelector('.mobile-main-menu-hamburger');
		var closeMobileButton = document.querySelector('.mobile-main-menu-close');
		var mobileMenu = document.querySelector('.mobile-main-menu');

		hamButton.addEventListener('click', function(){
			mobileMenu.classList.toggle('is-open');
			overlay.classList.toggle('is-visible');
		});

		overlay.addEventListener('click', function(){
			mobileMenu.classList.remove('is-open');
			overlay.classList.remove('is-visible');
		});

		closeMobileButton.addEventListener('click', function(){
			mobileMenu.classList.toggle('is-open');
			overlay.classList.toggle('is-visible');
		});

		var subMenuButton = document.querySelector('.next-level-button');
		var subMenu = document.querySelector('.mobile-main-menu--submenu');

		subMenuButton.addEventListener('click', function(){
			subMenu.classList.toggle('is-close');
		});	

		// for submenu animation

		var subMenu = document.querySelector('.mobile-main-menu--submenu');
		var w = subMenu.offsetHeight;
		subMenu.style.maxHeight = w + 'px';
		subMenu.classList.toggle('is-close');
	})();
}






