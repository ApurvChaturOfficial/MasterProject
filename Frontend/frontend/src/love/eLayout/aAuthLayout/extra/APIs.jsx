import { toast } from "react-toastify";
import API from "../../../aAPI/API";
import FinalRouteName from "../../../gRoute/FinalRouteName";

const APIs = {
  // Profile Retrieve API
  ProfileRetrieveAPI: (Redux, navigate) => {
    API.Content.Topbar.ProfileRetrieveAPI()
    .then(response => {
    //   console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        navigate(FinalRouteName.Content.Sidebar.DashboardRoute)      
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
        navigate(FinalRouteName.Auth.LoginRegister.LoginRoute)      
    });
  },
}

export default APIs