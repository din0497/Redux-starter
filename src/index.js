// import { compose, pipe } from "lodash/fp";
// import { Map } from "immutable";

// let input = "  JavaScript  ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = (str) => str.trim();
// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
// const toLowerCase = (str) => str.toLowerCase();

// const transform = pipe(trim, toLowerCase, wrap("div"));

// const person = {
//   name: "Asad",
//   adress: {
//     country: "usa",
//     city: "san fran",
//   },
// };

// const updated = {
//   ...person,
//   adress: {
//     ...person.adress,
//     city: "New York",
//   },
//   name: "Din",
// };
// updated.adress.city = "New York";

// let book = Map({ title: "Harry Potter" });

// const publish = (book) => {
//   return book.set("isPublished",true)
// };

// book = publish(book);

// console.log(book.toJS())

import store from "./redux/store";
import * as actions from './redux/actionTypes'
import { bugAdded, bugRemoved, bugResolved } from "./redux/actions";

// const unsubscribe = store.subscribe(() => {
//   console.log("store changed!", store.getState());
// })

store.dispatch(
   bugAdded('new bug')
)
// unsubscribe()

store.dispatch(
 bugAdded('one more bug')
)

store.dispatch(
  bugResolved(1)
)

// store.dispatch(bugRemoved(2))

console.log(store.getState());
