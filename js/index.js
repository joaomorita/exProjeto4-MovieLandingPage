const video = document.getElementById("video");
const linkDoVideo = video.src;

const botaoTrailer = document.querySelector(".botao-trailer");

botaoTrailer.addEventListener("click", () => {
    // Passo 4 - Abrir a modal na tela.
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)
})

const modal = document.querySelector(".modal");

const fecharModal = document.querySelector(".fechar-modal");

fecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});