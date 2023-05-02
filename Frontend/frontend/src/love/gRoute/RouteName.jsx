import environmentVariable from "../dFunction/fEnvironmentVariable";

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
			Main: process.env.REACT_APP_ACTIVE_APP === "SampleAuthenticationApp" ? {} :
				process.env.REACT_APP_ACTIVE_APP === "SampleAdministrationApp" ? {
					Sample1Route: "sample1",				
					Sample2Route: "sample2",				
					Sample3Route: "sample3",				
					Sample4Route: "sample4",				
					Sample5Route: "sample5",				
				}
				:
				(
					process.env.REACT_APP_ACTIVE_APP === "PersonalPortfolioApp" || 
					process.env.REACT_APP_ACTIVE_APP === "NehaPortfolioApp" || 
					process.env.REACT_APP_ACTIVE_APP === "AnushreePortfolioApp"
				) ? {
					HomeRoute: "home",				
					AboutRoute: "about",				
					ExperienceRoute: "experience",				
					ServiceRoute: "service",				
					PortfolioRoute: "portfolio",				
					PortfolioCardRoute: "portfolio-card",				
					EventRoute: "event",				
					EventCardRoute: "event-card",				
					BlogRoute: "blog",				
					BlogCardRoute: "blog-card",				
				}
				:
				{},	
			DashboardRoute: "",
		},
		Topbar: {
			ProfileRoute: "profile"
		},
	},
};

export default RouteName;

