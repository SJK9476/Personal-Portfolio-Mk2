const menuToggle = document.querySelector(".menu-burger");
const dropdown = document.querySelector(".dropdown");
const ddNavigation = document.querySelector(".dd-navigation");

menuToggle.addEventListener("click", () => {
  if (ddNavigation.classList.contains("hidden")) {
    ddNavigation.classList.remove("hidden");
  } else {
    ddNavigation.classList.add("hidden");
  }
});
