import { toast } from "react-toastify";
import API from "../../../../../../../aAPI/API";
import FinalRouteName from "../../../../../../../gRoute/FinalRouteName";

const APIs = {
  // Experience Retrieve API
  ExperienceRetrieveAPI: (Redux, id) => {
    API.Content.Sidebar.Model.Experience.RetrieveAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
            ...Redux.state.ReceivedObject,
            ExperienceRetrieve: {
                id: serverResponse.retrieve._id,
                title: serverResponse.retrieve.basic_info.title,
                subTitle: serverResponse.retrieve.basic_info.sub_title,
                slug: serverResponse.retrieve.basic_info.slug
            }
        }})
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Experience Delete API
  ExperienceDeleteAPI: (Redux, id, navigate) => {
    API.Content.Sidebar.Model.Experience.DeleteAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        navigate(FinalRouteName.Content.Sidebar.Model.Experience.ListRoute)
        toast.success(serverResponse.message, { position: "top-center" });
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },


}

export default APIs