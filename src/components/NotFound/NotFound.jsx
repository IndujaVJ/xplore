
import React from 'react'
import './NotFound.scss'
import { Link } from 'react-router-dom'
import ballon from '../../images/baloon.svg'

const NotFound = () => {
  return (
    <div className="centerContainer">
      <h1>OOPS!</h1>
      <img src={ballon} />
      <h3>THERE IS NOTHING HERE</h3>
      <p>Find what you are looking for from home</p>

      <Link to={'/home'}>{'GO'}</Link>
    </div>
  )
}

export default NotFound
