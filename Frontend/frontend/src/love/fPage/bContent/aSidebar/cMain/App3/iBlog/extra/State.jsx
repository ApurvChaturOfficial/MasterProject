const InitialState = {
	A: "Bro... Inside BlogState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog':
			return {...state, FormObject: action.payload}
		case 'received-object-blog':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog',
	ReceivedObject: 'received-object-blog',
	RequiredObject: 'required-object-blog',
	ExtraObject: 'extra-object-blog',
}  

export default BlogState