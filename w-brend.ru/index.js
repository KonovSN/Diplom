import AddToCart from "./componets/AddToCart.js";

const categoryBtn = document.querySelector('.dropdown__dropbtn');

const buttonToCart = document.querySelectorAll('.card__buy');

let myCart = []
buttonToCart.forEach((btn)=>{
    btn.addEventListener('click', function(e){
        const cardIsChoosen = e.target.closest('.cards__card');
        const price = cardIsChoosen.querySelector('.card__price').textContent;
        const name = cardIsChoosen.querySelector('.card__name').textContent;
        const thisCardIsChoosen = new AddToCart(myCart ,price, name);
        thisCardIsChoosen.showPriceAndName();
        const kolTovar = document.querySelector('.header__kol-tovar');
        let newKolTovar = Number(kolTovar.textContent);
        newKolTovar = newKolTovar + 1;
        kolTovar.textContent = '';
        kolTovar.textContent = newKolTovar;
    });
});

