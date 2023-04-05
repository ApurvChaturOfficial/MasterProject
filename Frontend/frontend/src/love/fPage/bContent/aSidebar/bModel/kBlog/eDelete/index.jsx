import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FinalRouteName from '../../../../../../gRoute/FinalRouteName';
import APIs from './extra/APIs';
import { Action } from './extra/State';

const BlogDelete = () => {
  // Variables
  const { id } = useParams()
	const navigate = useNavigate()

	// Redux
	const Redux = {
			state: useSelector((fullState) => fullState.BlogDeleteState),
			dispatch: useDispatch(),
			action: Action,
	};
	
	// API Calls
	const APICalls = {
		BlogRetrieveAPICall: () => APIs.BlogRetrieveAPI(Redux, id),
		BlogDeleteAPICall: () => APIs.BlogDeleteAPI(Redux, id, navigate),
	}

	// First Render
	useEffect(() => {
		APICalls.BlogRetrieveAPICall()
	}, [])
	

	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
	// JSX
  return (
    <div class="container-fluid pt-4 px-4">
			<div class="bg-light rounded p-4">
				{/* Title & Buttons */}
				<div class="d-flex align-items-center justify-content-between mb-4">
					<h5 class="mb-0">
						<Link to={FinalRouteName.Content.Sidebar.Model.Blog.ListRoute}><i class="fas fa-chevron-left me-2"></i></Link>
						Blog Delete
					</h5>
					<div>
						<button onClick={() => APICalls.BlogDeleteAPICall()} class="btn btn-outline-danger rounded-pill m-2 me-0"><i class="fas fa-trash me-2"></i> Sure, Delete</button>
					</div>
				</div>

				{/* Description */}
        <div class="col-sm-12 col-xl-12 p-4">
					<div class="bg-light rounded h-100">
          <h5 class="mb-4">
						Are you sure to delete the following instance...?
					</h5>
						<dl class="row mb-0">
							<dt class="col-sm-2">Title:</dt>
							<dd class="col-sm-10">{Redux.state.ReceivedObject.BlogRetrieve?.title}</dd>

							<dt class="col-sm-2">Sub Title:</dt>
							<dd class="col-sm-10">{Redux.state.ReceivedObject.BlogRetrieve?.subTitle}</dd>

							<dt class="col-sm-2">Slug:</dt>
							<dd class="col-sm-10">{Redux.state.ReceivedObject.BlogRetrieve?.slug}</dd>
						</dl>
					</div>
        </div>
			</div>
    </div>
  )
}

export default BlogDelete