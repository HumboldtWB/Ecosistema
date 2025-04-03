document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");
  const menu = document.getElementById("dropdown-menu");
  const button = document.getElementById("menu-button");
  const textSpan = document.getElementById("menu-text");

  if (menuContainer && menu) {
    menuContainer.addEventListener("mouseenter", () => {
      menu.classList.remove("hidden");
      button?.classList.remove("animate-bounce");
    });

    menuContainer.addEventListener("mouseleave", () => {
      menu.classList.add("hidden");
      button?.classList.add("animate-bounce");
    });
  }
});
