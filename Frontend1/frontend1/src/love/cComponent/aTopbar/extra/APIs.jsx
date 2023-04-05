import { toast } from "react-toastify";
import API from "../../../aAPI/API";
import clearFormObject from "../../../dFunction/clearFormObject";
import FinalRouteName from "../../../gRoute/FinalRouteName";

const APIs = {
  // Logout API
  LogoutAPI: (Redux, navigate) => {
    API.Content.Topbar.LogoutAPI()
    .then(response => {
      console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        navigate(FinalRouteName.Auth.LoginRegister.LoginRoute)      
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
        navigate(FinalRouteName.Content.Sidebar.Home.Dashboard)      
    });
  },


}

export default APIs