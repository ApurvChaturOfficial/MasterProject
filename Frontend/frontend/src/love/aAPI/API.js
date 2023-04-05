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
			Main: {
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
			},
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
}

export default API