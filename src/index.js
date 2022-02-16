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

store.dispatch(
  {
    type: "bugAdded",
    payload:{
      description: 'Bug1'
    }
  }
)
store.dispatch(
  {
    type: "bugAdded",
    payload:{
      description: 'Bug2'
    }
  }
)

store.dispatch({
  type:'bugRemoved',
  payload: {
    id:1
  }
})

console.log(store.getState());
