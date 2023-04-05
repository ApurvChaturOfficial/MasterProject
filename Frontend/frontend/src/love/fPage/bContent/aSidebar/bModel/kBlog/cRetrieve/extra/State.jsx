const InitialState = {
	A: "Bro... Inside BlogRetrieveState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BlogRetrieveState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-Blog-retrieve':
			return {...state, FormObject: action.payload}
		case 'received-object-Blog-retrieve':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-Blog-retrieve':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-Blog-retrieve',
	ReceivedObject: 'received-object-Blog-retrieve',
	RequiredObject: 'required-object-Blog-retrieve',
}  

export default BlogRetrieveState