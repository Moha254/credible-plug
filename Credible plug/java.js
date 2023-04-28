// JavaScript to change the header color on scroll
window.onscroll = function() {
    var header = document.querySelector("header");
    if (window.pageYOffset > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  