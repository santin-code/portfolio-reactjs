import React from 'react'
import './nav.css'
import { SiHomeassistant } from 'react-icons/si'
import { FaUserAstronaut } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa'
import { RiServiceLine } from 'react-icons/ri'
import { TbMessageCode } from 'react-icons/tb'

const Nav = () => {
  return (
    <nav>
      <a href="#home"> <SiHomeassistant /> </a>
      <a href="#about"> <FaUserAstronaut /> </a>
      <a href="#experience"> <FaLaptopCode /> </a>
      <a href="#services"> <RiServiceLine /> </a>
      <a href="#contact"> <TbMessageCode /> </a>
    </nav>
  )
}

export default Nav