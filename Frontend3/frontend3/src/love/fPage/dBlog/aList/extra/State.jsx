const InitialState = {
	A: "Bro... Inside BlogListState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogListState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-list':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-list':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-list':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-list':
			return {...state, ExtraObject: action.payload}	
	
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-list',
	ReceivedObject: 'received-object-blog-list',
	RequiredObject: 'required-object-blog-list',
	ExtraObject: 'extra-object-blog-list',
}  

export default BlogListState