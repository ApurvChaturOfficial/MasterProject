import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterFill } from 'react-icons/ri';
import './index.css';


const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo' >APURV CHATUR</a>

            <ul className='permalinks' >
                <li><a href='#' >Home</a></li>
                <li><a href='#about' >About</a></li>
                <li><a href='#experience' >Experience</a></li>
                <li><a href='#service' >Service</a></li>
                <li><a href='#portfolio' >Porfolio</a></li>
                <li><a href='#blog' >Blog</a></li>
            </ul>

            <div className='footer__socials' >
                <a href=''><FaFacebookF /></a>
                <a href=''><FaInstagram /></a>
                <a href=''><RiTwitterFill /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Copyright</small>
            </div>

        </footer>
    )
}

export default Footer