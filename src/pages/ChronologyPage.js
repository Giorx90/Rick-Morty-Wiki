import React from 'react'
import { Link } from 'react-router-dom';
import ChronologyComponent from './../components/ChronologyComponent/ChronologyComponent';

const ChronologyPage = () => {
  return (
    <div>
      <Link className='nav-link' to="/">Home</Link>
      <ChronologyComponent></ChronologyComponent>
    </div>
  )
}

export default ChronologyPage
