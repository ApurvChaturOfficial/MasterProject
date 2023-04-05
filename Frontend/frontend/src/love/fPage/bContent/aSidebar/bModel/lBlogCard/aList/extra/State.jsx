const InitialState = {
	A: "Bro... Inside BlogCardListState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const BlogCardListState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-Blog-card-list':
			return {...state, FormObject: action.payload}
		case 'received-object-Blog-card-list':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-Blog-card-list':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-Blog-card-list',
	ReceivedObject: 'received-object-Blog-card-list',
	RequiredObject: 'required-object-Blog-card-list',
}  

export default BlogCardListState