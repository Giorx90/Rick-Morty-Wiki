import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CharactersComponent.module.scss';
import { RMContext } from './../../context/context';
import { Link } from 'react-router-dom';

const CharactersComponent = () => {

  const { characters } = useContext(RMContext)
  
  let [search, setSearch] = useState("")
  
  

  return (  
    <div className={styles.CharactersComponent}>
      <h1>Characters</h1>
      <input type="text" placeholder="find the character" onChange={(e)=>{setSearch(e.target.value)}}></input>
      <div className={styles.charactersContainer}>
        {characters.filter((character)=> {
          if (search === "") {
            return character
          } else if (character.name.toLowerCase().includes(search.toLowerCase())) {
            return character
          }
        }).map((character)=>{
          return (
          <Link to={`/character/${character.id}`}>
          <div className={styles.characterCard} key={character.id}>
            <p>{character.name}</p>
            <p>{character.origin.name}</p>
            <img src={character.image} alt={character.name}></img>
          </div>
          </Link>
        );
        })}
      </div>
    </div>
  )
};

CharactersComponent.propTypes = {};

CharactersComponent.defaultProps = {};

export default CharactersComponent;
