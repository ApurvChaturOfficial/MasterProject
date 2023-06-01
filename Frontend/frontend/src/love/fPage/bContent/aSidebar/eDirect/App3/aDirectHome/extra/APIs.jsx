import { toast } from "react-toastify";
import API from "../../../../../../../aAPI/API";
import clearFormObject from "../../../../../../../dFunction/aClearFormObject";


const APIs = {
  // List API
  ListAPI: (Redux, navigate) => {
    API.Content.Sidebar.Main.Home.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const lastObject = serverResponse.list[serverResponse.list.length - 1]

        Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: lastObject && {
            ...Redux.state.FormObject.FormValue,
            id: lastObject._id,
            image: lastObject.basic_info?.image,
            title: lastObject.basic_info?.title,
            subTitle: lastObject.basic_info?.sub_title,
          
            description: lastObject.more_info?.description,
            links: lastObject.more_info?.links,
            resume: lastObject.more_info?.resume,
          }
				}})

      }
    })
    .catch(error => {
      console.log(error.response.data);
      const serverResponse = error.response.data
    });
  },
  
  // Create API
  CreateAPI: (Redux, close) => {
    API.Content.Sidebar.Main.Home.CreateAPI({
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
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        close.current.click()
        toast.success(serverResponse.message, { position: "top-center" });
        clearFormObject(Redux)
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response?.data
    });
  },

  // Update API
  UpdateAPI: (Redux, id) => {
    API.Content.Sidebar.Main.Home.UpdateAPI({
      id,
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
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast.success(serverResponse.message, { position: "top-center" });
        APIs.RetrieveAPI(Redux, id)
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response?.data
    });
  },

  // Delete API
  DeleteAPI: (Redux, id, close) => {
    API.Content.Sidebar.Main.Home.DeleteAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        close.current.click()
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