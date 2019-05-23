var ul 		= document.querySelector('.responsive-nav');
var menu 	= document.querySelector('#hamburger');
var star = document.querySelector('.star');
var menuOut = document.querySelector('#menu-out');
var exBtn = document.querySelector('#explore-btn');
var count = false;


// MENU BUTTON BEHAVIOUR
menu.addEventListener('click', function(){
	if (count === false) {
			ul.style.display = 'block';
			menuOut.style.display = 'block'

			setTimeout(function(){
				ul.style.opacity = '1';
				ul.style.transform = 'rotateZ(0deg)';
				menuOut.style.opacity = '0.5'
			}, 100)
			count = true
		}else {
			ul.style.opacity = '0';
			ul.style.transform = 'rotateZ(90deg)';
			menuOut.style.opacity = '0'

			setTimeout(function(){
				ul.style.display = 'none';
				menuOut.style.display = 'none'
			}, 500)
			count = false;
		}
});

// MENU-OUT BACKGROUND CLICK BEHAVIOUR
menuOut.addEventListener('click', function(){
	ul.style.opacity = '0';
	ul.style.transform = 'rotateZ(90deg)';
	menuOut.style.opacity = '0'

	setTimeout(function(){
		ul.style.display = 'none';
		menuOut.style.display = 'none'
	}, 500)
	count = false;
});


// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('h1', {
	duration: 1000,
	origin: 'top',
	distance: '200px'
});

sr.reveal('p', {
	duration: 1000,
	origin: 'left',
	distance: '200px'
});

// moon
sr.reveal('#moon', {
	duration: 1500,
	origin: 'top',
	distance: '200px'
});

// mountain
sr.reveal('#mountain', {
	duration: 1500,
	origin: 'bottom',
	distance: '400px'
});
