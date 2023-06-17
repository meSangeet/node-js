// creating and exporting our own modules---

/*

in node js every individual javascript file is called a module.
Let's say we need to use function created in a different module in another module.


module.js

const add = () => {
    somefunction
}

module.exports = add.

//by above line whatever file import this module only this will be imported 

now let's say we have two functions or more
then use 
module.export.add = add;
module.export.sub = sub;

now when we import this module then the object of both these functions will be imported.

we can now access in the import file as

const {add, sub} = require('./module.js');

add(5,5)  // now this will work

otherwise we will have to write

const imp = require('./module.js');

imp.add(5,5);



also in the export module 
we can write

module.exports = {add, sub, mul}

we can also import and export variables too.
*/