import { toast } from "react-toastify";
import API from "../../../../../aAPI/API";
import FinalRouteName from "../../../../../gRoute/FinalRouteName";

const APIs = {
  // Profile Retrieve API
  ProfileRetrieveAPI: (Redux, navigate) => {
    API.Content.Topbar.ProfileRetrieveAPI()
    .then(response => {
    //   console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					ProfileRetrieve: {
            id: serverResponse.profile_retrieve._id,

            firstName: serverResponse.profile_retrieve.critical_info.first_name,
            lastName: serverResponse.profile_retrieve.critical_info.last_name,
            email: serverResponse.profile_retrieve.critical_info.email,

            image: serverResponse.profile_retrieve.basic_info.image,

            role: serverResponse.profile_retrieve.relation_info.role,
          }
				}})

        Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
            ...Redux.state.FormObject.FormValue,
            id: serverResponse.profile_retrieve._id,

            firstName: serverResponse.profile_retrieve.critical_info.first_name,
            lastName: serverResponse.profile_retrieve.critical_info.last_name,
            email: serverResponse.profile_retrieve.critical_info.email,

            image: serverResponse.profile_retrieve.basic_info.image,

            role: serverResponse.profile_retrieve.relation_info.role,
          }
				}})

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