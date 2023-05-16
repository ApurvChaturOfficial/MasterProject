import API from "../../../../../../aAPI/API";

const APIs = {
  // Home List API
  HomeListAPI: (Redux, navigate) => {
    API.Content.Sidebar.Main.Home.ListAPI()
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
    API.Content.Sidebar.Main.About.ListAPI()
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
    API.Content.Sidebar.Main.Experience.ListAPI()
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
    API.Content.Sidebar.Main.Service.ListAPI()
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
    API.Content.Sidebar.Main.Portfolio.ListAPI()
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

        APIs.PortfolioCardListAPI(Redux, HomeList, AboutList, ExperienceList,  ServiceList, PortfolioList)
      }
    })
    .catch(error => {
        console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Portfolio Card List API
  PortfolioCardListAPI: (Redux, HomeList, AboutList, ExperienceList, ServiceList, PortfolioList) => {
    API.Content.Sidebar.Main.PortfolioCard.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const PortfolioCardList = serverResponse.list.map(each => {
          return {
            id: each._id,
            image: each.basic_info.image,
            title: each.basic_info.title,
            subTitle: each.basic_info.sub_title,
          }
        }) 

        APIs.EventListAPI(Redux, HomeList, AboutList, ExperienceList,  ServiceList, PortfolioList, PortfolioCardList)
      }
    })
    .catch(error => {
        console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Event List API
  EventListAPI: (Redux, HomeList, AboutList, ExperienceList,  ServiceList, PortfolioList, PortfolioCardList) => {
    API.Content.Sidebar.Main.Event.ListAPI()
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
        
        APIs.EventCardListAPI(Redux, HomeList, AboutList, ExperienceList,  ServiceList, PortfolioList, PortfolioCardList, EventList)
      }
    })
    .catch(error => {
        console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Event Card List API
  EventCardListAPI: (Redux, HomeList, AboutList, ExperienceList, ServiceList, PortfolioList, PortfolioCardList, EventList) => {
    API.Content.Sidebar.Main.EventCard.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const EventCardList = serverResponse.list.map(each => {
          return {
            id: each._id,
            image: each.basic_info.image,
            title: each.basic_info.title,
            subTitle: each.basic_info.sub_title,
          }
        }) 

        APIs.BlogListAPI(Redux, HomeList, AboutList, ExperienceList,  ServiceList,  PortfolioList, PortfolioCardList, EventList, EventCardList)
      }
    })
    .catch(error => {
        console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Blog List API
  BlogListAPI: (Redux, HomeList, AboutList, ExperienceList,  ServiceList, PortfolioList, PortfolioCardList, EventList, EventCardList) => {
    API.Content.Sidebar.Main.Blog.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const lastObject = serverResponse.list[serverResponse.list.length - 1]

        const BlogList = lastObject && {
          id: lastObject._id,
          title: lastObject.basic_info.title,
          subTitle: lastObject.basic_info.sub_title,

          cards: lastObject.relation_info.cards,
        }
        
        APIs.BlogCardListAPI(Redux, HomeList, AboutList, ExperienceList,  ServiceList, PortfolioList, PortfolioCardList, EventList, EventCardList, BlogList)
      }
    })
    .catch(error => {
        console.log(error.response.data);
        const serverResponse = error.response.data
    });
  },

  // Blog Card List API
  BlogCardListAPI: (Redux, HomeList, AboutList, ExperienceList, ServiceList, PortfolioList, PortfolioCardList, EventList, EventCardList, BlogList) => {
    API.Content.Sidebar.Main.BlogCard.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        const BlogCardList = serverResponse.list.map(each => {
          return {
            id: each._id,
            image: each.basic_info.image,
            title: each.basic_info.title,
            subTitle: each.basic_info.sub_title,
          }
        }) 

        
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
          HomeList,
          AboutList,
          ExperienceList,
          ServiceList,
          PortfolioList,
          PortfolioCardList,
          EventList,
          EventCardList,
          BlogList,
					BlogCardList
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