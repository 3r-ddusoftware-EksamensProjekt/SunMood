/*
image links = 
<a href="https://www.vecteezy.com/free-vector/mood">Mood Vectors by Vecteezy</a>
<a href="https://www.vecteezy.com/free-vector/mood">Mood Vectors by Vecteezy</a>

<a href="https://www.vecteezy.com/free-vector/mood-icon">Mood Icon Vectors by Vecteezy</a>
<a href="https://www.vecteezy.com/free-vector/mood-icon">Mood Icon Vectors by Vecteezy</a>
<a href="https://www.vecteezy.com/free-vector/mood-icon">Mood Icon Vectors by Vecteezy</a>
<a href="https://www.vecteezy.com/free-vector/mood-icon">Mood Icon Vectors by Vecteezy</a>

solikon
<a href="https://www.vecteezy.com/free-vector/sun-clipart">Sun Clipart Vectors by Vecteezy</a>
*/

let moodModal = document.getElementById("moodBoard");
let btnMood = document.getElementById("mood_btn");
let closeMood = document.getElementById("close_mood");

btnMood.addEventListener("click", () => {
  moodModal.showModal();
});

closeMood.onclick = function () {
  moodModal.close();
};

moodModal.addEventListener("click", (e) => {
  let dialogDimensions = moodModal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    try {
      moodModal.close();
    } catch (error) {
      console.error(`Failed to close modal: ${error}`);
    }
  }
});
