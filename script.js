var container = document.getElementById('container');
var imagem = document.createElement('img');
function criarImagem() {
    imagem.src = 'img/credito -.jpg'; // Substitua pelo caminho correto da imagem desejada
    imagem.className = 'creditoimg';
    container.appendChild(imagem);
}
function criarImagem1() {
    imagem.src = 'img/credito +.png';
    imagem.className = 'creditoimg';
    container.appendChild(imagem);
}
function resetImagem() {
    var imagem = document.querySelector('img');
    container.removeChild(imagem);
}