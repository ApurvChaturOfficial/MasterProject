import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Retrieve from '../../../../../../cComponent/eLCRUD/cRetrieve';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const HomeRetrieve = () => {
	const { id } = useParams()

	// Redux
	const Redux = {
			state: useSelector((fullState) => fullState.HomeRetrieveState),
			dispatch: useDispatch(),
			action: Action,
	};
	
	// API Calls
	const APICalls = {
		HomeRetrieveAPICall: () => APIs.HomeRetrieveAPI(Redux, id),
	}

	// First Render
	useEffect(() => {
		APICalls.HomeRetrieveAPICall()
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
								<dd class="col-sm-8">{Redux.state.ReceivedObject.HomeRetrieve?.description}</dd>

								{Redux.state.ReceivedObject.HomeRetrieve?.links.map((each, index) => {
									if (index === 0) {
										return (
											<React.Fragment>
												<dt class="col-sm-4">Links :</dt>
												<dd class="col-sm-8">{each.label}</dd>
											</React.Fragment>
										)
									} else {
										return (
											<React.Fragment>
												<dt class="col-sm-4"></dt>
												<dd class="col-sm-8">{each.label}</dd>
											</React.Fragment>
										)
									}
								})}

								<dt class="col-sm-4">Resume :</dt>
								<dd class="col-sm-8">
									<img 
										src={Redux.state.ReceivedObject.HomeRetrieve?.resume ? 
											Redux.state.ReceivedObject.HomeRetrieve?.resume.url 
											: 
											"https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
										} 
										alt="" 
										style={{width: "60px"}} 
									/>
								</dd>

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
						title: "Home Retrieve",
						buttons: [
							{
								title: "Delete",
								to: `${FinalRouteName.Content.Sidebar.Model.Home.DeleteRoute}/${id}`
							},
							{
								title: "Update",
								to: `${FinalRouteName.Content.Sidebar.Model.Home.UpdateRoute}/${id}`,
								icon: <i class="fas fa-edit me-2"></i>,
								class: 'btn-primary'
							},
						],
						back: {
							to: FinalRouteName.Content.Sidebar.Model.Home.ListRoute
						}
					},
					retrieve: {
						basicInfo: {
							values: [
								{
									title: "Image",
									value: Redux.state.ReceivedObject.HomeRetrieve?.image
								},
								{
									title: "Title",
									value: Redux.state.ReceivedObject.HomeRetrieve?.title
								},
								{
									title: "Sub Title",
									value: Redux.state.ReceivedObject.HomeRetrieve?.subTitle
								},
								{
									title: "Slug",
									value: Redux.state.ReceivedObject.HomeRetrieve?.slug
								},
								{
									title: "Status",
									value: Redux.state.ReceivedObject.HomeRetrieve?.isActive ?												
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
									value: Redux.state.ReceivedObject.HomeRetrieve?.createdBy
								},
								{
									title: "Created At",
									value: Redux.state.ReceivedObject.HomeRetrieve?.createdAt
								},
								{
									title: "Updated By",
									value: Redux.state.ReceivedObject.HomeRetrieve?.updatedBy
								},
								{
									title: "Updated At",
									value: Redux.state.ReceivedObject.HomeRetrieve?.updatedAt
								},
							]
						},						
					}
				}}
			/>
		</React.Fragment>
  )
}

export default HomeRetrieve