import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Retrieve from '../../../../../../cComponent/eLCRUD/cRetrieve';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const PortfolioRetrieve = () => {
	const { id } = useParams()

	// Redux
	const Redux = {
			state: useSelector((fullState) => fullState.PortfolioRetrieveState),
			dispatch: useDispatch(),
			action: Action,
	};
	
	// API Calls
	const APICalls = {
		PortfolioRetrieveAPICall: () => APIs.PortfolioRetrieveAPI(Redux, id),
	}

	// First Render
	useEffect(() => {
		APICalls.PortfolioRetrieveAPICall()
	}, [])
	

	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
  // Extra JSX
  const relationInfo = () => {
    return (
			<div class="container-fluid pt-4 px-4">
				<div class="row g-4">
					<div class="col-sm-12 col-xl-6">
						<div class="bg-light rounded h-100 p-4">
							<h6 class="mb-4">Relation Info</h6>
							<dl class="row mb-0">
								{Redux.state.ReceivedObject.PortfolioRetrieve &&
									Redux.state.ReceivedObject.PortfolioRetrieve.cards.map((each, index) => {
										if (index === 0) {
											return (
												<React.Fragment>
													<dt class="col-sm-4">Cards :</dt>
													<dd class="col-sm-8">{each.basic_info.title}</dd>
												</React.Fragment>
											)
										} else {
											return (
												<React.Fragment>
													<dt class="col-sm-4"></dt>
													<dd class="col-sm-8">{each.basic_info.title}</dd>
												</React.Fragment>
											)
										}
									})
								}
							</dl>
						</div>
					</div>
				</div>
			</div>
		)
  }

	// JSX
  return (
		<React.Fragment>
			<Retrieve 
			 	data={ {
					header: {
						title: "Portfolio Retrieve",
						buttons: [
							{
								title: "Delete",
								to: `${FinalRouteName.Content.Sidebar.Model.Portfolio.DeleteRoute}/${id}`
							},
							{
								title: "Update",
								to: `${FinalRouteName.Content.Sidebar.Model.Portfolio.UpdateRoute}/${id}`,
								icon: <i class="fas fa-edit me-2"></i>,
								class: 'btn-primary'
							},
						],
						back: {
							to: FinalRouteName.Content.Sidebar.Model.Portfolio.ListRoute
						}
					},
					retrieve: {
						basicInfo: {
							values: [
								{
									title: "Image",
									value: Redux.state.ReceivedObject.PortfolioRetrieve?.image
								},
								{
									title: "Title",
									value: Redux.state.ReceivedObject.PortfolioRetrieve?.title
								},
								{
									title: "Sub Title",
									value: Redux.state.ReceivedObject.PortfolioRetrieve?.subTitle
								},
								{
									title: "Slug",
									value: Redux.state.ReceivedObject.PortfolioRetrieve?.slug
								},
								{
									title: "Status",
									value: Redux.state.ReceivedObject.PortfolioRetrieve?.isActive ?												
										<span class="btn btn-sm btn-success rounded-pill" >Active</span>
										:
										<span class="btn btn-sm btn-warning rounded-pill" >Inactive</span>
								},
							]
						},
						relationInfo: relationInfo(),
						personalInfo: {
							values: [
								{
									title: "Created By",
									value: Redux.state.ReceivedObject.PortfolioRetrieve?.createdBy
								},
								{
									title: "Created At",
									value: Redux.state.ReceivedObject.PortfolioRetrieve?.createdAt
								},
								{
									title: "Updated By",
									value: Redux.state.ReceivedObject.PortfolioRetrieve?.updatedBy
								},
								{
									title: "Updated At",
									value: Redux.state.ReceivedObject.PortfolioRetrieve?.updatedAt
								},
							]
						},						
					}
				}}
			/>
		</React.Fragment>
  )
}

export default PortfolioRetrieve