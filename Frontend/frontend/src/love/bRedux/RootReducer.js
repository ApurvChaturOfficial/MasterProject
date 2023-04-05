import { combineReducers } from 'redux'
import LoginState from '../fPage/aAuth/aLoginRegister/aLogin/extra/State';
import RegisterState from '../fPage/aAuth/aLoginRegister/bRegister/extra/State';
import ForgotPasswordState from '../fPage/aAuth/bForgotResetPassword/aForgotPassword/extra/State';
import ResetPasswordState from '../fPage/aAuth/bForgotResetPassword/bResetPassword/extra/State';

import AuthLayoutState from '../eLayout/aAuthLayout/extra/State';
import ContentLayoutState from '../eLayout/bContentLayout/extra/State';

import BaseState from '../fPage/bContent/aSidebar/aSetting/aBase/extra/State';

import UserState from '../fPage/bContent/aSidebar/bAdministration/aUser/extra/State';
import RoleState from '../fPage/bContent/aSidebar/bAdministration/bRole/extra/State';
import MenuState from '../fPage/bContent/aSidebar/bAdministration/cMenu/extra/State';

import Sample1State from '../fPage/bContent/aSidebar/cMain/aSample1/extra/State';
import Sample2State from '../fPage/bContent/aSidebar/cMain/bSample2/extra/State';
import Sample3State from '../fPage/bContent/aSidebar/cMain/cSample3/extra/State';
import Sample4State from '../fPage/bContent/aSidebar/cMain/dSample4/extra/State';
import Sample5State from '../fPage/bContent/aSidebar/cMain/eSample5/extra/State';


import ProfileUpdateState from '../fPage/bContent/bTopbar/aProfile/extra/State';


// import BaseListState from '../fPage/bContent/aSidebar/dSetting/aBase/aList/extra/State';
// import BaseCreateState from '../fPage/bContent/aSidebar/dSetting/aBase/bCreate/extra/State';
// import BaseRetrieveState from '../fPage/bContent/aSidebar/dSetting/aBase/cRetrieve/extra/State';
// import BaseUpdateState from '../fPage/bContent/aSidebar/dSetting/aBase/dUpdate/extra/State';
// import BaseDeleteState from '../fPage/bContent/aSidebar/dSetting/aBase/eDelete/extra/State';

// import HomeListState from '../fPage/bContent/aSidebar/bModel/aHome/aList/extra/State';
// import HomeCreateState from '../fPage/bContent/aSidebar/bModel/aHome/bCreate/extra/State';
// import HomeRetrieveState from '../fPage/bContent/aSidebar/bModel/aHome/cRetrieve/extra/State';
// import HomeUpdateState from '../fPage/bContent/aSidebar/bModel/aHome/dUpdate/extra/State';
// import HomeDeleteState from '../fPage/bContent/aSidebar/bModel/aHome/eDelete/extra/State';

// import AboutListState from '../fPage/bContent/aSidebar/bModel/bAbout/aList/extra/State';
// import AboutCreateState from '../fPage/bContent/aSidebar/bModel/bAbout/bCreate/extra/State';
// import AboutRetrieveState from '../fPage/bContent/aSidebar/bModel/bAbout/cRetrieve/extra/State';
// import AboutUpdateState from '../fPage/bContent/aSidebar/bModel/bAbout/dUpdate/extra/State';
// import AboutDeleteState from '../fPage/bContent/aSidebar/bModel/bAbout/eDelete/extra/State';

// import ExperienceListState from '../fPage/bContent/aSidebar/bModel/cExperience/aList/extra/State';
// import ExperienceCreateState from '../fPage/bContent/aSidebar/bModel/cExperience/bCreate/extra/State';
// import ExperienceRetrieveState from '../fPage/bContent/aSidebar/bModel/cExperience/cRetrieve/extra/State';
// import ExperienceUpdateState from '../fPage/bContent/aSidebar/bModel/cExperience/dUpdate/extra/State';
// import ExperienceDeleteState from '../fPage/bContent/aSidebar/bModel/cExperience/eDelete/extra/State';

// import ServiceListState from '../fPage/bContent/aSidebar/bModel/eService/aList/extra/State';
// import ServiceCreateState from '../fPage/bContent/aSidebar/bModel/eService/bCreate/extra/State';
// import ServiceRetrieveState from '../fPage/bContent/aSidebar/bModel/eService/cRetrieve/extra/State';
// import ServiceUpdateState from '../fPage/bContent/aSidebar/bModel/eService/dUpdate/extra/State';
// import ServiceDeleteState from '../fPage/bContent/aSidebar/bModel/eService/eDelete/extra/State';

// import PortfolioListState from '../fPage/bContent/aSidebar/bModel/gPortfolio/aList/extra/State';
// import PortfolioCreateState from '../fPage/bContent/aSidebar/bModel/gPortfolio/bCreate/extra/State';
// import PortfolioRetrieveState from '../fPage/bContent/aSidebar/bModel/gPortfolio/cRetrieve/extra/State';
// import PortfolioUpdateState from '../fPage/bContent/aSidebar/bModel/gPortfolio/dUpdate/extra/State';
// import PortfolioDeleteState from '../fPage/bContent/aSidebar/bModel/gPortfolio/eDelete/extra/State';

// import PortfolioCardListState from '../fPage/bContent/aSidebar/bModel/hPortfolioCard/aList/extra/State';
// import PortfolioCardCreateState from '../fPage/bContent/aSidebar/bModel/hPortfolioCard/bCreate/extra/State';
// import PortfolioCardRetrieveState from '../fPage/bContent/aSidebar/bModel/hPortfolioCard/cRetrieve/extra/State';
// import PortfolioCardUpdateState from '../fPage/bContent/aSidebar/bModel/hPortfolioCard/dUpdate/extra/State';
// import PortfolioCardDeleteState from '../fPage/bContent/aSidebar/bModel/hPortfolioCard/eDelete/extra/State';

// import EventListState from '../fPage/bContent/aSidebar/bModel/iEvent/aList/extra/State';
// import EventCreateState from '../fPage/bContent/aSidebar/bModel/iEvent/bCreate/extra/State';
// import EventRetrieveState from '../fPage/bContent/aSidebar/bModel/iEvent/cRetrieve/extra/State';
// import EventUpdateState from '../fPage/bContent/aSidebar/bModel/iEvent/dUpdate/extra/State';
// import EventDeleteState from '../fPage/bContent/aSidebar/bModel/iEvent/eDelete/extra/State';

// import EventCardListState from '../fPage/bContent/aSidebar/bModel/jEventCard/aList/extra/State';
// import EventCardCreateState from '../fPage/bContent/aSidebar/bModel/jEventCard/bCreate/extra/State';
// import EventCardRetrieveState from '../fPage/bContent/aSidebar/bModel/jEventCard/cRetrieve/extra/State';
// import EventCardUpdateState from '../fPage/bContent/aSidebar/bModel/jEventCard/dUpdate/extra/State';
// import EventCardDeleteState from '../fPage/bContent/aSidebar/bModel/jEventCard/eDelete/extra/State';

// import BlogListState from '../fPage/bContent/aSidebar/bModel/kBlog/aList/extra/State';
// import BlogCreateState from '../fPage/bContent/aSidebar/bModel/kBlog/bCreate/extra/State';
// import BlogRetrieveState from '../fPage/bContent/aSidebar/bModel/kBlog/cRetrieve/extra/State';
// import BlogUpdateState from '../fPage/bContent/aSidebar/bModel/kBlog/dUpdate/extra/State';
// import BlogDeleteState from '../fPage/bContent/aSidebar/bModel/kBlog/eDelete/extra/State';

// import BlogCardListState from '../fPage/bContent/aSidebar/bModel/lBlogCard/aList/extra/State';
// import BlogCardCreateState from '../fPage/bContent/aSidebar/bModel/lBlogCard/bCreate/extra/State';
// import BlogCardRetrieveState from '../fPage/bContent/aSidebar/bModel/lBlogCard/cRetrieve/extra/State';
// import BlogCardUpdateState from '../fPage/bContent/aSidebar/bModel/lBlogCard/dUpdate/extra/State';
// import BlogCardDeleteState from '../fPage/bContent/aSidebar/bModel/lBlogCard/eDelete/extra/State';


const RootReducer = combineReducers({
    LoginState,
    RegisterState,
    ForgotPasswordState,
    ResetPasswordState,

    AuthLayoutState,
    ContentLayoutState,
    
    BaseState,
    
    UserState,
    RoleState,
    MenuState,

    Sample1State,
    Sample2State,
    Sample3State,
    Sample4State,
    Sample5State,
    
    ProfileUpdateState,
    
    // BaseListState,
    // BaseCreateState,
    // BaseRetrieveState,
    // BaseUpdateState,
    // BaseDeleteState,
    
    // HomeListState,
    // HomeCreateState,
    // HomeRetrieveState,
    // HomeUpdateState,
    // HomeDeleteState,

    // AboutListState,
    // AboutCreateState,
    // AboutRetrieveState,
    // AboutUpdateState,
    // AboutDeleteState,

    // ExperienceListState,
    // ExperienceCreateState,
    // ExperienceRetrieveState,
    // ExperienceUpdateState,
    // ExperienceDeleteState,

    // ServiceListState,
    // ServiceCreateState,
    // ServiceRetrieveState,
    // ServiceUpdateState,
    // ServiceDeleteState,

    // PortfolioListState,
    // PortfolioCreateState,
    // PortfolioRetrieveState,
    // PortfolioUpdateState,
    // PortfolioDeleteState,
    
    // PortfolioCardListState,
    // PortfolioCardCreateState,
    // PortfolioCardRetrieveState,
    // PortfolioCardUpdateState,
    // PortfolioCardDeleteState,

    // EventListState,
    // EventCreateState,
    // EventRetrieveState,
    // EventUpdateState,
    // EventDeleteState,

    // EventCardListState,
    // EventCardCreateState,
    // EventCardRetrieveState,
    // EventCardUpdateState,
    // EventCardDeleteState,

    // BlogListState,
    // BlogCreateState,
    // BlogRetrieveState,
    // BlogUpdateState,
    // BlogDeleteState,

    // BlogCardListState,
    // BlogCardCreateState,
    // BlogCardRetrieveState,
    // BlogCardUpdateState,
    // BlogCardDeleteState,
})  

export default RootReducer;
