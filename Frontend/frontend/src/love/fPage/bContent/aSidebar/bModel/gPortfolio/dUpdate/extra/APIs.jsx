import { toast } from "react-toastify";
import API from "../../../../../../../aAPI/API";
import clearFormObject from "../../../../../../../dFunction/clearFormObject";
import FinalRouteName from "../../../../../../../gRoute/FinalRouteName";

const APIs = {
    // Portfolio Retrieve API
    PortfolioRetrieveAPI: (Redux, id) => {
        API.Content.Sidebar.Model.Portfolio.RetrieveAPI({id})
        .then(response => {
        // console.log(response.data);
        const serverResponse = response.data;

        if (serverResponse.success === true) {
					Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
						...Redux.state.ReceivedObject,
						PortfolioRetrieve: {
								id: serverResponse.retrieve._id,
								image: serverResponse.retrieve.basic_info.image,
								title: serverResponse.retrieve.basic_info.title,
								subTitle: serverResponse.retrieve.basic_info.sub_title,
                isActive: serverResponse.retrieve.basic_info.status.is_active === true ? 'active' : 'inactive',
                
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
              isActive: serverResponse.retrieve.basic_info.status.is_active === true ? 'active' : 'inactive'
					}
			}})
	}
        })
        .catch(error => {
            // console.log(error.response.data);
            const serverResponse = error.response.data
        });
    },


  // Portfolio Update API
  PortfolioUpdateAPI: (Redux, id, navigate) => {
    API.Content.Sidebar.Model.Portfolio.UpdateAPI({
			id,
			data: {
        basic_info: {
          image: Redux.state.FormObject.FormValue.image,
          title: Redux.state.FormObject.FormValue.title,
          sub_title: Redux.state.FormObject.FormValue.subTitle,
          status: {
            is_active: Redux.state.FormObject.FormValue.isActive === 'active' ? true : false
          }         
        }
      }
    })
    .then(response => {
      console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
				navigate(FinalRouteName.Content.Sidebar.Model.Portfolio.ListRoute)
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