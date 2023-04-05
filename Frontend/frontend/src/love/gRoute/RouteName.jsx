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
		Sidebar: {
			Setting: {
				BaseRoute: "base",
			},
			Administration: {
				UserRoute: "user",
				RoleRoute: "role",
				MenuRoute: "menu",
			},
			Main: {
				Sample1Route: "sample1",				
				Sample2Route: "sample2",				
				Sample3Route: "sample3",				
				Sample4Route: "sample4",				
				Sample5Route: "sample5",				
			},
			DashboardRoute: "",
		},
		Topbar: {
			ProfileRoute: "profile"
		},
	},
};

export default RouteName;

