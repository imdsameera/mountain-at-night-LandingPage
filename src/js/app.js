var ul = document.querySelector('.responsive-nav');
var menu = document.querySelector('#hamburger');
var count = false;


// MENU BUTTON BEHAVIOUR
menu.addEventListener('click', function(){
	if (count === false) {
			ul.style.display = 'block';

			setTimeout(function(){
				ul.style.opacity = '1';
				ul.style.transform = 'rotateZ(0deg)';
			}, 100)
			count = true
		}else {
			ul.style.opacity = '0';
			ul.style.transform = 'rotateZ(90deg)';

			setTimeout(function(){
				ul.style.display = 'none';
			}, 500)
			count = false;
		}
})
