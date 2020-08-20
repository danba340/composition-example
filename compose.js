const compose = (...fns) => (x) => {
  return fns.reduce((acc, f) => {
    return f(acc);
  }, x);
};

function lowercase(str) {
  return str.toLowerCase();
}

function uppercase(str) {
  return str.toUpperCase();
}

function replace(old, fresh) {
  return function (str) {
    let regex = new RegExp(old, "g");
    return str.replace(regex, fresh);
  };
}

function countWords(str) {
  return str.split(" ").length;
}

let testString = "The quick brown FOX jumps over the lazy dog.";

const uppercaser = compose(uppercase);
const complimenter = compose(lowercase, replace("lazy", "upmost beautiful"));
const counter = compose(lowercase, countWords);
const replacerCounter = compose(
  lowercase,
  replace("fox", "flamingo bird"),
  countWords
);

console.log(uppercaser(testString));
console.log(complimenter(testString));
console.log(counter(testString));
console.log(replacerCounter(testString));
