import React from "react";

const Details = ({book, handleSection, index, name, color, setSelected}) => {

  if(!book || !book.volumeInfo){
    return <div>Loading...</div>
  }

  const Selection = () => {
    handleSection(index, true);
    setSelected(true)
  }

  const bookData = {
    "img": book.volumeInfo.imageLinks?.thumbnail || "", 
    "title": book.volumeInfo.title || "",
    "descrip": book.volumeInfo.description || ""
  }

  console.log(bookData.descrip.length);

    return(
        <div className={name} style={{backgroundColor:color}} onClick={Selection}>
           <div className="image">
              <img src={bookData.img} alt="Book" />
           </div>

           <div className="info">
                <h3>{bookData.title}</h3>

                <div className="description">
                    {bookData.descrip.length >= 200 ? bookData.descrip.substring(0, 200) : bookData.descrip}
                    {bookData.descrip.length ===0  && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. </p>}
                </div>

                <div className="btn">
                     <a href="/">Now Read</a>
                </div>
           </div>
        </div>
    )
}


export default Details;