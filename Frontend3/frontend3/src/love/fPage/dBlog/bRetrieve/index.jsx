import React, { useEffect } from 'react'
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ME1 from '../../../hAssets/me-about.jpg'
import Header from '../../../cComponent/aLayout/aHeader'
import Footer from '../../../cComponent/aLayout/bFooter'
import APIs from './extra/APIs';
import { Action } from './extra/State';
import parse from 'html-react-parser';


const BlogRetrieve = ({ Redux1 }) => {
	const { id } = useParams()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.BlogRetrieveState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		BlogRetrieveAPICall: () => APIs.BlogCardRetrieveAPI(Redux, id, Redux1),
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.BlogRetrieveAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
	// JSX
  return (
    <React.Fragment>
			<Header heading={"My Blogs"} />

			<section id='about'>
				{/* <h5>{Redux.state.ReceivedObject?.BlogCardRetrieve?.title}</h5>
				<h2>{Redux.state.ReceivedObject?.BlogCardRetrieve?.subTitle}</h2> */}

				<div className='container blog-card-single__container' >
					<div className='blog-card-single__me' >
						<div className='blog-card-single__me-image' >
							<img src={Redux.state.ReceivedObject?.BlogCardRetrieve?.image?.url} alt="" />
						</div>
					</div>


					<div className='blog-card-single__content' >
						<h2>{Redux.state.ReceivedObject?.BlogCardRetrieve?.title}</h2>
						<h4 style={{marginTop: "0.5em"}} className='text-light' >{Redux.state.ReceivedObject?.BlogCardRetrieve?.subTitle}</h4>

						<p>{parse(Redux.state.ReceivedObject?.BlogCardRetrieve?.description || "")}</p>

						{/* <div className='blog-card-single__item-cta' >
							{Redux.state.ReceivedObject?.BlogCardRetrieve?.links &&
								Redux.state.ReceivedObject?.BlogCardRetrieve?.links.map(each => {
									return (
										<Link to={each.link} className={`btn ${each.label === 'Demo' && 'btn-primary'}`} >{each.label}</Link>
									)
								})
								
							}
						</div>	 */}
					</div>
				</div>  

				<div className='container portfolio-card-single__more' >
					<h3>Details</h3>
					<div className='rich-text' >
						{parse(Redux.state.ReceivedObject?.BlogCardRetrieve?.detail || "")}
					</div>
				</div>
          
				{/* <div className='container blog-card-single__more' >
					<h3>References</h3>
					<p>{parse(Redux.state.ReceivedObject?.BlogCardRetrieve?.detail || "")}</p>
				</div> */}
			</section>
    </React.Fragment>
  )
}

export default BlogRetrieve