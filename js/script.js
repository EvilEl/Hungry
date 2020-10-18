const dots = document.querySelectorAll('.dot'),
    slider = document.querySelectorAll('.slider__item'),
    burger = document.querySelector('.menu__burger'),
    menu = document.querySelector('.menu__list'),
    body = document.querySelector('body'),
    link = document.querySelectorAll('.menu__link'),
    stock = document.querySelectorAll('.stock__link'),
    stockWr = document.querySelectorAll('.stock__wrappper'),
    line = document.querySelector('.slider__inner'),
    left = -1302,
    sliderWidth = 1302;

// dots.forEach(function (value, i) {
//     value.onclick = () => {
//         slider.forEach(function (valuevr, g) {
//             if (i == g) {
//                 dots[i].classList.toggle('active')
//                 slider[i].style.left = left + 'px'
//             }
//             else {
//                 dots[g].classList.remove('active')
//             }
//         })
//     }
// })

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
    menu.classList.toggle('menu__list-top')
    body.classList.toggle('active-burger')

})


function linkmass() {
    burger.classList.remove('active');
    menu.classList.remove('menu__list-top');
    body.classList.remove('active-burger');
}



for (let i = 0; i < link.length; i++) {
    link[i].onclick = linkmass;
}






dots[0].addEventListener('click', e => {
    slider[0].classList.remove('margin');
    slider[1].classList.remove('margin')

    slider[1].style.transform = 'translateX(1300px)';
    slider[2].style.transform = 'translateX(2600px)';


    dots[0].style.background = '#fff';
    dots[1].style.background = '#333';
    dots[2].style.background = '#333';
})

dots[1].addEventListener('click', e => {
    slider[0].classList.add('margin');
    slider[1].classList.add('margin')
    slider[1].style.transform = 'translateX(-1300px)';
    slider[2].style.transform = 'translateX(2600px)';

    dots[0].style.background = '#333';
    dots[1].style.background = '#fff';
    dots[2].style.background = '#333';
})

dots[2].addEventListener('click', e => {
    slider[0].classList.add('margin');
    slider[1].style.transform = 'translateX(-2600px)';
    slider[2].style.transform = 'translateX(-2600px)';


    dots[0].style.background = '#333';
    dots[1].style.background = '#333';
    dots[2].style.background = '#fff';
})