const InitialState = {
	A: "Bro... Inside BlogCardDeleteState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BlogCardDeleteState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-Blog-card-delete':
			return {...state, FormObject: action.payload}
		case 'received-object-Blog-card-delete':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-Blog-card-delete':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-Blog-card-delete',
	ReceivedObject: 'received-object-Blog-card-delete',
	RequiredObject: 'required-object-Blog-card-delete',
}  

export default BlogCardDeleteState