import { toast } from "react-toastify";
import API from "../../../../../aAPI/API";
import clearFormObject from "../../../../../dFunction/aClearFormObject";
import FinalRouteName from "../../../../../gRoute/FinalRouteName";

const APIs = {
  // Register API
  RegisterAPI: (Redux, navigate) => {
    API.Auth.LoginRegister.RegisterAPI({
      data: {
        critical_info: {
          first_name: Redux.state.FormObject.FormValue.firstName,
          last_name: Redux.state.FormObject.FormValue.lastName,
          email: Redux.state.FormObject.FormValue.email,
          password: Redux.state.FormObject.FormValue.password
        },
        basic_info: {
          title: `${Redux.state.FormObject.FormValue.firstName} ${Redux.state.FormObject.FormValue.lastName}`,
          sub_title: `${Redux.state.FormObject.FormValue.email} ${Redux.state.FormObject.FormValue.password}`
        }
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        navigate(FinalRouteName.Content.Profile.UpdateRoute)
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