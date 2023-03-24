import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharactersComponent.module.scss';

const CharactersComponent = () => {

  return (  
    <div className={styles.CharactersComponent}>
      <h1>Characters</h1>
      <input type="text" placeholder="find the character"></input>
    </div>
  )
};

CharactersComponent.propTypes = {};

CharactersComponent.defaultProps = {};

export default CharactersComponent;
