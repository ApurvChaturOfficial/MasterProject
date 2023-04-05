import { toast } from "react-toastify";
import API from "../../../../../../../aAPI/API";
import clearFormObject from "../../../../../../../dFunction/clearFormObject";
import FinalRouteName from "../../../../../../../gRoute/FinalRouteName";

const APIs = {
  // Experience Create API
  ExperienceCreateAPI: (Redux, navigate) => {
    API.Content.Sidebar.Model.Experience.CreateAPI({
			data: {
        basic_info: {
          image: Redux.state.FormObject.FormValue.image,  
          title: Redux.state.FormObject.FormValue.title,
          sub_title: Redux.state.FormObject.FormValue.subTitle,
          status: {
            is_active: Redux.state.FormObject.FormValue.isActive === 'active' ? true : false
          }
        },
        more_info: {
          cards: Redux.state.FormObject.FormValue.cards
        }
			}
    })
    .then(response => {
      console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
				navigate(FinalRouteName.Content.Sidebar.Model.Experience.ListRoute)
        toast.success(serverResponse.message, { position: "top-center" });
        clearFormObject(Redux)
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response?.data
    });
  },

}

export default APIs