import { toast } from "react-toastify";
import API from "../../../../../../aAPI/API";
import clearFormObject from "../../../../../../dFunction/aClearFormObject";


const APIs = {
  // List API
  ListAPI: (Redux) => {
    API.Content.Sidebar.Administration.Role.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					List: serverResponse.list.map(each => {
						return {
							id: each._id,
							image: each.basic_info.image,
							title: each.basic_info.title,
							subTitle: each.basic_info.sub_title,
							slug: each.basic_info.slug,
              isActive: each.basic_info.status.is_active === true ? 'active' : 'inactive',
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

  // Create API
  CreateAPI: (Redux, close) => {
    API.Content.Sidebar.Administration.Role.CreateAPI({
			data: {
        basic_info: {
          title: Redux.state.FormObject.FormValue.title,
          sub_title: Redux.state.FormObject.FormValue.subTitle,
          image: Redux.state.FormObject.FormValue.image,
          status: {
            is_active: Redux.state.FormObject.FormValue.isActive === 'active' ? true : false
          }
        },
        relation_info: {
          menus: Redux.state.FormObject.FormValue.menus
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

  // Retrieve API
  RetrieveAPI: (Redux, id) => {
    API.Content.Sidebar.Administration.Role.RetrieveAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					Retrieve: {
            id: serverResponse.retrieve._id,
            image: serverResponse.retrieve.basic_info?.image,
            title: serverResponse.retrieve.basic_info?.title,
            subTitle: serverResponse.retrieve.basic_info?.sub_title,
            slug: serverResponse.retrieve.basic_info?.slug,
            isActive: serverResponse.retrieve.basic_info.status.is_active === true ? 'active' : 'inactive',

            menus: serverResponse.retrieve.relation_info.menus,

            createdBy: `${serverResponse.retrieve.personal_info?.created_by?.first_name} ${serverResponse.retrieve.personal_info?.created_by?.last_name}`,
            createdAt: serverResponse.retrieve.personal_info?.created_at,
            updatedBy: serverResponse.retrieve.personal_info?.updated_by ? 
              `${serverResponse.retrieve.personal_info?.updated_by.first_name} ${serverResponse.retrieve.personal_info?.updated_by.last_name}` :
              "-",
            updatedAt: serverResponse.retrieve.personal_info?.updated_by ? serverResponse.retrieve.personal_info?.updated_at : "-",
          }
				}})

        Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
            ...Redux.state.FormObject.FormValue,
            id: serverResponse.retrieve._id,
            image: serverResponse.retrieve.basic_info?.image,
            title: serverResponse.retrieve.basic_info?.title,
            subTitle: serverResponse.retrieve.basic_info?.sub_title,
            slug: serverResponse.retrieve.basic_info?.slug,
            isActive: serverResponse.retrieve.basic_info.status.is_active === true ? 'active' : 'inactive',

            menus: serverResponse.retrieve.relation_info.menus,
          }
				}})
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Update API
  UpdateAPI: (Redux, id, close) => {
    API.Content.Sidebar.Administration.Role.UpdateAPI({
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
        relation_info: {
          menus: Redux.state.FormObject.FormValue.menus
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

  // Delete API
  DeleteAPI: (Redux, id, close) => {
    API.Content.Sidebar.Administration.Role.DeleteAPI({id})
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

  // Required APIs
  // Menu List API
  MenuListAPI: (Redux) => {
    API.Content.Sidebar.Administration.Menu.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.RequiredObject, payload: {
					...Redux.state.RequiredObject,
					MenuList: serverResponse.list.map(each => {
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