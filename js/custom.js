
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(50).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);


// Get the modal
var modal = document.getElementById("imageModal");

// Get the modal content
var modalContent = document.querySelector(".modal-content");

// Get the image and insert it inside the modal
var img = document.getElementsByClassName("product-image");
var modalImg = document.getElementById("modalImage");
for (var i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        if (this.parentElement.tagName.toLowerCase() === "a" && this.parentElement.getAttribute("href")) {
            // If the clicked image has a parent <a> element with an href attribute, follow the link
            window.location.href = this.parentElement.getAttribute("href");
        } else {
            // Otherwise, open the image in the modal
            modal.style.display = "block";
            modalImg.src = this.src;
            document.body.style.overflow = "hidden"; // Hide overflow
        }
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x) or presses Esc, close the modal
span.onclick = function () {
    closeModal();
}

// Close the modal when Esc key is pressed
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Close the modal when user clicks outside the image on the background
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Restore overflow
}
