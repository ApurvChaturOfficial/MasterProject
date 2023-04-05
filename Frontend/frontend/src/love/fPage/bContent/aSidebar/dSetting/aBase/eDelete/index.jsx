import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Delete from '../../../../../../cComponent/eLCRUD/eDelete';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const BaseDelete = () => {
  // Variables
  const { id } = useParams()
	const navigate = useNavigate()

	// Redux
	const Redux = {
			state: useSelector((fullState) => fullState.BaseDeleteState),
			dispatch: useDispatch(),
			action: Action,
	};
	
	// API Calls
	const APICalls = {
		BaseRetrieveAPICall: () => APIs.BaseRetrieveAPI(Redux, id),
		BaseDeleteAPICall: () => APIs.BaseDeleteAPI(Redux, id, navigate),
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
			<Delete 
			 	data={ {
					header: {
						title: "Base Delete",
						button: {
							title: "Delete",
							onClick: () => APICalls.BaseDeleteAPICall()
						},       
						back: {
							to: FinalRouteName.Content.Sidebar.Setting.Base.ListRoute
						}
					},
					delete: {
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

export default BaseDelete