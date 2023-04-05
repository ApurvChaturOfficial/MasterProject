import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import FinalRouteName from '../../../gRoute/FinalRouteName';

const List = ({data}) => {
	// const data = {
	// 	header: {
	// 		title: "New Base List",
	// 		button: {
	// 			title: "Create New Base",
	// 			to: FinalRouteName.Content.Sidebar.Setting.Base.CreateRoute
	// 		}
	// 	},
	// 	list: {
	// 		columns: [
	// 			{title: "Title"},
	// 			{title: "Sub Title"},
	// 			{title: "Slug"},
	// 			{title: ""},
	// 		],
	// 		items: Redux.state.ReceivedObject.BaseList
	// 	}
	// }

	// JSX	
  return (
    <React.Fragment>
      <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between">
            <h5 class="mb-0">{data.header.title}</h5>
            <Link to={data.header.button.to} class="btn btn-primary rounded-pill">
							<i class="fa fa-plus me-2"></i>
							{data.header.button.title}
						</Link>
          </div>
        </div>
      </div>

			<div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
					<div class="table-responsive">
						{data.list.items && data.list.items.length ?
							<table class="table text-start align-middle table-hover mb-0">
								<thead>
									<tr class="text-dark">
										{data.list.columns.map(each => {
											return (
												<th scope="col">{each.title}</th>
											)
										})}
									</tr>
								</thead>
								<tbody>
									{data.list.items.map(each => {
										return (
											<tr>
												<td><img class="rounded-circle" src={each.image ? each.image.url : "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"} alt="" style={{width: "40px", height: "40px"}} /></td>
												<td>{each.title}</td>
												<td>{each.subTitle}</td>
												<td>{each.slug}</td>
												<td>	
													{each.isActive ?												
														<span class="btn btn-sm btn-success rounded-pill" >Active</span>
														:
														<span class="btn btn-sm btn-warning rounded-pill" >Inactive</span>
													}
												</td>
												<td>
													<Link class="btn btn-sm btn-primary rounded-pill" to={each.toLink.toRetrieve}>View Details</Link>
													<Link class="btn btn-square btn-outline-danger mx-2" to={each.toLink.toDelete}><i class="fa fa-trash"></i></Link>
												</td>
											</tr>
										)
									})}
										
								</tbody>
							</table>
							:
							<div class="mt-4">
								No items to display here...
							</div> 
						}
					</div>
				</div>
			</div>
    </React.Fragment>
  )
}

export default List