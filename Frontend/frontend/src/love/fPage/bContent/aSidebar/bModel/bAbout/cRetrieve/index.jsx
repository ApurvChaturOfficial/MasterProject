import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Retrieve from '../../../../../../cComponent/eLCRUD/cRetrieve';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const AboutRetrieve = () => {
	const { id } = useParams()

	// Redux
	const Redux = {
			state: useSelector((fullState) => fullState.AboutRetrieveState),
			dispatch: useDispatch(),
			action: Action,
	};
	
	// API Calls
	const APICalls = {
		AboutRetrieveAPICall: () => APIs.AboutRetrieveAPI(Redux, id),
	}

	// First Render
	useEffect(() => {
		APICalls.AboutRetrieveAPICall()
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
								<dt class="col-sm-4">Description :</dt>
								<dd class="col-sm-8">{Redux.state.ReceivedObject.AboutRetrieve?.description}</dd>

								{Redux.state.ReceivedObject.AboutRetrieve &&
									Redux.state.ReceivedObject.AboutRetrieve.cards.map((each, index) => {
										if (index === 0) {
											return (
												<React.Fragment>
													<dt class="col-sm-4">Cards :</dt>
													<dd class="col-sm-8">{each.title}</dd>
												</React.Fragment>
											)
										} else {
											return (
												<React.Fragment>
													<dt class="col-sm-4"></dt>
													<dd class="col-sm-8">{each.title}</dd>
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
						title: "About Retrieve",
						buttons: [
							{
								title: "Delete",
								to: `${FinalRouteName.Content.Sidebar.Model.About.DeleteRoute}/${id}`
							},
							{
								title: "Update",
								to: `${FinalRouteName.Content.Sidebar.Model.About.UpdateRoute}/${id}`,
								icon: <i class="fas fa-edit me-2"></i>,
								class: 'btn-primary'
							},
						],
						back: {
							to: FinalRouteName.Content.Sidebar.Model.About.ListRoute
						}
					},
					retrieve: {
						basicInfo: {
							values: [
								{
									title: "Image",
									value: Redux.state.ReceivedObject.AboutRetrieve?.image
								},
								{
									title: "Title",
									value: Redux.state.ReceivedObject.AboutRetrieve?.title
								},
								{
									title: "Sub Title",
									value: Redux.state.ReceivedObject.AboutRetrieve?.subTitle
								},
								{
									title: "Slug",
									value: Redux.state.ReceivedObject.AboutRetrieve?.slug
								},
								{
									title: "Status",
									value: Redux.state.ReceivedObject.AboutRetrieve?.isActive ?												
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
									value: Redux.state.ReceivedObject.AboutRetrieve?.createdBy
								},
								{
									title: "Created At",
									value: Redux.state.ReceivedObject.AboutRetrieve?.createdAt
								},
								{
									title: "Updated By",
									value: Redux.state.ReceivedObject.AboutRetrieve?.updatedBy
								},
								{
									title: "Updated At",
									value: Redux.state.ReceivedObject.AboutRetrieve?.updatedAt
								},
							]
						},						
					}
				}}
			/>
		</React.Fragment>
  )
}

export default AboutRetrieve