import React from 'react'
import './index.css';


const Header = ({heading}) => {
    return (
        <div className='header'>
            <a href='/#' className='header__logo' >{heading}</a>

            <ul className='permalinks2' >
                <li><a href='/#' >Home</a></li>
                <li><a href='/#' >About</a></li>
                <li><a href='/#' >Experience</a></li>
                <li><a href='/#' >Service</a></li>
                <li><a href='/#' >Portfolio</a></li>
                <li><a href='/#' >Testimonial</a></li>
            </ul>
        </div>
    )
}

export default Header