let yCarros = [];
let xCarros = [];
let velocidadeCarros = [];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
    for (let i = 0; i < numeroTotalCarros; i++) {
        if (i === 0) {
            yCarros[0] = alturaCarro;
        } else {
            yCarros[i] = yCarros[i - 1] + 55;
        }
        image(imagemDosCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)

    }
}

function movimentaCarro() {
    for (let i = 0; i < numeroTotalCarros; i++)
        xCarros[i] -= velocidadeCarros[i];
}

function voltaPosicaoInicialDoCarro() {
    for (let i = 0; i < numeroTotalCarros; i++) {
        if (xCarros[i] < (comprimentoCarro * -1)) {
            xCarros[i] = 600;
            velocidadeCarros[i] = numeroAleatorio(7) + 2;
            imagemDosCarros[i] = loadImage(nomeArquivoImagemCarro());
        }
    }
}

function numeroAleatorio(valor) {
    return Math.random() * valor;
}

function numeroAleatorioArrendondadoMaisUm(valor) {
    return Math.floor(numeroAleatorio(valor) + 1);
}

function comecaPosicaoInicialDoCarro() {
    for (let i = 0; i < numeroTotalCarros; i++) {
        xCarros[i] = 600;
        velocidadeCarros[i] = numeroAleatorio(10);
    }
}

