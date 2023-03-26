import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ChronologyComponent.module.scss';
import { RMContext } from './../../context/context';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const ChronologyComponent = () => {
  
  const { characters } = useContext(RMContext)

  const [t, i18n] = useTranslation("global");

  const filteredCharacters = characters.filter((character)=>{
    return character.name.toLowerCase().includes("Rick")     
  })
  
  return (
  <div className={styles.ChronologyComponent}>
    <h1 className='title'>{t("Navigation.chronology")}</h1>
    {filteredCharacters.map((character)=>{
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
  )
};

ChronologyComponent.propTypes = {};

ChronologyComponent.defaultProps = {};

export default ChronologyComponent;
