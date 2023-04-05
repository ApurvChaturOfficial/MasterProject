import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Retrieve from '../../../../../../cComponent/eLCRUD/cRetrieve';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const BlogRetrieve = () => {
	const { id } = useParams()

	// Redux
	const Redux = {
			state: useSelector((fullState) => fullState.BlogRetrieveState),
			dispatch: useDispatch(),
			action: Action,
	};
	
	// API Calls
	const APICalls = {
		BlogRetrieveAPICall: () => APIs.BlogRetrieveAPI(Redux, id),
	}

	// First Render
	useEffect(() => {
		APICalls.BlogRetrieveAPICall()
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
								{Redux.state.ReceivedObject.BlogRetrieve &&
									Redux.state.ReceivedObject.BlogRetrieve.cards.map((each, index) => {
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
						title: "Blog Retrieve",
						buttons: [
							{
								title: "Delete",
								to: `${FinalRouteName.Content.Sidebar.Model.Blog.DeleteRoute}/${id}`
							},
							{
								title: "Update",
								to: `${FinalRouteName.Content.Sidebar.Model.Blog.UpdateRoute}/${id}`,
								icon: <i class="fas fa-edit me-2"></i>,
								class: 'btn-primary'
							},
						],
						back: {
							to: FinalRouteName.Content.Sidebar.Model.Blog.ListRoute
						}
					},
					retrieve: {
						basicInfo: {
							values: [
								{
									title: "Image",
									value: Redux.state.ReceivedObject.BlogRetrieve?.image
								},
								{
									title: "Title",
									value: Redux.state.ReceivedObject.BlogRetrieve?.title
								},
								{
									title: "Sub Title",
									value: Redux.state.ReceivedObject.BlogRetrieve?.subTitle
								},
								{
									title: "Slug",
									value: Redux.state.ReceivedObject.BlogRetrieve?.slug
								},
								{
									title: "Status",
									value: Redux.state.ReceivedObject.BlogRetrieve?.isActive ?												
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
									value: Redux.state.ReceivedObject.BlogRetrieve?.createdBy
								},
								{
									title: "Created At",
									value: Redux.state.ReceivedObject.BlogRetrieve?.createdAt
								},
								{
									title: "Updated By",
									value: Redux.state.ReceivedObject.BlogRetrieve?.updatedBy
								},
								{
									title: "Updated At",
									value: Redux.state.ReceivedObject.BlogRetrieve?.updatedAt
								},
							]
						},						
					}
				}}
			/>
		</React.Fragment>
  )
}

export default BlogRetrieve