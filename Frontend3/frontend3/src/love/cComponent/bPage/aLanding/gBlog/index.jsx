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

const Blog = ({Redux, disable}) => {
	// Variables
	const object = Redux.state.ReceivedObject.BlogList

	// JSX	
	return (
		object &&
		<section id='blog'>
			{!disable &&
				<React.Fragment>
					<h5>{object.title}</h5>
					<h2>{object.subTitle}</h2>
				</React.Fragment>
			}

			<div className='container blog__container' >
				{object.cards &&
					object.cards.map(each => {
						return (
							<article className='blog__item'>
								<div className='blog__item-image'>
									<img src={each.basic_info.image.url} alt="" ></img>
								</div>
								<h3><Link to={`${FinalRouteName.Blog.RetrieveRoute}/${each._id}`}>{each.basic_info.title}</Link></h3>
								<p className='text-light' >{each.basic_info.sub_title}</p>
							</article>
						)
					})
				}
			</div>

			{!disable &&
				<div className='cta' >
					<Link to={`${FinalRouteName.Blog.ListRoute}`} className='btn' >View All Blogs</Link>
				</div>
			}
		</section>
	)
}

export default Blog