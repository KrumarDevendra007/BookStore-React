import React from "react";

const MoreBook = ({ books }) =>{
    return (
          <div className="more-books">
            {
                books.map(book=>(
                    <div>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
                    </div>
                ))
            }

          </div>
    )
}
export default MoreBook;