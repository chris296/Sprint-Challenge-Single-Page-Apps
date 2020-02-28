import React, { useState,useEffect } from "react";
import axios from "axios";

export default function SearchForm({character}) {

  console.log('this is character',{character})

  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = character.filter(character =>
      character.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setSearchResults(results);
  }, [searchTerm]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  }
 
  return (
    <section className="search-form">
     <div>
       <form>
         <input type='text' onChange={handleInputChange} value = {searchTerm} name={"name"} tabIndex = '0' className='prompt search-name' placeholder='search by name' autoComplete='off' />
       </form>
     </div>
    </section>
  );
}
