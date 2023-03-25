import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ChronologyComponent.module.scss';
import { RMContext } from './../../context/context';
import { Link } from 'react-router-dom';




const ChronologyComponent = () => {
  
  const { characters } = useContext(RMContext)

  return (
  <div className={styles.ChronologyComponent}>
    <h1>Chronology</h1>
    
  </div>
  )
};

ChronologyComponent.propTypes = {};

ChronologyComponent.defaultProps = {};

export default ChronologyComponent;
