const InitialState = {
	A: "Bro... Inside BlogCardRetrieveState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BlogCardRetrieveState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-Blog-card-retrieve':
			return {...state, FormObject: action.payload}
		case 'received-object-Blog-card-retrieve':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-Blog-card-retrieve':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-Blog-card-retrieve',
	ReceivedObject: 'received-object-Blog-card-retrieve',
	RequiredObject: 'required-object-Blog-card-retrieve',
}  

export default BlogCardRetrieveState