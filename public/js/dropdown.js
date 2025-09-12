const menuButton = document.getElementById("menu-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const menuItems = document.querySelectorAll(".menu-item");
const menuContainer = document.getElementById("menu-container");

let menuOpen = false;

function openMenu() {
  dropdownMenu.classList.remove("hidden");
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove("opacity-0", "-translate-x-6");
      item.classList.add(
        "opacity-100",
        "translate-x-0",
        "transition-all",
        "duration-500",
        "ease-out"
      );
    }, index * 150);
  });
  menuOpen = true;
}

function closeMenu() {
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove("opacity-100", "translate-x-0");
      item.classList.add(
        "opacity-0",
        "-translate-x-6",
        "transition-all",
        "duration-300",
        "ease-in"
      );
    }, index * 100);
  });

  setTimeout(
    () => {
      dropdownMenu.classList.add("hidden");
    },
    menuItems.length * 120 + 300
  );

  menuOpen = false;
}

menuButton.addEventListener("click", (e) => {
  e.stopPropagation(); // evita que cierre inmediatamente
  menuOpen ? closeMenu() : openMenu();
});

// Evento para cerrar al hacer clic fuera
document.addEventListener("click", (e) => {
  if (menuOpen && !menuContainer.contains(e.target)) {
    closeMenu();
  }
});
