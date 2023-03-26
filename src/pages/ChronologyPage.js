import React from 'react'
import { Link } from 'react-router-dom';
import ChronologyComponent from './../components/ChronologyComponent/ChronologyComponent';
import homeImage from '../assets/images/home.png'

const ChronologyPage = () => {
  return (
    <div>
      <Link className='home-link' to="/"><img className="nav-img" src={homeImage} alt=""/></Link>
      <ChronologyComponent></ChronologyComponent>
    </div>
  )
}

export default ChronologyPage
