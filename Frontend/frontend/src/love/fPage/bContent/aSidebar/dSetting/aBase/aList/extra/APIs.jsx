import { toast } from "react-toastify";
import API from "../../../../../../../aAPI/API";
import FinalRouteName from "../../../../../../../gRoute/FinalRouteName";

const APIs = {
  // Base List API
  BaseListAPI: (Redux, navigate) => {
    API.Content.Sidebar.Setting.Base.ListAPI()
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        Redux.dispatch({ type: Redux.action.ReceivedObject, payload: {
					...Redux.state.ReceivedObject,
					BaseList: serverResponse.list.map(each => {
						return {
							id: each._id,
							title: each.basic_info.title,
							subTitle: each.basic_info.sub_title,
							slug: each.basic_info.slug,
							isActive: each.basic_info.status.is_active,

              toLink: {
                toRetrieve: `${FinalRouteName.Content.Sidebar.Setting.Base.RetrieveRoute}/${each._id}`,
                toUpdate: `${FinalRouteName.Content.Sidebar.Setting.Base.UpdateRoute}/${each._id}`,
                toDelete: `${FinalRouteName.Content.Sidebar.Setting.Base.DeleteRoute}/${each._id}`,
              }
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