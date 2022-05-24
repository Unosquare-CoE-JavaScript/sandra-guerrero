const fs = require("fs");
const Task = require("data.task");
const { List, Map } = require("immutable-ext");

const httpGet = (path, params) => Task.of(`${path}: result`);

const getUser = (x) => httpGet("/user", { id: x });
const getTimeline = (x) => httpGet(`/timeline/${x}`, {});
const getAds = () => httpGet("/ads", {});

List[(getUser, getTimeline, getAds)]
  .traverse(Task.of, (f) => f())
  .fork(console.log, (x) => console.log(x.toJs()));

const fs = require("fs");
const Task = require("data.task");
const Either = require("../either");
const { Right, Left, fromNullable } = Either;
const { List, Map } = require("immutable-ext");

const greaterThan5 = (x) =>
  x.length > 5 ? Right(x) : Left("not greater than 5");

const looksLikeEmail = (x) =>
  x.match(/@/gi) ? Right(x) : Left("not an email");

const email = "blahh@yadda.com";
const res = List[(greaterThan5, looksLikeEmail)].traverse(Either.of, (v) =>
  v(email)
);

res.fold(console.log, (x) => console.log(x.toJs()))