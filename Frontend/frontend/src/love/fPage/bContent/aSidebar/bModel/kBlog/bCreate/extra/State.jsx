const InitialState = {
	A: "Bro... Inside BlogCreateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BlogCreateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-Blog-create':
			return {...state, FormObject: action.payload}
		case 'received-object-Blog-create':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-Blog-create':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-Blog-create',
	ReceivedObject: 'received-object-Blog-create',
	RequiredObject: 'required-object-Blog-create',
}  

export default BlogCreateState