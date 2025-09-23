document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal_acceso");
  const openBtn = document.getElementById("open-modal-btn"); 
  const closeBtn = document.getElementById("close-modal-btn");
  const modalOverlay = document.getElementById("modal_overlay"); 

  console.log("Modal:", modal);
  console.log("Botón abrir:", openBtn);
  console.log("Botón cerrar:", closeBtn);

  // Abrir modal
  openBtn.addEventListener("click", () => {
    console.log("Click en abrir modal");
    modal.classList.remove("hidden");
  });

  // Cerrar modal con la X y dando click en cualquier parte
  closeBtn.addEventListener("click", () => {
    console.log("Click en cerrar modal");
    modal.classList.add("hidden");
  });

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      console.log("Click en overlay - cerrar modal");
      modal.classList.add("hidden");
    }
  });
});
