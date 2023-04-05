const InitialState = {
	A: "Bro... Inside AboutRetrieveState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const AboutRetrieveState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-about-retrieve':
			return {...state, FormObject: action.payload}
		case 'received-object-about-retrieve':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-about-retrieve':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-about-retrieve',
	ReceivedObject: 'received-object-about-retrieve',
	RequiredObject: 'required-object-about-retrieve',
}  

export default AboutRetrieveState