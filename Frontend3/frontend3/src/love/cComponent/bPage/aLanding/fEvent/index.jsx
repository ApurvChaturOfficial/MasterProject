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
import { BsFillCalendarDateFill, BsFillSkipStartFill } from 'react-icons/bs';
import { BiTargetLock } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';

const Event = ({Redux, disable}) => {
	// Variables
	const object = Redux?.state?.ReceivedObject?.EventList

	// JSX	
	return (
		object &&
		<section id='event'>
			{!disable &&
				<React.Fragment>
					<h5>{object.title}</h5>
					<h2>{object.subTitle}</h2>
				</React.Fragment>
			}

			{object.cards.length ?
				<div className='container event__container' >
					{object.cards.map(each => {
						return (
							<article className='event__item'>
								<div className='event__item-image'>
									<img src={each.basic_info.image.url} alt="" ></img>
								</div>
								<h3><Link to={`${FinalRouteName.Event.RetrieveRoute}/${each._id}`}>{each.basic_info.title}</Link></h3>
								<p className='text-light' >{each.basic_info.sub_title}</p>

								<div style={{marginTop: "1.5em"}} >
									<BsFillSkipStartFill className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Start Date : </small> <br />
									<BiTargetLock className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Target Date : </small> <br />
									<AiOutlineSend className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Completed Date : </small>
								</div>

								<div className='event__item-cta' >
									{each.more_info.links &&
										each.more_info.links.map(each1 => {
											return (
												<Link to={each1.url} className={`btn ${each1.label === 'Demo' && 'btn-primary'}`} >{each1.label}</Link>
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
					<Link to={`${FinalRouteName.Event.ListRoute}`} className='btn' >View All Events</Link>
				</div>
			}
		</section>
	)
}

export default Event