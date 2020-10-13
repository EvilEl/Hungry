const dots = document.querySelectorAll('.dot'),
    slider = document.querySelectorAll('.slider__item'),
    burger = document.querySelector('.menu__burger'),
    menu = document.querySelector('.menu__list'),
    body = document.querySelector('body'),
    link = document.querySelectorAll('.menu__link'),
    stock = document.querySelectorAll('.stock__link'),
    stockWr = document.querySelectorAll('.stock__wrappper');

// let stockwr = []
// stock.forEach(function (value) {

// });

/*
stock[0].addEventListener('click', e => {
    if (flex.index == fleba.index) {
        stockWr[0].classList.toggle('activeFlex')  // Работает но выбирая по [] МАССИВ
    } else {

    }
    console.log(fleba);
})

stock[1].addEventListener('click', e => {
    // if (flex.index == fleba.index) {
    stockWr[1].classList.toggle('activeFlex')

    // } else {

    // }
    console.log(fleba);
})
*/

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
// function openbox(SOUPE) {
//     display = document.getElementById('SOUPE').style.display;
//     if (display == "none") {
//         document.getElementById('SOUPE').style.display = "flex";
//         document.getElementById('PIZZA').style.display = "none"
//         document.getElementById('PASTA').style.display = "none"
//         document.getElementById('DESER').style.display = "none"
//         document.getElementById('WINE').style.display = "none"
//         document.getElementById('BEER').style.display = "none"
//         document.getElementById('DRINKS').style.display = "none"
//     } else {
//         document.getElementById('SOUPE').style.display = "none"
//     }
// }

// function PIZZA(PIZZA) {
//     display = document.getElementById('PIZZA').style.display;
//     if (display == "none") {
//         document.getElementById('PIZZA').style.display = "flex";
//         document.getElementById('SOUPE').style.display = "none";
//         document.getElementById('PASTA').style.display = "none";
//         document.getElementById('DESER').style.display = "none";
//         document.getElementById('WINE').style.display = "none";
//         document.getElementById('BEER').style.display = "none";
//         document.getElementById('DRINKS').style.display = "none";
//     } else {
//         document.getElementById('PIZZA').style.display = "none"
//     }
// }

// function PASTA(PASTA) {
//     display = document.getElementById('PASTA').style.display;
//     if (display == "none") {
//         document.getElementById('PASTA').style.display = "flex";
//         document.getElementById('PIZZA').style.display = "none"
//         document.getElementById('SOUPE').style.display = "none"
//         document.getElementById('DESER').style.display = "none"
//         document.getElementById('WINE').style.display = "none"
//         document.getElementById('BEER').style.display = "none"
//         document.getElementById('DRINKS').style.display = "none"
//     } else {
//         document.getElementById('PASTA').style.display = "none"
//     }
// }

// function DESER(DESER) {
//     display = document.getElementById('DESER').style.display;
//     if (display == "none") {
//         document.getElementById('DESER').style.display = "flex";
//         document.getElementById('PIZZA').style.display = "none"
//         document.getElementById('SOUPE').style.display = "none"
//         document.getElementById('PASTA').style.display = "none"
//         document.getElementById('WINE').style.display = "none"
//         document.getElementById('BEER').style.display = "none"
//         document.getElementById('DRINKS').style.display = "none"
//     } else {
//         document.getElementById('DESER').style.display = "none"
//     }
// }

// function WINE(WINE) {
//     display = document.getElementById('WINE').style.display;
//     if (display == "none") {
//         document.getElementById('WINE').style.display = "flex";
//         document.getElementById('PIZZA').style.display = "none"
//         document.getElementById('SOUPE').style.display = "none"
//         document.getElementById('DESER').style.display = "none"
//         document.getElementById('PASTA').style.display = "none"
//         document.getElementById('BEER').style.display = "none"
//         document.getElementById('DRINKS').style.display = "none"
//     } else {
//         document.getElementById('WINE').style.display = "none"
//     }
// }

// function BEER(BEER) {
//     display = document.getElementById('BEER').style.display;
//     if (display == "none") {
//         document.getElementById('BEER').style.display = "flex";
//         document.getElementById('PIZZA').style.display = "none"
//         document.getElementById('SOUPE').style.display = "none"
//         document.getElementById('DESER').style.display = "none"
//         document.getElementById('WINE').style.display = "none"
//         document.getElementById('PASTA').style.display = "none"
//         document.getElementById('DRINKS').style.display = "none"
//     } else {
//         document.getElementById('BEER').style.display = "none"
//     }
// }


// function DRINKS(DRINKS) {
//     display = document.getElementById('DRINKS').style.display;
//     if (display == "none") {
//         document.getElementById('DRINKS').style.display = "flex";
//         document.getElementById('PIZZA').style.display = "none"
//         document.getElementById('SOUPE').style.display = "none"
//         document.getElementById('DESER').style.display = "none"
//         document.getElementById('WINE').style.display = "none"
//         document.getElementById('BEER').style.display = "none"
//         document.getElementById('PASTA').style.display = "none"
//     } else {
//         document.getElementById('DRINKS').style.display = "none"
//     }
// }