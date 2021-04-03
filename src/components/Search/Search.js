import React from 'react';
import { FcSearch } from 'react-icons/fc';

const Search = ({handleSearch}) => {
    const [keyword, setKeyword] = React.useState("");
    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    return(
        <>
            <input 
                className="textInput"
                type="text"
                placeholder="Search about books"
                onChange= {handleChange}
                value={keyword}
            />
            <button className="searchButton" onClick={() => handleSearch(keyword)}><FcSearch /></button>
        </>
    )
}

export default Search;