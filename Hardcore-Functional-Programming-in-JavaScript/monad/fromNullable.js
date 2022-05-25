const fromNullable = (x) => (x != null ? Right(x) : Left());

const findColor = (name) =>
  fromNullable({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]);

const res = () =>
  findColor("red")
    .map((x) => x.toUpperCase())
    .map((x) => x.slice(1))
    .fold(
      () => "No color!",
      (color) => color
    );

console.log(res());
