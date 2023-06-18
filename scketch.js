function preload() {
    carregarImagens();
    carregarSons();
}

function setup() {
    createCanvas(500, 400);
    comecaPosicaoInicialDoCarro();
}

function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialDoCarro();
    movimentaAtor();
    verificaColisao();
    mostraPontos();
    marcaPontos();
}