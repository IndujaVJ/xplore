import React from 'react'
import logo from '../../images/logo.svg'
import stamp from '../../images/cert.svg'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} />
      <div className="name">
        <span className="dark">
            Xplore Research Solutions
        </span>
        <br/>
        <span className="objective">
        Creating New Insights
        </span>
      </div>
      <img className="cert" width={70} src={stamp} />
    </header>
  )
}
export const withHeader = (Comp) => {
  const NewComp = () => (
    <div className="headerWrapper">
      <Header />
      <Comp/>
    </div>
  )
  return NewComp
}
export default Header
