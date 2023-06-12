export default class AddToCart{
    constructor(myCart, price, name){
        this._myCart = myCart;
        this._name = name;    
        this._price = price;    
    }
    showPriceAndName(){
        this._nameAndPrice = {
            'name': this._name,
            'price': this._price
        };
        this._myCart.push(this._nameAndPrice);
    }
}