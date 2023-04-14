import environmentVariable from "../dFunction/fEnvironmentVariable";
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
		Sidebar: {
			Setting: {
				BaseRoute: `/setting/${RouteName.Content.Sidebar.Setting.BaseRoute}`,
			},
			Administration: {
				UserRoute: `/administration/${RouteName.Content.Sidebar.Administration.UserRoute}`,
				RoleRoute: `/administration/${RouteName.Content.Sidebar.Administration.RoleRoute}`,
				MenuRoute: `/administration/${RouteName.Content.Sidebar.Administration.MenuRoute}`,
			},
			Main: environmentVariable.ACTIVE_APP === "SampleAuthenticationApp" ? {} :
			environmentVariable.ACTIVE_APP === "SampleAdministrationApp" ? {
				Sample1Route: `/main/${RouteName.Content.Sidebar.Main.Sample1Route}`,
				Sample2Route: `/main/${RouteName.Content.Sidebar.Main.Sample2Route}`,
				Sample3Route: `/main/${RouteName.Content.Sidebar.Main.Sample3Route}`,
				Sample4Route: `/main/${RouteName.Content.Sidebar.Main.Sample4Route}`,
				Sample5Route: `/main/${RouteName.Content.Sidebar.Main.Sample5Route}`,
			}
			:
			environmentVariable.ACTIVE_APP === "PersonalPortfolioApp" ? {
				HomeRoute: `/main/${RouteName.Content.Sidebar.Main.HomeRoute}`,				
				AboutRoute: `/main/${RouteName.Content.Sidebar.Main.AboutRoute}`,			
				ExperienceRoute: `/main/${RouteName.Content.Sidebar.Main.ExperienceRoute}`,				
				ServiceRoute: `/main/${RouteName.Content.Sidebar.Main.ServiceRoute}`,				
				PortfolioRoute: `/main/${RouteName.Content.Sidebar.Main.PortfolioRoute}`,				
				PortfolioCardRoute: `/main/${RouteName.Content.Sidebar.Main.PortfolioCardRoute}`,			
				EventRoute: `/main/${RouteName.Content.Sidebar.Main.EventRoute}`,				
				EventCardRoute: `/main/${RouteName.Content.Sidebar.Main.EventCardRoute}`,				
				BlogRoute: `/main/${RouteName.Content.Sidebar.Main.BlogRoute}`,				
				BlogCardRoute: `/main/${RouteName.Content.Sidebar.Main.BlogCardRoute}`,			
			}
			:
			{},	
			DashboardRoute: `/main/${RouteName.Content.Sidebar.DashboardRoute}`,
		},
		Topbar: {
			ProfileRoute: `/main/${RouteName.Content.Topbar.ProfileRoute}`,
		}
	},
};

export default FinalRouteName;
