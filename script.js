//on share icon pressed
//get id share
var profileInfo = document.getElementById("profile-info");
var shareButton = document.getElementById("share");
var shareDisplay = document.getElementById("share-block");

function displayShareSection() {
     var status = profileInfo.style.display;
     if (status != "none") {
          profileInfo.style.display = "none";
          shareDisplay.style.display = "flex";
     } else {
          profileInfo.style.display = "block";
          shareDisplay.style.display = "none";
     }
}

shareButton.addEventListener("click", displayShareSection);
