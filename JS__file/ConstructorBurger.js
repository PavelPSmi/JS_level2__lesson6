class Burger {
    constructor(size,filling,){
        this.size=[];
        this.sizeBurger();
        this.filling=[];
        this.fillingF();
        this.spice=[];
        this.spicef();
        this.addSizeBurger();
    }
    sizeBurger(){
        this.size = [
            {id:1,title:"small",price:50,call:20},
            {id:2,title:'big',price:100,call:40},
        ];
    }
    fillingF(){
        this.filling=[
            {id:1,title:'cheze',price:10,call:20},
            {id:2,title:'salat',price:20,call:5},
            {id:3,title:'potato',price:15,call:10},
        ];
    }
    spicef(){
        this.spice=[
            {id:1,title:'priprava',price:15,call:0},
            {id:2,title:'maionez',price:20,call:5},
        ];
    }
    addSizeBurger(){
        console.log(this.size)
        for(let product of this.size){
            const item = new CtgBurger(product);
            console.log(item)
        }
    }
}

class CtgBurger {
    constructor(product){
        (this.id=product.id);
        (this.title=product.title);
        (this.price=product.price);
        (this.call=product.call);

    }
}
let menu = new Burger();
// console.log(menu)