import Author from './../images/author-image.jpg';
import Image01 from './../images/slide-01.jpg';
import Image02 from './../images/slide-02.jpg';
import Image03 from './../images/slide-03.jpg';

var $ = require('jquery');

$(document).ready(() => {
	// Update skills icons colours on hover
	  $('.service-item').mouseover(() => {
	    $('.service-item i').addClass('colored').css('transition', 'all 0.5s ease-in-out');
	  });

	  $('.service-item').mouseout(() => {
	    $('.service-item i').removeClass('colored').css('transition', 'all 1s ease-out');
	  });
	  
	//according to loftblog tut
	$(".main-menu li:first").addClass("active");

	var showSection = function showSection(section, isAnimate) {
	  var direction = section.replace(/#/, ""),
	    reqSection = $(".section").filter(
	      '[data-section="' + direction + '"]'
	    ),
	    reqSectionPos = reqSection.offset().top - 0;

	  if (isAnimate) {
	    $("body, html").animate(
	      {
	        scrollTop: reqSectionPos
	      },
	      100
	    );
	  } else {
	    $("body, html").scrollTop(reqSectionPos);
	  }
	};

	// Change main profile image on hover
	$('img#author').mouseover(() => {
		// array of images
		let images = [Author, Image01, Image02, Image03];
		let imgTag = document.getElementById("author");
		// transition property: doesn't seem to be workintg, review later
		imgTag.style.transition = "all 5s ease-in";
		// global interval in this scope for the timer function
		var interval = 500;
		// have timer as a window property so it can be accessed by other functions not in scope range
		window.timer = setInterval(() => {
			// get a random generator to pick the images from array
			let select = parseInt(Math.random()*4);
			imgTag.src = images[select];
			interval = 500 * select;
		}, interval);
	});

	$('img#author').mouseout(() => {
		let imgTag = document.getElementById("author");

		clearInterval(window.timer);

		imgTag.src = Author;
	});

	// change the order of the experience and eductation component
	$('span#all').click(() => {
		$('div.education').css('display', 'flex');
		$('div.experience').css('display', 'flex');
		$('div.music').css('display', 'flex');
	});

	$('span#education').click(() => {
		$('div.experience').css('display', 'none');
		$('div.music').css('display', 'none');
		$('div.education').css('display', 'flex');
	});

	$('span#experience').click(() => {
		$('div.education').css('display', 'none');
		$('div.music').css('display', 'none');
		$('div.experience').css('display', 'flex');
	});

	$('span#music').click(() => {
		$('div.education').css('display', 'none');
		$('div.experience').css('display', 'none');
		$('div.music').css('display', 'flex');
	});
	
	// Scroll functionality on clicked Menu item
	var checkSection = function checkSection() {
	  $(".section").each(function() {
	    var $this = $(this),
	      topEdge = $this.offset().top - 80,
	      bottomEdge = topEdge + $this.height(),
	      wScroll = $(window).scrollTop();
	    if (topEdge < wScroll && bottomEdge > wScroll) {
	      var currentId = $this.data("section"),
	        reqLink = $("a").filter("[href*=\\#" + currentId + "]");
	      reqLink
	        .closest("li")
	        .addClass("active")
	        .siblings()
	        .removeClass("active");
	    }
	  });
	};

	$(".main-menu").on("click", "a", function(e) {
	  e.preventDefault();
	  showSection($(this).attr("href"), true);
	});

	$(window).scroll(function() {
	  checkSection();
	});
});