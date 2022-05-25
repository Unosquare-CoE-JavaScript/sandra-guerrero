import { Task } from "types";
import { compose } from "ramda";
const fs = require("fs");

const readFile = (path, enc) =>
  Task((rej, res) =>
    fs.readFile(path, enc, (err, contents) => (err ? rej(err) : res(contents)))
  );

const writeFile = (path, enc) =>
  Task((rej, res) =>
    fs.writeFile(path, enc, (err, contents) => (err ? rej(err) : res(contents)))
  );

const Box = (f) => ({
  map: (g) => Box(compose(f, g)),
  fold: f,
});

Box(() => 2)
  .map((two) => two + 1)
  .fold();

Task.of(2).map((two) => two + 1);

const t1 = Task((rej, res) => res(2))
  .map((two) => two + 1)
  .map((three) => three * 2);

t1.fork(console.error, consol.log);

// refactoring Node IO with Task
const app_ = () =>
  fs.readFile("config.json", "utf-8", (err, contents) => {
    console.log(err, contents);
    if (err) throw err;

    const newContents = contents.replace(/3/g, "6");

    fs.writeFile("config1.json", newContents, (err, _) => {
      if (err) throw err;
      console.log("success!");
    });
  });

const app = () =>
  readFile("config.json", "utf-8")
    .map((contents) => contents.replace(/3/g, "6"))
    .chain((newContents = writeFile("config1.json", newContents)));
// lazy task
app().fork(console.error, () => console.log("success!"));
