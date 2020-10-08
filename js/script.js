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



















// const stock = document.querySelectorAll('.stock__link'),
//     pizza = document.querySelector('.stock__wrappper-pizza'),
//     soupe = document.querySelector('.stock__wrappper-soupe'),
//     pasta = document.querySelector('.stock__wrappper-pasta'),
//     wine = document.querySelector('.stock__wrappper-wine'),
//     beer = document.querySelector('.stock__wrappper-beer'),
//     drinks = document.querySelector('.stock__wrappper-drinks'),
//     desert = document.querySelector('.stock__wrappper-desert');

// // stock.addEventListener('click', e => {
// //     soupe.classList.toggle('active')
// //     pizza.classList.toggle('active')
// //     pasta.classList.toggle('active')
// //     wine.classList.toggle('active')
// //     beer.classList.toggle('active')
// //     drinks.classList.toggle('active')
// //     desert.classList.toggle('active')
// // })


// function remove() {
//     stock.classList.remove('active')
// }

// for (let i = 0; i < stock.length; i++) {
//     pizza.onclick = remove
// }
// console.log(stock);