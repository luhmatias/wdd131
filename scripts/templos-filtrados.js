const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "São Paulo Brasil",
        localizacao: "São Paulo, Brasil",
        consagracao: "1978, 30 de outubro",
        area: 59246,
        urlDaImagem: "imagens/sao-paulo.jpg"
    },
    {
        nomeDoTemplo: "Recife Brasil",
        localizacao: "Recife, Brasil",
        consagracao: "2000, 15 de dezembro",
        area: 16500,
        urlDaImagem: "imagens/recife.jpg"
    },
    {
        nomeDoTemplo: "Roma Itália",
        localizacao: "Roma, Itália",
        consagracao: "2019, 10 de março",
        area: 41010,
        urlDaImagem: "imagens/roma.jpg"
    }
];

const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const album = document.querySelector("#album");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");

    if (menu.classList.contains("open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Fechar menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Abrir menu");
    }
});

function mostrarTemplos(lista) {
    album.innerHTML = "";

    lista.forEach((templo) => {
        const figure = document.createElement("figure");

        const imagem = document.createElement("img");
        imagem.src = templo.urlDaImagem;
        imagem.alt = templo.nomeDoTemplo;
        imagem.loading = "lazy";

        const legenda = document.createElement("figcaption");
        legenda.textContent = templo.nomeDoTemplo;

        const localizacao = document.createElement("p");
        localizacao.textContent = `Localização: ${templo.localizacao}`;

        const consagracao = document.createElement("p");
        consagracao.textContent = `Consagração: ${templo.consagracao}`;

        const area = document.createElement("p");
        area.textContent = `Área: ${templo.area.toLocaleString("pt-BR")} pés²`;

        figure.appendChild(imagem);
        figure.appendChild(legenda);
        figure.appendChild(localizacao);
        figure.appendChild(consagracao);
        figure.appendChild(area);

        album.appendChild(figure);
    });
}

function filtrarTemplos(tipo) {
    let templosFiltrados;

    if (tipo === "antigo") {
        templosFiltrados = templos.filter((templo) => {
            const ano = parseInt(templo.consagracao);
            return ano < 1900;
        });
    } else if (tipo === "novo") {
        templosFiltrados = templos.filter((templo) => {
            const ano = parseInt(templo.consagracao);
            return ano > 2000;
        });
    } else if (tipo === "grande") {
        templosFiltrados = templos.filter((templo) => {
            return templo.area > 90000;
        });
    } else if (tipo === "pequeno") {
        templosFiltrados = templos.filter((templo) => {
            return templo.area < 10000;
        });
    } else {
        templosFiltrados = templos;
    }

    mostrarTemplos(templosFiltrados);
}

document.querySelector("#home").addEventListener("click", (event) => {
    event.preventDefault();
    filtrarTemplos("todos");
});

document.querySelector("#antigo").addEventListener("click", (event) => {
    event.preventDefault();
    filtrarTemplos("antigo");
});

document.querySelector("#novo").addEventListener("click", (event) => {
    event.preventDefault();
    filtrarTemplos("novo");
});

document.querySelector("#grande").addEventListener("click", (event) => {
    event.preventDefault();
    filtrarTemplos("grande");
});

document.querySelector("#pequeno").addEventListener("click", (event) => {
    event.preventDefault();
    filtrarTemplos("pequeno");
});

const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;

mostrarTemplos(templos);
