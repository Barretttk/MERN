import React from 'react';
import { useParams } from 'react-router-dom';


const Search = () => {
    const {search_request} = useParams ();

    return (


    
    <div>
        <h1>Anime Seach</h1>
        <h2>Search For Your favor Title</h2>
        <input type="text" name="title"/>
    
    <div></div> <div>
        <button>Search </button>
        </div>
        <br />
        <hr />
        <h2>Search results for :{search_request}</h2>
        
<hr />
    </div>
  )
}



export default Search;