const toggleSwitch = document.querySelector(".checkbox");
const mainContainer = document.querySelector(".monthly-billing");

toggleSwitch.addEventListener("change", (e) => {
  mainContainer.classList.toggle("show-monthly");
});
