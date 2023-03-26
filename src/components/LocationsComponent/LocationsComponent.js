import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './LocationsComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { RMContext } from './../../context/context';

const LocationsComponent = () => {

  const { locations } = useContext(RMContext)

  const [t, i18n] = useTranslation("global");

  
  return(
    <div className={styles.LocationsComponent}>
      <h1 className='title'>{t("Navigation.locations")}</h1>
    </div>
  )
};

LocationsComponent.propTypes = {};

LocationsComponent.defaultProps = {};

export default LocationsComponent;
