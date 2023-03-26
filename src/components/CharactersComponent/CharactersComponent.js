import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CharactersComponent.module.scss';
import { RMContext } from './../../context/context';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SimpleBar from 'simplebar-react';
const CharactersComponent = () => {

  const { characters } = useContext(RMContext)
  
  let [search, setSearch] = useState("")
  
  const [t, i18n] = useTranslation("global");
  

  return (  
    <div className={styles.CharactersComponent}>
      <h1 className='title'>{t("Navigation.characters")}</h1>
      <input type="text" placeholder="find the character" onChange={(e)=>{setSearch(e.target.value)}}></input>
      <SimpleBar>
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
              <div>
                <p>{character.name}</p>
                <p>{character.origin.name}</p>
              </div>
              <div>
                <img src={character.image} alt={character.name}></img>
              </div>
            </div>
            </Link>
          );
          })}
        </div>
      </SimpleBar>
    </div>
  )
};

CharactersComponent.propTypes = {};

CharactersComponent.defaultProps = {};

export default CharactersComponent;
