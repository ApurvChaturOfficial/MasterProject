import API from "../../aAPI/API";

const APIs = {
  // Home List API
  HomeListAPI: (Redux, navigate) => {
    API.Home.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const lastObject = serverResponse.list[serverResponse.list.length - 1]

        const HomeList = lastObject && {
          id: lastObject._id,
          image: lastObject.basic_info.image,
          title: lastObject.basic_info.title,
          subTitle: lastObject.basic_info.sub_title,

          description: lastObject.more_info.description,
          links: lastObject.more_info.links,
          resume: lastObject.more_info.resume,
        }

        APIs.AboutListAPI(Redux, HomeList)
      }
    })
    .catch(error => {
      console.log(error.response.data);
      const serverResponse = error.response.data
    });
  },

  // About List API
  AboutListAPI: (Redux, HomeList) => {
    API.About.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const lastObject = serverResponse.list[serverResponse.list.length - 1]

        const AboutList = lastObject && {
          id: lastObject._id,
          image: lastObject.basic_info.image,
          title: lastObject.basic_info.title,
          subTitle: lastObject.basic_info.sub_title,

          description: lastObject.more_info.description,
          cards: lastObject.more_info.cards,
        }

        APIs.ExperienceListAPI(Redux, HomeList, AboutList)
      }
    })
    .catch(error => {
        console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Experience List API
  ExperienceListAPI: (Redux, HomeList, AboutList) => {
    API.Experience.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const lastObject = serverResponse.list[serverResponse.list.length - 1]

        const ExperienceList = lastObject && {
          id: lastObject._id,
          title: lastObject.basic_info.title,
          subTitle: lastObject.basic_info.sub_title,

          cards: lastObject.more_info.cards,
        }

        APIs.ServiceListAPI(Redux, HomeList, AboutList, ExperienceList)
      }
    })
    .catch(error => {
        console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Service List API
  ServiceListAPI: (Redux, HomeList, AboutList, ExperienceList) => {
    API.Service.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const lastObject = serverResponse.list[serverResponse.list.length - 1]

        const ServiceList = lastObject && {
          id: lastObject._id,
          title: lastObject.basic_info.title,
          subTitle: lastObject.basic_info.sub_title,

          cards: lastObject.more_info.cards,
        }

        APIs.PortfolioListAPI(Redux, HomeList, AboutList, ExperienceList,  ServiceList)
      }
    })
    .catch(error => {
        console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Portfolio List API
  PortfolioListAPI: (Redux, HomeList, AboutList, ExperienceList, ServiceList) => {
    API.Portfolio.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const lastObject = serverResponse.list[serverResponse.list.length - 1]

        const PortfolioList = lastObject && {
          id: lastObject._id,
          title: lastObject.basic_info.title,
          subTitle: lastObject.basic_info.sub_title,

          cards: lastObject.relation_info.cards,
        }

        APIs.EventListAPI(Redux, HomeList, AboutList, ExperienceList,  ServiceList, PortfolioList)
      }
    })
    .catch(error => {
        console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Event List API
  EventListAPI: (Redux, HomeList, AboutList, ExperienceList,  ServiceList, PortfolioList) => {
    API.Event.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const lastObject = serverResponse.list[serverResponse.list.length - 1]

        const EventList = lastObject && {
          id: lastObject._id,
          title: lastObject.basic_info.title,
          subTitle: lastObject.basic_info.sub_title,

          cards: lastObject.relation_info.cards,
        }
        
        APIs.BlogListAPI(Redux, HomeList, AboutList, ExperienceList,  ServiceList, PortfolioList, EventList)
      }
    })
    .catch(error => {
        console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Blog List API
  BlogListAPI: (Redux, HomeList, AboutList, ExperienceList,  ServiceList, PortfolioList, EventList) => {
    API.Blog.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const lastObject = serverResponse.list[serverResponse.list.length - 1]

        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
          HomeList,
          AboutList,
          ExperienceList,
          ServiceList,
          PortfolioList,
          EventList,
					BlogList: lastObject && {
							id: lastObject._id,
							title: lastObject.basic_info.title,
							subTitle: lastObject.basic_info.sub_title,

							cards: lastObject.relation_info.cards,
						}
				} })
      }
    })
    .catch(error => {
        console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },


}

export default APIs