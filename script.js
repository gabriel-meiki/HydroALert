function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon-nav').src = "assets/menu-burguer.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon-nav').src = "assets/menu-close.svg";
    }
}

function trocarVideo() {
    var videoFrame = document.getElementById('video-frame');
    var botaoTexto = document.getElementById('botao-texto');

    if (videoFrame.src.includes('embed/w82TQ44oFGc')) {
        videoFrame.src = "https://www.youtube.com/embed/0iq5468CiUw?si=6p_LzP6aGAXAJytf";
        botaoTexto.textContent = "Ver vídeo versão português";
    } else {
        videoFrame.src = "https://www.youtube.com/embed/w82TQ44oFGc?si=7YJ5qTqn2VD6LelX";
        botaoTexto.textContent = "Ver vídeo versão inglês";
    }
}