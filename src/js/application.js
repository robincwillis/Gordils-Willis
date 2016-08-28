import mainTemplate from 'templates/views/main.hbs';
import imagesLoaded from 'imagesloaded';
import Velocity from 'velocity-animate';

import "sass/main";

console.time('imagesLoaded');

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
	scrollTo(works, 500);
}

function scrollToWorks () {
	var works = document.getElementById("work-images");
	scrollTo(works, 500);
}

function scrollToTop () {
	var page = document.getElementById("page");
	scrollTo(page, 500);
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

	imagesLoaded( 'body', () => {
		console.log('images loaded');
		console.timeEnd('imagesLoaded');
		// images have loaded
		var loader = document.getElementById('pageLoader');
		loader.className = "complete-start";

		setTimeout( () => {
		 loader.className = "complete-end";
		}, 2000)
	});


	console.log('bind events called');
	//Logo
	console.log(	document.getElementById('nav-logo'));
	document.getElementById('nav-logo')
	.addEventListener('click', (event) => {
		console.log('clicked logo')
		scrollToTop();
	})

	//About
	document.getElementById('nav-about')
	.addEventListener('click', (event) => {
		console.log(document.getElementById('about').className);

		if (document.getElementById('about').className === "visible") {
			hideAbout();
		} else {
			scrollToTop();
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
		scrollToContact();
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









