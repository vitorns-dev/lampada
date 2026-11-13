const lampada = document.querySelector("#lampada");
const status = document.querySelector("#status");
const botao = document.querySelector("#botao");

let ligada = false;

botao.addEventListener("click", () => {
  ligada = !ligada;
  lampada.classList.toggle("apagada");

  if (ligada) {
    status.textContent = "A lâmpada está acesa";
    botao.textContent = "Desligar";
  } else {
    status.textContent = "A lâmpada está apagada";
    botao.textContent = "Ligar";
  }
});