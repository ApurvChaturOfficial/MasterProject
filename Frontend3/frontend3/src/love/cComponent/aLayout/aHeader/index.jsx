import React from 'react'
import './index.css';


const Header = ({Redux}) => {
	// JSX	
	return (
		<div className='header'>
			<a href='/#' className='header__logo' >{Redux.subTitle}</a>
		</div>
	)
}

export default Header