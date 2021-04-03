// import { useEffect, useState } from "react"
import { useHistory, Redirect } from "react-router-dom";



export const RenderBooks = ({bookList, handleBookClick}) => {
    bookList = bookList.filter(book => book.publisher && book.subtitle && book.authors && book.description)
    console.log(bookList)
    const history = useHistory();
    // function handleClick(book){
    //     console.log(history);
    //     //window.open('http://localhost:3000/bookId', "_blank");
    //     //<Redirect from="/" to="/bookId" />
    //     // <Redirect to={{
    //     //     pathname: '/bookId',
    //     //     state: {from: "/"}
    //     // }} />
    //     history.push('/bookId')
    // }
    return (
        <>
            {
            bookList ?  
            <div className="booksContainer">
                {bookList.map( book => (
                <div className="bookItem" onClick={() => handleBookClick(book)}>
                    <div className="info-primary">
                        <h3>Title: {book.title.substring(0,50)}</h3>
                        <img src={book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail: `null` } />
                    </div>
                    <div className="info-secondary">
                        <div>Authors: {book.authors}</div>
                        <div>Publisher: {book.publisher}</div>
                        <div>Subtitle: {book.subtitle}</div>
                    </div>
                    <hr></hr>
                </div>
                ))} 
            </div>  :
             <p>Fetching...</p>
            }
        </>
    )
}