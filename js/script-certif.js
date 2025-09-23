// Seletores principais
const certCards = document.querySelectorAll(".cert-card");
const filterBtns = document.querySelectorAll(".filter-btn");

const modal = document.getElementById("cert-modal");
const modalBody = document.getElementById("cert-modal-body");
const modalDownload = document.getElementById("cert-modal-download");
const modalClose = document.querySelector(".js-cert-close");

// Abrir modal ao clicar em "Visualizar"
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".js-cert-preview");
  if (!btn) return;

  const src = btn.dataset.certSrc;

  // Limpa conteúdo anterior
  modalBody.innerHTML = "";

  // Decide se é PDF ou imagem
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Visualização do certificado";
    modalBody.appendChild(img);

  // Abre modal
  modal.setAttribute("aria-hidden", "false");
  modalBody.focus();
});

// Fechar modal
modalClose.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
  modalBody.innerHTML = "";
});

// Fecha ao clicar fora do painel
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.setAttribute("aria-hidden", "true");
    modalBody.innerHTML = "";
  }
});