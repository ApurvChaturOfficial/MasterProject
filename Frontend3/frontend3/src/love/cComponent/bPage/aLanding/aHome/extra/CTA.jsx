import React from 'react'
import CV from '../../../../../hAssets/cv.pdf'

const CTA = ({object}) => {
	return (
		object && 
		<div className='cta' >
			<a href={object.resume.url} download target='_blank' className='btn' >Download CV</a>
			<a href='#contact'  className='btn btn-primary' >Let's Talk</a>
		</div>
	)
}

export default CTA