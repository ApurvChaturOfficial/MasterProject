import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Retrieve from '../../../../../../cComponent/eLCRUD/cRetrieve';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const BaseRetrieve = () => {
	const { id } = useParams()

	// Redux
	const Redux = {
			state: useSelector((fullState) => fullState.BaseRetrieveState),
			dispatch: useDispatch(),
			action: Action,
	};
	
	// API Calls
	const APICalls = {
		BaseRetrieveAPICall: () => APIs.BaseRetrieveAPI(Redux, id),
	}

	// First Render
	useEffect(() => {
		APICalls.BaseRetrieveAPICall()
	}, [])
	

	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
	// JSX
  return (
		<React.Fragment>
			<Retrieve 
			 	data={ {
					header: {
						title: "Base Retrieve",
						buttons: [
							{
								title: "Delete",
								to: `${FinalRouteName.Content.Sidebar.Setting.Base.DeleteRoute}/${id}`
							},
							{
								title: "Update",
								to: `${FinalRouteName.Content.Sidebar.Setting.Base.UpdateRoute}/${id}`,
								icon: <i class="fas fa-edit me-2"></i>,
								class: 'btn-primary'
							},
						],
						back: {
							to: FinalRouteName.Content.Sidebar.Setting.Base.ListRoute
						}
					},
					retrieve: {
						basicInfo: {
							values: [
								{
									title: "Title",
									value: Redux.state.ReceivedObject.BaseRetrieve?.title
								},
								{
									title: "Sub Title",
									value: Redux.state.ReceivedObject.BaseRetrieve?.subTitle
								},
								{
									title: "Slug",
									value: Redux.state.ReceivedObject.BaseRetrieve?.slug
								},
								{
									title: "Status",
									value: Redux.state.ReceivedObject.BaseRetrieve?.isActive ?												
										<span class="btn btn-sm btn-success rounded-pill" >Active</span>
										:
										<span class="btn btn-sm btn-warning rounded-pill" >Inactive</span>
								},
							]
						},
						personalInfo: {
							values: [
								{
									title: "Created By",
									value: Redux.state.ReceivedObject.BaseRetrieve?.createdBy
								},
								{
									title: "Created At",
									value: Redux.state.ReceivedObject.BaseRetrieve?.createdAt
								},
								{
									title: "Updated By",
									value: Redux.state.ReceivedObject.BaseRetrieve?.updatedBy
								},
								{
									title: "Updated At",
									value: Redux.state.ReceivedObject.BaseRetrieve?.updatedAt
								},
							]
						},						
					}
				}}
			/>
		</React.Fragment>
  )
}

export default BaseRetrieve