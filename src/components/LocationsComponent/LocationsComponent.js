import React from 'react';
import PropTypes from 'prop-types';
import styles from './LocationsComponent.module.scss';

const LocationsComponent = () => (
  <div className={styles.LocationsComponent}>
    <h1>Locations</h1>
    <input type="text" placeholder="find the location"></input>
  </div>
);

LocationsComponent.propTypes = {};

LocationsComponent.defaultProps = {};

export default LocationsComponent;
