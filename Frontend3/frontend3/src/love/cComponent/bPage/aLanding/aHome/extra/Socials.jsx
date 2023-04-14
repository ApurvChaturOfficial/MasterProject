import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import { FaBeer, FaGithub } from "react-icons/fa";


const HeaderSocials = ({object}) => {
  return (
    object && 
    <div className='header__socials' >
      {object.links &&
        object.links.map(each => {
          const Icon = each.icon
          return (
            <a href={each.url} target="_blank" rel='noreferrer' ><Icon /></a>
          )
        })
      }
      <a href='https://linkedin.com' target="_blank" rel='noreferrer'  ><BsLinkedin /></a>
      <a href='https://linkedin.com' target="_blank" rel='noreferrer' ><FaGithub /></a>
      <a href='https://linkedin.com' target="_blank" rel='noreferrer' ><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials