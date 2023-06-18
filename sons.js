let somPontos;
let somColidiu;

function carregarSons() {
    somPontos = loadSound("sons/pontos.wav");
    somColidiu = loadSound("sons/colidiu.mp3");
}

function tocarSomColisao() {
    somColidiu.play();
}

function tocarSomMarcaPontos(){
    somPontos.play();
}