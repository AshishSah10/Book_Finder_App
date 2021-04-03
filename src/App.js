import './App.scss';
import { useState } from "react"
import Search from './components/Search/Search';
import {RenderBooks} from "./RenderBooks/RenderBooks.js"
import { Redirect, Route, Switch } from 'react-router';
import BookDetail from './BookDetail/BookDetail';
import { useHistory} from "react-router-dom";
import ErrorPage from './components/Error/ErrorPage';

function App() {
  const history = useHistory();
  const [searchString, setSearchString] = useState("");
  const [bookList, setBookList] = useState();
  const [book, setBook] = useState();
  const handleBookClick = (bookDetail) =>{
    console.log(history);
    //window.open('http://localhost:3000/bookId', "_blank");
    //<Redirect from="/" to="/bookId" />
    // <Redirect to={{
    //     pathname: '/bookId',
    //     state: {from: "/"}
    // }} />
    setBook(bookDetail)
    history.push('/isbn/'+bookDetail.industryIdentifiers[0].identifier)
  }
  let newList = [];
  const handleSearch = (keyword) => {
    setSearchString(keyword)
    history.push("/")
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=35&key=AIzaSyDqpr2CdszAZ7eUg7iDxT9A96K68bJ47pI`)
      .then(response =>	response.json()) 
      .then(data => {
        data.items.map(
          d => {
              //console.log(d)
              newList.push(d.volumeInfo)
              //newList.push(d)
             }
         )
         setBookList(newList)
         console.log(newList.length)
      }
      ).catch(error => {
          console.log(error)
          setBookList();
      })
  }
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Book Finder App</h1>
        <Search handleSearch={handleSearch}/>
      </header>
      {/* {bookList && <RenderBooks bookList={bookList}/>} */}
      <Switch>
          <Route exact path="/error" ><ErrorPage/></Route>
          <Route exact path="/isbn/:isbnNo" >
            {book ? <BookDetail bookDetail={book}/> : <Redirect to="/error" />}
          </Route>
          <Route exact path="/">
            {bookList && <RenderBooks bookList={bookList} handleBookClick={handleBookClick}/>}
          </Route>
       </Switch>
    </div>
    </>
  );
}

export default App;
