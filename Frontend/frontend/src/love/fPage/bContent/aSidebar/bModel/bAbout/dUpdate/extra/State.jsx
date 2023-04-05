const InitialState = {
	A: "Bro... Inside AboutUpdateState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
}

const AboutUpdateState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-home-update':
			return {...state, FormObject: action.payload}
		case 'received-object-home-update':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-home-update':
			return {...state, RequiredObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-home-update',
	ReceivedObject: 'received-object-home-update',
	RequiredObject: 'required-object-home-update',
}  

export default AboutUpdateState