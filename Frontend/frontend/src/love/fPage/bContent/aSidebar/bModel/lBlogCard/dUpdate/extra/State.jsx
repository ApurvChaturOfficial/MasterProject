const InitialState = {
	A: "Bro... Inside BlogCardUpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BlogCardUpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-Blog-card-update':
			return {...state, FormObject: action.payload}
		case 'received-object-Blog-card-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-Blog-card-update':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-Blog-card-update',
	ReceivedObject: 'received-object-Blog-card-update',
	RequiredObject: 'required-object-Blog-card-update',
}  

export default BlogCardUpdateState