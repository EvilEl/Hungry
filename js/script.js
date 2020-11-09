const dots = document.querySelectorAll('.dot'),
    slider = document.querySelectorAll('.slider__item'),
    burger = document.querySelector('.menu__burger'),
    menu = document.querySelector('.menu__list'),
    body = document.querySelector('body'),
    link = document.querySelectorAll('.menu__link'),
    stock = document.querySelectorAll('.stock__link'),
    stockWr = document.querySelectorAll('.stock__wrappper'),
    line = document.querySelector('.slider__inner'),
    menuItem = document.querySelector('.menu__item'),
    preload = document.querySelector('.preloader');
document.body.onload = function () {
    setTimeout(function () {
        if (!preload.classList.contains('done')) {
            preload.classList.add('done')
        }
    }
        , 50)
}
//  при клике на [I] открывается другой [I] 
stock.forEach(function (value, i) {
    value.onclick = () => {
        stockWr.forEach(function (valuevr, g) {
            if (i == g) {
                stockWr[i].classList.toggle('activeFlex')
            } else {
                stockWr[g].classList.remove('activeFlex')
            }
        })
    }
})
burger.addEventListener('click', e => {
    burger.classList.toggle('active');
    menu.classList.toggle('menu__list-top');
    body.classList.toggle('active-burger');
    link.forEach(function (value, i) {
        if (value == value) {
            link[i].classList.toggle('padding')
        }
    })
})
// Удаляет с бурегра классы
function linkmass() {
    burger.classList.remove('active');
    menu.classList.remove('menu__list-top');
    body.classList.remove('active-burger');
}
// Перебор [i] для удаления по клику на элемент
for (let i = 0; i < link.length; i++) {
    link[i].onclick = linkmass;
}
