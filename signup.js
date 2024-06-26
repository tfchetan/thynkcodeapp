const pass_field = document.querySelector("#password");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", function () {
  if (pass_field.type === "password") {
    pass_field.type = "text";
    showBtn.textContent = "Hide";
    showBtn.style.color = "#fff";
  } else {
    pass_field.type = "password";
    showBtn.textContent = "Show";
    showBtn.style.color = "#fff";
  }
});

