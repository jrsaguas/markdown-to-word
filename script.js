// script.js
document.addEventListener("DOMContentLoaded", () => {
  const downloadButtons = document.querySelectorAll(".download-btn");

  downloadButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const file = e.target.dataset.file;
      if (file) {
        window.location.href = file;
      }
    });
  });

  // Ejemplo: mostrar alerta al hacer click
  const alertButton = document.getElementById("alert-demo");
  if (alertButton) {
    alertButton.addEventListener("click", () => {
      alert("¡Gracias por descargar el proyecto!");
    });
  }
});
