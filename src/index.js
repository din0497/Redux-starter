import { compose, pipe } from "lodash/fp";

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrap = (type, str) => `<span>${str}</span>`
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrapInDiv);

console.log(transform(input));

