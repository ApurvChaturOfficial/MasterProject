import environmentVariable from "../dFunction/fEnvironmentVariable"
import APIBase from "./APIBase"

const API = {
	Auth: {
		LoginRegister: {
			LoginAPI: (props) => {
				return (
					APIBase({
						method: "POST",
						url: `/api/v1/user/login`,
						data: props.data,
					})
				)
			},    
			RegisterAPI: (props) => {
				return (
					APIBase({
						method: "POST",
						url: `/api/v1/user/register`,
						data: props.data,
					})
				)
			},    
		},
		ForgotResetPassword: {
			ForgotPasswordAPI: (props) => {
				return (
					APIBase({
						method: "POST",
						url: `/api/v1/user/forgot-password`,
						data: props.data,
					})
				)
			},    
			ResetPasswordAPI: (props) => {
				return (
					APIBase({
						method: "PUT",
						url: `/api/v1/user/reset-password/${props.token}`,
						data: props.data,
					})
				)
			},   
		},
		LogoutAPI: {
			LogoutAPI: (props) => {
				return (
					APIBase({
						method: "GET",
						url: `/api/v1/user/logout`,
					})
				)
			}, 			
		}
	},
	Content: {
		Sidebar: {
			Setting: {
				Base: {
					ListAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/base/list`,
							})
						)
					}, 
					CreateAPI: (props) => {
						return (
							APIBase({
								method: "POST",
								url: `/api/v1/base/create`,
								data: props.data,
							})
						)
					}, 
					RetrieveAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/base/retrieve/${props.id}`,
							})
						)
					}, 
					UpdateAPI: (props) => {
						return (
							APIBase({
								method: "PUT",
								url: `/api/v1/base/update/${props.id}`,
								data: props.data,
							})
						)
					}, 
					DeleteAPI: (props) => {
						return (
							APIBase({
								method: "DELETE",
								url: `/api/v1/base/delete/${props.id}`,
							})
						)
					}, 
				},
			},
			Administration: {
				User: {
					ListAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/user/list`,
							})
						)
					}, 
					CreateAPI: (props) => {
						return (
							APIBase({
								method: "POST",
								url: `/api/v1/user/create`,
								data: props.data,
							})
						)
					}, 
					RetrieveAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/user/retrieve/${props.id}`,
							})
						)
					}, 
					UpdateAPI: (props) => {
						return (
							APIBase({
								method: "PUT",
								url: `/api/v1/user/update/${props.id}`,
								data: props.data,
							})
						)
					}, 
					DeleteAPI: (props) => {
						return (
							APIBase({
								method: "DELETE",
								url: `/api/v1/user/delete/${props.id}`,
							})
						)
					}, 
				},
				Role: {
					ListAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/role/list`,
							})
						)
					}, 
					CreateAPI: (props) => {
						return (
							APIBase({
								method: "POST",
								url: `/api/v1/role/create`,
								data: props.data,
							})
						)
					}, 
					RetrieveAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/role/retrieve/${props.id}`,
							})
						)
					}, 
					UpdateAPI: (props) => {
						return (
							APIBase({
								method: "PUT",
								url: `/api/v1/role/update/${props.id}`,
								data: props.data,
							})
						)
					}, 
					DeleteAPI: (props) => {
						return (
							APIBase({
								method: "DELETE",
								url: `/api/v1/role/delete/${props.id}`,
							})
						)
					}, 
				},
				Menu: {
					ListAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/menu/list`,
							})
						)
					}, 
					CreateAPI: (props) => {
						return (
							APIBase({
								method: "POST",
								url: `/api/v1/menu/create`,
								data: props.data,
							})
						)
					}, 
					RetrieveAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/menu/retrieve/${props.id}`,
							})
						)
					}, 
					UpdateAPI: (props) => {
						return (
							APIBase({
								method: "PUT",
								url: `/api/v1/menu/update/${props.id}`,
								data: props.data,
							})
						)
					}, 
					DeleteAPI: (props) => {
						return (
							APIBase({
								method: "DELETE",
								url: `/api/v1/menu/delete/${props.id}`,
							})
						)
					}, 
				},
			},
			Main: process.env.REACT_APP_ACTIVE_APP === "SampleAuthenticationApp" ? {} :
				process.env.REACT_APP_ACTIVE_APP === "SampleAdministrationApp" ? {
					Sample1: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/sample1/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/sample1/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/sample1/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/sample1/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/sample1/delete/${props.id}`,
								})
							)
						}, 
					},
					Sample2: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/sample2/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/sample2/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/sample2/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/sample2/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/sample2/delete/${props.id}`,
								})
							)
						}, 
					},
					Sample3: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/sample3/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/sample3/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/sample3/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/sample3/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/sample3/delete/${props.id}`,
								})
							)
						}, 
					},
					Sample4: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/sample4/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/sample4/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/sample4/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/sample4/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/sample4/delete/${props.id}`,
								})
							)
						}, 
					},
					Sample5: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/sample5/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/sample5/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/sample5/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/sample5/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/sample5/delete/${props.id}`,
								})
							)
						}, 
					},
				}
				:
				(
					process.env.REACT_APP_ACTIVE_APP === "PersonalPortfolioApp" || 
					process.env.REACT_APP_ACTIVE_APP === "NehaPortfolioApp" || 
					process.env.REACT_APP_ACTIVE_APP === "AnushreePortfolioApp"
				) ? {
					Home: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/home/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/home/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/home/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/home/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/home/delete/${props.id}`,
								})
							)
						}, 
					},
					About: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/about/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/about/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/about/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/about/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/about/delete/${props.id}`,
								})
							)
						}, 
					},
					Experience: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/experience/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/experience/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/experience/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/experience/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/experience/delete/${props.id}`,
								})
							)
						}, 
					},
					Service: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/service/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/service/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/service/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/service/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/service/delete/${props.id}`,
								})
							)
						}, 
					},
					Portfolio: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/portfolio/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/portfolio/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/portfolio/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/portfolio/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/portfolio/delete/${props.id}`,
								})
							)
						}, 
					},
					PortfolioCard: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/portfolio-card/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/portfolio-card/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/portfolio-card/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/portfolio-card/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/portfolio-card/delete/${props.id}`,
								})
							)
						}, 
					},
					Event: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/event/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/event/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/event/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/event/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/event/delete/${props.id}`,
								})
							)
						}, 
					},
					EventCard: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/event-card/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/event-card/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/event-card/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/event-card/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/event-card/delete/${props.id}`,
								})
							)
						}, 
					},
					Blog: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/blog/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/blog/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/blog/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/blog/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/blog/delete/${props.id}`,
								})
							)
						}, 
					},
					BlogCard: {
						ListAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/blog-card/list`,
								})
							)
						}, 
						CreateAPI: (props) => {
							return (
								APIBase({
									method: "POST",
									url: `/api/v1/blog-card/create`,
									data: props.data,
								})
							)
						}, 
						RetrieveAPI: (props) => {
							return (
								APIBase({
									method: "GET",
									url: `/api/v1/blog-card/retrieve/${props.id}`,
								})
							)
						}, 
						UpdateAPI: (props) => {
							return (
								APIBase({
									method: "PUT",
									url: `/api/v1/blog-card/update/${props.id}`,
									data: props.data,
								})
							)
						}, 
						DeleteAPI: (props) => {
							return (
								APIBase({
									method: "DELETE",
									url: `/api/v1/blog-card/delete/${props.id}`,
								})
							)
						}, 
					},
				}
				:
				{},	
		},
		Topbar: {
			ProfileRetrieveAPI: (props) => {
				return (
					APIBase({
						method: "GET",
						url: `/api/v1/user/profile-retrieve`,
					})
				)
			}, 
		}
	},
}

export default API