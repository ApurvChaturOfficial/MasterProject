const InitialState = {
	A: "Bro... Inside BlogUpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BlogUpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-Blog-update':
			return {...state, FormObject: action.payload}
		case 'received-object-Blog-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-Blog-update':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-Blog-update',
	ReceivedObject: 'received-object-Blog-update',
	RequiredObject: 'required-object-Blog-update',
}  

export default BlogUpdateState