
/*menu slider */
let slider = document.querySelector('.slider');
let sliderInd = document.querySelectorAll('.cont-slider');
let contador = 1;
let tamano = sliderInd[0].clientWidth;
let intervalo = 3500;

setInterval(() => {
    slide()
}, intervalo)

function slide() {
    slider.style.transform = "translate("+(- tamano * contador)+"px)";
    slider.style.transition = `transform .2s`;
    contador++;

    if (contador === sliderInd.length) {
      setTimeout(() => {
            slider.style.transform = `translate(0px)`
            slider.style.transition = `transform 0s`;
            contador=1;
        }, 1500)


    }

}
/* Menu desplegable*/ 
let menu = document.getElementById("menu-header");
let enlacesMenu = document.getElementById("enlaces-header");

menu.addEventListener('click', () =>  {
    enlacesMenu.classList.toggle('extra-menu')
})


