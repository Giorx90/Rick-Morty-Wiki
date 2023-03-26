import React from 'react'
import { Link } from 'react-router-dom';
import LocationsComponent from './../components/LocationsComponent/LocationsComponent';
import homeImage from '../assets/images/home.png'

const LocationsPage = () => {
  return (
    <div>
      <Link className='home-link' to="/"><img className="nav-img" src={homeImage} alt=""/></Link>
      <LocationsComponent></LocationsComponent>
    </div>
  )
}

export default LocationsPage
