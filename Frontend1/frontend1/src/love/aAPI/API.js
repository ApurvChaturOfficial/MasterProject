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
			ValidateOTPAPI: (props) => {
				return (
					APIBase({
						method: "POST",
						url: `/api/v1/user/validate-otp`,
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
		Logout: {
			LogoutAPI: (props) => {
				return (
					APIBase({
						method: "GET",
						url: `/api/v1/user/logout`,
					})
				)
			},  
		},
	},
	Content: {
		Topbar: {
			ProfileRetrieveAPI: (props) => {
				return (
					APIBase({
						method: "GET",
						url: `/api/v1/user/profile-retrieve`,
					})
				)
			}, 
			ProfileUpdateAPI: (props) => {
				return (
					APIBase({
						method: "POST",
						url: `/api/v1/user/profile-update`,
						data: props.data,
					})
				)
			}, 
			ProfileUpdatePasswordAPI: (props) => {
				return (
					APIBase({
						method: "POST",
						url: `/api/v1/user/profile-update-password`,
						data: props.data,
					})
				)
			}, 
			ProfileDeleteAPI: (props) => {
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