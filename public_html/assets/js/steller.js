/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Full-Stack Developer", "Web Designer", "Graphic Designer", "Video Editor"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let roleElement = document.getElementById('role');
    
    function typeRole() {
        if (currentCharIndex < roles[currentRoleIndex].length) {
            roleElement.textContent += roles[currentRoleIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeRole, 80); // Speed of typing
        } else {
            setTimeout(eraseRole, 300); // Wait before erasing
        }
    }
    
    function eraseRole() {
        if (currentCharIndex > 0) {
            roleElement.textContent = roles[currentRoleIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(eraseRole, 50); // Speed of erasing
        } else {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(typeRole, 300); // Wait before typing the next role
        }
    }
    
    typeRole(); // Start the animation
});




// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {
	reverse: true,
	max: 15,
	speed: 400,
	scale: 1.12,
	glare: true,
	reset: true,
	perspective: 500,
	transition: true,
	"max-glare": 0.75,
	"glare-prerender": false,
	gyroscope: true,
	gyroscopeMinAngleX: -45,
	gyroscopeMaxAngleX: 45,
	gyroscopeMinAngleY: -45,
	gyroscopeMaxAngleY: 45
});


var portfolioMasonry = function() {
    $('.filters ul li').click(function(){
           $('.filters ul li').removeClass('active');
           $(this).addClass('active');
           
           var data = $(this).attr('data-filter');
           $grid.isotope({
             filter: data
           })
         });
   
   
         if(document.getElementById("section-portfolio")){
               var $grid = $(".grid").isotope({
                 itemSelector: ".all",
                 percentPosition: true,
                 masonry: {
                   columnWidth: ".all"
                 }
               })
         };
   
   
       };

       $(function(){

		OnePageNav();
		offCanvasNav();
		contentWayPoint();
		navbarState();
		clickMenu();
		smoothScroll();
		portfolioMasonry();
	});

  function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}