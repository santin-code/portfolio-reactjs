import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" ><BsLinkedin className='logo-social' /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer" >< FaGithub className='logo-social' /></a>
        <a href="https://dribble.com" target="_blank" rel="noreferrer" > <FiDribbble className='logo-social' /> </a>
    </div>
  )
}

export default HeaderSocials