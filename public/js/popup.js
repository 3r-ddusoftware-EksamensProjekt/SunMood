// Get the modal
let loginModal = document.getElementById("login_popup");
let opretModal = document.getElementById("opret_popup");

//
//
// Get the button that opens the modal
let btnLogin = document.getElementById("login_btn");
let btnOpret = document.getElementById("opret_btn");

//
//
// Get the <span> element that closes the modal
let closeLogin = document.getElementById("close_login");
let closeOpret = document.getElementById("close_opret");

//
//
// Add event listeners for when the button is clicked
btnLogin.addEventListener("click", () => {
  loginModal.showModal();
});
btnOpret.addEventListener("click", () => {
  opretModal.showModal();
});

//
// hentet fra: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
// When the user clicks on <span> (x), close the modal
closeOpret.onclick = function () {
  opretModal.close();
};
closeLogin.onclick = function () {
  loginModal.close();
};

//
//
// calls the function to close the modal if clicked outside of it.
opretModal.addEventListener("click", (e) =>
  closeModalOnClickOutside(opretModal, e)
);
loginModal.addEventListener("click", (e) =>
  closeModalOnClickOutside(loginModal, e)
);

//
//
//

/**
 * funktion er kopieret fra: https://blog.webdevsimplified.com/2023-04/html-dialog/
 *
 * This function closes a modal when the user clicks outside of it.
 * @param modal - The modal parameter is likely a reference to the modal element that is being displayed on the page. This function is likely used to close the modal when the user clicks outside of it.
 * @param e - The "e" parameter in this function refers to the event object that is passed when the user clicks outside the modal. It contains information about the event, such as the mouse coordinates and the target element.
 */
function closeModalOnClickOutside(modal, e) {
  let dialogDimensions = modal.getBoundingClientRect();
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
