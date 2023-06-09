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
import Loader from '../../../cComponent/cLoader';


const EventRetrieve = ({ Redux1 }) => {
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
		Redux.state.ExtraObject?.loading ?
		<Loader />
		:
    <React.Fragment>
			<Header heading={"My Events"} />

			<section id='event-card-single_'>
				{/* <h5>{Redux.state.ReceivedObject?.EventCardRetrieve?.title}</h5>
				<h2>{Redux.state.ReceivedObject?.EventCardRetrieve?.subTitle}</h2> */}

				<div className='container event-card-single__container' >
					<div className='event-card-single__me' >
						<div className='event-card-single__me-image' >
							<img src={Redux.state.ReceivedObject?.EventCardRetrieve?.image?.url} alt="" />
						</div>
					</div>

					<div className='event-card-single__content' >
						<span class={Redux.state.ReceivedObject?.EventCardRetrieve?.date?.complete ? "event__badge1" : "event__badge2"}>
							{Redux.state.ReceivedObject?.EventCardRetrieve?.date?.complete ? "Event Closed" : "Event Open"} 
						</span>
						<h2 style={{marginTop: "0.25em"}}>{Redux.state.ReceivedObject?.EventCardRetrieve?.title}</h2>
						<h4 style={{marginTop: "0.5em"}} className="text-light" >{Redux.state.ReceivedObject?.EventCardRetrieve?.subTitle}</h4>
						
						<div style={{marginTop: "1.5em"}} >
							<BsFillSkipStartFill className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Start: {Redux.state.ReceivedObject?.EventCardRetrieve?.date?.start}</small> <br />
							<BiTargetLock className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Target: {Redux.state.ReceivedObject?.EventCardRetrieve?.date?.target}</small> <br />
							<AiOutlineSend className='event__details-icon' fontSize={"18px"} /><small className='text-light'>Complete: {Redux.state.ReceivedObject?.EventCardRetrieve?.date?.complete}</small>
						</div>

						<p>{parse(Redux.state.ReceivedObject?.EventCardRetrieve?.description || "")}</p>

						<div className='portfolio__item-cta' >
							{Redux.state.ReceivedObject?.EventCardRetrieve?.links &&
								Redux.state.ReceivedObject?.EventCardRetrieve?.links.map(each => {
									return (
										<a href={each.url} target="_blank" rel='noreferrer' className={`btn ${(each.label === 'App Demo' || each.label === "Admin Demo") && 'btn-primary'}`} >{each.label}</a>
									)
								})
							}
						</div>	

					</div>
				</div>  

				<div className='container portfolio-card-single__more' >
					<h3>Details</h3>
					<div className='rich-text' >
						{parse(Redux.state.ReceivedObject?.EventCardRetrieve?.detail || "")}
					</div>
				</div>
          
				{Redux.state.ReceivedObject?.EventCardRetrieve?.references?.length > 0 &&
					<div className='container portfolio-card-single__more' >
						<h3>References</h3>
						<p>
							{Redux.state.ReceivedObject?.EventCardRetrieve?.references.map(each => {
									return (
										<React.Fragment>
											{each.label} :  <a href={each.url} style={{paddingLeft: "2em"}} target='_blank' rel="noreferrer" >{each.url}</a> <br/>
										</React.Fragment>
									)
								})
							}
						</p>
					</div>
				}
			</section>
    </React.Fragment>
  )
}

export default EventRetrieve