import API from "../../../../aAPI/API";
import loading from "../../../../dFunction/fLoading";

const APIs = {
  // EventCard Retrieve API
  EventCardRetrieveAPI: (Redux, id) => {
    loading.start(Redux)
    
    API.EventCard.RetrieveAPI({id})
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					EventCardRetrieve: {
							id: serverResponse.retrieve._id,
              image: serverResponse.retrieve.basic_info.image,
							title: serverResponse.retrieve.basic_info.title,
							subTitle: serverResponse.retrieve.basic_info.sub_title,
							slug: serverResponse.retrieve.basic_info.slug,
              isActive: serverResponse.retrieve.basic_info.status.is_active,

              description: serverResponse.retrieve.more_info.description,
              detail: serverResponse.retrieve.more_info.detail,
              links: serverResponse.retrieve.more_info.links,
              date: serverResponse.retrieve.more_info.date,

              createdBy: `${serverResponse.retrieve.personal_info.created_by.first_name} ${serverResponse.retrieve.personal_info.created_by.last_name}`,
              createdAt: serverResponse.retrieve.personal_info.created_at,
              updatedBy: serverResponse.retrieve.personal_info?.updated_by ? 
                `${serverResponse.retrieve.personal_info?.updated_by.first_name} ${serverResponse.retrieve.personal_info?.updated_by.last_name}` :
                "-",
              updatedAt: serverResponse.retrieve.personal_info?.updated_by ? serverResponse.retrieve.personal_info?.updated_at : "-",
						}
				}})
        loading.stop(Redux)
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
        loading.stop(Redux)
    });
  },


}

export default APIs