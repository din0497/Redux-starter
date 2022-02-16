import { compose, pipe } from "lodash/fp";

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));

console.log(transform(input));

const person = {
  name: "Asad",
  adress: {
    country: "usa",
    city: "san fran",
  },
};

const updated = {
  ...person,
  adress: {
    ...person.adress,
    city:'New York'
  },
  name: "Din",
};
updated.adress.city = "New York";
console.log(updated, person);
