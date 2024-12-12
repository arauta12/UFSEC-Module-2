// Math methods
console.log(Math.PI);  // pi number

// trunc: remove all decimals
console.log(Math.trunc(Math.PI));

// round to nearest integer
console.log(Math.round(3.5));

// round up to nearest int
console.log(Math.ceil(3.1));

// round down to nearest int
console.log(Math.floor(3.1));

// pow: base, exp
console.log(Math.pow(5,2));

// min of multiple vals
console.log(Math.min(2, 0.5, 9));

// max of multiple vals
console.log(Math.max(2, 0.5, 9));

// (pseudo)random: [0,1)
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);  // Why not ceil? Don't add 1 & slim chance to return 0
