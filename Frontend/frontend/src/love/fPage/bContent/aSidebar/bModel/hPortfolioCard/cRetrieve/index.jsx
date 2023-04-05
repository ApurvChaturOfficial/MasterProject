import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Retrieve from '../../../../../../cComponent/eLCRUD/cRetrieve';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';
import parse from 'html-react-parser';


const PortfolioCardRetrieve = () => {
	const { id } = useParams()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.PortfolioCardRetrieveState),
		dispatch: useDispatch(),
		action: Action,
	};
	
	// API Calls
	const APICalls = {
		PortfolioCardRetrieveAPICall: () => APIs.PortfolioCardRetrieveAPI(Redux, id),
	}

	// First Render
	useEffect(() => {
		APICalls.PortfolioCardRetrieveAPICall()
	}, [])
	

	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

	// Extra JSX
  const moreInfo = () => {
    return (
			<div class="container-fluid pt-4 px-4">
				<div class="row g-4">
					<div class="col-sm-12 col-xl-12">
						<div class="bg-light rounded h-100 p-4">
							<h6 class="mb-4">Personal Info</h6>
							<dl class="row mb-0">
								<dt class="col-sm-4">Description :</dt>
								<dd class="col-sm-12">{Redux.state.ReceivedObject.PortfolioCardRetrieve?.description ? parse(Redux.state.ReceivedObject.PortfolioCardRetrieve?.description) : ""}</dd>

								<dt class="col-sm-4">Details :</dt>
								<dd class="col-sm-12">{Redux.state.ReceivedObject.PortfolioCardRetrieve?.detail ? parse(Redux.state.ReceivedObject.PortfolioCardRetrieve?.detail) : ""}</dd>

								<dt class="col-sm-12 mb-2">Links :</dt>
								{Redux.state.ReceivedObject.PortfolioCardRetrieve &&
									Redux.state.ReceivedObject.PortfolioCardRetrieve.links.map((each, index) => {
										return (
											<div class="bg-white rounded h-100 p-3 mb-3">
												<dl class="row mb-0">
													<dt class="col-sm-4">Icon :</dt>
													<dd class="col-sm-8">{each.icon}</dd>

													<dt class="col-sm-4">Label :</dt>
													<dd class="col-sm-8">{each.label}</dd>

													<dt class="col-sm-4">URL :</dt>
													<dd class="col-sm-8">{each.url}</dd>
												</dl>
											</div>
										)
									})
								}

								<dt class="col-sm-12 mb-2">References :</dt>
								{Redux.state.ReceivedObject.PortfolioCardRetrieve &&
									Redux.state.ReceivedObject.PortfolioCardRetrieve.references.map((each, index) => {
										return (
											<div class="bg-white rounded h-100 p-3 mb-3">
												<dl class="row mb-0">
													<dt class="col-sm-4">Image :</dt>
													<dd class="col-sm-8">{each.image}</dd>

													<dt class="col-sm-4">Label :</dt>
													<dd class="col-sm-8">{each.label}</dd>

													<dt class="col-sm-4">URL :</dt>
													<dd class="col-sm-8">{each.url}</dd>
												</dl>
											</div>
										)
									})
								}

								<dt class="col-sm-4">Temp Image :</dt>
								<dd class="col-sm-8">{Redux.state.ReceivedObject.PortfolioCardRetrieve?.tempImage}</dd>

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
						title: "Portfolio Card Retrieve",
						buttons: [
							{
								title: "Delete",
								to: `${FinalRouteName.Content.Sidebar.Model.PortfolioCard.DeleteRoute}/${id}`
							},
							{
								title: "Update",
								to: `${FinalRouteName.Content.Sidebar.Model.PortfolioCard.UpdateRoute}/${id}`,
								icon: <i class="fas fa-edit me-2"></i>,
								class: 'btn-primary'
							},
						],
						back: {
							to: FinalRouteName.Content.Sidebar.Model.PortfolioCard.ListRoute
						}
					},
					retrieve: {
						basicInfo: {
							values: [
								{
									title: "Image",
									value: Redux.state.ReceivedObject.PortfolioCardRetrieve?.image
								},
								{
									title: "Title",
									value: Redux.state.ReceivedObject.PortfolioCardRetrieve?.title
								},
								{
									title: "Sub Title",
									value: Redux.state.ReceivedObject.PortfolioCardRetrieve?.subTitle
								},
								{
									title: "Slug",
									value: Redux.state.ReceivedObject.PortfolioCardRetrieve?.slug
								},
								{
									title: "Status",
									value: Redux.state.ReceivedObject.PortfolioCardRetrieve?.isActive ?												
										<span class="btn btn-sm btn-success rounded-pill" >Active</span>
										:
										<span class="btn btn-sm btn-warning rounded-pill" >Inactive</span>
								},
							]
						},
						moreInfo: moreInfo(),
						personalInfo: {
							values: [
								{
									title: "Created By",
									value: Redux.state.ReceivedObject.PortfolioCardRetrieve?.createdBy
								},
								{
									title: "Created At",
									value: Redux.state.ReceivedObject.PortfolioCardRetrieve?.createdAt
								},
								{
									title: "Updated By",
									value: Redux.state.ReceivedObject.PortfolioCardRetrieve?.updatedBy
								},
								{
									title: "Updated At",
									value: Redux.state.ReceivedObject.PortfolioCardRetrieve?.updatedAt
								},
							]
						},						
					}
				}}
			/>
		</React.Fragment>
  )
}

export default PortfolioCardRetrieve