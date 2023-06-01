import API from "../../../../aAPI/API";
import loading from "../../../../dFunction/fLoading";

const APIs = {
  // Event List API
  EventListAPI: (Redux, Redux1) => {
    loading.start(Redux1)

    API.Event.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const lastObject = serverResponse.list[serverResponse.list.length - 1]

        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					EventList: {
							id: lastObject._id,
							title: lastObject.basic_info.title,
							subTitle: lastObject.basic_info.sub_title,

							cards: lastObject.relation_info.cards,
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