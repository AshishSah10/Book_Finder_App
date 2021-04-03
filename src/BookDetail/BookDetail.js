import { Link } from "react-router-dom";

const BookDetail = ({bookDetail}) => {
    // const bookDetail = {
    //     "title": "Would You Kill the Fat Man?",
    //     "subtitle": "The Trolley Problem and What Your Answer Tells Us about Right and Wrong",
    //     "authors": [
    //         "David Edmonds"
    //     ],
    //     "publisher": "Princeton University Press",
    //     "publishedDate": "2013-10-06",
    //     "description": "A runaway train is racing toward five men who are tied to the track. Unless the train is stopped, it will inevitably kill all five men. You are standing on a footbridge looking down on the unfolding disaster. However, a fat man, a stranger, is standing next to you: if you push him off the bridge, he will topple onto the line and, although he will die, his chunky body will stop the train, saving five lives. Would you kill the fat man? The question may seem bizarre. But it's one variation of a puzzle that has baffled moral philosophers for almost half a century and that more recently has come to preoccupy neuroscientists, psychologists, and other thinkers as well. In this book, David Edmonds, coauthor of the best-selling Wittgenstein's Poker, tells the riveting story of why and how philosophers have struggled with this ethical dilemma, sometimes called the trolley problem. In the process, he provides an entertaining and informative tour through the history of moral philosophy. Most people feel it's wrong to kill the fat man. But why? After all, in taking one life you could save five. As Edmonds shows, answering the question is far more complex--and important--than it first appears. In fact, how we answer it tells us a great deal about right and wrong.",
    //     "industryIdentifiers": [
    //         {
    //             "type": "ISBN_13",
    //             "identifier": "9780691154022"
    //         },
    //         {
    //             "type": "ISBN_10",
    //             "identifier": "0691154023"
    //         }
    //     ],
    //     "readingModes": {
    //         "text": false,
    //         "image": true
    //     },
    //     "pageCount": 240,
    //     "printType": "BOOK",
    //     "categories": [
    //         "Philosophy"
    //     ],
    //     "averageRating": 4,
    //     "ratingsCount": 3,
    //     "maturityRating": "NOT_MATURE",
    //     "allowAnonLogging": false,
    //     "contentVersion": "preview-1.0.0",
    //     "panelizationSummary": {
    //         "containsEpubBubbles": false,
    //         "containsImageBubbles": false
    //     },
    //     "imageLinks": {
    //         "smallThumbnail": "http://books.google.com/books/content?id=52eYDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    //         "thumbnail": "http://books.google.com/books/content?id=52eYDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    //     },
    //     "language": "en",
    //     "previewLink": "http://books.google.co.in/books?id=52eYDwAAQBAJ&pg=PA38&dq=man&hl=&cd=5&source=gbs_api",
    //     "infoLink": "http://books.google.co.in/books?id=52eYDwAAQBAJ&dq=man&hl=&source=gbs_api",
    //     "canonicalVolumeLink": "https://books.google.com/books/about/Would_You_Kill_the_Fat_Man.html?hl=&id=52eYDwAAQBAJ"
    // }
    console.log("inside bookdetails")
    console.log(bookDetail)
    let authors = "|";
    console.log(bookDetail.authors.length)
    for(let i = 0; i < bookDetail.authors.length; i++){
        authors += bookDetail.authors[i]+" |";
    }
    return(
        <div className="bookInfo">
           <h1>{bookDetail.title}</h1>
           <hr></hr>
           <img src={bookDetail.imageLinks.smallThumbnail} />
           <h3>{bookDetail.industryIdentifiers[0].type}: {bookDetail.industryIdentifiers[0].identifier}</h3>
           <h3>{bookDetail.industryIdentifiers[1].type}: {bookDetail.industryIdentifiers[1].identifier}</h3>
    
           <h4>Authors: {authors}</h4>
           <h4>Publisher: {bookDetail.publisher}</h4>
           <h4>publishedDate: {bookDetail.publishedDate}</h4>
           <h4>Rating: {bookDetail.averageRating}/5({bookDetail.ratingsCount})</h4>
           <h4>Language: {bookDetail.language}</h4>
           <h4>PageCount: {bookDetail.pageCount}</h4>
           <h4>Subtitle: {bookDetail.subtitle}</h4>
           <a href={bookDetail.previewLink} target="_blank"><h4 style={{display: "inline"}}>Preview This Book</h4></a><br></br>
           <a href={bookDetail.infoLink} target="_blank"><h4 style={{display: "inline"}}>Buy This Book </h4></a>
           <h4>Summary: </h4><p>{bookDetail.description}</p>
        </div>
    )
}

export default BookDetail;