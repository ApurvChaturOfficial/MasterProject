import RouteName from "./RouteName";

const FinalRouteName = {
	Auth: {
		LoginRegister: {
			LoginRoute: `/${RouteName.Auth.LoginRegister.LoginRoute}`,
			RegisterRoute: `/${RouteName.Auth.LoginRegister.RegisterRoute}` 
		},
		ForgotResetPassword: {
			ForgotPasswordRoute: `/${RouteName.Auth.ForgotResetPassword.ForgotPasswordRoute}`,
			ResetPasswordRoute: `/${RouteName.Auth.ForgotResetPassword.ResetPasswordRoute}`
		}
	},
	Content: {
		Profile: {
			UpdateRoute: `/${RouteName.Content.Profile.UpdateRoute}`
		},
	},
};

export default FinalRouteName;
