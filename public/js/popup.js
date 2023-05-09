// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

// Get the modal
const loginModal = document.getElementById("login_popup");
const opretModal = document.getElementById("opret_popup");

// Get the button that opens the modal
const btnLogin = document.getElementById("login_btn");
const btnOpret = document.getElementById("opret_btn");

// Get the <span> element that closes the modal
const spanLogin = document.getElementsByClassName("close_login")[0];
const spanOpret = document.getElementsByClassName("close_opret")[0];

btnLogin.addEventListener("click", () => {
  loginModal.showModal();
});
btnOpret.addEventListener("click", () => {
  opretModal.showModal();
});

// When the user clicks on <span> (x), close the modal
spanOpret.onclick = function () {
  opretModal.close();
};

// When the user clicks on <span> (x), close the modal
spanLogin.onclick = function () {
  loginModal.close();
};

//
//

opretModal.addEventListener("click", (e) =>
  closeModalOnClickOutside(opretModal, e)
);
loginModal.addEventListener("click", (e) =>
  closeModalOnClickOutside(loginModal, e)
);
//

function closeModalOnClickOutside(modal, e) {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    try {
      modal.close();
    } catch (error) {
      console.error(`Failed to close modal: ${error}`);
    }
  }
}

/* 

// When the user clicks the button, open the modal
btnLogin.onclick = function () {
  loginPopup.style.display = "block";
};



// When the user clicks the button, open the modal
btnOpret.onclick = function () {
  opretPopup.style.display = "block";
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
 */
