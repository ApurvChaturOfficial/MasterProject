import APIBase from "./APIBase"

const API = {
	Home: {
		ListAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/home/list`,
				})
			)
		}, 
		CreateAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/home/create`,
					data: props.data,
				})
			)
		}, 
		RetrieveAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/home/retrieve/${props.id}`,
				})
			)
		}, 
		UpdateAPI: (props) => {
			return (
				APIBase({
					method: "PUT",
					url: `/api/v1/home/update/${props.id}`,
					data: props.data,
				})
			)
		}, 
		DeleteAPI: (props) => {
			return (
				APIBase({
					method: "DELETE",
					url: `/api/v1/home/delete/${props.id}`,
				})
			)
		}, 
	},
	About: {
		ListAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/about/list`,
				})
			)
		}, 
		CreateAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/about/create`,
					data: props.data,
				})
			)
		}, 
		RetrieveAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/about/retrieve/${props.id}`,
				})
			)
		}, 
		UpdateAPI: (props) => {
			return (
				APIBase({
					method: "PUT",
					url: `/api/v1/about/update/${props.id}`,
					data: props.data,
				})
			)
		}, 
		DeleteAPI: (props) => {
			return (
				APIBase({
					method: "DELETE",
					url: `/api/v1/about/delete/${props.id}`,
				})
			)
		}, 
	},
	Experience: {
		ListAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/experience/list`,
				})
			)
		}, 
		CreateAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/experience/create`,
					data: props.data,
				})
			)
		}, 
		RetrieveAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/experience/retrieve/${props.id}`,
				})
			)
		}, 
		UpdateAPI: (props) => {
			return (
				APIBase({
					method: "PUT",
					url: `/api/v1/experience/update/${props.id}`,
					data: props.data,
				})
			)
		}, 
		DeleteAPI: (props) => {
			return (
				APIBase({
					method: "DELETE",
					url: `/api/v1/experience/delete/${props.id}`,
				})
			)
		}, 
	},
	Service: {
		ListAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/service/list`,
				})
			)
		}, 
		CreateAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/service/create`,
					data: props.data,
				})
			)
		}, 
		RetrieveAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/service/retrieve/${props.id}`,
				})
			)
		}, 
		UpdateAPI: (props) => {
			return (
				APIBase({
					method: "PUT",
					url: `/api/v1/service/update/${props.id}`,
					data: props.data,
				})
			)
		}, 
		DeleteAPI: (props) => {
			return (
				APIBase({
					method: "DELETE",
					url: `/api/v1/service/delete/${props.id}`,
				})
			)
		}, 
	},
	Portfolio: {
		ListAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/portfolio/list`,
				})
			)
		}, 
		CreateAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/portfolio/create`,
					data: props.data,
				})
			)
		}, 
		RetrieveAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/portfolio/retrieve/${props.id}`,
				})
			)
		}, 
		UpdateAPI: (props) => {
			return (
				APIBase({
					method: "PUT",
					url: `/api/v1/portfolio/update/${props.id}`,
					data: props.data,
				})
			)
		}, 
		DeleteAPI: (props) => {
			return (
				APIBase({
					method: "DELETE",
					url: `/api/v1/portfolio/delete/${props.id}`,
				})
			)
		}, 
	},
	PortfolioCard: {
		ListAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/portfolio-card/list`,
				})
			)
		}, 
		CreateAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/portfolio-card/create`,
					data: props.data,
				})
			)
		}, 
		RetrieveAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/portfolio-card/retrieve/${props.id}`,
				})
			)
		}, 
		UpdateAPI: (props) => {
			return (
				APIBase({
					method: "PUT",
					url: `/api/v1/portfolio-card/update/${props.id}`,
					data: props.data,
				})
			)
		}, 
		DeleteAPI: (props) => {
			return (
				APIBase({
					method: "DELETE",
					url: `/api/v1/portfolio-card/delete/${props.id}`,
				})
			)
		}, 
	},
	Event: {
		ListAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/event/list`,
				})
			)
		}, 
		CreateAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/event/create`,
					data: props.data,
				})
			)
		}, 
		RetrieveAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/event/retrieve/${props.id}`,
				})
			)
		}, 
		UpdateAPI: (props) => {
			return (
				APIBase({
					method: "PUT",
					url: `/api/v1/event/update/${props.id}`,
					data: props.data,
				})
			)
		}, 
		DeleteAPI: (props) => {
			return (
				APIBase({
					method: "DELETE",
					url: `/api/v1/event/delete/${props.id}`,
				})
			)
		}, 
	},
	EventCard: {
		ListAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/event-card/list`,
				})
			)
		}, 
		CreateAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/event-card/create`,
					data: props.data,
				})
			)
		}, 
		RetrieveAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/event-card/retrieve/${props.id}`,
				})
			)
		}, 
		UpdateAPI: (props) => {
			return (
				APIBase({
					method: "PUT",
					url: `/api/v1/event-card/update/${props.id}`,
					data: props.data,
				})
			)
		}, 
		DeleteAPI: (props) => {
			return (
				APIBase({
					method: "DELETE",
					url: `/api/v1/event-card/delete/${props.id}`,
				})
			)
		}, 
	},
	Blog: {
		ListAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/blog/list`,
				})
			)
		}, 
		CreateAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/blog/create`,
					data: props.data,
				})
			)
		}, 
		RetrieveAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/blog/retrieve/${props.id}`,
				})
			)
		}, 
		UpdateAPI: (props) => {
			return (
				APIBase({
					method: "PUT",
					url: `/api/v1/blog/update/${props.id}`,
					data: props.data,
				})
			)
		}, 
		DeleteAPI: (props) => {
			return (
				APIBase({
					method: "DELETE",
					url: `/api/v1/blog/delete/${props.id}`,
				})
			)
		}, 
	},
	BlogCard: {
		ListAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/blog-card/list`,
				})
			)
		}, 
		CreateAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/blog-card/create`,
					data: props.data,
				})
			)
		}, 
		RetrieveAPI: (props) => {
			return (
				APIBase({
					method: "GET",
					url: `/api/v1/blog-card/retrieve/${props.id}`,
				})
			)
		}, 
		UpdateAPI: (props) => {
			return (
				APIBase({
					method: "PUT",
					url: `/api/v1/blog-card/update/${props.id}`,
					data: props.data,
				})
			)
		}, 
		DeleteAPI: (props) => {
			return (
				APIBase({
					method: "DELETE",
					url: `/api/v1/blog-card/delete/${props.id}`,
				})
			)
		}, 
	},
}

export default API