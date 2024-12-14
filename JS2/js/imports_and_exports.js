// Modules
// in html: script type = "module" to say you are using modules
// uses defer automatically & strict mode!: "use strict";


// Note cannot import without the type="module"!

// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking as fingerpicking} from "./guitars.js";
import * as Guitars from "./guitars.js";  // treat as a class
import User from "./user.js";
const me = new User("email@email.com", "Dave");
console.log(me);
console.log(me.greeting());

// console.log(Guitars.default());  // since: export default ...
console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

