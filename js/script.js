const dots = document.querySelectorAll('.dot'),
    slider = document.querySelectorAll('.slider__item');

dots[0].addEventListener('click', e => {
    slider[0].classList.remove('margin');
    slider[1].classList.remove('margin')

    slider[1].style.transform = 'translateX(1300px)';
    slider[2].style.transform = 'translateX(2600px)';


    dots[0].style.background = 'red';
    dots[1].style.background = '#fff';
    dots[2].style.background = '#fff';
})

dots[1].addEventListener('click', e => {
    slider[0].classList.add('margin');
    slider[1].classList.add('margin')
    slider[1].style.transform = 'translateX(-1300px)';
    slider[2].style.transform = 'translateX(2600px)';

    dots[0].style.background = '#fff';
    dots[1].style.background = 'red';
    dots[2].style.background = '#fff';
})

dots[2].addEventListener('click', e => {
    slider[0].classList.add('margin');
    slider[1].style.transform = 'translateX(-2600px)';
    slider[2].style.transform = 'translateX(-2600px)';


    dots[0].style.background = '#fff';
    dots[1].style.background = '#fff';
    dots[2].style.background = 'red';
})


function openbox(SOUPE) {
    display = document.getElementById('SOUPE').style.display;
    if (display == "none") {
        document.getElementById('SOUPE').style.display = "flex";
        document.getElementById('PIZZA').style.display = "none"
        document.getElementById('PASTA').style.display = "none"
        document.getElementById('DESER').style.display = "none"
        document.getElementById('WINE').style.display = "none"
        document.getElementById('BEER').style.display = "none"
        document.getElementById('DRINKS').style.display = "none"
    } else {
        document.getElementById('SOUPE').style.display = "none"
    }
}

function PIZZA(PIZZA) {
    display = document.getElementById('PIZZA').style.display;
    if (display == "none") {
        document.getElementById('PIZZA').style.display = "flex";
        document.getElementById('SOUPE').style.display = "none";
        document.getElementById('PASTA').style.display = "none";
        document.getElementById('DESER').style.display = "none";
        document.getElementById('WINE').style.display = "none";
        document.getElementById('BEER').style.display = "none";
        document.getElementById('DRINKS').style.display = "none";
    } else {
        document.getElementById('PIZZA').style.display = "none"
    }
}

function PASTA(PASTA) {
    display = document.getElementById('PASTA').style.display;
    if (display == "none") {
        document.getElementById('PASTA').style.display = "flex";
        document.getElementById('PIZZA').style.display = "none"
        document.getElementById('SOUPE').style.display = "none"
        document.getElementById('DESER').style.display = "none"
        document.getElementById('WINE').style.display = "none"
        document.getElementById('BEER').style.display = "none"
        document.getElementById('DRINKS').style.display = "none"
    } else {
        document.getElementById('PASTA').style.display = "none"
    }
}

function DESER(DESER) {
    display = document.getElementById('DESER').style.display;
    if (display == "none") {
        document.getElementById('DESER').style.display = "flex";
        document.getElementById('PIZZA').style.display = "none"
        document.getElementById('SOUPE').style.display = "none"
        document.getElementById('PASTA').style.display = "none"
        document.getElementById('WINE').style.display = "none"
        document.getElementById('BEER').style.display = "none"
        document.getElementById('DRINKS').style.display = "none"
    } else {
        document.getElementById('DESER').style.display = "none"
    }
}

function WINE(WINE) {
    display = document.getElementById('WINE').style.display;
    if (display == "none") {
        document.getElementById('WINE').style.display = "flex";
        document.getElementById('PIZZA').style.display = "none"
        document.getElementById('SOUPE').style.display = "none"
        document.getElementById('DESER').style.display = "none"
        document.getElementById('PASTA').style.display = "none"
        document.getElementById('BEER').style.display = "none"
        document.getElementById('DRINKS').style.display = "none"
    } else {
        document.getElementById('WINE').style.display = "none"
    }
}

function BEER(BEER) {
    display = document.getElementById('BEER').style.display;
    if (display == "none") {
        document.getElementById('BEER').style.display = "flex";
        document.getElementById('PIZZA').style.display = "none"
        document.getElementById('SOUPE').style.display = "none"
        document.getElementById('DESER').style.display = "none"
        document.getElementById('WINE').style.display = "none"
        document.getElementById('PASTA').style.display = "none"
        document.getElementById('DRINKS').style.display = "none"
    } else {
        document.getElementById('BEER').style.display = "none"
    }
}


function DRINKS(DRINKS) {
    display = document.getElementById('DRINKS').style.display;
    if (display == "none") {
        document.getElementById('DRINKS').style.display = "flex";
        document.getElementById('PIZZA').style.display = "none"
        document.getElementById('SOUPE').style.display = "none"
        document.getElementById('DESER').style.display = "none"
        document.getElementById('WINE').style.display = "none"
        document.getElementById('BEER').style.display = "none"
        document.getElementById('PASTA').style.display = "none"
    } else {
        document.getElementById('DRINKS').style.display = "none"
    }
}