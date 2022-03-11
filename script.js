// Ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

exibiFilmes = document.getElementById("exibiFilmes");

listaFilmes = [
    "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg",
    "https://br.web.img3.acsta.net/c_310_420/pictures/16/10/19/01/57/552532.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
    exibiFilmes.innerHTML += "<img src=" + listaFilmes[i] + ">";
}

function AdicionarFilme() {
    var filmeASerAdicionado = document.getElementById("filmeASerAdicionado").value;
    if (listaFilmes.includes(filmeASerAdicionado)) {
        alert("Já contem esse filme, não pode ser adicionado");
        return;
    } else {
        listaFilmes.push(filmeASerAdicionado);
        exibiFilmes.innerHTML += "<img src=" + filmeASerAdicionado + ">";
    }
}