//on share icon pressed
//get id share
var profile = document.querySelector(".profile");
var shareButton = document.getElementById("share");
var secondShareButton = document.getElementById("share-1");
var socials = document.querySelector(".socials");
var screenWidth = window.innerWidth;

window.onresize = window.onload = function () {
     screenWidth = this.innerWidth;
     socials.classList.add("hidden");
     profile.classList.remove("hidden");
     secondShareButton.classList.remove("hidden");
};

function toggle() {
     if (screenWidth <= 1039) {
          profile.classList.toggle("hidden");
          socials.classList.toggle("hidden");
     } else {
          socials.classList.toggle("hidden");
          secondShareButton.classList.toggle("hidden");
     }
}
//get width of html page
shareButton.addEventListener("click", toggle);
secondShareButton.addEventListener("click", toggle);
