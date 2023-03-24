import React from 'react'
import { Link } from 'react-router-dom';
import LocationsComponent from './../components/LocationsComponent/LocationsComponent';

const LocationsPage = () => {
  return (
    <div>
      <Link className='nav-link' to="/">Home</Link>
      <LocationsComponent></LocationsComponent>
    </div>
  )
}

export default LocationsPage
