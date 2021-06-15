import React, { useState, useEffect } from "react";
const allBooksURL = "http://localhost:8080/testjc/api/book/all";

function GetAllBooksFetch() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [bookList, setBookList] = useState([]);

    const fetchItems = async () => {
        const bookList = await fetch(`${allBooksURL}`);

        const bookListData = await bookList.json();

        setBookList(bookListData);
    };

    return (
        <div>
          {/* <ReactBootStrap.Table striped bordered hover variant="sm">*/ }
            <thead>
              <tr>
                <th>Titel</th>
                <th>Forfatter</th>
                <th>Udgivelsesår</th>
                <th>Udgiver</th>
                <th>ISBN</th>
              </tr>
            </thead>
             {bookList.map((item) => (
              <tr key={item.isbn}>
                  <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.publishYear}</td>
                <td>{item.publisher}</td>
                <td>{item.isbn}</td>
              </tr>
            ))} 
          {/* </ReactBootStrap.Table> */}
        </div>
      );
    
}
export default GetAllBooksFetch;