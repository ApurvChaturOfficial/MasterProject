const InitialState = {
	A: "Bro... Inside AboutState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const AboutState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-about':
			return {...state, FormObject: action.payload}
		case 'received-object-about':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-about':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-about':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-about',
	ReceivedObject: 'received-object-about',
	RequiredObject: 'required-object-about',
	ExtraObject: 'extra-object-about',
}  

export default AboutState