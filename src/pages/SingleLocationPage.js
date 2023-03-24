import React from 'react'
import SingleLocationComponent from './../components/SingleLocationComponent/SingleLocationComponent';
import { Link } from 'react-router-dom';

const SingleLocationPage = () => {
  return (
    <div>
      <Link className='nav-link' to="/locations">Volver</Link>
      <SingleLocationComponent></SingleLocationComponent>
    </div>
  )
}

export default SingleLocationPage
