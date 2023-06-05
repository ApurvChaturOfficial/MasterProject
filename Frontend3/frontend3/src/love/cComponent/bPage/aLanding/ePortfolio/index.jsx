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
	const object = Redux?.state?.ReceivedObject?.PortfolioList

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

			{object.cards.length ?
				<div className='container portfolio__container' >
					{object.cards.map(each => {
						return (
							<article className='portfolio__item'>
								<div className='portfolio__item-image'>
									<img src={each.basic_info.image.url} alt="" ></img>
								</div>
								<h3><Link to={`${FinalRouteName.Portfolio.RetrieveRoute}/${each._id}`}>{each.basic_info.title}</Link></h3>
								<p className='text-light' >{each.basic_info.sub_title}</p>
								<div className='portfolio__item-cta' >
									{each.more_info.links &&
										each.more_info.links.map(each1 => {
											return (
												<a href={each1.url} target="_blank" rel='noreferrer' className={`btn ${(each1.label === 'App Demo' || each1.label === "Admin Demo") && 'btn-primary'}`} >{each1.label}</a>
											)
										})
									}
								</div>
							</article>
						)
					}) }
				</div>
				:
				<p className='my__error' >No items to display!</p>
			}

			{!disable && object.cards.length !== 0 &&
				<div className='cta' >
					<Link to={`${FinalRouteName.Portfolio.ListRoute}`} className='btn' >View All Projects</Link>
				</div>
			}
	</section>
	)
}

export default Portfolio