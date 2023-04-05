const InitialState = {
	A: "Bro... Inside HomeRetrieveState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const HomeRetrieveState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-home-retrieve':
			return {...state, FormObject: action.payload}
		case 'received-object-home-retrieve':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-home-retrieve':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-home-retrieve',
	ReceivedObject: 'received-object-home-retrieve',
	RequiredObject: 'required-object-home-retrieve',
}  

export default HomeRetrieveState