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
		case 'form-object-blog-retrieve':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-retrieve':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-retrieve':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-retrieve',
	ReceivedObject: 'received-object-blog-retrieve',
	RequiredObject: 'required-object-blog-retrieve',
}  

export default BlogRetrieveState