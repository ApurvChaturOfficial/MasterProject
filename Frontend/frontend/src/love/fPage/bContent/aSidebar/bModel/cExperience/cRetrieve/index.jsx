import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Retrieve from '../../../../../../cComponent/eLCRUD/cRetrieve';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const ExperienceRetrieve = () => {
	const { id } = useParams()

	// Redux
	const Redux = {
			state: useSelector((fullState) => fullState.ExperienceRetrieveState),
			dispatch: useDispatch(),
			action: Action,
	};
	
	// API Calls
	const APICalls = {
		ExperienceRetrieveAPICall: () => APIs.ExperienceRetrieveAPI(Redux, id),
	}

	// First Render
	useEffect(() => {
		APICalls.ExperienceRetrieveAPICall()
	}, [])
	

	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

	// Extra JSX
  const moreInfo = () => {
    return (
			<div class="container-fluid pt-4 px-4">
				<div class="row g-4">
					<div class="col-sm-12 col-xl-6">
						<div class="bg-light rounded h-100 p-4">
							<h6 class="mb-4">More Info</h6>
							<dl class="row mb-0">
								<dt class="col-sm-12 mb-2">Cards :</dt>
								{Redux.state.ReceivedObject.ExperienceRetrieve &&
									Redux.state.ReceivedObject.ExperienceRetrieve.cards.map((each, index) => {
										return (
											<div class="bg-white rounded h-100 p-3 mb-3">
												<dl class="row mb-0">
													<dt class="col-sm-4">Title :</dt>
													<dd class="col-sm-8">{each.title}</dd>

													{each.points.map((each1, index1) => {
														if (index1 === 0) {
															return (
																<React.Fragment>
																	<dt class="col-sm-4">Points :</dt>
																	<dt class="col-sm-8">{each1.title}</dt>
																	<dt class="col-sm-4"></dt>
																	<dd class="col-sm-8">{each1.sub_title}</dd>
																</React.Fragment>
															)
														} else {
															return (
																<React.Fragment>
																	<dt class="col-sm-4"></dt>
																	<dt class="col-sm-8">{each1.title}</dt>
																	<dt class="col-sm-4"></dt>
																	<dd class="col-sm-8">{each1.sub_title}</dd>
																</React.Fragment>
															)
														}
													})}
												</dl>
											</div>
										)
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
						title: "Experience Retrieve",
						buttons: [
							{
								title: "Delete",
								to: `${FinalRouteName.Content.Sidebar.Model.Experience.DeleteRoute}/${id}`
							},
							{
								title: "Update",
								to: `${FinalRouteName.Content.Sidebar.Model.Experience.UpdateRoute}/${id}`,
								icon: <i class="fas fa-edit me-2"></i>,
								class: 'btn-primary'
							},
						],
						back: {
							to: FinalRouteName.Content.Sidebar.Model.Experience.ListRoute
						}
					},
					retrieve: {
						basicInfo: {
							values: [
								{
									title: "Image",
									value: Redux.state.ReceivedObject.ExperienceRetrieve?.image
								},
								{
									title: "Title",
									value: Redux.state.ReceivedObject.ExperienceRetrieve?.title
								},
								{
									title: "Sub Title",
									value: Redux.state.ReceivedObject.ExperienceRetrieve?.subTitle
								},
								{
									title: "Slug",
									value: Redux.state.ReceivedObject.ExperienceRetrieve?.slug
								},
								{
									title: "Status",
									value: Redux.state.ReceivedObject.ExperienceRetrieve?.isActive ?												
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
									value: Redux.state.ReceivedObject.ExperienceRetrieve?.createdBy
								},
								{
									title: "Created At",
									value: Redux.state.ReceivedObject.ExperienceRetrieve?.createdAt
								},
								{
									title: "Updated By",
									value: Redux.state.ReceivedObject.ExperienceRetrieve?.updatedBy
								},
								{
									title: "Updated At",
									value: Redux.state.ReceivedObject.ExperienceRetrieve?.updatedAt
								},
							]
						},						
					}
				}}
			/>
		</React.Fragment>
  )
}

export default ExperienceRetrieve