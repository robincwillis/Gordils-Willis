import mainTemplate from 'templates/views/main.hbs';
import imagesLoaded from 'imagesloaded';
import Velocity from 'velocity-animate';
import moire from 'moire';

import "sass/main";

function initMoire() {
	var proX = Math.floor((Math.random() * 5) + 1);
	var proY = Math.floor((Math.random() * 5) + 1);;
	var sizeX = Math.floor((Math.random() * 5) + 1);;
	var sizeY = Math.floor((Math.random() * 5) + 1);;
	moire(proX, proY, sizeX, sizeY);
}

function resizeCanvas() {
	var canvas = document.getElementById('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	initMoire();
}

function showAbout () {
	document.getElementById('about').className = "visible";
}

function hideAbout () {
	document.getElementById('about').className = "";
}

function scrollTo(element, duration) {
	Velocity(element, "scroll", { duration: duration, easing: "ease-in-out" });
}

function scrollToContact () {
	var works = document.getElementById("contact");
	scrollTo(works, 1000);
}

function scrollToWorks () {
	var works = document.getElementById("work-images");
	scrollTo(works, 1000);
}

function scrollToTop () {
	var page = document.getElementById("page");
	scrollTo(page, 1000);
}

function setNavigationStyle () {
	var navItems = document.querySelectorAll('ul.navigation li');
	var offset = window.pageYOffset;
	var windowHeight = window.window.innerHeight;

	var forEach = function (array, callback, scope) {
	  for (var i = 0; i < array.length; i++) {
	    callback.call(scope, i, array[i]); // passes back stuff we need
	  }
	};

	forEach(navItems, (index, item) => {
		var itemTop = item.firstElementChild.getBoundingClientRect().top;
		if(offset > windowHeight - itemTop) {
			item.className = !item.className.includes(' invert') ? item.className.concat(' invert') : item.className;
		} else {
			item.className = item.className.replace(' invert', '');
		}
	});

}

function bindEvents () {

	imagesLoaded( 'body', () => {
		console.log('images loaded');
		console.timeEnd('imagesLoaded');
		// images have loaded
		var loader = document.getElementById('pageLoader');
		loader.className = "complete-start";

		setTimeout( () => {
		 loader.className = "complete-end";
		}, 1500)
	});


	console.log('bind events called');
	//Logo
	console.log(	document.getElementById('nav-logo'));
	document.getElementById('nav-logo')
	.addEventListener('click', (event) => {
		initMoire();
		scrollToTop();
	})

	//About
	document.getElementById('nav-about')
	.addEventListener('click', (event) => {

		if (document.getElementById('about').className === "visible") {
			hideAbout();
			initMoire();
		} else {
			initMoire();
			scrollToTop();
			showAbout();
		}

	})
	//Select Works
	document.getElementById('nav-works')
	.addEventListener('click', (event) => {
		console.log('clicked works');
		initMoire();
		scrollToWorks();
	})
	//Contact
	document.getElementById('nav-contact')
	.addEventListener('click', (event) => {
		initMoire();
		scrollToContact();
	})

	window.addEventListener('scroll', () =>{
		setNavigationStyle();
	});

	window.addEventListener('resize', resizeCanvas, false);

}

document.addEventListener("DOMContentLoaded", () => {
	var div = document.createElement('div');
	div.innerHTML = mainTemplate({});
	document.body.appendChild(div);
	bindEvents();

});
