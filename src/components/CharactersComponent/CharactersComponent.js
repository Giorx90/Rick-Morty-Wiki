import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CharactersComponent.module.scss';
import { RMContext } from './../../context/context';

const CharactersComponent = () => {

  const { characters } = useContext(RMContext)
  
  return (  
    <div className={styles.CharactersComponent}>
      <h1>Characters</h1>
      <input type="text" placeholder="find the character"></input>
      <div className='characters-container'>
        {characters.map((character)=>(
          <div className='character-card' key={character.id}>
            <p>{character.name}</p>
            <p>{character.origin.name}</p>
            <img src={character.image} alt={character.name}></img>
          </div>
        ))}
      </div>
      
    </div>
  )
};

CharactersComponent.propTypes = {};

CharactersComponent.defaultProps = {};

export default CharactersComponent;
