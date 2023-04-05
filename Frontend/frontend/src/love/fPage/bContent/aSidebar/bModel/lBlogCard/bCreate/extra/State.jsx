const InitialState = {
	A: "Bro... Inside BlogCardCreateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BlogCardCreateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-Blog-card-create':
			return {...state, FormObject: action.payload}
		case 'received-object-Blog-card-create':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-Blog-card-create':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-Blog-card-create',
	ReceivedObject: 'received-object-Blog-card-create',
	RequiredObject: 'required-object-Blog-card-create',
}  

export default BlogCardCreateState