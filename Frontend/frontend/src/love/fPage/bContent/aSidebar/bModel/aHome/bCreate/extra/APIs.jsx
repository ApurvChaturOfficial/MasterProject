import { toast } from "react-toastify";
import API from "../../../../../../../aAPI/API";
import clearFormObject from "../../../../../../../dFunction/clearFormObject";
import FinalRouteName from "../../../../../../../gRoute/FinalRouteName";

const APIs = {
  // Home Create API
  HomeCreateAPI: (Redux, navigate) => {
    API.Content.Sidebar.Model.Home.CreateAPI({
			data: {
        basic_info: {
          title: Redux.state.FormObject.FormValue.title,
          sub_title: Redux.state.FormObject.FormValue.subTitle,
          image: Redux.state.FormObject.FormValue.image,  
          status: {
            is_active: Redux.state.FormObject.FormValue.isActive === 'active' ? true : false
          }
        },
        more_info: {
          description: Redux.state.FormObject.FormValue.description,
          links: Redux.state.FormObject.FormValue.links,
          resume: Redux.state.FormObject.FormValue.resume,
        }
			}
    })
    .then(response => {
      console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
				navigate(FinalRouteName.Content.Sidebar.Model.Home.ListRoute)
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