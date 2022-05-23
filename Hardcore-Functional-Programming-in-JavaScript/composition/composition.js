import { curry } from "ramda";

const add = (x, y) => x + y;

const toUpper = (str) => str.toUpperCase();

const exclaim = (str) => str + "!";

const first = (xs) => xs[0];

console.log(add);

// const compose = (f, g) => (x) => f(g(x));
// const pipe = (f, g) => (x) => g(f(x));

const loudFirst = compose(toUpper, first);
const shout = compose(exclaim, toUpper);

console.log(shout("tears"));
