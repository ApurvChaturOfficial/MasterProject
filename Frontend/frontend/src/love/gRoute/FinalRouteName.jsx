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
			Main: process.env.REACT_APP_ACTIVE_APP === "SampleAuthenticationApp" ? {} :
				process.env.REACT_APP_ACTIVE_APP === "SampleAdministrationApp" ? {
					Sample1Route: `/main/${RouteName.Content.Sidebar.Main.Sample1Route}`,
					Sample2Route: `/main/${RouteName.Content.Sidebar.Main.Sample2Route}`,
					Sample3Route: `/main/${RouteName.Content.Sidebar.Main.Sample3Route}`,
					Sample4Route: `/main/${RouteName.Content.Sidebar.Main.Sample4Route}`,
					Sample5Route: `/main/${RouteName.Content.Sidebar.Main.Sample5Route}`,
				}
				:
				(
					process.env.REACT_APP_ACTIVE_APP === "PersonalPortfolioApp" || 
					process.env.REACT_APP_ACTIVE_APP === "SofiePortfolioApp" || 
					process.env.REACT_APP_ACTIVE_APP === "AnushreePortfolioApp"
				) ?
				{
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
			Direct: process.env.REACT_APP_ACTIVE_APP === "SampleAuthenticationApp" ? {} :
				process.env.REACT_APP_ACTIVE_APP === "SampleAdministrationApp" ? {}
				:
				(
					process.env.REACT_APP_ACTIVE_APP === "PersonalPortfolioApp" || 
					process.env.REACT_APP_ACTIVE_APP === "SofiePortfolioApp" || 
					process.env.REACT_APP_ACTIVE_APP === "AnushreePortfolioApp"
				) ?
				{
					HomeRoute: `/direct/${RouteName.Content.Sidebar.Direct.HomeRoute}`,				
					AboutRoute: `/direct/${RouteName.Content.Sidebar.Direct.AboutRoute}`,			
					ExperienceRoute: `/direct/${RouteName.Content.Sidebar.Direct.ExperienceRoute}`,				
					ServiceRoute: `/direct/${RouteName.Content.Sidebar.Direct.ServiceRoute}`,				
					PortfolioRoute: `/direct/${RouteName.Content.Sidebar.Direct.PortfolioRoute}`,				
					EventRoute: `/direct/${RouteName.Content.Sidebar.Direct.EventRoute}`,				
					BlogRoute: `/direct/${RouteName.Content.Sidebar.Direct.BlogRoute}`,				
				}
				:
				{},	
			DashboardRoute: `/${RouteName.Content.Sidebar.DashboardRoute}`,
		},
		Topbar: {
			ProfileRoute: `/${RouteName.Content.Topbar.ProfileRoute}`,
		}
	},
};

export default FinalRouteName;
