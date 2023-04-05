import { toast } from "react-toastify";
import API from "../../../../../../../aAPI/API";
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

  // Portfolio Delete API
  PortfolioDeleteAPI: (Redux, id, navigate) => {
    API.Content.Sidebar.Model.Portfolio.DeleteAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        navigate(FinalRouteName.Content.Sidebar.Model.Portfolio.ListRoute)
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