function toggleMenu(id, event) {
  event.stopPropagation();

  const menu = document.getElementById(`menu-${id}`);

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    closeAllMenus();
    menu.style.display = "flex";
  }
}

function closeAllMenus() {
  const menus = document.querySelectorAll(".hidden-menu");

  menus.forEach((menu) => {
    menu.style.display = "none";
  });
}

document.addEventListener("click", () => {
  closeAllMenus();
});
