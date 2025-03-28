document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");
  const menu = document.getElementById("dropdown-menu");

  if (menuContainer && menu) {
    menuContainer.addEventListener("mouseenter", () => {
      menu.classList.remove("hidden");
    });

    menuContainer.addEventListener("mouseleave", () => {
      menu.classList.add("hidden");
    });
  }
});
