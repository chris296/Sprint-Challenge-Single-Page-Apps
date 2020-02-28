import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'
import SearchForm from "./SearchForm";

export default function CharacterList() {

  const [character, setCharacter] = useState([]);
  // TODO: Add useState to track data from useEffect
  const [query, setQuery] = useState('');
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res);
      const characters = res.data.results.filter(char =>
        char.name.toLowerCase().includes(query.toLowerCase())
        );
      setCharacter(characters);  
    
    })
    .catch(err => {
      console.log(err);
    });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  return (
    <section className="character-list">
      <div>
      <form>
         <input type='text' onChange={handleInputChange} value = {query} name={"name"} tabIndex = '0' className='prompt search-name' placeholder='search by name' autoComplete='off' />
       </form>
      </div>
      <div>
      {character.map(c =>(
        <CharacterCard key={c.name} character={c} />
      ))}
      </div>
    </section>
  );
}
