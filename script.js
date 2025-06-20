// 🔓 Función que muestra el modal para ingresar la clave
function abrirModal() {
  const modal = document.getElementById("modal"); // Obtiene el modal por su ID
  modal.style.display = "flex"; // Lo hace visible usando flexbox

  // Limpia el campo de entrada de contraseña
  document.getElementById("claveInput").value = "";

  // Le da foco automático al campo después de 200ms
  setTimeout(() => document.getElementById("claveInput").focus(), 200);
}

// ❌ Función que cierra el modal (oculta la ventana emergente)
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// ✅ Función que valida si la clave ingresada es correcta
function verificarClave() {
  const clave = document.getElementById("claveInput").value; // Obtiene lo que escribió el usuario
  const claveCorrecta = "gaap11"; // 🔐 Aquí defines tu clave secreta

  // Compara la clave ingresada con la clave correcta
  if (clave === claveCorrecta) {
    // Si coincide, abre el enlace al Excel Online en una nueva pestaña
    window.open("https://1drv.ms/x/c/32e9d3502dcfd875/EbU00EuM8YVFoCdpXdLEGgMBHrcqvPwSEZuF8gs0yB0AvQ?e=yn0dK6", "_blank");

    // Cierra el modal después de abrir el enlace
    cerrarModal();
  } else {
    // Si la clave está mal, muestra una alerta
    alert("❌ Clave incorrecta.");
  }
}
