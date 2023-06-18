//imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemDosCarros = [];
let numeroTotalCarros = 6;

function carregarImagens(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    for (let i = 0; i < numeroTotalCarros; i++) {
        imagemDosCarros[i] = loadImage(nomeArquivoImagemCarro());
    }
}

function nomeArquivoImagemCarro() {
    return "imagens/carro-" + numeroAleatorioArrendondadoMaisUm(3) + ".png";
}