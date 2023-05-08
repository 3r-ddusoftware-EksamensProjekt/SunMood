// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

// Get the modal
var loginPopup = document.getElementById("login_popup");

var opretPopup = document.getElementById("opret_popup");

// Get the button that opens the modal
var btnLogin = document.getElementById("login_btn");

var btnOpret = document.getElementById("opret_btn");

// Get the <span> element that closes the modal
var spanLogin = document.getElementsByClassName("close_login")[0];

var spanOpret = document.getElementsByClassName("close_opret")[0];

// When the user clicks the button, open the modal
btnLogin.onclick = function () {
  loginPopup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanLogin.onclick = function () {
  loginPopup.style.display = "none";
};

// When the user clicks the button, open the modal
btnOpret.onclick = function () {
  opretPopup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanOpret.onclick = function () {
  opretPopup.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == opretPopup) {
    opretPopup.style.display = "none";
  }
  if (event.target == loginPopup) {
    loginPopup.style.display = "none";
  }
};
