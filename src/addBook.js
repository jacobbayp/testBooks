import react from 'react';
import { useState } from 'react';

const addBookURL = "www.test.dk";





  function addBookRequest(book) {
      const options = makeOptions("POST", book)
      return fetch(addBookURL, options)
         .then(handleHttpErrors)

  }

  function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }


  function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}



// const [book, setBook] = useState("");
        
//     const handleChange = (e) => {
//         // const target = e.target;
//         console.log(e)
//         // const isbn = target.isbn;
//         // const titel = target.titel;
//         // const author = target.author;
//         // const publisher = target.publisher;
//         // const publish_year = target.publish_year;
//         // setBook({isbn, titel, author, publisher, publish_year})
//         // console.log(book)

//   // function handleSubmit(e){
//     //     e.preventDefault();
//     //     console.log("test")
//     // }



function addBook(){


let book = [];

function handleSubmit(e){
 e.preventDefault();

book.push(e.target.isbn.value, e.target.titel.value, e.target.author.value, e.target.publisher.value, e.target.publish_year.value,)
console.log(book)
addBookRequest(book);
}


  
   return (
       <div>
             <form onSubmit={handleSubmit}>
            <label>
            Isbn:
            <input type ="text" name ="isbn" />
            </label>
            <br></br>
            <label>
            Titel:
            <input type ="text" name ="titel"/>
            </label>
            <br></br>
            <label>
            Author:
            <input type ="text" name ="author"/>
            </label>
            <br></br>
            <label>
            Publisher:
            <input type ="text" name ="publisher"/>
            </label>
            <br></br>
            Publish Year:
            <label>
            <input type ="text" name ="publish_year"/>
            </label>
            <br></br>
       
            
            <input type="submit" value="submit" id="addBook" />
        </form>
        </div>


  
    );



    
}


export default addBook;