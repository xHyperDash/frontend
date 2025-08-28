// Configuración de roles
    const roles = {
      estudiante: { nombre: "Estudiantes", dashboard: "dashboard_estudiante.html", placeholder: "estudiante@correo.com" },
      docente: { nombre: "Docentes", dashboard: "dashboard_docente.html", placeholder: "docente@correo.com" },
      admin: { nombre: "Administrativos", dashboard: "dashboard_admin.html", placeholder: "admin@correo.com" }
    };

    function actualizarRol() {
      const seleccion = document.getElementById("rol").value;
      const rol = roles[seleccion];
      document.getElementById("rolTitulo").innerText = rol.nombre;
      document.getElementById("usuario").placeholder = rol.placeholder;
      document.getElementById("loginForm").action = rol.dashboard;
    }
    // Ejecutar al cargar la página para que el rol inicial tenga su action
window.onload = function() {
  actualizarRol();
};
document.addEventListener("DOMContentLoaded", () => {
  const botonesDetalles = document.querySelectorAll(".detalles-btn");
  const modal = new bootstrap.Modal(document.getElementById("detallesModal"));

  botonesDetalles.forEach(boton => {
    boton.addEventListener("click", () => {
      const nombre = boton.getAttribute("data-nombre");
      const rol = boton.getAttribute("data-rol");
      const info = boton.getAttribute("data-info");

      // Llenar el modal con la información
      document.getElementById("modalNombre").textContent = nombre;
      document.getElementById("modalRol").textContent = rol;
      document.getElementById("modalInfo").textContent = info;

      modal.show();
    });
  });
});
