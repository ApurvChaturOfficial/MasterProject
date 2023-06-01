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


const PortfolioRetrieve = ({ Redux1 }) => {
	const { id } = useParams()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.PortfolioRetrieveState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		PortfolioRetrieveAPICall: () => APIs.PortfolioCardRetrieveAPI(Redux, id, Redux1),
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.PortfolioRetrieveAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
	// JSX
  return (
    <React.Fragment>
			<Header heading={"My Portfolio"} />

			<section id='portfolio-card-single'>
				<div className='container portfolio-card-single__container' >
					<div className='portfolio-card-single__me' >
						<div className='portfolio-card-single__me-image' >
							<img src={Redux.state.ReceivedObject?.PortfolioCardRetrieve?.image?.url} alt="" />
						</div>
					</div>

					<div className='portfolio-card-single__content' >
						<h2>{Redux.state.ReceivedObject?.PortfolioCardRetrieve?.title}</h2>
						<h4 style={{marginTop: "0.5em"}} className="text-light" >{Redux.state.ReceivedObject?.PortfolioCardRetrieve?.subTitle}</h4>

						<p>{parse(Redux.state.ReceivedObject?.PortfolioCardRetrieve?.description || "")}</p>

						<div className='portfolio__item-cta' >
							{Redux.state.ReceivedObject?.PortfolioCardRetrieve?.links &&
								Redux.state.ReceivedObject?.PortfolioCardRetrieve?.links.map(each => {
									return (
										<Link to={each.link} className={`btn ${each.label === 'Demo' && 'btn-primary'}`} >{each.label}</Link>
									)
								})
							}
						</div>	
					</div>
				</div>  

				<div className='container portfolio-card-single__more' >
					<h3>Details</h3>
					<div className='rich-text' >
						{parse(Redux.state.ReceivedObject?.PortfolioCardRetrieve?.detail || "")}
					</div>
				</div>
          
				{Redux.state.ReceivedObject?.PortfolioCardRetrieve?.references.length > 0 &&
					<div className='container portfolio-card-single__more' >
						<h3>References</h3>
						<p>
							{Redux.state.ReceivedObject?.PortfolioCardRetrieve?.references.map(each => {
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

export default PortfolioRetrieve