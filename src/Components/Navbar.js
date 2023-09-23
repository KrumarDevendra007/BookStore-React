import React, { useState } from "react";

const Navbar = ({handleSearch}) => {
   
    const [search, setSearch] = useState('');
    
    const handle = () => {
        handleSearch(search)
    }



    return(
        <div className="navbar">
            <div className="logo">
            <img src= "https://books-store-rouge.vercel.app/images/logo.png"  alt="logo" />
            <img src="data:image/png;base64,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" alt="keazoNBOOKS" />
            </div>

            <div className="search">
                <input type="text" placeholder="Search For the book" />
                <button onClick={handle}>Search</button>
            </div>

            <div className="nav-icons">
                <img src="https://shorturl.at/bhmy7"  alt="book" />
                <img src="https://shorturl.at/hIU02"  alt="notif" />
                <img src= "https://shorturl.at/aoJW9" alt="dimond" />
               
                <img className="profile" src= "https://shorturl.at/fsJ18" alt="keazoNBOOKS" />
            </div>
        </div>
    )
}


export default Navbar;