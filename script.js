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