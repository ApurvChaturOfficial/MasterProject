const InitialState = {
	A: "Bro... Inside BlogCardState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogCardState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-card':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-card':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-card':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-card':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-card',
	ReceivedObject: 'received-object-blog-card',
	RequiredObject: 'required-object-blog-card',
	ExtraObject: 'extra-object-blog-card',
}  

export default BlogCardState