import React, { useState } from "react";
import App from "./App.js";
const createBookURL= "http://localhost:8080/testjc/api/book/add";

let init = {
    isbn: "",
    author: "",
    publishYear: "",
    publisher: "",
    title: ""
  };

  function AddBook () {
  
  const [book, setBook] = useState(init);

  const handleChange = (evt) => {
    evt.preventDefault();
    let target = evt.target;
    let id = target.id;
    let value = target.value;

    setBook({ ...book, [id]: value });
  };
  function handleSubmit(evt) {
    evt.preventDefault();
    AddBookFetch(book);
  }

  return (
    <div>
      <form onChange={handleChange}>
        <input
          class="stretch-to-fit"
          type="text"
          id="isbn"
          placeholder="isbn nummer"
        ></input>
        <input
          type="text"
          class="stretch-to-fit"
          id="author"
          placeholder="forfatter"
        ></input>


        <input
          type="text"
          class="stretch-to-fit"
          id="publishYear"
          placeholder="udgivelsesår"
        ></input>

        <input
          type="text"
          class="stretch-to-fit"
          id="publisher"
          placeholder="Udgiver"
        ></input>

        <input
          type="text"
          class="stretch-to-fit"
          id="title"
          placeholder="Bogtitel"
        ></input>

        <input
          type="submit"
          class="stretch-to-fit"
          onClick={handleSubmit}
          value="Submit"
        ></input>
        </form >
    </div >
  );
}

function AddBookFetch(book) {
  const options = makeOptions("POST", true, book);
  return fetch(createBookURL, options);
}
const makeOptions = (method, addToken, body) => {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
    console.log(JSON.stringify(body));
  }
  return opts;
};

export default AddBook;