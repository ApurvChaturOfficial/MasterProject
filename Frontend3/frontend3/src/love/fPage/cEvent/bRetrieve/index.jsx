import React, { useEffect } from 'react'
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Header from '../../../cComponent/aLayout/aHeader'
import Footer from '../../../cComponent/aLayout/bFooter'
import ME1 from '../../../hAssets/me-about.jpg'
import APIs from './extra/APIs';
import { Action } from './extra/State';
import parse from 'html-react-parser';
import { BsFillCalendarDateFill, BsFillSkipStartFill } from 'react-icons/bs';
import { BiTargetLock } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';


const EventRetrieve = () => {
	const { id } = useParams()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.EventRetrieveState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		EventRetrieveAPICall: () => APIs.EventCardRetrieveAPI(Redux, id),
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.EventRetrieveAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
	// JSX
  return (
    <React.Fragment>
			<Header heading={"My Events"} />

			<section id='event-card-single_'>
				{/* <h5>{Redux.state.ReceivedObject?.EventCardRetrieve?.title}</h5>
				<h2>{Redux.state.ReceivedObject?.EventCardRetrieve?.subTitle}</h2> */}

				<div className='container event-card-single__container' >
					<div className='event-card-single__me' >
						<div className='event-card-single__me-image' >
							<img src={ME1} />
						</div>
					</div>

					<div className='event-card-single__content' >
						<h2>{Redux.state.ReceivedObject?.EventCardRetrieve?.title}</h2>
						<h4 className='text-light' >{Redux.state.ReceivedObject?.EventCardRetrieve?.subTitle}</h4>
						
						<div style={{marginTop: "1.5em"}} >
							<BsFillSkipStartFill className='event__details-icon' fontSize={"18px"} /><small >Start Date : </small> <br />
							<BiTargetLock className='event__details-icon' fontSize={"18px"} /><small >Target Date : </small> <br />
							<AiOutlineSend className='event__details-icon' fontSize={"18px"} /><small >Completed Date : </small>
						</div>

						<p>{parse(Redux.state.ReceivedObject?.EventCardRetrieve?.description || "")}</p>

						<div className='portfolio__item-cta' >
							{Redux.state.ReceivedObject?.EventCardRetrieve?.links &&
								Redux.state.ReceivedObject?.EventCardRetrieve?.links.map(each => {
									return (
										<Link to={each.link} className={`btn ${each.label === 'Demo' && 'btn-primary'}`} >{each.label}</Link>
									)
								})
							}
						</div>	

					</div>
				</div>  

				<div className='container event-card-single__more' >
					<h3>Details</h3>
					<p>{parse(Redux.state.ReceivedObject?.EventCardRetrieve?.detail || "")}</p>
				</div>
          
				<div className='container event-card-single__more' >
					<h3>References</h3>
					<p>{parse(Redux.state.ReceivedObject?.EventCardRetrieve?.detail || "")}</p>
				</div>
			</section>
    </React.Fragment>
  )
}

export default EventRetrieve