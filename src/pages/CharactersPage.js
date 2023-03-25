import React from 'react'
import CharactersComponent from '../components/CharactersComponent/CharactersComponent'
import { Link } from 'react-router-dom';

const CharactersPage = () => {
  return (
    <div>
      <Link className='nav-link' to="/">Home</Link>
        <CharactersComponent></CharactersComponent>
    </div>
  )
}

export default CharactersPage
