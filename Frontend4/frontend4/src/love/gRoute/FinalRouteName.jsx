import RouteName from "./RouteName";

const FinalRouteName = {
    Auth: {
        LoginRegister: {
            LoginRoute: `/${RouteName.Auth.LoginRegister.LoginRoute}`,
            RegisterRoute: `/${RouteName.Auth.LoginRegister.RegisterRoute}`,
        },
    },
    Content: {
        DashboardRoute: `/${RouteName.Content.DashboardRoute}`,
    },
};

export default FinalRouteName;
