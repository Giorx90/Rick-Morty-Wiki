import React from 'react';
import PropTypes from 'prop-types';
import styles from './TranslationComponent.module.scss';
import { useTranslation } from 'react-i18next';
import en from "../../assets/images/en.jpg"
import es from "../../assets/images/es.jpg"


const TranslationComponent = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <div className={styles.TranslationComponent}>
      <img onClick={() => i18n.changeLanguage("es")} className={styles.TransImg} src={es} alt=''/>
      <img onClick={() => i18n.changeLanguage("en")} className={styles.TransImg} src={en} alt=''/>
    </div>
  )
};

TranslationComponent.propTypes = {};

TranslationComponent.defaultProps = {};

export default TranslationComponent;
