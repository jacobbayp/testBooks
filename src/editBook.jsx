import React, { useState } from "react";
import GetAllBooks from "./GetAllBooks"
const editBookURL= "http://localhost:8080/testjc/api/book/add";

function EditBook(){
    return(
        <div>
     
        <form>
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
           /*onClick={handleSubmit}*/
          value="Submit"
        ></input>
        </form>
        </div>
    )
}


export default EditBook;