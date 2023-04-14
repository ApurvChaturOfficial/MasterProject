const InitialState = {
	A: "Bro... Inside LandingState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const LandingState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-landing':
			return {...state, FormObject: action.payload}
		case 'received-object-landing':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-landing':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-landing',
	ReceivedObject: 'received-object-landing',
	RequiredObject: 'required-object-landing',
}  

export default LandingState