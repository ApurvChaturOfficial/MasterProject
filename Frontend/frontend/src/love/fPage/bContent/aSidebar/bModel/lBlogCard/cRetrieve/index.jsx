import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Retrieve from '../../../../../../cComponent/eLCRUD/cRetrieve';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';
import parse from 'html-react-parser';


const BlogCardRetrieve = () => {
	const { id } = useParams()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.BlogCardRetrieveState),
		dispatch: useDispatch(),
		action: Action,
	};
	
	// API Calls
	const APICalls = {
		BlogCardRetrieveAPICall: () => APIs.BlogCardRetrieveAPI(Redux, id),
	}

	// First Render
	useEffect(() => {
		APICalls.BlogCardRetrieveAPICall()
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
								<dd class="col-sm-12">{Redux.state.ReceivedObject.BlogCardRetrieve?.description ? parse(Redux.state.ReceivedObject.BlogCardRetrieve?.description) : ""}</dd>

								<dt class="col-sm-4">Details :</dt>
								<dd class="col-sm-12">{Redux.state.ReceivedObject.BlogCardRetrieve?.detail ? parse(Redux.state.ReceivedObject.BlogCardRetrieve?.detail) : ""}</dd>

								<dt class="col-sm-12 mb-2">Links :</dt>
								{Redux.state.ReceivedObject.BlogCardRetrieve &&
									Redux.state.ReceivedObject.BlogCardRetrieve.links.map((each, index) => {
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
								{Redux.state.ReceivedObject.BlogCardRetrieve &&
									Redux.state.ReceivedObject.BlogCardRetrieve.references.map((each, index) => {
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
								<dd class="col-sm-8">{Redux.state.ReceivedObject.BlogCardRetrieve?.tempImage}</dd>

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
						title: "Blog Card Retrieve",
						buttons: [
							{
								title: "Delete",
								to: `${FinalRouteName.Content.Sidebar.Model.BlogCard.DeleteRoute}/${id}`
							},
							{
								title: "Update",
								to: `${FinalRouteName.Content.Sidebar.Model.BlogCard.UpdateRoute}/${id}`,
								icon: <i class="fas fa-edit me-2"></i>,
								class: 'btn-primary'
							},
						],
						back: {
							to: FinalRouteName.Content.Sidebar.Model.BlogCard.ListRoute
						}
					},
					retrieve: {
						basicInfo: {
							values: [
								{
									title: "Image",
									value: Redux.state.ReceivedObject.BlogCardRetrieve?.image
								},
								{
									title: "Title",
									value: Redux.state.ReceivedObject.BlogCardRetrieve?.title
								},
								{
									title: "Sub Title",
									value: Redux.state.ReceivedObject.BlogCardRetrieve?.subTitle
								},
								{
									title: "Slug",
									value: Redux.state.ReceivedObject.BlogCardRetrieve?.slug
								},
								{
									title: "Status",
									value: Redux.state.ReceivedObject.BlogCardRetrieve?.isActive ?												
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
									value: Redux.state.ReceivedObject.BlogCardRetrieve?.createdBy
								},
								{
									title: "Created At",
									value: Redux.state.ReceivedObject.BlogCardRetrieve?.createdAt
								},
								{
									title: "Updated By",
									value: Redux.state.ReceivedObject.BlogCardRetrieve?.updatedBy
								},
								{
									title: "Updated At",
									value: Redux.state.ReceivedObject.BlogCardRetrieve?.updatedAt
								},
							]
						},						
					}
				}}
			/>
		</React.Fragment>
  )
}

export default BlogCardRetrieve