import React from 'react'
import './nav.css'
import { SiHomeassistant } from 'react-icons/si'
import { FaUserAstronaut } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa'
import { RiServiceLine } from 'react-icons/ri'
import { TbMessageCode } from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {

  const[active, setActive] = useState('#')

  return (
    <nav>
      <a href="#home" onClick={()=> setActive('#home') } className={active === '#home' ? 'active' : ''}  > <SiHomeassistant /> </a>
      <a href="#about" onClick={()=> setActive('#about') } className={active === '#about' ? 'active' : ''}  > <FaUserAstronaut /> </a>
      <a href="#experience" onClick={()=> setActive('#experience') } className={active === '#experience' ? 'active' : ''}  > <FaLaptopCode /> </a>
      <a href="#services"  onClick={()=> setActive('#services') } className={active === '#services' ? 'active' : ''}  > <RiServiceLine /> </a>
      <a href="#contact"  onClick={()=> setActive('#contact') } className={active === '#contact' ? 'active' : ''}   > <TbMessageCode /> </a>
    </nav>
  )
}

export default Nav