// Objects
const obj = { name: "Dave" };
const another = {
    alive: true,
    answer: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}!`;  // this: refers to the object
    }
};

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vroom";
    }
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);  // Inheritance
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {  // overwrote existing function
    return "Whoosh!"
};
console.log(car.engine());


const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function() {
    return "Shhh...";
}
console.log(tesla.engine());

console.log(obj);
console.log(obj.name);

console.log(another["alive"]);  // can use [] but with quotes aroung key
console.log(another.beverage.morning);
console.log(another.action());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

// delete pair
delete band.drums;

// check if obj has key
console.log(band.hasOwnProperty("drums"));  // No

console.log(Object.keys(band));  // display all keys
console.log(Object.values(band));  // display all values for keys

// for in loop
for (let job in band) {  // note job is a string!
    console.log(`On ${job}, it's ${band[job]}!`);
}

//destructuring objects
const { guitar: myVar, bass: myBass } = band;  // pull guiar value from band
console.log(myVar);
console.log(myBass);

const { vocals, guitar, bass, drums } = band;  // vars with same name as keys
console.log(guitar);
console.log(vocals);

function sings({ vocals }) {
    return `${vocals} sings!`;
}

console.log(sings(band));