import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Retrieve from '../../../../../../cComponent/eLCRUD/cRetrieve';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';
import parse from 'html-react-parser';


const EventCardRetrieve = () => {
	const { id } = useParams()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.EventCardRetrieveState),
		dispatch: useDispatch(),
		action: Action,
	};
	
	// API Calls
	const APICalls = {
		EventCardRetrieveAPICall: () => APIs.EventCardRetrieveAPI(Redux, id),
	}

	// First Render
	useEffect(() => {
		APICalls.EventCardRetrieveAPICall()
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
								<dd class="col-sm-12">{Redux.state.ReceivedObject.EventCardRetrieve?.description ? parse(Redux.state.ReceivedObject.EventCardRetrieve?.description) : ""}</dd>

								<dt class="col-sm-4">Details :</dt>
								<dd class="col-sm-12">{Redux.state.ReceivedObject.EventCardRetrieve?.detail ? parse(Redux.state.ReceivedObject.EventCardRetrieve?.detail) : ""}</dd>

								<dt class="col-sm-12 mb-2">Links :</dt>
								{Redux.state.ReceivedObject.EventCardRetrieve &&
									Redux.state.ReceivedObject.EventCardRetrieve.links.map((each, index) => {
										return (
											<div class="bg-white rounded h-100 p-3 mb-3">
												<dl class="row mb-0">
													<dt class="col-sm-4">Icon :</dt>
													<dd class="col-sm-8">{each?.icon}</dd>

													<dt class="col-sm-4">Label :</dt>
													<dd class="col-sm-8">{each?.label}</dd>

													<dt class="col-sm-4">URL :</dt>
													<dd class="col-sm-8">{each?.url}</dd>
												</dl>
											</div>
										)
									})
								}

								<dt class="col-sm-12 mb-2">References :</dt>
								{Redux.state.ReceivedObject.EventCardRetrieve &&
									Redux.state.ReceivedObject.EventCardRetrieve.references.map((each, index) => {
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
								<dd class="col-sm-8">{Redux.state.ReceivedObject.EventCardRetrieve?.tempImage}</dd>

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
						title: "Event Card Retrieve",
						buttons: [
							{
								title: "Delete",
								to: `${FinalRouteName.Content.Sidebar.Model.EventCard.DeleteRoute}/${id}`
							},
							{
								title: "Update",
								to: `${FinalRouteName.Content.Sidebar.Model.EventCard.UpdateRoute}/${id}`,
								icon: <i class="fas fa-edit me-2"></i>,
								class: 'btn-primary'
							},
						],
						back: {
							to: FinalRouteName.Content.Sidebar.Model.EventCard.ListRoute
						}
					},
					retrieve: {
						basicInfo: {
							values: [
								{
									title: "Image",
									value: Redux.state.ReceivedObject.EventCardRetrieve?.image
								},
								{
									title: "Title",
									value: Redux.state.ReceivedObject.EventCardRetrieve?.title
								},
								{
									title: "Sub Title",
									value: Redux.state.ReceivedObject.EventCardRetrieve?.subTitle
								},
								{
									title: "Slug",
									value: Redux.state.ReceivedObject.EventCardRetrieve?.slug
								},
								{
									title: "Status",
									value: Redux.state.ReceivedObject.EventCardRetrieve?.isActive ?												
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
									value: Redux.state.ReceivedObject.EventCardRetrieve?.createdBy
								},
								{
									title: "Created At",
									value: Redux.state.ReceivedObject.EventCardRetrieve?.createdAt
								},
								{
									title: "Updated By",
									value: Redux.state.ReceivedObject.EventCardRetrieve?.updatedBy
								},
								{
									title: "Updated At",
									value: Redux.state.ReceivedObject.EventCardRetrieve?.updatedAt
								},
							]
						},						
					}
				}}
			/>
		</React.Fragment>
  )
}

export default EventCardRetrieve