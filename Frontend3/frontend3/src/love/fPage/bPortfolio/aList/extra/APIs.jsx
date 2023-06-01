import API from "../../../../aAPI/API";
import loading from "../../../../dFunction/fLoading";
import FinalRouteName from "../../../../gRoute/FinalRouteName";

const APIs = {
  // Portfolio List API
  PortfolioListAPI: (Redux, Redux1) => {
    loading.start(Redux1)

    API.Portfolio.ListAPI()
    .then(response => {
      console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const lastObject = serverResponse.list[serverResponse.list.length - 1]

        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					PortfolioList: {
							id: lastObject._id,
							title: lastObject.basic_info.title,
							subTitle: lastObject.basic_info.sub_title,

							cards: lastObject.relation_info.cards.map(each => {
                return {
                  ...each,
                  toRetrieve: `/${FinalRouteName.Portfolio.RetrieveRoute}/${each._id}`,
                }
              }),

              // toLink: {
              //   toRetrieve: `portfolio-retrieve/${each._id}`,
              //   // toUpdate: `${FinalRouteName.Content.Sidebar.Model.ServiceCard.UpdateRoute}/${each._id}`,
              //   // toDelete: `${FinalRouteName.Content.Sidebar.Model.ServiceCard.DeleteRoute}/${each._id}`,
              // }
						}
				} })

        loading.stop(Redux1)
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
        loading.stop(Redux1)
    });
  },


}

export default APIs