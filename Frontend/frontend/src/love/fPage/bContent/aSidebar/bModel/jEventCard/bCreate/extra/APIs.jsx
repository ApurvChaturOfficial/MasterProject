import { toast } from "react-toastify";
import API from "../../../../../../../aAPI/API";
import clearFormObject from "../../../../../../../dFunction/clearFormObject";
import FinalRouteName from "../../../../../../../gRoute/FinalRouteName";

const APIs = {
  // EventCard Create API
  EventCardCreateAPI: (Redux, navigate) => {
    API.Content.Sidebar.Model.EventCard.CreateAPI({
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
          description: Redux.state.FormObject.FormValue.description,
          detail: Redux.state.FormObject.FormValue.detail,
          links: Redux.state.FormObject.FormValue.links,
          references: Redux.state.FormObject.FormValue.references,
          temp_image: Redux.state.FormObject.FormValue.tempImage,
        }
			}
    })
    .then(response => {
      console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
				navigate(FinalRouteName.Content.Sidebar.Model.EventCard.ListRoute)
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