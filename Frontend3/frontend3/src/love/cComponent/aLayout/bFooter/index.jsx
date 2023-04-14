import React from 'react'
import './index.css';


const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo' >APURV CHATUR</a>

            <ul className='permalinks' >
                <li><a href='#' >Home</a></li>
                <li><a href='#' >About</a></li>
                <li><a href='#' >Ex</a></li>
                <li><a href='#' >Home</a></li>
                <li><a href='#' >Home</a></li>
                <li><a href='#' >Home</a></li>
            </ul>

            <div className='footer__socials' >
                <a href=''>Facebook</a>
                <a href=''>Instagram</a>
                <a href=''>Twitter</a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Copyright</small>
            </div>

        </footer>
    )
}

export default Footer