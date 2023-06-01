import { toast } from "react-toastify";
import API from "../../../../../aAPI/API";
import clearFormObject from "../../../../../dFunction/aClearFormObject";
import FinalRouteName from "../../../../../gRoute/FinalRouteName";

const APIs = {
  // Forgot Password API
  ForgotPasswordAPI: (Redux, navigate) => {
    API.Auth.ForgotResetPassword.ForgotPasswordAPI({
      data: {
        email: Redux.state.FormObject.FormValue.email,
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast.success(serverResponse.message, { position: "top-center" });
        
        Redux.dispatch({ type: Redux.action.ExtraObject, payload: {
          ...Redux.state.ExtraObject,
          active: "otp",
        } })
      }
    })
    .catch(error => {
      // console.log(error.response.data);
      const serverResponse = error.response.data
      toast.error(serverResponse.message, { position: "top-center" });
    });
  },

  // Validate OTP API
  ValidateOTPAPI: (Redux, navigate) => {
    API.Auth.ForgotResetPassword.ValidateOTPAPI({
      data: {
        email: Redux.state.FormObject.FormValue.email,
        otp: Redux.state.FormObject.FormValue.otp,
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast.success(serverResponse.message, { position: "top-center" });
        navigate(`${FinalRouteName.Auth.ForgotResetPassword.ResetPasswordRoute}/${serverResponse.token}`)
        clearFormObject(Redux)
      }
    })
    .catch(error => {
      // console.log(error.response.data);
      const serverResponse = error.response.data
      toast.error(serverResponse.message, {position: "top-center"});  
    });
  },

}

export default APIs