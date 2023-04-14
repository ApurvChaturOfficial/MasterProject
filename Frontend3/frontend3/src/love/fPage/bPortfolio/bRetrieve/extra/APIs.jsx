import API from "../../../../aAPI/API";

const APIs = {
  // PortfolioCard Retrieve API
  PortfolioCardRetrieveAPI: (Redux, id) => {
    API.PortfolioCard.RetrieveAPI({id})
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
							slug: serverResponse.retrieve.basic_info.slug,
              isActive: serverResponse.retrieve.basic_info.status.is_active,

              description: serverResponse.retrieve.more_info.description,
              detail: serverResponse.retrieve.more_info.detail,
              links: serverResponse.retrieve.more_info.links,
              references: serverResponse.retrieve.more_info.references,
              tempImage: serverResponse.retrieve.more_info.temp_image,

              createdBy: `${serverResponse.retrieve.personal_info.created_by.first_name} ${serverResponse.retrieve.personal_info.created_by.last_name}`,
              createdAt: serverResponse.retrieve.personal_info.created_at,
              updatedBy: serverResponse.retrieve.personal_info?.updated_by ? 
                `${serverResponse.retrieve.personal_info?.updated_by.first_name} ${serverResponse.retrieve.personal_info?.updated_by.last_name}` :
                "-",
              updatedAt: serverResponse.retrieve.personal_info?.updated_by ? serverResponse.retrieve.personal_info?.updated_at : "-",
						}
				}})
      }
    })
    .catch(error => {
        // console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },


}

export default APIs