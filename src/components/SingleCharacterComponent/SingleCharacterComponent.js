import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './SingleCharacterComponent.module.scss';
import { RMContext } from './../../context/context';
import { useParams } from 'react-router-dom';

const SingleCharacterComponent = () => {

  const { characters } = useContext(RMContext)

  let { id } = useParams();
  
  return (
    <div className={styles.SingleCharacterComponent}>
      {characters.filter((character)=> {
        if (character.id === {id}) {
            return character
            }
         }).map((character)=>{
           return (
           <div className={styles.characterCard} key={character.id}>
             <p>{character.name}</p>
             <p>{character.origin.name}</p>
             <img src={character.image} alt={character.name}></img>
           </div>
         );
    })}
    </div>
  )
};

SingleCharacterComponent.propTypes = {};

SingleCharacterComponent.defaultProps = {};

export default SingleCharacterComponent;
