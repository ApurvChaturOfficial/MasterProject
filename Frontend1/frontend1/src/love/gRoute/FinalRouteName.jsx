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
			RetrieveRoute: `/${RouteName.Content.Profile.RetrieveRoute}`,
			UpdateRoute: `/${RouteName.Content.Profile.UpdateRoute}`,
			UpdatePasswordRoute: `/${RouteName.Content.Profile.UpdatePasswordRoute}`,
			DeleteRoute: `/${RouteName.Content.Profile.DeleteRoute}`,
		},
	},
};

export default FinalRouteName;
