import { toast } from "react-toastify";
import API from "../../../../../aAPI/API";
import clearFormObject from "../../../../../dFunction/aClearFormObject";
import FinalRouteName from "../../../../../gRoute/FinalRouteName";

const APIs = {
  // Profile Retrieve API
  ProfileRetrieveAPI: (Redux, navigate) => {
    API.Content.Topbar.ProfileRetrieveAPI()
    .then(response => {
    //   console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.FormObject, payload: {
          ...Redux.state.FormObject,
          FormValue: {
            ...Redux.state.FormObject.FormValue,
            image: serverResponse.profile_retrieve.image,
            firstName: serverResponse.profile_retrieve.first_name,
            lastName: serverResponse.profile_retrieve.last_name,
            email: serverResponse.profile_retrieve.email,
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

  // Profile Update API
  ProfileUpdateAPI: (Redux, Redux1) => {
    API.Content.Topbar.ProfileUpdateAPI({
      data: {
        first_name: Redux.state.FormObject.FormValue.firstName,
        last_name: Redux.state.FormObject.FormValue.lastName,
        email: Redux.state.FormObject.FormValue.email,
        image: Redux.state.FormObject.FormValue.image,
        basic_info: {
          title: `${Redux.state.FormObject.FormValue.firstName} ${Redux.state.FormObject.FormValue.lastName}`,
          sub_title: `${Redux.state.FormObject.FormValue.email} ${Redux.state.FormObject.FormValue.password}`,
          image: Redux.state.FormObject.FormValue.image,
        }
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({
          type: Redux.action.FormObject,
          payload: {
            ...Redux.state.FormObject,
            FormIsValid: false
          },
        })

        Redux1.dispatch({ type: Redux1.action.ReceivedObject, payload: {
          ...Redux1.state.ReceivedObject,
          ProfileRetrieve: {
            ...Redux1.state.ReceivedObject?.ProfileRetrieve,
            first_name: serverResponse.update.first_name,
            last_name: serverResponse.update.last_name,
            image: serverResponse.update.image,
            email: serverResponse.update.email,
          }
        }})
        toast.success(serverResponse.message, { position: "top-center" });
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response?.data
    });
  },

  // Profile Update Password API
  ProfileUpdatePasswordAPI: (Redux) => {
    API.Content.Topbar.ProfileUpdatePasswordAPI({
      data: {
        old_password: Redux.state.FormObject.FormValue1.oldPassword,
        new_password: Redux.state.FormObject.FormValue1.newPassword,
        confirm_password: Redux.state.FormObject.FormValue1.confirmPassword,
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast.success(serverResponse.message, { position: "top-center" });

        Redux.dispatch({
          type: Redux.action.FormObject,
          payload: {
            ...Redux.state.FormObject,
            FormValue1: {},
            FormError1: {},
            FormIsValid1: false
          },
        })      
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response?.data
        toast.error(serverResponse.message, {position: "top-center"});  
    });
  },

}

export default APIs