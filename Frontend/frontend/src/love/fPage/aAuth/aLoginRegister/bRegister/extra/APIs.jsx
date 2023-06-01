import { toast } from "react-toastify";
import API from "../../../../../aAPI/API";
import clearFormObject from "../../../../../dFunction/aClearFormObject";
import FinalRouteName from "../../../../../gRoute/FinalRouteName";

const APIs = {
  // Register API
  RegisterAPI: (Redux, navigate) => {
    API.Auth.LoginRegister.RegisterAPI({
      data: {
        first_name: Redux.state.FormObject.FormValue.firstName,
        last_name: Redux.state.FormObject.FormValue.lastName,
        email: Redux.state.FormObject.FormValue.email,
        password: Redux.state.FormObject.FormValue.password,
        image: Redux.state.FormObject.FormValue.image,
        basic_info: {
          title: `${Redux.state.FormObject.FormValue.firstName} ${Redux.state.FormObject.FormValue.lastName}`,
          sub_title: `${Redux.state.FormObject.FormValue.email} ${Redux.state.FormObject.FormValue.password}`,
          image: Redux.state.FormObject.FormValue.image,
        },
        relation_info: {
          role: {
            id: Redux.state.FormObject.FormValue.role.id
          }
        }
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        navigate(FinalRouteName.Content.Sidebar.DashboardRoute)
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

  // Role List API
  RoleListAPI: (Redux, navigate) => {
    API.Content.Sidebar.Administration.Role.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.RequiredObject, payload: {
					...Redux.state.RequiredObject,
					RoleList: serverResponse.list.map(each => {
						return {
							id: each._id,
							title: each.basic_info.title,
						}
					})
				} })
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },
}

export default APIs