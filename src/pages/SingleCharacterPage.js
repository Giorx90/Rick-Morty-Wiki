import React from 'react'
import { Link } from 'react-router-dom';
import SingleCharacterComponent from './../components/SingleCharacterComponent/SingleCharacterComponent';

const SingleCharacterPage = () => {
  return (
    <div>
      <Link className='nav-link' to="/characters">Volver</Link>
      <SingleCharacterComponent></SingleCharacterComponent>
    </div>
  )
}

export default SingleCharacterPage
