const InitialState = {
	A: "Bro... Inside BlogDeleteState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BlogDeleteState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-Blog-delete':
			return {...state, FormObject: action.payload}
		case 'received-object-Blog-delete':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-Blog-delete':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-Blog-delete',
	ReceivedObject: 'received-object-Blog-delete',
	RequiredObject: 'required-object-Blog-delete',
}  

export default BlogDeleteState