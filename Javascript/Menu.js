document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("productosToggle");
  const submenu = document.getElementById("submenuProductos");

  // Alternar el menú al hacer clic
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    submenu.classList.toggle("show");
  });

  // Cerrar menú al hacer clic fuera de él
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !submenu.contains(e.target)) {
      submenu.classList.remove("show");
    }
  });
});
