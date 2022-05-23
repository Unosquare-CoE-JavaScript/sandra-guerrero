const Box = (x) => ({
  map: (f) => Box(f(x)),
  inspect: `Box(${x})`,
  fold: (f) => f(x),
});

const nextCharForNumberString_ = (str) => {
  const trimmed = str.trim();
  const number = parseInt(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
};

const nextCharForNumberString = (str) =>
  Box(str)
    .map((x) => x.trim())
    .map((trimmed) => parseInt(trimmed, 10))
    .map((number) => number + 1)
    .fold(String.fromCharCode);

const result = nextCharForNumberString("  64 ");


console.log(result);
