import { toast } from "react-toastify";
import API from "../../../../../../../aAPI/API";
import clearFormObject from "../../../../../../../dFunction/clearFormObject";
import FinalRouteName from "../../../../../../../gRoute/FinalRouteName";

const APIs = {
    // Service Retrieve API
    ServiceRetrieveAPI: (Redux, id) => {
        API.Content.Sidebar.Model.Service.RetrieveAPI({id})
        .then(response => {
        // console.log(response.data);
        const serverResponse = response.data;

        if (serverResponse.success === true) {
					Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
						...Redux.state.ReceivedObject,
						ServiceRetrieve: {
								id: serverResponse.retrieve._id,
								image: serverResponse.retrieve.basic_info.image,
								title: serverResponse.retrieve.basic_info.title,
								subTitle: serverResponse.retrieve.basic_info.sub_title,
                isActive: serverResponse.retrieve.basic_info.status.is_active === true ? 'active' : 'inactive',
                
                cards: serverResponse.retrieve.more_info.cards,
                
              createdBy: `${serverResponse.retrieve.personal_info.created_by.first_name} ${serverResponse.retrieve.personal_info.created_by.last_name}`,
              createdAt: serverResponse.retrieve.personal_info.created_at,
              updatedBy: serverResponse.retrieve.personal_info?.updated_by ? 
                `${serverResponse.retrieve.personal_info?.updated_by.first_name} ${serverResponse.retrieve.personal_info?.updated_by.last_name}` :
                "-",
              updatedAt: serverResponse.retrieve.personal_info?.updated_by ? serverResponse.retrieve.personal_info?.updated_at : "-",

						}
				}})
				Redux.dispatch({ type: Redux.action.FormObject, payload: {
					...Redux.state.FormObject,
					FormValue: {
							id: serverResponse.retrieve._id,
							image: serverResponse.retrieve.basic_info.image,
							title: serverResponse.retrieve.basic_info.title,
							subTitle: serverResponse.retrieve.basic_info.sub_title,
              isActive: serverResponse.retrieve.basic_info.status.is_active === true ? 'active' : 'inactive',

              cards: serverResponse.retrieve.more_info.cards,
					}
			}})
	}
        })
        .catch(error => {
            // console.log(error.response.data);
            const serverResponse = error.response.data
        });
    },


  // Service Update API
  ServiceUpdateAPI: (Redux, id, navigate) => {
    API.Content.Sidebar.Model.Service.UpdateAPI({
			id,
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
          cards: Redux.state.FormObject.FormValue.cards,
        }
      }
    })
    .then(response => {
      console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
				navigate(FinalRouteName.Content.Sidebar.Model.Service.ListRoute)
        toast.success(serverResponse.message, { position: "top-center" });
        clearFormObject(Redux)
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },


}

export default APIs