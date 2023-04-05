import { toast } from "react-toastify";
import API from "../../../../../../../aAPI/API";
import FinalRouteName from "../../../../../../../gRoute/FinalRouteName";

const APIs = {
  // PortfolioCard Retrieve API
  PortfolioCardRetrieveAPI: (Redux, id) => {
    API.Content.Sidebar.Model.PortfolioCard.RetrieveAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
            ...Redux.state.ReceivedObject,
            PortfolioCardRetrieve: {
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

  // PortfolioCard Delete API
  PortfolioCardDeleteAPI: (Redux, id, navigate) => {
    API.Content.Sidebar.Model.PortfolioCard.DeleteAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        navigate(FinalRouteName.Content.Sidebar.Model.PortfolioCard.ListRoute)
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