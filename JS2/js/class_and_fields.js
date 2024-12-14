// Class

// // Factory function
// function pizzaFactory(pizzaSize) {
//     const crust = "original";
//     const size = pizzaSize;
//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//     };
// }

// const pizza = pizzaFactory("small");
// pizza.bake();

class Pizza {
    crust = "original";  // public field
    #sauce = "traditional";  // private
    #size;
    constructor(/*pizzaType,*/ pizzaSize) {
        // this.type = pizzaType;
        this.#size = pizzaSize;
        // this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
    // getToppings() { return this.toppings; }
    // setToppings(toppings) {
    //     this.toppings.push(toppings);
    // }
    // bake() {
    //     console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
    // }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);

// const pizza = new Pizza("pepperoni", "small");  // new obj
// pizza.setCrust("thin");
// pizza.bake();
// pizza.setToppings("sausage");
// pizza.setToppings("olives");
// console.log(pizza.getToppings());

// class SpecialtyPizza extends Pizza {
//     constructor(pizzaSize) {
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice() {
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//     }
// }

// const specPizza = new SpecialtyPizza("medium");
// specPizza.slice();


//naming conventions: use underscore with private properties
