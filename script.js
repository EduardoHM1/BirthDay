function mostrarAlerta() {
  const modal = document.getElementById('modalAlerta');
  modal.style.display = 'flex'; // Mostrar modal

  const btn = document.getElementById('btnEntendido');
  btn.onclick = () => {
    modal.style.display = 'none'; // Ocultar modal
    window.location.href = "detalles.html"; // Redirigir
  };
}
