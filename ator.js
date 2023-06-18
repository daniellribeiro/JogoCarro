//Ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;
let valorPosicaoInicialAtor = 366;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
    } else if (keyIsDown(DOWN_ARROW) && podeSeMover()) {
        yAtor += 3;
    }
}

function podeSeMover() {
    return yAtor < valorPosicaoInicialAtor;
}

function verificaColisao() {
    for (let i = 0; i < imagemDosCarros.length; i++)
        if (collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)) {
            tocarSomColisao();
            perdePontos();
        }
}

function perdePontos() {
    if (meusPontos > 0)
        meusPontos -= 1;
    voltaPosicaoInicialAtor();
    comecaPosicaoInicialDoCarro();
}

function mostraPontos() {
    textAlign(CENTER);
    textSize(25);
    fill(255, 240, 60);
    text(meusPontos, width / 5, 27);
}

function marcaPontos() {
    if (yAtor < 0) {
        tocarSomMarcaPontos();
        meusPontos += 1;
        voltaPosicaoInicialAtor();
        comecaPosicaoInicialDoCarro();
    }
}

function voltaPosicaoInicialAtor() {
    yAtor = valorPosicaoInicialAtor;
}
