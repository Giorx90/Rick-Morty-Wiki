import React from 'react';
import styles from './NavigationComponent.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavigationComponent = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.NavigationComponent}>
      <Link className='nav-link' to="/characters">{t("Navigation.characters")}</Link>
      <Link className='nav-link' to="/locations">{t("Navigation.locations")}</Link>
      <Link className='nav-link' to="/chronology">{t("Navigation.chronology")}</Link>  
    </div>
  )
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
