const temperatura = -5;
const velocidadeVento = 10;

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 + (0.6215 * temperatura) -
        (11.37 * Math.pow(velocidadeVento, 0.16)) +
        (0.3965 * temperatura * Math.pow(velocidadeVento, 0.16));
}

const elementoSensacao = document.querySelector("#sensacao");

if (temperatura <= 10 && velocidadeVento > 4.8) {
    const sensacao = calcularSensacaoTermica(temperatura, velocidadeVento);
    elementoSensacao.textContent = `${sensacao.toFixed(1)} °C`;
} else {
    elementoSensacao.textContent = "N/A";
}

document.querySelector("#ano").textContent = new Date().getFullYear();

document.querySelector("#ultima-modificacao").textContent =
    document.lastModified;
