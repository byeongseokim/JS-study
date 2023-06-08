this.valueA = 'a';
console.log(valueA);
valueB = 'b';
console.log(this.valueB);

function checkThis() {
    console.log(this);
}
function   checkThis2() {
    "use strict";
    console.log(this);
}
checkThis();
checkThis2();

function Product(name, price) {
    this.name = name;
    this.price = price;
}
const Product1 =Product('가방', 2000);
    console.log(window.name);
    console.log(window.price);

const Product2 = {
    name:'가방2',
    price: 3000,
    getVAT() {
        return this.price /10;
    }
}
const valueOfProduct2 = Product2.getVAT();
console.log(valueOfProduct2);

const calVAT = Product2.getVAT;
const VAT2 = calVAT();
console.log(VAT2);

const newCalVAT = calVAT.bind(Product2);
const VAT3 = newCalVAT();
console.log(VAT3);

const counter1 = {
    count: 0,
    addAFter1Sec() {
        setTimeout(function() {
            this.count += 1;
            console.log(this.count);
        },1000)
    }
};
counter1.addAFter1Sec();

const counter2= {
    count: 0,
    addAFter1Sec() {
        setTimeout(() => {
            this.count += 1;
            console.log(this.count);
        }, 1000)
    }
};
counter2.addAFter1Sec