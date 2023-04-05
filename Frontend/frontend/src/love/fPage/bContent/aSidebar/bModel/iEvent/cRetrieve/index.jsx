import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Retrieve from '../../../../../../cComponent/eLCRUD/cRetrieve';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

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
		EventRetrieveAPICall: () => APIs.EventRetrieveAPI(Redux, id),
	}

	// First Render
	useEffect(() => {
		APICalls.EventRetrieveAPICall()
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
								{Redux.state.ReceivedObject.EventRetrieve &&
									Redux.state.ReceivedObject.EventRetrieve.cards.map((each, index) => {
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
						title: "Event Retrieve",
						buttons: [
							{
								title: "Delete",
								to: `${FinalRouteName.Content.Sidebar.Model.Event.DeleteRoute}/${id}`
							},
							{
								title: "Update",
								to: `${FinalRouteName.Content.Sidebar.Model.Event.UpdateRoute}/${id}`,
								icon: <i class="fas fa-edit me-2"></i>,
								class: 'btn-primary'
							},
						],
						back: {
							to: FinalRouteName.Content.Sidebar.Model.Event.ListRoute
						}
					},
					retrieve: {
						basicInfo: {
							values: [
								{
									title: "Image",
									value: Redux.state.ReceivedObject.EventRetrieve?.image
								},
								{
									title: "Title",
									value: Redux.state.ReceivedObject.EventRetrieve?.title
								},
								{
									title: "Sub Title",
									value: Redux.state.ReceivedObject.EventRetrieve?.subTitle
								},
								{
									title: "Slug",
									value: Redux.state.ReceivedObject.EventRetrieve?.slug
								},
								{
									title: "Status",
									value: Redux.state.ReceivedObject.EventRetrieve?.isActive ?												
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
									value: Redux.state.ReceivedObject.EventRetrieve?.createdBy
								},
								{
									title: "Created At",
									value: Redux.state.ReceivedObject.EventRetrieve?.createdAt
								},
								{
									title: "Updated By",
									value: Redux.state.ReceivedObject.EventRetrieve?.updatedBy
								},
								{
									title: "Updated At",
									value: Redux.state.ReceivedObject.EventRetrieve?.updatedAt
								},
							]
						},						
					}
				}}
			/>
		</React.Fragment>
  )
}

export default EventRetrieve