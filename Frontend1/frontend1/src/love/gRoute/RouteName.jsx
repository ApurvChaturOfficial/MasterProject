const RouteName = {
	Auth: {
		LoginRegister: {
			LoginRoute: "login",
			RegisterRoute: "register",
		},
		ForgotResetPassword: {
			ForgotPasswordRoute: "forgot-password",
			ResetPasswordRoute: "reset-password"
		}
	},
	Content: {
		Profile: {
			RetrieveRoute: "",
			UpdateRoute: "profile-update",
			UpdatePasswordRoute: "profile-update-password",
			DeleteRoute: "profile-delete",
		},
	},
};

export default RouteName;

