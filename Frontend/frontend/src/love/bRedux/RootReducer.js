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

import Sample1State from '../fPage/bContent/aSidebar/cMain/App2/aSample1/extra/State';
import Sample2State from '../fPage/bContent/aSidebar/cMain/App2/bSample2/extra/State';
import Sample3State from '../fPage/bContent/aSidebar/cMain/App2/cSample3/extra/State';
import Sample4State from '../fPage/bContent/aSidebar/cMain/App2/dSample4/extra/State';
import Sample5State from '../fPage/bContent/aSidebar/cMain/App2/eSample5/extra/State';

import HomeState from '../fPage/bContent/aSidebar/cMain/App3/aHome/extra/State';
import AboutState from '../fPage/bContent/aSidebar/cMain/App3/bAbout/extra/State';
import ExperienceState from '../fPage/bContent/aSidebar/cMain/App3/cExperience/extra/State';
import ServiceState from '../fPage/bContent/aSidebar/cMain/App3/dService/extra/State';
import PortfolioState from '../fPage/bContent/aSidebar/cMain/App3/ePortfolio/extra/State';
import PortfolioCardState from '../fPage/bContent/aSidebar/cMain/App3/fPortfolioCard/extra/State';
import EventState from '../fPage/bContent/aSidebar/cMain/App3/gEvent/extra/State';
import EventCardState from '../fPage/bContent/aSidebar/cMain/App3/hEventCard/extra/State';
import BlogState from '../fPage/bContent/aSidebar/cMain/App3/iBlog/extra/State';
import BlogCardState from '../fPage/bContent/aSidebar/cMain/App3/jBlogCard/extra/State';

import ProfileUpdateState from '../fPage/bContent/bTopbar/aProfile/extra/State';

import DashboardState from '../fPage/bContent/aSidebar/dDashboard/App3/extra/State';

import DirectHomeState from '../fPage/bContent/aSidebar/eDirect/App3/aDirectHome/extra/State';


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
    
    HomeState,
    AboutState,
    ExperienceState,
    ServiceState,
    PortfolioState,
    PortfolioCardState,
    EventState,
    EventCardState,
    BlogState,
    BlogCardState,

    ProfileUpdateState,

    DashboardState,

    DirectHomeState,
    
})  

export default RootReducer;
