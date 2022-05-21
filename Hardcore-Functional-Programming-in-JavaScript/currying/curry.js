const add = (x, y) => x + y;

const toPair =
  (f) =>
  ([x, y]) =>
    f(x, y);

const fromPair = (f) => (x, y) => f([x, y]);

const result = fromPair(toPair(add))(1, 2);

console.log(result);

const flip = (f) => (x, y) => f(y, x);

const result = flip(add)(1, 3);

console.log(result);



const add = (x, y) => {
  return x + y;
};

const curry = (f) => (x) => (y) => f(x, y);

const unCurry = (f) => (x, y) => f(x)(y);

const curriedAdd = curry(add);

const increment = curriedAdd(1);

const result = increment(4);

console.log(result);



const add = (x, y) => {
  return x + y;
};

const curry = (f) => (x) => (y) => f(x, y);

const modulo = curry((x, y) => y % x);

const isOdd = modulo(2);

const result = isOdd(6);

console.log(result);
