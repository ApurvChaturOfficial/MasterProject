import { toast } from "react-toastify";
import API from "../../../../../aAPI/API";
import clearFormObject from "../../../../../dFunction/aClearFormObject";
import FinalRouteName from "../../../../../gRoute/FinalRouteName";

const APIs = {
  // Login API
  LoginAPI: (Redux, navigate) => {
    API.Auth.LoginRegister.LoginAPI({
      data: {
        email: Redux.state.FormObject.FormValue.email,
        password: Redux.state.FormObject.FormValue.password
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        navigate(FinalRouteName.Content.Profile.RetrieveRoute)
        toast.success(serverResponse.message, { position: "top-center" });
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