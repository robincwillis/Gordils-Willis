import mainTemplate from 'templates/views/main.hbs';
import imagesLoaded from 'imagesloaded';

import "sass/main";

console.time('imagesLoaded');

function showAbout () {
	document.getElementById('about').className = "visible";
}

function hideAbout () {
	document.getElementById('about').className = "";
}

function scrollTo(element, to, duration) {
	if (duration <= 0) return;
	var difference = to - element.scrollTop;
	var perTick = difference / duration * 10;

	setTimeout(function() {
			element.scrollTop = element.scrollTop + perTick;
			if (element.scrollTop === to) return;
			scrollTo(element, to, duration - 10);
	}, 10);
}


function scrollToWorks () {
	var works = document.getElementById("work-images");
	var worksTop = works.getBoundingClientRect().top;
	scrollTo(document.body, worksTop, 250);
}

function scrollToTop () {

}

function setNavigationStyle () {
	var navItems = document.querySelectorAll('ul.navigation li');
	var offset = window.pageYOffset;
	var windowHeight = window.window.innerHeight;

	navItems.forEach( (item) => {
		var itemTop = item.firstElementChild.getBoundingClientRect().top;
		if(offset > windowHeight - itemTop) {
			item.className = !item.className.includes(' invert') ? item.className.concat(' invert') : item.className;
		} else {
			item.className = item.className.replace(' invert', '');
		}
	});

}

// function setSplashHeight () {
// 	$el.css({
// 			height: $(window).height()
// 		});
// }

//show info
//hide info
//click selected work
//click info



function bindEvents () {
	console.log('bind events called');
	//Logo
	console.log(	document.getElementById('nav-logo'));
	document.getElementById('nav-logo')
	.addEventListener('click', (event) => {
		console.log('clicked logo')
		scrollTo(document.body, 0, 250);
	})

	//About
	document.getElementById('nav-about')
	.addEventListener('click', (event) => {
		console.log(document.getElementById('about').className);

		if (document.getElementById('about').className === "visible") {
			hideAbout();
		} else {
			showAbout();
		}

	})
	//Select Works
	document.getElementById('nav-works')
	.addEventListener('click', (event) => {
		console.log('clicked works');
		scrollToWorks();
	})
	//Contact
	document.getElementById('nav-contact')
	.addEventListener('click', (event) => {

	})

	window.addEventListener('scroll', () =>{
		setNavigationStyle();
		//setSplashHeight($('.splash'));
		//windowHeight = $(window).height();
	})

	// doument.addEventListener("onclick", function(event){

	// });

}



//Load App
document.addEventListener("DOMContentLoaded", () => {
	var div = document.createElement('div');
	div.innerHTML = mainTemplate({username: "teeeeest"});
	document.body.appendChild(div);
	bindEvents();
});



imagesLoaded( 'body', () => {
	console.log('images loaded');
	console.timeEnd('imagesLoaded');
	// images have loaded
	var loader = document.getElementById('pageLoader');
	loader.className = "complete-start";

	setTimeout( () => {
	 loader.className = "complete-end";
	}, 500)
});





