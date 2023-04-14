import { toast } from "react-toastify";
import API from "../../../../../../aAPI/API";
import clearFormObject from "../../../../../../dFunction/aClearFormObject";


const APIs = {
  // List API
  ListAPI: (Redux) => {
    API.Content.Sidebar.Administration.User.ListAPI()
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
    API.Content.Sidebar.Administration.User.CreateAPI({
			data: {
        critical_info: {
          first_name: Redux.state.FormObject.FormValue.firstName,
          last_name: Redux.state.FormObject.FormValue.lastName,
          email: Redux.state.FormObject.FormValue.email,
          password: Redux.state.FormObject.FormValue.password,
          image: {
            url: "https://picsum.photos/200/300"
          },
        },
        basic_info: {
          title: `${Redux.state.FormObject.FormValue.firstName} ${Redux.state.FormObject.FormValue.lastName}`,
          sub_title: `${Redux.state.FormObject.FormValue.email} ${Redux.state.FormObject.FormValue.password}`,
          image: {
            url: "https://picsum.photos/200/300"
          },
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
    API.Content.Sidebar.Administration.User.RetrieveAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					Retrieve: {
            id: serverResponse.retrieve._id,
            
            firstName: serverResponse.retrieve.critical_info?.first_name,
            lastName: serverResponse.retrieve.critical_info?.last_name,
            email: serverResponse.retrieve.critical_info?.email,
            
            image: serverResponse.retrieve.basic_info?.image,
            title: serverResponse.retrieve.basic_info?.title,
            subTitle: serverResponse.retrieve.basic_info?.sub_title,
            slug: serverResponse.retrieve.basic_info?.slug,
            isActive: serverResponse.retrieve.basic_info.status.is_active === true ? 'active' : 'inactive',

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

            firstName: serverResponse.retrieve.critical_info?.first_name,
            lastName: serverResponse.retrieve.critical_info?.last_name,
            email: serverResponse.retrieve.critical_info?.email,

            image: serverResponse.retrieve.basic_info?.image,
            title: serverResponse.retrieve.basic_info?.title,
            subTitle: serverResponse.retrieve.basic_info?.sub_title,
            slug: serverResponse.retrieve.basic_info?.slug,
            isActive: serverResponse.retrieve.basic_info.status.is_active === true ? 'active' : 'inactive',
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
    API.Content.Sidebar.Administration.User.UpdateAPI({
      id,
			data: {
        critical_info: {
          first_name: Redux.state.FormObject.FormValue.firstName,
          last_name: Redux.state.FormObject.FormValue.lastName,
          email: Redux.state.FormObject.FormValue.email,
          image: {
            url: "https://picsum.photos/200/300"
          },
        },
        basic_info: {
          title: `${Redux.state.FormObject.FormValue.firstName} ${Redux.state.FormObject.FormValue.lastName}`,
          sub_title: `${Redux.state.FormObject.FormValue.email} ${Redux.state.FormObject.FormValue.password}`,
          image: {
            url: "https://picsum.photos/200/300"
          },
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
    API.Content.Sidebar.Administration.User.DeleteAPI({id})
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