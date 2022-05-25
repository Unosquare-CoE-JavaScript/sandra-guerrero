# Hardcore Functional Programming in Javascript
## Function

- Total (For every input there is a corresponding output)
- Deterministic (always receive the same output for a given input)
- No Observable Side-Effects  (No observable effect besides computing a value)

#### Advantages of pure functions:
- Reliable
- Portable
- Reusable
- Testable
- Composable
- Properties/Contract

## Currying
Instead of taking all arguments at one time; takes one argument at a time and returns a new function expecting the next argument

## Composition
Chaining multiple functions together to create a new function
- Logging in composition (side effecty but helpful for debugging)
```
const log = curry((tag, x) => (console.log(tag, x), x));
const shout = compose(exclaim, log('tag log'));
```

## Functors
An object with **map** method, it can be mapped between objects.

## Either Monad 
A functional approach to Error handling,  it has a **map**, **chain**, and a **fold** method.

## fromNullable 
Utility that takes a value and if is not equal to null, return right functor.
```
	const fromNullable = (x) => (x != null ? Right(x) : Left());

	const findColor = (name) =>
  	fromNullable({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]);
```

## Task Monad 
Takes a reject and resolve function, just like a Promise, but flipped.
Lazy Promises (_allow us to continue to compose and combine, without running it_ )
	```
const {Task} = require('../types')

	const testUser = {id: 2, name: 'user1'}

	const Db = ({
	  find: _id =>
	    Task((rej, res) => res(testUser))
	})

	Db.find(3)
	.fork(console.log, console.log)
```
