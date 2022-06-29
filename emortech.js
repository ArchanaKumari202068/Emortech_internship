const resetBtn = document.querySelector(".reset-pass-btn");
const newPassIn = document.querySelector(".new-pass-in");
const newPassReEnterIn = document.querySelector(".re-enter-pass-in");
const msg = document.querySelector(".msg");
const container = document.querySelector(".container");
resetBtn.onclick = function () {
  const pattern = /[^A-z]/;
  if (newPassIn.value == "") {
    msg.innerText = "Input field can't be empty.";
  } else if (newPassIn.value != newPassReEnterIn.value) {
    newPassReEnterIn.style.border = "3px solid red";
    msg.innerText = "Passwords do not match.";
  } else if (newPassIn.value.length < 8) {
    newPassReEnterIn.style.border = "3px solid red";
    msg.innerHTML = "Password must be atleast 8 characters.";
  } else if (!pattern.test(newPassIn.value)) {
    newPassReEnterIn.style.border = "3px solid red";
    msg.innerHTML = "Password must have atleast one non alphabet character.";
  } else {
    container.innerHTML =
      '<p class="heading">Password Changed</p> <p class="success">Your Password has been updated! Now get back in driver seat, racers are waiting for you!</p> <p class="reset-pass-btn">JOIN A RACE</p>';
    msg.style.color = "black";
    msg.style.fontStyle = "normal";
  }
};
newPassIn.onfocus = function () {
  msg.innerText = "";
  newPassReEnterIn.style.border = "3px solid black";
};
