import React from 'react'
import './index.css';
import { BiCheck } from "react-icons/bi";


const Service = ({Redux}) => {
	// Variables
	const object = Redux.state.ReceivedObject.ServiceList

	// JSX
	return (
		object && 
		<section id='service'>
			<h5>{object.title}</h5>
			<h2>{object.subTitle}</h2>

			<div className='container services__container' >
				{object.cards.map(each => {
					return (
						<article className='service' >
							<div className="service__head">
								<h3>{each.title}</h3>
							</div>

							<ul className='service__list' >
								{each.points &&
									each.points.map(each1 => {
										return (
											<li>
												<BiCheck className='service__list-icon' fontSize="2.5rem" />
												<p>{each1.title}</p>
											</li>
										)
									})
								}
							</ul>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Service