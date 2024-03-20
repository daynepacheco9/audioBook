const botao_proximo = document.getElementById("proximo");
const botao_anterior = document.getElementById("anterior");
const botao_pause = document.getElementById("play-pause");
const text_cap = document.getElementById("capitulo");
const audio_cap = document.getElementById("audio-capitulo");

let musica_atual = 1;
const total_musica = 10;

const mudarMusica = (capitulo) => {
    let estado_musica = audio_cap.paused;

    text_cap.innerText = `Capítulo ${capitulo}`;
    audio_cap.setAttribute("src", `./books/dom-casmurro/${capitulo}.mp3`);

    if (!estado_musica) {
        audio_cap.play();
    }
}

botao_pause.addEventListener("click", () => {
    if (!audio_cap.paused) {
        audio_cap.pause();
        botao_pause.setAttribute("class","bi bi-play-circle-fill");
    } else {
        audio_cap.play();
        botao_pause.setAttribute("class","bi bi-pause-circle-fill");
    }
});

botao_proximo.addEventListener("click", () => {
    musica_atual++;
    if (musica_atual > 10) {
        musica_atual = 1;
    }
    mudarMusica(musica_atual);
});

botao_anterior.addEventListener("click", () => {
    musica_atual--;
    if (musica_atual < 1) {
        musica_atual = 10;
    }
    mudarMusica(musica_atual);
});