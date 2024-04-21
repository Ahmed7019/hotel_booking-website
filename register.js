// Declare variable for input fields + buttons

let pwdInput = document.querySelectorAll("#pwd"),
  pwdConfirmInput = document.querySelectorAll("#confirm-pwd"),
  showPwd = document.querySelectorAll("#eye-slash-btn"),
  hidePwd = document.querySelectorAll("#eye-btn");

// On clicking hide || show change the type of input to text

let hideEle = (ele) => {
  ele.parentElement.previousElementSibling.setAttribute("type", "text");
  ele.classList.add("hidden");
  ele.nextElementSibling.classList.remove("hidden");
};

showPwd.forEach((btn) => {
  btn.addEventListener("click", () => {
    hideEle(btn);
  });
});
