import React from 'react'
import './index.css';
import { Link, useParams } from 'react-router-dom';
import IMG1 from '../../../../hAssets/portfolio1.jpg'
import IMG2 from '../../../../hAssets/portfolio2.jpg'
import IMG3 from '../../../../hAssets/portfolio3.jpg'
import IMG4 from '../../../../hAssets/portfolio4.jpg'
import IMG5 from '../../../../hAssets/portfolio5.png'
import IMG6 from '../../../../hAssets/portfolio6.jpg'
import FinalRouteName from '../../../../gRoute/FinalRouteName';

const Portfolio = ({Redux, disable}) => {
	// Variables
	const object = Redux.state.ReceivedObject.PortfolioList

	// JSX	
	return (
		object &&
		<section id='portfolio'>
			{!disable &&
				<React.Fragment>
					<h5>{object.title}</h5>
					<h2>{object.subTitle}</h2>
				</React.Fragment>
			}

			<div className='container portfolio__container' >
				{object.cards &&
					object.cards.map(each => {
						return (
							<article className='portfolio__item'>
								<div className='portfolio__item-image'>
									<img src={each.basic_info.image.url} alt="" ></img>
								</div>
								<h3><Link to={`${FinalRouteName.Portfolio.RetrieveRoute}/${each._id}`}>{each.basic_info.title}</Link></h3>
								<p className='text-light' >{each.basic_info.sub_title}</p>
								<div className='portfolio__item-cta' >
									<Link to={each.toRetrieve} className='btn' >Github</Link>
									<Link to='https://github.com' className='btn btn-primary' target='_blank' >Live Demo</Link>
								</div>
							</article>
						)
					})
				}
			</div>

			{!disable &&
				<div className='cta' >
					<Link to={`${FinalRouteName.Portfolio.ListRoute}`} className='btn' >View All Projects</Link>
				</div>
			}
	</section>
	)
}

export default Portfolio