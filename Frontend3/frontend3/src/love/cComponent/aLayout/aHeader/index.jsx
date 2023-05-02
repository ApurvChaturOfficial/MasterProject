import React from 'react'
import './index.css';


const Header = ({heading}) => {
    return (
        <div className='header'>
            <a href='/#' className='header__logo' >{heading}</a>

            <ul className='permalinks' >
                <li><a href='#' >Home</a></li>
                <li><a href='#about' >About</a></li>
                <li><a href='#experience' >Experience</a></li>
                <li><a href='#service' >Service</a></li>
                <li><a href='#portfolio' >Porfolio</a></li>
                <li><a href='#blog' >Blog</a></li>
            </ul>
        </div>
    )
}

export default Header