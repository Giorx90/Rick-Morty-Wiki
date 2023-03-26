import React from 'react'
import CharactersComponent from '../components/CharactersComponent/CharactersComponent'
import { Link } from 'react-router-dom';
import homeImage from '../assets/images/home.png'

const CharactersPage = () => {
  return (
    <div>
      <Link className='home-link' to="/"><img className="nav-img" src={homeImage} alt=""/></Link>
        <CharactersComponent></CharactersComponent>
    </div>
  )
}

export default CharactersPage
