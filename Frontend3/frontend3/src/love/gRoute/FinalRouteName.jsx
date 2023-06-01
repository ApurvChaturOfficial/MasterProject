import RouteName from "./RouteName";

const FinalRouteName = {
    Home: {
        HomeRoute: `/${RouteName.Home.HomeRoute}`,
    },
    Portfolio: {
        ListRoute: `/portfolio/${RouteName.Portfolio.ListRoute}`,
        RetrieveRoute: `/portfolio/${RouteName.Portfolio.RetrieveRoute}`,
    },
    Event: {
        ListRoute: `/event/${RouteName.Event.ListRoute}`,
        RetrieveRoute: `/event/${RouteName.Event.RetrieveRoute}`,
    },
    Blog: {
        ListRoute: `/blog/${RouteName.Blog.ListRoute}`,
        RetrieveRoute: `/blog/${RouteName.Blog.RetrieveRoute}`,
    },
};

export default FinalRouteName;