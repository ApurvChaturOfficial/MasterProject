import { toast } from "react-toastify";
import API from "../../../../../aAPI/API";
import clearFormObject from "../../../../../dFunction/aClearFormObject";
import FinalRouteName from "../../../../../gRoute/FinalRouteName";

const APIs = {
  // Reset Password API
  ResetPasswordAPI: (Redux, navigate, token) => {
    API.Auth.ForgotResetPassword.ResetPasswordAPI({
      token: token,
      data: {
        new_password: Redux.state.FormObject.FormValue.newPassword,
        confirm_password: Redux.state.FormObject.FormValue.confirmPassword,
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        navigate(FinalRouteName.Content.Sidebar.Home.Dashboard.DashboardRoute)
        toast.success(serverResponse.message, { position: "top-center" });
        clearFormObject(Redux)
      }
    })
    .catch(error => {
      // console.log(error.response.data);
      const serverResponse = error.response.data
      toast.error(serverResponse.message, { position: "top-center" });
    });
  },
}

export default APIs