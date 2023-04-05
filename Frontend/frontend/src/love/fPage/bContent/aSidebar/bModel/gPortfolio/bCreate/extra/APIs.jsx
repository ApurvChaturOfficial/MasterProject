import { toast } from "react-toastify";
import API from "../../../../../../../aAPI/API";
import clearFormObject from "../../../../../../../dFunction/clearFormObject";
import FinalRouteName from "../../../../../../../gRoute/FinalRouteName";

const APIs = {
  // Portfolio Create API
  PortfolioCreateAPI: (Redux, navigate) => {
    API.Content.Sidebar.Model.Portfolio.CreateAPI({
			data: {
        basic_info: {
          image: Redux.state.FormObject.FormValue.image,
          title: Redux.state.FormObject.FormValue.title,
          sub_title: Redux.state.FormObject.FormValue.subTitle,
          status: {
            is_active: Redux.state.FormObject.FormValue.isActive === 'active' ? true : false
          }
        },
        relation_info: {
          cards: Redux.state.FormObject.FormValue.cards
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
        const serverResponse = error.response?.data
    });
  },

  // PortfolioCard List API
  PortfolioCardListAPI: (Redux, navigate) => {
    API.Content.Sidebar.Model.PortfolioCard.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.RequiredObject, payload: {
					...Redux.state.RequiredObject,
					PortfolioCardList: serverResponse.list.map(each => {
						return {
              value: each._id,
              label: each.basic_info.title,

							// id: each._id,
							// title: each.basic_info.title,
							// subTitle: each.basic_info.sub_title,
							// slug: each.basic_info.slug,
              // isActive: each.basic_info.status.is_active,

              // links: each.more_info.links,

              // toLink: {
              //   toRetrieve: `${FinalRouteName.Content.Sidebar.Model.PortfolioCard.RetrieveRoute}/${each._id}`,
              //   toUpdate: `${FinalRouteName.Content.Sidebar.Model.PortfolioCard.UpdateRoute}/${each._id}`,
              //   toDelete: `${FinalRouteName.Content.Sidebar.Model.PortfolioCard.DeleteRoute}/${each._id}`,
              // },
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