import API from "../../../../aAPI/API";
import loading from "../../../../dFunction/fLoading";

const APIs = {
  // PortfolioCard Retrieve API
  PortfolioCardRetrieveAPI: (Redux, id, Redux1) => {
    loading.start(Redux1)

    API.PortfolioCard.RetrieveAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					PortfolioCardRetrieve: {
							id: serverResponse.retrieve._id,
							image: serverResponse.retrieve.basic_info.image,
							title: serverResponse.retrieve.basic_info.title,
							subTitle: serverResponse.retrieve.basic_info.sub_title,
							slug: serverResponse.retrieve.basic_info.slug,
              isActive: serverResponse.retrieve.basic_info.status.is_active,

              description: serverResponse.retrieve.more_info.description,
              detail: serverResponse.retrieve.more_info.detail,
              links: serverResponse.retrieve.more_info.links,
              references: serverResponse.retrieve.more_info.references,

						}
				}})
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