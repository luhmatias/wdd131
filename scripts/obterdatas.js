const dataAtual = new Date();

const anoAtual = dataAtual.getFullYear();

document.querySelector("#anoatual").textContent = anoAtual;

document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;