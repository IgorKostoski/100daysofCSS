const iconMenu = document.querySelector(".icon-menu");
const notifications = document.querySelector(".container-notifications");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
  notifications.classList.toggle("notifications-active");
});

document.querySelector(".fa-search").addEventListener("click", () => {
  document.querySelector("input").classList.toggle("input-active");
});
