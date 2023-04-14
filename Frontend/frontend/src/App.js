import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from './love/eLayout/aAuthLayout';
import ContentLayout from './love/eLayout/bContentLayout';
import Login from './love/fPage/aAuth/aLoginRegister/aLogin';
import Register from './love/fPage/aAuth/aLoginRegister/bRegister';
import ForgotPassword from './love/fPage/aAuth/bForgotResetPassword/aForgotPassword';
import ResetPassword from './love/fPage/aAuth/bForgotResetPassword/bResetPassword';
import Base from './love/fPage/bContent/aSidebar/aSetting/aBase';
import User from './love/fPage/bContent/aSidebar/bAdministration/aUser';
import Role from './love/fPage/bContent/aSidebar/bAdministration/bRole';
import Menu from './love/fPage/bContent/aSidebar/bAdministration/cMenu';
import Sample1 from './love/fPage/bContent/aSidebar/cMain/App2/aSample1';
import Sample2 from './love/fPage/bContent/aSidebar/cMain/App2/bSample2';
import Sample3 from './love/fPage/bContent/aSidebar/cMain/App2/cSample3';
import Sample4 from './love/fPage/bContent/aSidebar/cMain/App2/dSample4';
import Sample5 from './love/fPage/bContent/aSidebar/cMain/App2/eSample5';
import Home from './love/fPage/bContent/aSidebar/cMain/App3/aHome';
import About from './love/fPage/bContent/aSidebar/cMain/App3/bAbout';
import Experience from './love/fPage/bContent/aSidebar/cMain/App3/cExperience';
import Service from './love/fPage/bContent/aSidebar/cMain/App3/dService';
import Portfolio from './love/fPage/bContent/aSidebar/cMain/App3/ePortfolio';
import PortfolioCard from './love/fPage/bContent/aSidebar/cMain/App3/fPortfolioCard';
import Event from './love/fPage/bContent/aSidebar/cMain/App3/gEvent';
import EventCard from './love/fPage/bContent/aSidebar/cMain/App3/hEventCard';
import Blog from './love/fPage/bContent/aSidebar/cMain/App3/iBlog';
import BlogCard from './love/fPage/bContent/aSidebar/cMain/App3/jBlogCard';
import Profile from './love/fPage/bContent/bTopbar/aProfile';
import RouteName from './love/gRoute/RouteName';


function App() {
  console.log(RouteName.Content.Sidebar.Main.ExperienceRoute)
  return (    
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<AuthLayout />} >
          <Route path={RouteName.Auth.LoginRegister.LoginRoute} element={<Login />} />
          <Route path={RouteName.Auth.LoginRegister.RegisterRoute} element={<Register />} />

          <Route path={RouteName.Auth.ForgotResetPassword.ForgotPasswordRoute} element={<ForgotPassword />} />
          <Route path={`${RouteName.Auth.ForgotResetPassword.ResetPasswordRoute}/:token`} element={<ResetPassword />} />
        </Route>

        <Route element={<ContentLayout />} >
          <Route path={RouteName.Content.Sidebar.DashboardRoute} element={<h1>Dashboard</h1>} />

          <Route path='/setting'>
            <Route path={RouteName.Content.Sidebar.Setting.BaseRoute} element={<Base />} />
          </Route>

          <Route path='/administration'>
            <Route path={RouteName.Content.Sidebar.Administration.UserRoute} element={<User />} />
            <Route path={RouteName.Content.Sidebar.Administration.RoleRoute} element={<Role />} />
            <Route path={RouteName.Content.Sidebar.Administration.MenuRoute} element={<Menu />} />
          </Route>

          <Route path='/main'>
            <Route path={RouteName.Content.Sidebar.Main.HomeRoute} element={<Home />} />
            <Route path={RouteName.Content.Sidebar.Main.AboutRoute} element={<About />} />
            <Route path={RouteName.Content.Sidebar.Main.ExperienceRoute} element={<Experience />} />
            <Route path={RouteName.Content.Sidebar.Main.ServiceRoute} element={<Service />} />
            <Route path={RouteName.Content.Sidebar.Main.PortfolioRoute} element={<Portfolio />} />
            <Route path={RouteName.Content.Sidebar.Main.PortfolioCardRoute} element={<PortfolioCard />} />
            <Route path={RouteName.Content.Sidebar.Main.EventRoute} element={<Event />} />
            <Route path={RouteName.Content.Sidebar.Main.EventCardRoute} element={<EventCard />} />
            <Route path={RouteName.Content.Sidebar.Main.BlogRoute} element={<Blog />} />
            <Route path={RouteName.Content.Sidebar.Main.BlogCardRoute} element={<BlogCard />} />
          </Route>

          <Route path={RouteName.Content.Topbar.ProfileRoute} element={<Profile />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
