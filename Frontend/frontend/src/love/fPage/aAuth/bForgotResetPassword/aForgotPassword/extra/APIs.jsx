import { toast } from "react-toastify";
import API from "../../../../../aAPI/API";
import clearFormObject from "../../../../../dFunction/aClearFormObject";

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