function abrirModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  document.getElementById("claveInput").value = "";
  setTimeout(() => document.getElementById("claveInput").focus(), 200);
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

function verificarClave() {
  const clave = document.getElementById("claveInput").value;
  const claveCorrecta = "gaap11";

  if (clave === claveCorrecta) {
    // ✅ Abre el Excel online en una nueva pestaña
    window.open("https://1drv.ms/x/c/32e9d3502dcfd875/EbU00EuM8YVFoCdpXdLEGgMBHrcqvPwSEZuF8gs0yB0AvQ?e=yn0dK6", "_blank");
    cerrarModal();
  } else {
    alert("❌ Clave incorrecta.");
  }
}
