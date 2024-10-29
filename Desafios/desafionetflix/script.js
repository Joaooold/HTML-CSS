let botaoSom = document.querySelector(".botao")
let video = document.querySelector("video")

botaoSom.addEventListener("click", ligarSom)

function ligarSom() {
    video.muted = false
}